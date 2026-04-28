# MACROINT — Macro & Geopolitical Intelligence Terminal

Dashboard web interactif orienté finance/géopolitique, pensé comme une mini station d'intelligence macro. Le projet est en **HTML/CSS/JavaScript vanilla**, fonctionne en local sans backend, et sert de base solide pour un portfolio en stage finance / business analyst.

## Features

- Interface premium dark/cyber type terminal Bloomberg-like.
- Split screen : carte interactive à gauche + panel d'analyse à droite.
- Brief pays complet (macro, géopolitique, cross-asset impact).
- Score de risque 0–100 avec barre animée.
- Market signals (Equity / Bond / FX / Commodity) avec statut UP/DOWN/NEUTRAL.
- Mode pédagogique: clic sur les termes macro pour ouvrir une explication.
- Comparaison entre deux pays.
- Mini graphique de tendance macro (canvas).
- Risk radar visuel (canvas).
- Investment thesis claire et actionnable.
- Export du brief (copie presse-papiers + impression PDF via navigateur).
- Responsive UX pour mobile et tablette.

## Structure

```text
.
├── index.html
├── style.css
├── app.js
└── README.md
```

## Lancer en local

### Option 1 (rapide)
Ouvrir `index.html` directement dans le navigateur.

### Option 2 (recommandée)
Servir le dossier en HTTP local:

```bash
python3 -m http.server 8080
```

Puis ouvrir : `http://localhost:8080`.

## Utilisation

1. Sélectionner un pays via les boutons ou la carte.
2. Lire le brief macro/géo dans le panel de droite.
3. Cliquer sur un terme souligné (`GDP`, `inflation`, `FX`, etc.) pour l'explication pédagogique.
4. Choisir un second pays dans "Comparer avec".
5. Utiliser "Copier brief" ou "Exporter PDF".

## Roadmap (améliorations CV-ready)

- Brancher une API macro (FRED, World Bank, IMF).
- Ajouter un flux news géopolitique en temps réel.
- Sérialiser l'historique des briefs (localStorage).
- Ajouter un mode scénario (hawkish / dovish / shock géopolitique).
- Ajouter une couche de visualisation carte plus avancée (SVG geojson / globe WebGL).
- Tester l'UI avec Playwright + linting JS/CSS.

## Positionnement CV

Ce projet démontre:
- capacité à structurer de l'information macro-financière,
- design d'une UX data-driven,
- développement frontend autonome,
- logique produit (itérations et extensibilité vers APIs).
