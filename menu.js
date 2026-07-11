// Menu di navigazione condiviso da tutte le pagine.
// Per aggiungere una voce, basta aggiungere una riga nell'array VOCI_MENU qui sotto.

const VOCI_MENU = [
  { nome: "Home", link: "index.html" },
  { nome: "Clienti", link: "clienti.html" },
  { nome: "Prodotti", link: "prodotti.html" },
  { nome: "Ordini", link: "ordini.html" },
  { nome: "Spese", link: "spese.html" },
  { nome: "Dashboard", link: "dashboard.html" },
];

function iniettaMenu() {
  const stile = document.createElement('style');
  stile.textContent = `
    #btn-menu {
      all: unset;
      position: fixed;
      top: 14px;
      right: 14px;
      z-index: 1000;
      width: 42px;
      height: 42px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 22px;
      cursor: pointer;
      box-sizing: border-box;
      transition: background 0.15s ease;
    }
    #btn-menu:hover { background: rgba(255,255,255,0.15); }
    #pannello-menu {
      position: fixed;
      top: 0;
      right: -260px;
      width: 260px;
      height: 100%;
      background: var(--accent-dark);
      z-index: 1001;
      transition: right 0.25s ease;
      padding: 70px 0 20px;
      box-shadow: -4px 0 20px rgba(0,0,0,0.2);
    }
    #pannello-menu.aperto { right: 0; }
    #pannello-menu a {
      display: block;
      padding: 14px 24px;
      color: #e8ece9;
      text-decoration: none;
      font-family: -apple-system, "Segoe UI", Roboto, sans-serif;
      font-size: 15px;
    }
    #pannello-menu a:hover { background: rgba(255,255,255,0.08); }
    #overlay-menu {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.3);
      z-index: 999;
    }
    #overlay-menu.aperto { display: block; }
    .logo-header {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      height: 60px;
      width: auto;
    }
    header h1 { margin-left: 80px; }
  `;
  document.head.appendChild(stile);

  // Logo nell'header, se la pagina ne ha uno (il file va cercato come logo.png nella cartella)
  const header = document.querySelector('header');
  if (header) {
    const logo = document.createElement('img');
    logo.src = 'logo.png';
    logo.alt = 'Logo';
    logo.className = 'logo-header';
    logo.onerror = () => { logo.remove(); document.querySelectorAll('header h1').forEach(h => h.style.marginLeft = '0'); };
    header.prepend(logo);
  }

  const voci = VOCI_MENU.map(v => `<a href="${v.link}">${v.nome}</a>`).join('');

  const html = `
    <button id="btn-menu" aria-label="Apri menu">☰</button>
    <div id="overlay-menu"></div>
    <nav id="pannello-menu">${voci}</nav>
  `;
  document.body.insertAdjacentHTML('beforeend', html);

  const pannello = document.getElementById('pannello-menu');
  const overlay = document.getElementById('overlay-menu');

  document.getElementById('btn-menu').addEventListener('click', () => {
    pannello.classList.add('aperto');
    overlay.classList.add('aperto');
  });
  overlay.addEventListener('click', () => {
    pannello.classList.remove('aperto');
    overlay.classList.remove('aperto');
  });
}

document.addEventListener('DOMContentLoaded', iniettaMenu);
