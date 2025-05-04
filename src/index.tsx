import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const GAPI_SCRIPT = "https://apis.google.com/js/api.js";
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const DISCOVERY_DOCS = [
  "https://sheets.googleapis.com/$discovery/rest?version=v4",
];

const loadGapi = () =>
  new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = GAPI_SCRIPT;
    script.onload = resolve;
    document.body.appendChild(script);
  });

const initClient = ({ apiKey, clientId }) => {
  return window.gapi.client
    .init({
      apiKey,
      discoveryDocs: DISCOVERY_DOCS,
    })
    .then(() => {
      window.google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: SCOPE,
        callback: "", // буде встановлено пізніше
      });
    });
};

const loadGoogleApi = async () => {
  await loadGapi();
  await new Promise((resolve) => window.gapi.load("client", resolve));
  // await initClient({
  //   apiKey: process.env.GOOGLE_API_KEY,
  //   clientId: process.env.GOOGLE_CLIENT_ID,
  // });
};

loadGoogleApi().then(() => {
  createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
