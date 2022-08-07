import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [name, setName] = useState("");

  const handleClick = async () => {
    await fetch("/api/data", {
      method: "POST",
      body: JSON.stringify(name),
    });
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
      <button onClick={handleClick}>salvar</button>
    </div>
  );
};

export default Home;
