import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserDataProvider } from "../src/Context/usercontext";
import "react-toastify/dist/ReactToastify.css";
import { CategoriesProvider } from "./Context/categoriescontext";
// import { TaskProvider } from "./Context/taskcontext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserDataProvider>
        <CategoriesProvider>
          {/* <TaskProvider> */}
            <App />
          {/* </TaskProvider> */}
        </CategoriesProvider>
      </UserDataProvider>
    </BrowserRouter>
  </StrictMode>
);
