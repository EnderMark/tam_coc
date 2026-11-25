# Tam Cốc — Guida Interattiva 2 Giorni & 2 Notti

Webapp statica interattiva per pianificare e seguire una visita di **due giorni e due notti a Tam Cốc (Ninh Bình, Vietnam)**, con partenza **oggi alle ore 12:00** e soggiorno di **due notti**.

## Funzionalità principali
- **Date dinamiche automatiche**: imposta automaticamente la partenza a oggi alle 12:00 con check-out dopo 2 notti (modificabile tramite selettore data).
- **Itinerario interattivo ora per ora** (Giorno 1 da mezzogiorno, Giorno 2 giornata intera, Giorno 3 mattina & check-out) con salvataggio locale (`localStorage`) delle tappe completate e link diretti a Google Maps.
- **Mappa carsica interattiva SVG** con tutte le 7 tappe chiave (Tam Cốc, Bích Động, Tempio Thái Vi, Hang Múa, Tràng An UNESCO, Hoa Lư e Stazione di Ninh Bình).
- **Calcolatore di budget in EUR e VND** personalizzabile per numero di viaggiatori e stile di viaggio (*Zaino in spalla*, *Comfort*, *Boutique*).
- **Toolkit pratico**: checklist dello zaino salvata in locale, frasi essenziali in vietnamita con pronuncia e consigli sui trasporti da/per Hanoi.

## Deploy automatico su GitHub Pages
Il repository include la GitHub Action [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), che pubblica automaticamente la webapp su GitHub Pages ad ogni push sul branch `main` (o tramite esecuzione manuale `workflow_dispatch`).
