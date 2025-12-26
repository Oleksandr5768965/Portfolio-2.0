# Portfolio Website

A personal portfolio website focused on modern frontend development, clean styling architecture, and smooth animations.

## 🔗 Live Demo
> (Add a link to GitHub Pages / Vercel / Netlify if available)

---

## 📌 Project Overview

This project is my personal portfolio website created to showcase frontend development skills, styling methodology, and animation usage.  
The project is built with a modern toolchain and emphasizes maintainable, scalable code.

---

## 🛠 Tech Stack

- **HTML5**
- **SCSS**
  - modular and reusable style architecture
  - nested structure and mixins
  - BEM Methodology
- **JavaScript (ES6+)**
- **Animations**
  - CSS animations from [Animista]([text](https://animista.net/))
- **PostCSS**
  - `px-to-rem` plugin for scalable typography and layout
- **Vite**
  - fast development server
  - optimized production build

---

## 📂 Project Structure

```text

├─ src
│  ├─ styles
│  │  ├─ base
│  │  │  ├─ _animation.scss
│  │  │  ├─ _basic.scss
│  │  │  ├─ _breakpoints.scss
│  │  │  ├─ _fonts.scss
│  │  │  ├─ _mixins.scss
│  │  │  └─ _variables.scss
│  │  ├─ blocks
│  │  │  ├─ _footer.scss
│  │  │  ├─ _projects.scss
│  │  │  ├─ _skills.scss
│  │  │  └─ header.scss
│  │  ├─ components
│  │  │  └─ _buttons.scss
│  │  └─ main.scss
│  └─ main.js
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ postcss.config.js
└─ vite.config.js
