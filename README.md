# Image Editor

A browser-based image editor with real-time filters and presets, built with vanilla JavaScript and the HTML5 Canvas API.

**Live demo:** [image-editor02.pages.dev](https://image-editor02.pages.dev/)

> Note: static page, not yet responsive.

## Features

- 🖼️ Upload any image (via file picker)
- 🎨 Apply adjustable filters in real time
- ⚡ Filter presets for one-click styling
- ↩️ Reset to original image
- 💾 Download the edited image
- 🖌️ Rendering done entirely on an HTML5 `<canvas>`

## Tech Stack

- **HTML** — layout and canvas element
- **CSS** — UI styling (theme + layout split across `theme.css` / `style.css`)
- **JavaScript** — image loading, Canvas API filter rendering, presets, download logic
- **Remix Icon** — icon set (via CDN)

No frameworks or build tools — runs directly in the browser.

## How to Run Locally

```bash
git clone https://github.com/Vader-codes/Image-Editor.git
cd Image-Editor
```

Open `index.html` in your browser, or serve it locally:

```bash
npx serve .
```

## How It Works

- The user selects an image via the file input; it's loaded and drawn onto an HTML5 `<canvas>` element.
- Filters (e.g. brightness, contrast, saturation, etc.) are applied to the canvas image data in real time as the user adjusts them.
- Presets apply a predefined combination of filter values in one click.
- **Reset** restores the canvas to the original, unedited image.
- **Download** exports the current canvas state as an image file for the user to save.

## Author

**Bipin** — [@Vader-codes](https://github.com/Vader-codes)
