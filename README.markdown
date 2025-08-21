[![Netlify Status](https://api.netlify.com/api/v1/badges/cee37c8b-3c9b-45c9-a630-dc041cad34cb/deploy-status)](https://app.netlify.com/projects/glyphgridweb/deploys)
<div align="center">
  <img src="assets/GlyphGrid.png" alt="GlyphGrid Logo" width="180">
  <h1>GlyphGrid: An Interactive Icon Gallery</h1>
  <p>A beautiful, filterable, and searchable icon gallery with a clean, modern interface, built with pure HTML, CSS, and JavaScript.</p>
  
  <p>
    <img src="https://img.shields.io/badge/Version-1.0-blue" alt="Version">
    <img src="https://img.shields.io/github/license/fritzkmanurung/GlyphGrid" alt="License">
    <img src="https://img.shields.io/github/repo-size/fritzkmanurung/GlyphGrid" alt="Repo Size">
    <img src="https://img.shields.io/github/last-commit/fritzkmanurung/GlyphGrid" alt="Last Commit">
    <a href="https://github.com/fritzkmanurung/GlyphGrid/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
    <a href="https://glyphgridweb.netlify.app/"><img src="https://img.shields.io/badge/Live_Demo-Online-brightgreen" alt="Live Demo"></a>
  </p>
</div>

<p align="center">
  <a href="#-live-demo"><strong>Live Demo</strong></a> ·
  <a href="#-preview"><strong>Preview</strong></a> ·
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#-getting-started"><strong>Getting Started</strong></a>
</p>

---

## 🌐 Live Demo

You can see the component live in your browser by visiting the deployment link:

**https://glyphgridweb.netlify.app/**

## ✨ Preview

Showcase a beautiful and functional gallery of icons that users can easily search, filter, and download.

<div align="center">
  <img src="assets/image.png" alt="GlyphGrid Gallery Preview">
</div>

## 🌟 Key Features

-   **Live Search**: Instantly find icons by name, description, or tags as you type.
-   **Category Filtering**: Filter the icon grid by categories like **Social**, **Brand**, **UI**, and **Media** with smooth animations.
-   **Interactive Icon Cards**: Each icon is presented in a clean card with its name, description, and relevant tags.
-   **Preview Modal**: Click on an icon to see a larger preview in a sleek modal window with download options.
-   **Simulated Downloads**: Users can "download" icons in various formats (PNG, SVG, AI) with a confirmation toast.
-   **Dark Mode**: A beautiful dark theme that respects the user's system preferences but can also be toggled manually.
-   **Hover Effects & Animations**: Enjoy satisfying hover effects and smooth, subtle animations throughout the interface.
-   **Zero Dependencies**: Built with pure Vanilla JavaScript, making it incredibly lightweight, fast, and easy to modify.
-   **Fully Responsive**: A seamless experience on desktops, tablets, and mobile devices.

## 💻 Tech Stack

This project is built from the ground up with core web technologies, ensuring it is lightweight and has no external dependencies.

| Technology | Description |
| :--- | :--- |
| **HTML5** | For the semantic structure of the gallery, icon cards, and modal. |
| **CSS3** | For the complete visual styling, including the dark mode, animations, and responsive grid layout. |
| **Vanilla JavaScript** | Powers all interactive logic, including the live search, filtering, modal functionality, and dynamic rendering of icons from a data source. |

## 🚀 Getting Started

No installation or complex setup is required to use this component.

1.  **Clone the Repository**
    ````bash
    git clone [https://github.com/fritzkmanurung/GlyphGrid.git](https://github.com/fritzkmanurung/GlyphGrid.git)
    ````
2.  **Navigate to the Directory**
    ````bash
    cd GlyphGrid
    ````
3.  **Open in Your Browser**
    Simply open the `index.html` file in any modern web browser to see the gallery in action.

## 🛠️ Usage

This project is structured to be easily customizable.

1.  **Add Your Icons**: To add your own icons, simply modify the `icons` array at the top of the `<script>` tag in `index.html`. Each icon object should have an `id`, `name`, `desc`, `tags`, and `img` (URL to the icon image).
2.  **Customize Filters**: To change the filter categories, update the buttons in the `.filter-buttons` div in the HTML. Make sure the `data-filter` attribute matches the tags used in your icon data.
3.  **Integrate into a Project**: To use this in your own website, copy the relevant HTML structure, link the CSS file, and adapt the JavaScript logic to fit your needs.

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features or improvements, please feel free to fork the repository and open a pull request.

1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/NewFeature`).
3.  Commit your Changes (`git commit -m 'Add some NewFeature'`).
4.  Push to the Branch (`git push origin feature/NewFeature`).
5.  Open a Pull Request.

## 📜 License

Distributed under the MIT License.

---

<p align="center">
  ⭐ Don't forget to give this project a star if you find it useful! ⭐
</p>