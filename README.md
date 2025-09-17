# Antd Dashboard

A modern dashboard built with Ant Design. This project focuses on clean typography, consistent background colors, and a responsive layout optimized for desktop and large screens.

## Demo
- [Live Demo](https://antd-dashboard-sample.netlify.app/)  

## Features
- **Quick Apps placeholders**: No image assets are used; app tiles display initials as placeholders for a clean, lightweight UI.
- **Consistent styling**: Font sizes, typography, and background colors are kept consistent across components for visual harmony.
- **Responsive layout**: Designed to work well on desktop and large screens.

## Prerequisites
- Node.js >= 18
- npm >= 9 (or yarn/pnpm, if you prefer)

## Getting Started
1. **Clone the repository**
```bash
git clone https://github.com/your-org/Antd-dashboard.git
cd Antd-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build (optional)**
```bash
npm run preview
```

## Scripts
- `npm run dev`: Start the dev server with hot reload
- `npm run build`: Create an optimized production build
- `npm run preview`: Preview the production build locally
- `npm run lint` (if available): Run linting
- `npm test` (if available): Run tests

## Tech Stack
- React + Ant Design
- Vite or Create React App (depending on project setup)
- TypeScript (if enabled)

## Notes on Design
- Quick apps section uses initials for icons by design to avoid external assets and maintain performance.
- Typography scale and background color tokens are applied consistently across pages and components.
- Layout grids and components are tuned for desktop and large screens; smaller breakpoints can be added if needed.

## Troubleshooting
- Delete lock file and reinstall if dependencies conflict:
```bash
rm -f package-lock.json && npm install
```
- Clear vite cache (if using Vite):
```bash
rm -rf node_modules/.vite
```

## License
MIT