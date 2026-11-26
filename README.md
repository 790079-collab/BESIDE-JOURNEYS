# Aurelia Journeys — editable website starter

This is a responsive, static English-language company website for a New Zealand-based medical travel coordination and bespoke private travel concierge business.

## Files
- `index.html` — page structure and section layout.
- `styles.css` — colours, typography, spacing and responsive design.
- `content.js` — **main editing file** for brand name, all website copy, service cards, travel descriptions, contact details and image URLs.
- `script.js` — renders the editable content and handles the mobile menu and enquiry form.
- `assets/` — place your own image files here.

## Important before publishing
1. Open `content.js`.
2. Change `brand.name` and `brand.descriptor` if you choose a different final brand.
3. Replace `brand.email` with your real business email. The form currently opens the visitor's email application (mailto); it does not store or send enquiries to a database.
4. Review all wording, legal statements, service descriptions and supplier claims with appropriate professional advice before publishing.
5. Replace any demonstration image URLs in `content.js` with licensed images you own or have permission to use. You can upload images into `assets/` and set e.g. `image: "assets/china-private-travel.jpg"`.
6. Update the privacy policy and important information links in `index.html` to real pages before launch.

## How to preview
The easiest option is to open `index.html` in a modern browser. If your browser restricts local scripts, run a local static server from this folder, e.g. `python3 -m http.server 8000`, then visit `http://localhost:8000`.

## How to deploy for free
A suitable option for this static website is Cloudflare Pages:
1. Create a GitHub repository and upload the contents of this folder.
2. In Cloudflare Dashboard, open Workers & Pages and create a Pages project connected to the repository.
3. Use the project root directory `/`. No build command is needed; the output directory is `/`.
4. After deployment, connect your own domain in Cloudflare Pages when ready.

This website uses external Unsplash image URLs as replaceable demonstration photography. An internet connection is required for those images and Google Fonts. For production, use properly licensed local image files in `assets/` for greater control and reliability.

## Customisation
Most future updates require editing only `content.js`:
- Change text: edit the relevant text field.
- Add or remove service cards: edit the `services` array.
- Change private travel options: edit `travel.options`.
- Replace images: edit the corresponding `image` URL.
- Change email and phone: edit `brand.email` and `brand.phone`.

The site is deliberately not tied to a fixed tour duration, route or price level. Bespoke travel is described as flexible and planned around each client's time, destination interests, pace and budget.
