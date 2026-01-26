# Mylearn-go-go

Local-first online learning platform scaffold.

## What this repo contains
- **apps/web**: frontend (Next.js recommended)
- **apps/api**: backend/API (can be Next.js routes or separate service)
- **supabase/**: migrations, functions, seed
- **infra/render**: Render blueprint files
- **docs/**: architecture + deployment notes

## Setup (high level)
1) Build locally (Next.js + DB)
2) Connect Supabase (DB/Auth/Storage)
3) Push to GitHub
4) Deploy on Render using environment variables

> No secrets are stored in this repo. Use .env.local (ignored) for local secrets.
