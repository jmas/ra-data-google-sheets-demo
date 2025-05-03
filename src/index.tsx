import { loadGoogleApi } from "ra-data-google-sheets";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

loadGoogleApi({
  apiKey: "AIzaSyAGyW1uq5HroRxx9k0jgreVsEW_tNrYisw",
  clientId:
    "730132914202-6ttbrgl1k6f3i3i51ksvc6on9t8cpb1i.apps.googleusercontent.com",
}).then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
