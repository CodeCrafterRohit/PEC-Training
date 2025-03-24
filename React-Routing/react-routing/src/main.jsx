import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { RouterProvider } from "react-router-dom";
import myRoutes from "./routes/BattleField";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <RouterProvider router={myRoutes}/>
    {/* <App /> */}
  </>
);
