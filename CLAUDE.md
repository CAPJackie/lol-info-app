# LoL Info (lol-info-next)

League of Legends site: champions, tier list, free-champion rotation, summoner search/profile,
top lists, live matches, streams and a community blog. Successor of the legacy `lol-info-app`.
Deployed on Vercel (lol-info-app.vercel.app). Next 16 App Router + React 19 + TS; UI with
MUI + antd + Sass (not Tailwind/shadcn — don't introduce them without asking).

## Commands (yarn)

```bash
yarn dev            # next dev --turbo, http://localhost:3000
yarn validate       # lint + typecheck + build — runs automatically on git push (husky)
yarn build:verify   # format:check + lint + build + route performance check
yarn docker:verify  # same checks inside Docker
```

Env: `NEXT_PUBLIC_API_KEY` (Riot API), `BASE_URL`, `NEXT_PUBLIC_SITE_URL`,
`KV_REST_API_URL` / `KV_REST_API_TOKEN` (Vercel KV — blog storage).

## Architecture

```
src/app/<route>/page.tsx      Server pages; interactive parts in sibling ClientPage.tsx
src/app/actions.ts, src/actions.ts   Server Actions (blog, KV)
src/app/api/champions/        Route handler
src/proxy.ts                  Origin allowlist (BASE_URL) — Next 16 replacement for middleware
src/utils/api.ts              Riot / Data Dragon calls via axios (+ Constants/urls.ts)
src/types/                    Riot DTO types (SummonerDTO, LeagueListDTO, MatchlistDto…)
src/components/<Name>/        One folder per component
src/context/                  Theme context
src/pages/_document.tsx       Leftover from the Pages Router version
scripts/check-route-performance.mjs
```

## Gotchas

- **Security debt:** the Riot key is `NEXT_PUBLIC_API_KEY` and is appended to client-side
  URLs (`concatApiKey`). New Riot calls should go server-side (Server Component, action or route
  handler) with a non-public env var; migrate existing ones when touching them.
- Riot API is rate-limited (`limiter` dependency) — don't add per-item fetch loops.
- Remote branches (`app-router`, `Themes`, `Animations`…) are old experiments; `main` is current.
