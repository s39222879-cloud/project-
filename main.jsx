import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./ThemeProvider";
import { AuthProvider } from "./AuthProvider";
import ErrorBoundary from "./ErrorBoundary";

import {
  RouterProvider
} from "react-router-dom";

import router from "./router";
import "./index.css";
import "./Theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<ErrorBoundary>
  <ThemeProvider>
      <AuthProvider>
<RouterProvider router={router} />
              </AuthProvider>
         </ThemeProvider>
      </ErrorBoundary>
</React.StrictMode>
);

