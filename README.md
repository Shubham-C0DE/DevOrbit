# DevOrbit — Interview Practice Tracker

A responsive interview-preparation dashboard built with React and Vite. It tracks DSA, Git & GitHub, Full-Stack Technical questions, and the weekly Machine Coding challenge.

## Features
- Dashboard metrics and animated progress bars
- 15 starter questions based on Weekly Interview Preparation Sheet 01
- Add, edit, delete, search, filter, and sort questions
- Status, difficulty, category, notes, and optional resource URL
- LocalStorage persistence
- Responsive layout and empty-search state
- Machine Coding status tracker

## Tech stack
- React
- Vite
- CSS
- Lucide React icons
- Browser LocalStorage

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Structure
```text
src/
├── components/
│   └── DashboardPrimitives.jsx  # Metric cards, progress bar, donut and icon tile
├── data/
│   └── initialQuestions.js      # Starter questions and app constants
├── App.jsx                      # Dashboard state and page composition
├── main.jsx                     # React entry point
├── styles.css                   # Theme, responsive styles and animations
└── utils.js                     # LocalStorage loading and percentage helper
```

## Assumptions
- Starter question statuses are demo values and should be updated to reflect actual progress.
- Data is stored in the current browser's LocalStorage; it is not synced across devices.
- Machine Coding is tracked separately from the 15 theory/DSA questions.
