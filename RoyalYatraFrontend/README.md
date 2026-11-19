# Royal Yatri

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

## Search and deployment

Production builds prerender the registered React routes, including their page metadata and structured data. The canonical origin is https://royalyatri.com. Vite generates sitemap.xml, 404.html and permanent legacy redirects at build time. The public robots.txt points to the production sitemap.

Publish the entire build output, including the per-route index.html files and 404.html. Hosts that understand _redirects and _headers can use the supplied routing and header rules. On other hosts, configure the equivalent permanent redirects, real 404 responses, HTTPS redirects, compression and immutable caching for fingerprinted assets. Preserve the API proxy or set VITE_API_BASE_URL for a separate backend.

Optional GOOGLE_SITE_VERIFICATION and BING_SITE_VERIFICATION values add the HTML verification meta tags. After deployment, verify the property you control and submit the generated sitemap in Google Search Console and Bing Webmaster Tools. GA4 needs your own web data stream, tag and consent configuration.

See [SEO audit](SEO-AUDIT.md) for the verification results and route inventory.
