# Ort‐Suche (Demo)

![Screenshot](documentation/assets/screenshot.png)

## Beschreibung

Diese Web-App bietet eine einfache Benutzeroberfläche mit vier Eingabefeldern: Ort, PLZ (readonly), Längengrad (readonly) und Breitengrad (readonly). Während der Eingabe des Ortes erhält der Benutzer Live-Suchvorschläge. Die PLZ wird über eine Web-API abgerufen, und mit dieser PLZ werden über eine weitere Web-API die Koordinaten (Breitengrad und Längengrad) ermittelt. Die ermittelten Werte werden dann im Formular angezeigt.

Im Rahmen meiner Ausbildung zum geprüften Software-Entwickler am WIFI Wien habe ich im Modul **"Programmieren mit JavaScript ‐ Aufbau"** diese Web-App als Übung entwickelt.

## Funktionen

### Live-Suche
Der Benutzer erhält während der Eingabe des Ortes automatisch Vorschläge, um die Suche zu erleichtern.
  
### Automatische PLZ-Ermittlung
Sobald der Benutzer einen Ort auswählt, wird automatisch die entsprechende PLZ abgerufen und im Formular angezeigt.
  
### Koordinatenabfrage
Mit der PLZ wird automatisch über eine Web-API die zugehörige Breitengrad und Längengrad ermittelt und im Formular ausgegeben.

### Error-Handling mit Try-Catch
Die Verwendung von Try-Catch-Blöcken in der ermöglicht es, Fehler abzufangen und darauf zu reagieren und erleichtert auch das Debuggen des Codes.

### Responsives Design
Die Website wurde entwickelt, um auf verschiedenen Geräten und Bildschirmgrößen gut auszusehen und zu funktionieren.

## Technologien

HTML, CSS, JavaScript

## Ausgabe
![Ausgabe](documentation/assets/ausgabe.png)