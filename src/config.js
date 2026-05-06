const cleanUrl = (url) => url.replace(/\/+$/, '');

const configuredApiUrl = import.meta.env.VITE_HANDWRITE_API_URL;

export const API = configuredApiUrl ? cleanUrl(configuredApiUrl) : '';
