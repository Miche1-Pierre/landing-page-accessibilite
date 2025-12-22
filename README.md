# Landing Page Accessible

Un site web simple (landing page) développé avec un focus poussé sur l'accessibilité web (WCAG 2.1/2.2).

## À propos

Ce projet est une démonstration de bonnes pratiques en accessibilité web, réalisé dans le cadre d'une évaluation académique. L'objectif est de créer une landing page qui respecte les standards WCAG et qui fonctionne **sans JavaScript** (amélioration progressive).

## Caractéristiques d'accessibilité

- ✅ Fonctionne sans JavaScript (progressive enhancement)
- ✅ Navigation au clavier complète
- ✅ Compatible avec les lecteurs d'écran
- ✅ Contraste des couleurs conforme WCAG AA/AAA
- ✅ Structure sémantique HTML5
- ✅ Textes alternatifs pour les images
- ✅ ARIA labels appropriés
- ✅ Responsive design
- ✅ Focus visible et logique

## Technologies

- HTML5 (sémantique)
- Style (tailwindcss v4.1)
- JavaScript (amélioration progressive uniquement)

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
│   └── script.js        # Fichier JavaScript (amélioration progressive)
├── index.html           # Fichier HTML principal
├── README.md            # Documentation du projet
├── package.json         # Fichier de configuration npm
└── .gitignore           # Fichier gitignore
```

## Tests d'accessibilité

Le site a été testé avec :

- [ ] WAVE (Web Accessibility Evaluation Tool)
- [ ] axe DevTools
- [ ] Lighthouse (Chrome DevTools)
- [ ] NVDA / JAWS (lecteurs d'écran)
- [ ] Navigation clavier uniquement
- [ ] Validation HTML W3C
- [ ] Validation CSS W3C

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Auteur

**Miche1-Pierre**

- GitHub: [@Miche1-Pierre](https://github.com/Miche1-Pierre)

## Remerciements

Projet réalisé dans le cadre d'une évaluation sur l'accessibilité web.
