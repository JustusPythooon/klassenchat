# KlassenCloud V15 – Cloud, Gruppen & Stundenplan Pro

Der Stundenplan ist vollständig pro Klasse getrennt. Jede einzelne Unterrichtsstunde besitzt eine eigene Start- und Endzeit. Pausen werden automatisch als Abstand zwischen zwei Stunden berechnet und dürfen deshalb unterschiedlich lang sein.

Beispiel: 08:00–08:45, 09:00–09:45, 10:05–10:50 → Pausen 15 und 20 Minuten.

Im Admin-Panel: Administration → Stundenplan-Editor → Klasse auswählen → Tag auswählen. Dort können Start, Ende, Fach, Lehrer und Raum jeder Stunde bearbeitet werden.


## V14 Änderungen
- Cloud-Dateien bis 50 MB; über 10 MB nur mit einmaligem Admin-Freigabecode (Admins direkt).
- Admin-Tab und Admin-API serverseitig geschützt.
- Freigabecodes sind 30 Minuten gültig und werden nach Verwendung ungültig.
- Lösch-API für Nachrichten ist idempotent.
- Gruppennamen, Mitglieder und Gruppen-Admins können nachträglich verwaltet werden.
- Upload-Fortschritt und verständlichere Upload-Fehler.
- Dateigrößen werden bis GB automatisch formatiert.


## V15 Änderungen
- Login und Registrierung werden gleichzeitig nebeneinander angezeigt und auf kleinen Bildschirmen automatisch untereinander angeordnet.
- Keine Admin-Demo-Zugangsdaten mehr in der Oberfläche oder Dokumentation.
- API-Routen akzeptieren auch bestehende IDs mit Nachkommastellen, wodurch Löschen, Download, Nachrichten und Erinnerungen wieder zuverlässig funktionieren.
- Gruppen-Dateien können jetzt vom Besitzer oder Admin gelöscht werden.
- Dashboard mit Schnellzugriffen und verbessertem Responsive-Layout.


### Sicherer Admin-Start
Für eine neue Installation wird kein festes Demo-Adminpasswort mehr eingebaut. Wenn ein Admin beim ersten Start benötigt wird, setze `ADMIN_BOOTSTRAP_PASSWORD` als geheime Umgebungsvariable (mindestens 8 Zeichen).


## V16 Fixes
- Browser-Benachrichtigungen senden neue Nachrichten nicht mehr bei jedem Poll erneut.
- Benachrichtigungen verwenden ein vorhandenes App-Icon statt `/favicon.ico`.
- Blockierte Benachrichtigungen werden verständlich erklärt.
- PWA-Installation auf unterstützten PC-Browsern ist über das Installationssymbol möglich.
- Manifest enthält gültige 192×192- und 512×512-Icons und einen Installations-Scope.
- Service Worker cached die App-Shell und aktualisiert sie bei neuen Versionen.
- Statische PNG-/Icon-Dateien werden vom Server korrekt ausgeliefert.


## V22 – Push bei geschlossener App

Die Push-Kette wurde so angepasst, dass neue Chat-Nachrichten über den Service Worker als echte System-Benachrichtigung erscheinen, wenn KlassenCloud geschlossen oder im Hintergrund ist. Bei geöffneter App wird nur der interne Zähler aktualisiert, damit keine Doppelbenachrichtigungen entstehen.

**Wichtig für den Server:** Web-Push benötigt dauerhaft dieselben VAPID-Schlüssel. In Render müssen `VAPID_SUBJECT`, `VAPID_PUBLIC_KEY` und `VAPID_PRIVATE_KEY` als Environment Variables gesetzt werden. Die Schlüssel dürfen nicht bei jedem Deploy neu erzeugt werden.

**Geräte:** Auf Android Chrome/PWA muss die Benachrichtigung einmal erlaubt werden. Auf iPhone/iPad muss KlassenCloud als Home-Bildschirm-Web-App installiert und dort die Benachrichtigung erlaubt werden. Erst danach kann das Betriebssystem Push liefern, wenn die App geschlossen ist.

## Echte Push-Benachrichtigungen
Für Benachrichtigungen bei geschlossener App müssen auf dem Server `web-push` sowie diese Variablen gesetzt werden: `VAPID_SUBJECT`, `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`. Danach registriert KlassenCloud das Push-Abo beim Aktivieren der Benachrichtigungen. Nachrichten lösen serverseitig einen Push an alle anderen Chatmitglieder aus.


## V16 FIX6 – echte Admin-/Lehrer-Funktionen
- Admin-only Rollenverwaltung: Schüler, Lehrer, Admin.
- Lehrerrechte für Hausaufgaben, Termine und Prüfungen nur in zugewiesenen Klassen.
- Admin kann Passwörter über die Benutzerverwaltung zurücksetzen.
- Admin kann Dashboard-Ankündigungen für alle, Lehrer, Schüler oder eine Klasse veröffentlichen und löschen.
- Dashboard lädt sichtbare Ankündigungen vom Server.
- Rollen und Klassen-Zuweisungen werden serverseitig geprüft.


## FIX8 – Handy-Push (Android + iPhone)

Für echte Push-Nachrichten müssen auf dem Server diese Umgebungsvariablen gesetzt sein:
- `VAPID_PUBLIC_KEY`
- `VAPID_PRIVATE_KEY`
- `VAPID_SUBJECT` (z. B. `mailto:admin@deine-domain.de`)

Die VAPID-Schlüssel niemals in den Client-Code oder in die ZIP eintragen.

### Android
KlassenCloud über HTTPS öffnen, als App/PWA installieren, Benachrichtigungen erlauben und danach in KlassenCloud auf 🔔 tippen.

### iPhone
KlassenCloud in Safari über HTTPS öffnen, „Zum Home-Bildschirm“ hinzufügen, die installierte KlassenCloud-App öffnen und dort die Benachrichtigungen erlauben.

Wenn `GET /api/push/config` `enabled:false` liefert, fehlen die VAPID-Umgebungsvariablen auf dem Server.


## V18 – WhatsApp-ähnliches Chat-Upgrade

- Chat-Nachrichten können Bilder direkt im Chat hochladen und anzeigen.
- Sprachnachrichten können per Mikrofon aufgenommen und als Audio im Chat abgespielt werden.
- Das funktioniert in Klassen-, Gruppen- und privaten Chats.
- Gruppen und deren Inhalte bleiben für Administratoren verwaltbar; Admins können jede Gruppe öffnen, auch wenn sie nicht Mitglied sind.
- Administratoren können private Chats zwischen zwei ausgewählten Personen serverseitig sperren.
- Administratoren erhalten dadurch keinen Einblick in private Chat-Inhalte; eine Sperre verhindert lediglich die Kommunikation zwischen den beiden Personen.
- Chat-UI wurde für Handy und Desktop übersichtlicher gemacht.
- Private Chat-Sperren werden im Supabase-gespeicherten App-State persistiert.

### Medien
Chat-Bilder und Sprachnachrichten werden nicht dauerhaft im Browser gespeichert, sondern im privaten Supabase-Storage. Standardmäßig sind Anhänge auf 15 MB begrenzt.
