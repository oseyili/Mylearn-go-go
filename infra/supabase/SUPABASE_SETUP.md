# Supabase setup (manual steps)

## Install Supabase CLI
- Then run (from repo root):
  supabase init
  supabase login
  supabase link --project-ref YOUR_PROJECT_REF

## Migrations
- Put SQL migrations in: supabase/migrations/
- Apply locally (if using local supabase):
  supabase start
  supabase db push

## Never commit secrets
Use .env.local (ignored by git) for:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
