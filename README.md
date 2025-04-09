# Portfolio Next.js

Ce portfolio est une application web moderne créée avec Next.js, React et Redux. Il présente les compétences et les projets d'un développeur web.

## Fonctionnalités

- Page d'accueil avec présentation et photo de profil
- Section de projets avec descriptions et technologies utilisées
- Système d'authentification (inscription et connexion)
- Système de témoignages avec formulaire
- Contact avec formulaire de contact
- Protection des routes (sauf login et inscription)
- Validation des formulaires avec messages d'erreur

## Technologies utilisées

- Next.js 14
- React 18
- Redux Toolkit
- Tailwind CSS
- TypeScript
- Framer Motion
- Heroicons
- Headless UI

## Installation

1. Cloner le repository
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Démarrer le serveur de développement :
   ```bash
   npm run dev
   ```

L'application sera accessible à l'adresse : http://localhost:3000

## Structure du projet

```
portfolio-app/
├── components/         # Composants réutilisables
├── pages/             # Pages Next.js
├── public/            # Assets statiques
├── store/             # Configuration Redux
└── styles/           # Styles globaux
```

## Capture d'écran

![Capture d'écran](/public/images/screenshot.png)

## Contributing

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT.
