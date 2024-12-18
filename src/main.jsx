import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./MainLayout.jsx";
import { UserTokenProvider  } from "./ContextToken";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserTokenProvider>
      <MainLayout />
    </UserTokenProvider>
  </StrictMode>
);
