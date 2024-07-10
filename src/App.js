import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home";
import Heading from "./components/heading/heading";
import CompletedTasks from "./components/completed tasks/completedtasks.component";

function App() {
  return (
   <Routes>
      <Route element={<Heading/>}>
      <Route index element={<Home/>} path="/"/>
      <Route element={<CompletedTasks/>} path="/completed"/>
      </Route>
   </Routes>
  );
}

export default App;
