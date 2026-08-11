# KlassenCloud V11 – Render + Supabase + Mobile UI

Diese Version bleibt für Render + Supabase ausgelegt und ergänzt eine deutlich robustere responsive Oberfläche.

## Neu in V11
- Einklappbare Dashboard-Navigation auf PC/Tablet
- Mobile Seitenleiste per ☰
- Scrollbare Inhaltsbereiche und horizontale Scrollflächen für Kalender/Stundenplan
- Scrollbare Chat-, Cloud-, Gruppen- und Admin-Bereiche
- Dashboard-Karten können auf kleinen Displays horizontal gescrollt werden
- Gruppenübersicht als eigene Seite
- geschützte Gruppen bleiben serverseitig abgesichert
- Supabase bleibt die dauerhafte Daten-/Dateiablage

## Render
Build: `npm install`
Start: `npm start`
Health: `/api/health`

## Environment
`SUPABASE_URL`
`SUPABASE_SERVICE_ROLE_KEY`
`SUPABASE_BUCKET` (z. B. `klassencloud-files`)

Der Service-Role-Key darf niemals ins Frontend oder in GitHub.
