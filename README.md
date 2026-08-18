# Task List — Aritzia Case Study

A task management app built with Next.js, TypeScript, and React Context, built as a technical assessment for Aritzia's Digital Technology Team.

## Features

- Add, delete, filter, and complete tasks
- Simulated API layer with a private key check and rate limiting
- Locally persisted login and task list
- Responsive, mobile-first layout
- Unit tests with Jest and React Testing Library

## Getting Started

1. Install dependencies:

   ```bash
   npm install

   ```

2. Create a .env.local file in the project root (see .env.example for the required variables):

- API_SECRET_KEY=your-own-value
- NEXT_PUBLIC_API_SECRET_KEY=your-own-value

3. Run the development server:

- npm run dev
- Open http://localhost:3000, this is a simulated any entered values will work.

## Scripts

- npm run dev — start the development server
- npm test — run the unit test suite

## Architecture Notes

- State management: React Context + useReducer/useState, no external state library — proportionate to the app's actual scale (two pieces of shared state: auth and tasks).
- Simulated API: Route Handlers (app/api/tasks/route.ts, app/api/tasks/[id]/route.ts) check a private key header, enforce a basic in-memory rate limit, and add faux latency before responding.
- Persistence: sessionStorage for the login flag (cleared on tab close), localStorage for the task list (survives it).
