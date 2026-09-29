import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

const redirect = sessionStorage.getItem("redirect");
if (redirect) {
  sessionStorage.removeItem("redirect");
  if (redirect !== window.location.pathname + window.location.search + window.location.hash) {
    window.history.replaceState(null, "", redirect);
  }
}

createRoot(document.getElementById("root")!).render(<App />);
