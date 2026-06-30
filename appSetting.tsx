const origin = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL
  : window.location.origin;

export const appSetting = {
  apiUrl: origin,
  appUrl: window.location.origin,
};