import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

interface UserContext {
  authenticated: boolean;
  loading: boolean;
  token: string;
  login: (name: string, password: string) => Promise<void>;
  validate: (token: string) => Promise<void>;
}

export const AuthContext = createContext<UserContext | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [log, setLog] = useState(false);
  const router = useRouter();

  const login = async (name: string, password: string) => {
    try {
      setLoading(true);

      const body = {
        name: name,
        password: password,
      };

      fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(body),
      })
        .then((T) => T.json())
        .then((data) => {
          if (data.token != undefined) {
            setToken(data.token);
            localStorage.setItem("token", data.token);
            setLog(true);
            router.reload();
          } else {
            setLog(false);
          }
        });
    } catch (er) {
      setLog(false);
    }
    setLoading(false);
  };

  const validate = async (token: string) => {
    const header = new Headers({
      Authorization: `Bearer ${token}`,
    });

    const logged = await fetch("/api/validate", {
      method: "POST",
      headers: header,
    });
    if (logged.status == 200) {
      setToken(token);
      setLog(true);
    } else {
      localStorage.removeItem("token");
      setToken("");
      setLog(false);
    }
  };

  useEffect(() => {
    async function start() {
      const recoverdToken = localStorage.getItem("token");
      if (recoverdToken) {
        await validate(recoverdToken);
      } else {
        setToken("");
        setLog(false);
      }

      setLoading(false);
    }
    start();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authenticated: log,
        loading,
        token,
        login,
        validate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
