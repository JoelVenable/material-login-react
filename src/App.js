import React, { useContext } from "react";
import "./App.css";
import { MyNavbar } from "./components/MyNavbar";
import { Routes } from "./Routes";
import { AuthContext } from "./AuthContext";

function App() {
  const { authResolving } = useContext(AuthContext);
  return authResolving ? null : (
    <div className="App container">
      <MyNavbar />
      <Routes />
    </div>
  );
}

export default App;
