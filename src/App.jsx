import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";

function App() {
  const [count, setCount] = useState(0);

  return (
   <Routes>
    <Route  path="/auth" element={<Auth />}/>
   </Routes>
  );
}

export default App;
