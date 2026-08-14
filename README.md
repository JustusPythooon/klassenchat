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
