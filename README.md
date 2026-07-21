# Gestionale CaC

Web app di gestione per clienti, prodotti, ordini e spese, con dashboard e login basati su [Supabase](https://supabase.com).

## Pagine

| File | Descrizione |
| --- | --- |
| `index.html` | Login e home con accesso alle sezioni |
| `dashboard.html` | Dashboard riepilogativa |
| `clienti.html` | Gestione clienti |
| `prodotti.html` | Gestione prodotti |
| `ordini.html` | Gestione ordini |
| `spese.html` | Gestione spese |
| `manutenzione.html` | Backup del database, visibile solo agli utenti con ruolo `admin` |

## Struttura tecnica

- HTML/CSS/JS puri, nessun framework o build step.
- `supabase-client.js` inizializza il client Supabase condiviso (URL + publishable key) usato da tutte le pagine.
- `menu.js` gestisce la navigazione comune tra le pagine.
- `tema.css` definisce le variabili di tema (colori, spaziature) condivise.
- Autenticazione tramite `supabase-js` (`auth.signInWithPassword`), profilo utente letto dalla tabella `profili` (colonne `nome`, `ruolo`).

## Sviluppo

Nessuna build richiesta: basta aprire `index.html` in un browser o servire la cartella con un web server statico (es. `npx serve .`).