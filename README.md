# PrivateConvert - Offline HEIC to JPG Converter

A privacy-focused, offline-capable tool to convert HEIC images to JPG directly in the browser. Built with Astro.

## Project Structure

- `src/components/Converter.astro`: Core logic (Drag & Drop, Conversion, ZIP).
- `public/_redirects`: Netlify 301 redirect configuration.
- `public/robots.txt`: SEO crawler directives.

## Deployment to Netlify

This project is configured for Netlify.

1.  **Connect Repo**: Push this code to GitHub/GitLab and connect it to Netlify.
2.  **Build Settings**:
    -   **Build command**: `astro build`
    -   **Publish directory**: `dist`
3.  **Environment**: Ensure Node.js v18.14.1 or higher is selected.

The `public/_redirects` file automatically handles the 301 redirect from `/` to `/heic-to-jpg-offline/`.

## Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run dev server:
    ```bash
    npm run dev
    ```

## Features

-   **Client-Side Only**: Uses `heic2any` (WASM) for conversion. No uploads.
-   **Offline Capable**: Works without internet once loaded.
-   **Batch Processing**: Convert multiple files and download as ZIP.
-   **Dark Mode**: Respects system preference + toggle with persistence.
-   **SEO Optimized**: Semantic HTML, JSON-LD Schema, and unique meta tags per route.
