# Royal Yatra

The active frontend is a Vite + React site. Its navigation leads to destinations, India tour packages, international tours, our story and travel enquiries.

## Run locally

Start the API from `RoyalYatraBackend`:

```sh
npm run dev
```

In another terminal, start the frontend from `RoyalYatraFrontend`:

```sh
npm run dev
```

Vite proxies `/api` requests to `http://localhost:5000`. The API serves curated tours and saves contact enquiries to `RoyalYatraBackend/data/enquiries.jsonl`.

Set `CORS_ORIGIN` in the backend environment when the frontend is hosted on another origin. Set `VITE_API_BASE_URL` in the frontend environment to use a separately hosted API.

Run `npm run build` in the frontend directory to create a production build.

The Destinations in India directory is available at `/destinations-in-india`, with region, state, city and travel-intent guides generated from the editorial registry in `src/seo/destinationDirectory.js`.

Set SITE_URL to the public HTTPS origin before building to generate absolute canonical links, sitemap.xml and the sitemap entry in robots.txt. Vite dev and preview serve permanent redirects for legacy package and destination URLs. The production build also includes a `_redirects` file for compatible static hosts.
