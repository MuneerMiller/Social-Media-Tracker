# Social Media tracker with Theme Toggle

This project is a **Social Media Dashboard** that displays followers and engagement statistics for various social media platforms. It features a light/dark mode toggle based on user preference and a responsive layout optimized for various screen sizes.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Development Workflow](#development-workflow)

---

## Installation

To get this project up and running locally:

1. **Clone this repository** to your local machine.
   ```bash
   https://github.com/MuneerMiller/Social-Media-Tracker.git

2. Navigate to the project directory.
```bash
cd Social-Media-Tracker
```

## Features

- Dark/Light Mode Toggle: Users can toggle between light and dark themes. The selected mode is stored in local storage to persist user preferences.
- Responsive Design: Optimized for desktop and mobile views using CSS Grid and Flexbox.
- SASS Styling and Modular Structure: All styling is managed through SASS, using a modular structure with reusable components and utility files.
- Live Reloading: Integrated BrowserSync for live reloading on file changes, enhancing the development experience.

## File Structure

- index.html - Main HTML file for the dashboard layout.
- app/scss - Contains SASS files, split into components, utilities, and global styling files.
- app/js - Contains script.js with JavaScript for managing theme toggle functionality.
- gulpfile.js - Gulp configuration file for automating tasks such as compiling SASS, minifying JavaScript, and live reloading.

## Technologies Used

- HTML5 - Semantic markup.
- CSS3/SASS - Styling with a modular SASS structure and variables for theming.
- JavaScript - Client-side scripting for theme switching and local storage management.
- Gulp - Task runner for compiling, minifying, and live-reloading.
- PostCSS - Used for autoprefixing and minifying CSS.
- BrowserSync - Live reloading during development.

## Development Workflow

- Key Gulp Tasks
- scssTask - Compiles SASS files, adds prefixes, and minifies CSS.
- jsTask - Transpiles JavaScript to ES5 using Babel and minifies it.
- browserSyncServe - Starts BrowserSync for live reloading.
- watchTask - Watches for changes in HTML, SASS, and JS files.
