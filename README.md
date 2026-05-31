# Kultura

Un panou de administrare demo pentru evenimente auto și echipa Kultura.

## Descriere

Acest proiect oferă o interfață web statică pentru coordonarea evenimentelor, gestionarea mașinilor participante, sarcinilor, echipei și resurselor.

## Ce include

- `index.html` — structură pagină și vizualizare admin
- `styles.css` — stiluri pentru interfață modernă, dark mode
- `script.js` — logică de navigare, traduceri, date demo și persistare locală
- `preview-server.ps1` — script PowerShell pentru pornirea unui server static local pe Windows
- `preview-server.sh` — script shell pentru pornirea unui server static local pe Linux/macOS

## Cum rulezi local

### Opțiunea 1 — Python

1. Deschide terminalul în directorul proiectului
2. Rulează:
   ```bash
   python3 -m http.server 8000
   ```
3. Deschide în browser `http://localhost:8000`

### Opțiunea 2 — Linux / macOS

1. Deschide terminalul în directorul proiectului
2. Rulează:
   ```bash
   chmod +x ./preview-server.sh
   ./preview-server.sh
   ```
3. Deschide în browser `http://localhost:8000`

### Opțiunea 3 — PowerShell (Windows)

1. Deschide PowerShell în directorul proiectului
2. Rulează:
   ```powershell
   .\preview-server.ps1
   ```
3. Deschide în browser `http://localhost:8000`

## Observații

- Datele din `script.js` sunt demo; autentificarea este locală și nu reprezintă un mecanism securizat în producție.
- Proiectul folosește Supabase în client doar pentru demo; API-urile nu sunt protejate pentru date sensibile.
