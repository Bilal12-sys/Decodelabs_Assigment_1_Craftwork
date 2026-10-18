# Craftwork

Craftwork is a small, responsive creative portfolio and image gallery built with **HTML5, CSS, and vanilla JavaScript**. It brings together curated images from six creative categories, with a home page for featured work and separate Gallery, About, and Contact pages.

There is no framework, build step, or package installation required. The site is made of static files and can be run with a local web server.

## Live demo

**Live site:** Add the deployed website URL here once the project is published.

## Features

- Responsive, multi-page layout with shared navigation and footer.
- Home page featuring a selection of category images.
- Gallery populated from JavaScript data, with search across image titles and categories.
- Image download links and a loading indicator while gallery images load.
- About page describing the project and Contact page with contact details, an email form, and an OpenStreetMap embed.
- Local image assets organized into folders by category.

## Built with

- **HTML5** for semantic page structure and accessible form controls.
- **CSS** (`style.css`) for layout, responsive styling, and visual presentation.
- **Vanilla JavaScript ES modules** for gallery data and search behavior.

## Project structure

```text
Craftwork/
├── index.html             # Home page and featured images
├── Gallery.html           # Searchable image gallery
├── about.html             # About page
├── contact.html           # Contact details, form, and map
├── style.css              # Shared styles for all pages
├── script.js              # Empty placeholder; not currently loaded
├── gallery.js             # Gallery rendering, loading state, and search
├── images.js              # Gallery image data and category exports
└── images/
    ├── Architecture/      # Category images and Top_Images.jpg
    ├── Bikes/
    ├── Cars/
    ├── GraphicDesign/
    ├── InteriorDesign/
    ├── Nature/
    └── assets/            # Logo and other site graphics
```

Each category folder contains a `Top_Images.jpg` used for featured/category imagery and a set of numbered images used by the gallery. The Interior Design collection also includes an `.avif` image. The `images/assets/` folder contains the Craftwork logo and other page artwork.

## Run locally

The gallery uses JavaScript ES modules, so open the project through a local HTTP server rather than opening `Gallery.html` directly as a `file://` URL.

### Option 1: Python

From the project root, run:

```powershell
py -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser. Press `Ctrl+C` in the terminal to stop the server.

### Option 2: Visual Studio Code

Open the project folder in VS Code and use an extension such as **Live Server** to serve `index.html`.

## How the gallery works

1. `images.js` defines each image's title, description, file path, and category, then exports the category arrays.
2. `Gallery.html` provides the gallery container, search input, and loading indicator.
3. `gallery.js` imports the category data, combines it, and creates a card for each image.
4. Submitting the search form filters the cards by image title or category. Submitting an empty search shows all images again.
5. Each card includes a download link to its original local image file.

To add or update a gallery image, put the image in the appropriate `images/` category folder and add or edit its entry in `images.js`. Make sure the `url` matches the file path and the category name is consistent.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Landing page with a hero section and featured category images. |
| `Gallery.html` | Searchable, downloadable image collection. |
| `about.html` | Project story and creative values. |
| `contact.html` | Contact information, email form, and embedded map. |

## Notes

- The Contact form uses a `mailto:` action, so submitting it opens the visitor's configured email application; it does not send messages to a server.
- The map is embedded from OpenStreetMap and needs an internet connection.
- No backend, database, or third-party JavaScript library is required.
