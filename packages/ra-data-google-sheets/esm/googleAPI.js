const GSI_SCRIPT = "https://accounts.google.com/gsi/client";
const GAPI_SCRIPT = "https://apis.google.com/js/api.js";
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const DISCOVERY_DOCS = [
  "https://sheets.googleapis.com/$discovery/rest?version=v4",
];
let tokenClient;
// Завантаження GAPI
const loadGapi = () =>
  new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = GAPI_SCRIPT;
    script.onload = resolve;
    document.body.appendChild(script);
  });
// Завантаження GSI (Google Identity Services)
const loadGsi = () =>
  new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = GSI_SCRIPT;
    script.onload = resolve;
    document.body.appendChild(script);
  });
// Ініціалізація GAPI клієнта
const initClient = ({ apiKey, clientId }) => {
  return window.gapi.client
    .init({
      apiKey,
      discoveryDocs: DISCOVERY_DOCS,
    })
    .then(() => {
      tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: SCOPE,
        callback: "", // буде встановлено пізніше
      });
    });
};
// Повне завантаження та ініціалізація
export const loadGoogleApi = async (credentials) => {
  await loadGsi();
  await loadGapi();
  await new Promise((resolve) => window.gapi.load("client", resolve));
  await initClient(credentials);
};
// Вхід користувача
export const login = () => {
  return new Promise((resolve, reject) => {
    tokenClient.callback = (res) => {
      if (res.error) {
        reject(res);
      } else {
        resolve(res);
      }
    };
    tokenClient.requestAccessToken({ prompt: "consent" });
  });
};
// Вихід користувача (прибирає токен)
export const logout = () => {
  window.google.accounts.oauth2.revoke(tokenClient.access_token, () => {
    console.log("Access token revoked");
  });
  return Promise.resolve();
};
//# sourceMappingURL=googleAPI.js.map
