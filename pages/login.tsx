import React from "react";
import LoginComponent from "../src/components/LoginComponent/Index";

import { AuthProvider } from "../src/contexts/auth";

export default function Login() {
  return (
    <AuthProvider>
      <LoginComponent />
    </AuthProvider>
  );
}
