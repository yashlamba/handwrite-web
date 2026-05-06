# Handwrite Web

Frontend for Handwrite, built with React and Vite.

## Configuration

Set `VITE_HANDWRITE_API_URL` at build time to point the website at a handwrite-server deployment:

```sh
VITE_HANDWRITE_API_URL=<handwrite-server-url> npm run build
```

For local development, copy `.env.example` to `.env.local` and edit the URL.

## Scripts

### `npm start`

Runs the Vite development server.

### `npm run build`

Builds the app for production into the `dist` folder.

### `npm run preview`

Serves the production build locally for a final static-asset check.

### `npm run deploy`

Builds and publishes `dist` with `gh-pages`.
