import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// loadGoogleApi({
//   apiKey: window.CONFIG.GOOGLE_SHEETS_API_KEY,
//   clientId: window.CONFIG.GOOGLE_SHEETS_CLIENT_ID,
// }).then(() => {
createRoot(<App />, document.getElementById("root"));
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
