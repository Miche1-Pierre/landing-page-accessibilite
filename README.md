# Landing Page Accessible

Un site web simple (landing page) développé avec un focus poussé sur l'accessibilité.

## Installation

```bash
# Cloner le repository
git clone https://github.com/Miche1-Pierre/landing-page-accessibilite.git

# Naviguer dans le dossier
cd landing-page-accessibilite

# Installer les dépendances (pour tailwindcss)
npm install
npm run dev
```

## Structure du projet

```
.
├── assets/
│   ├── police_dys       # Polices adaptées pour la dyslexie
│   └── *images          # Images utilisées dans le projet
├── src
│   ├── style.css        # Fichier CSS principal
│   └── script.js        # Fichier JavaScript
├── index.html           # Fichier HTML principal
├── README.md            # Doc
├── package.json         # Fichier de configuration npm
└── .gitignore           # Fichier gitignore
```

## Tests d'accessibilité

Le site a été testé avec :

- Des extension de naviguateurs :
  - WCAG contrast cheker
  - Web Developer Tools
- axe DevTools
- Lighthouse (Chrome DevTools)
- Navigation clavier uniquement

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Auteur

**Miche1-Pierre**

- GitHub: [@Miche1-Pierre](https://github.com/Miche1-Pierre)
