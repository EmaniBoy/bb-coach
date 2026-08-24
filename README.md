# BB Coach

AI-powered bodybuilding and nutrition coaching platform integrating structured
training, nutrition, recovery, and WHOOP data with OpenAI.

## Architecture

BB Coach is built as a TypeScript monorepo containing:

- React Native / Expo mobile application
- Fastify backend API
- PostgreSQL / Supabase persistence
- WHOOP OAuth and webhook integrations
- OpenAI-powered coaching layer
- Deterministic analytics engine

## Engineering Principles

1. PostgreSQL is the source of truth.
2. Code calculates; AI interprets.
3. AI accesses application state through controlled tools.
4. Mobile workflows should remain usable offline.
5. Secrets never live in the client application.
6. Important AI actions are auditable.
7. Infrastructure and schema changes are version controlled.

## Repository Structure

- `apps/mobile` — React Native / Expo application
- `apps/api` — Fastify backend
- `packages/shared` — shared utilities and types
- `packages/schemas` — validation and API contracts
- `packages/database` — database access layer
- `packages/analytics` — deterministic analytics
- `packages/ai` — AI orchestration and tools
- `docs` — engineering documentation
- `tests` — cross-application tests
- `supabase` — local infrastructure and migrations

## Development

Use Node.js 24.

    nvm use
    pnpm install

Additional development documentation will be added as the platform evolves.
