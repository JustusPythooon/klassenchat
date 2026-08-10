# KlassenCloud V9 – Chat, Gruppen, Dateien, Termine & Stundenplan

## Neu in V9
- Nachrichten löschen (eigene Nachrichten; Admins dürfen moderieren)
- Online-/Offline-Status
- „schreibt gerade …“-Anzeige
- Chat durchsuchen
- private Chats bleiben 1:1 geschützt
- Gruppen mit Besitzer
- Gruppen können geschlossen/geöffnet werden
- geschlossene Gruppen behalten den Verlauf, aber normale Mitglieder können nichts Neues schreiben
- Gruppenchat
- gemeinsame Gruppen-Dateien (max. 8 MB)
- gemeinsame Gruppen-Termine
- Gruppenmitglieder verwalten
- Klassenchat nur für Klassenmitglieder; Admins können Klassenräume sehen
- Standardklasse 8A
- Stundenplan pro Wochentag
- Fächer, Lehrer, Raum und Stundenreihenfolge
- konfigurierbare Unterrichtsdauer und Pausenlänge
- Standard-Stundenplan für 8A (Mo–Fr, 6 Stunden)
- bestehende Cloud, Klassenkalender und Adminsystem bleiben erhalten

## Start
Node.js 18+ installieren.

Im Projektordner:
`npm.cmd install`
`npm.cmd start`

Danach:
`http://127.0.0.1:3000`

Nicht die `index.html` direkt per Doppelklick öffnen.

## Demo-Admin
Name: Administrator
Passwort: Admin123!

## Hinweis
Die Anwendung ist weiterhin eine lokale/self-hosted Demo. Für einen echten öffentlichen Betrieb sollten HTTPS, Datenbank, echte Session-/Token-Verwaltung, Rate-Limits, Dateiscan und eine produktionsfähige Benutzerverwaltung ergänzt werden.
