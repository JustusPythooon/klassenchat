# KlassenCloud V12 – Admin Power + Stundenplan-Editor

V12 bleibt für Render + Supabase ausgelegt. Supabase speichert den dauerhaften App-State und Supabase Storage die Dateien.

## Neu in V12

### 🛡️ Admin-Rechte
- Klassen erstellen
- Klassen umbenennen
- Klassen komplett löschen
- Mitglieder hinzufügen/entfernen
- Benutzer zu Admins machen oder zurückstufen
- Benutzer sperren/entsperren
- Benutzer löschen
- Gruppen als Admin verwalten
- Admin-Audit-Log
- Stundenpläne vollständig bearbeiten

### 🏫 Klassen löschen
Beim Löschen werden die zugehörigen Mitgliedschaften, Klassenchat-Nachrichten, Klassen-Dateien, Termine und Stundenplandaten entfernt. Klassendateien werden zusätzlich aus Supabase Storage gelöscht.

### 🕐 Stundenplan
Der Admin kann pro Klasse und pro Wochentag:
- Startzeit festlegen
- Unterrichtsdauer festlegen
- Pausenlänge festlegen
- Stunden hinzufügen
- Stunden bearbeiten
- Stunden löschen
- Fach, Lehrer und Raum ändern

Mittwoch ist standardmäßig anders konfiguriert:
- Montag/Dienstag/Donnerstag/Freitag: 08:00 Start, 45 Min Unterricht, 15 Min Pause
- Mittwoch: 08:15 Start, 45 Min Unterricht, 10 Min Pause

Alle Zeiten können im Admin-Panel geändert werden.

## Datenmigration
Es ist kein neues SQL-Schema nötig. V12 verwendet weiterhin die vorhandene `app_state`-Tabelle aus V11 und bleibt zu bestehenden V11-Daten kompatibel. Beim nächsten Speichern werden neue Stundenplan-Einstellungen übernommen.

## Render
Build Command:
`npm install`

Start Command:
`npm start`

Health:
`/api/health`

Environment:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_BUCKET` (z. B. `klassencloud-files`)

Der Service-Role-Key darf niemals in das Frontend oder Repository.
