# Thiago Dambroski Portfolio

Personal software development portfolio built with React.

## Local development

```bash
npm ci
npm start
```

## Production build

```bash
npm run build
```

## Netlify

The repository includes `netlify.toml` with the production build command, publish directory, Node.js version, SPA routing fallback, and security headers.

Netlify settings:

- Build command: `npm run build`
- Publish directory: `build`
- Node.js: `20`

The site uses React Router with clean browser URLs. Netlify redirects all application routes to `index.html` so direct links and page refreshes work correctly.
