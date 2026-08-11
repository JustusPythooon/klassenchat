# KlassenCloud V10 – Render + Supabase

Diese Version ist für einen Render Web Service ausgelegt. **Keine App-Daten werden mehr in data.json oder im lokalen Upload-Ordner gespeichert.**

## Architektur
- Render: Node.js/Express-ähnlicher HTTP-Server und Frontend
- Supabase Postgres: Benutzer, Klassen, Mitgliedschaften, Chats, Nachrichten, Gruppen, Kalender, Stundenplan, Sessions, Admin-Log usw.
- Supabase Storage: private und Klassen-/Gruppendateien
- Der Supabase Service-Role-Key bleibt ausschließlich als Render Secret auf dem Server.

## 1. Supabase einrichten
1. Neues Projekt unter https://supabase.com erstellen.
2. In **SQL Editor** `supabase/schema.sql` ausführen.
3. Unter **Project Settings → API** kopieren:
   - Project URL
   - service_role key (niemals in GitHub oder Frontend eintragen)
4. Der Storage-Bucket `klassencloud-files` wird beim Serverstart automatisch privat erstellt.

## 2. GitHub
Den Inhalt dieses Ordners in ein privates GitHub-Repository hochladen.
Nicht hochladen:
- `.env`
- echte Service-Role-Keys
- Benutzer-/Datenexporte

## 3. Render
1. Render → New → Web Service.
2. GitHub-Repository verbinden.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Health Check: `/api/health`
6. Plan: Free (falls im Dashboard verfügbar).
7. Environment Variables setzen:
   - `SUPABASE_URL` = deine Supabase Project URL
   - `SUPABASE_SERVICE_ROLE_KEY` = dein service_role Key
   - `SUPABASE_BUCKET` = `klassencloud-files`

Render erwartet, dass der Server auf `0.0.0.0` und dem `PORT` aus der Umgebung lauscht. Das macht V10 bereits.

## 4. Erster Start
Der Server legt bei leerer Datenbank automatisch an:
- Admin: `Administrator` / `Admin123!`
- Klasse `8A`
- Klasse `10B`
- Demo-Gruppe `8A – Klassengruppe`
- 8A-Demo-Stundenplan

**Nach dem ersten Login das Admin-Passwort ändern bzw. den Admin absichern.**

## Wichtig zum kostenlosen Render-Tarif
Render Free Web Services schlafen nach 15 Minuten ohne eingehenden Traffic ein und können bei der nächsten Anfrage etwa eine Minute zum Aufwachen brauchen. Das lokale Dateisystem ist flüchtig. Deshalb speichert V10 Daten in Supabase statt auf Render. Siehe die offiziellen Render-Free-Dokumentation.

Supabase ist hier die dauerhafte Daten-/Dateiablage. Die konkrete Verfügbarkeit und Limits des Supabase-Tarifs hängen von deinem gewählten Supabase-Plan ab.
