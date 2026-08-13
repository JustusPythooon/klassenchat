# KlassenCloud V14 – Cloud, Gruppen & Stundenplan Pro

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
