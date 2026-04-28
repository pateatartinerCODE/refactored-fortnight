# MACROINT — Macro & Geopolitical Intelligence Terminal

Dashboard web interactif orienté finance/géopolitique, repensé comme un **global intelligence terminal** premium avec globe 3D immersif.

## Features

- Interface sombre premium (glassmorphism, glow subtil, style terminal pro).
- Split screen immersif : globe 3D interactif + panel analyste.
- Globe 3D avec rotation lente auto, zoom, hover labels et clic sur markers pays.
- Brief pays complet (macro, risques géopolitiques, opportunités, cross-asset impact).
- Score de risque 0–100 avec barre animée.
- Market signals (Equity/Bond/FX/Commodity) en UP / DOWN / NEUTRAL.
- Mode pédagogique (glossaire discret en drawer latéral).
- Comparaison entre deux pays.
- Mini trend chart + risk radar en canvas.
- Investment thesis mise en avant.
- Export brief (copie presse-papiers + impression PDF navigateur).
- Responsive UX mobile/tablette.

## Stack

- HTML / CSS / JavaScript vanilla
- [`globe.gl`](https://github.com/vasturiano/globe.gl) via CDN (`unpkg`) pour le rendu 3D
- `three.js` via CDN

## Structure

```text
.
├── index.html
├── style.css
├── app.js
└── README.md
```

## Lancer en local

1. Dans le dossier du projet:

```bash
python3 -m http.server 8080
```

2. Ouvrir:

```text
http://localhost:8080
```

> Note: pour le globe 3D, une connexion internet est nécessaire afin de charger les scripts CDN et textures.

## Utilisation

1. Cliquer un marker sur le globe ou un bouton Quick Access.
2. Lire le brief macro/géo + market signals + investment thesis.
3. Cliquer les termes macro (GDP, inflation, FX, etc.) pour l'explication pédagogique.
4. Sélectionner un deuxième pays dans "Comparer avec".
5. Utiliser "Copier brief" ou "Exporter PDF".

## Roadmap

- Branchements API macro/news (FRED, IMF, World Bank, flux géopolitiques).
- Time-series réelles multi-indicateurs.
- Alerting dynamique (risk regime shift).
- Auth + sauvegarde de watchlists.
- Export PDF enrichi (template analyste).
