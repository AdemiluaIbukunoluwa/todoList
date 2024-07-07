import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home";

function App() {
  return (
   <Routes>
      <Route element={<Home/>} path="/"/>
   </Routes>
  );
}

export default App;
