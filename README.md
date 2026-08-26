# SoHelpSocial — Next.js + Supabase starter

This starter intentionally does **not** collect passwords, passcodes, OTPs, recovery codes, or security keys. Platform buttons open official recovery/support pages.

## Setup
1. `npm install`
2. Copy `.env.example` to `.env.local`.
3. Add your Supabase project URL, anon key, and server-only service-role key.
4. Run `supabase/schema.sql` in Supabase SQL Editor.
5. `npm run dev`

## Production requirement
Protect `/dashboard` with Supabase Auth and server-side authorization before deployment. Never expose `SUPABASE_SERVICE_ROLE_KEY` to the browser.

## Branding
Edit `lib/platforms.ts` to replace logo URLs, names, descriptions, and official recovery URLs.


## Platforms
Google, Microsoft, Discord, Facebook, Instagram, and X are supported. Each route uses a login-inspired support interface but only accepts a contact email and issue description; passwords and authentication codes are not collected.

## Build fix included
This release exports the `Platform` type from `lib/platforms.ts` using:

```ts
export type Platform = { /* ... */ };
```

This fixes the Next.js/Vercel error: `has no exported member named 'Platform'`.
