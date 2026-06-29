# Vinnis Hühnerhof 🐔🚜

Eine kindgerechte Lern-App für Vinni: Rechnen, Lesen & Buchstaben, Wissen über die ganze Welt (mit KI-Option), Programmieren, Muster & Logik, Denksport mit visuellen IQ-Aufgaben, Forscher-Labor, Uhr & Zeit, Kaufmannsladen, Hühnermarkt und ein Traktor zum Zusammenbauen. Alles in einer einzigen HTML-Datei, läuft offline.

Dieser Ordner ist so vorbereitet, dass du die App auf **GitHub Pages** veröffentlichen und dann von **jedem Gerät** (Handy, Tablet, Laptop) über eine Internet-Adresse nutzen kannst – sogar als installierbare App (PWA) mit eigenem Icon.

## Inhalt des Ordners
- `index.html` – die komplette App
- `manifest.webmanifest` – macht die App installierbar
- `sw.js` – Service Worker für Offline-Nutzung
- `icon-192.png`, `icon-512.png`, `icon-180.png` – App-Icons
- `README.md` – diese Anleitung

## In 6 Schritten online stellen (kostenlos)

1. **GitHub-Konto** anlegen (falls noch nicht vorhanden): https://github.com/signup
2. Oben rechts auf **+ → New repository**. Name z. B. `vinnis-huehnerhof`. Auf **Public** lassen, **Create repository**.
3. Auf der neuen Repo-Seite: **Add file → Upload files**. Ziehe **alle Dateien aus diesem Ordner** hinein (index.html, manifest.webmanifest, sw.js und die drei Icon-Dateien). Unten **Commit changes**.
4. Reiter **Settings → Pages** öffnen.
5. Unter **Build and deployment** bei *Source* **„Deploy from a branch"** wählen, Branch **`main`** und Ordner **`/ (root)`**, dann **Save**.
6. Nach 1–2 Minuten erscheint oben die Adresse, etwa:
   `https://DEIN-NAME.github.io/vinnis-huehnerhof/`
   Diese Adresse auf jedem Gerät im Browser öffnen.

## Als App installieren (Home-Bildschirm)
- **iPhone/iPad (Safari):** Teilen-Symbol → „Zum Home-Bildschirm".
- **Android (Chrome):** Menü ⋮ → „App installieren" / „Zum Startbildschirm".
- **Laptop (Chrome/Edge):** Installations-Symbol in der Adressleiste.
Danach startet sie wie eine echte App mit eigenem Icon und funktioniert auch offline.

## Weiterentwickeln
- App ändern: `index.html` bearbeiten (auf GitHub direkt über den Stift ✏️, oder lokal und neu hochladen) und **committen**. GitHub Pages aktualisiert sich automatisch.
- Wenn du eine neue Version ausspielst und sie nicht sofort erscheint: in `sw.js` die Zeile `var CACHE = 'vinni-huehnerhof-v1';` auf `...-v2` (usw.) erhöhen und committen. Dann lädt jedes Gerät die neue Version.

## KI-Fragen (Wissen-Modul)
Im Wissen-Bereich kann ein Erwachsener über den Knopf **⚙️ KI** einmal einen Anthropic-API-Schlüssel hinterlegen. Dann erfindet die App unbegrenzt neue Wissensfragen.
- Der Schlüssel wird **nur lokal im Browser** des jeweiligen Geräts gespeichert (localStorage), **nie** im Code oder auf GitHub.
- **Wichtig:** Trage niemals einen API-Schlüssel in `index.html` ein und lade ihn nicht zu GitHub hoch – das Repository ist öffentlich.

## Gut zu wissen: Fortschritt pro Gerät
Vinnis Fortschritt (Eier, Stufen, gebauter Traktor) wird **lokal auf dem jeweiligen Gerät** gespeichert. Auf einem anderen Gerät startet er deshalb neu – der Fortschritt „wandert" nicht automatisch mit.
Wenn der Fortschritt über mehrere Geräte hinweg gleich sein soll, gibt es zwei einfache Wege als nächsten Schritt:
1. **Export/Import** eines Fortschritts-Codes (kein Server nötig) – schnell ergänzbar.
2. **Cloud-Speicherung mit Konto** (z. B. über einen kleinen Dienst) – größerer Schritt.
Sag Bescheid, wenn einer davon eingebaut werden soll.
