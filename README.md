## Objectif du Projet
- **But :** Convertir des nombres arabes en chiffres romains en utilisant une application web développée avec React.

## Environnement et Technologies
- **Choix de React :** Pour sa facilité d’utilisation et de déploiement, ainsi que pour son efficacité dans la construction d'interfaces utilisateur interactives.
- **GitHub :** Utilisé pour le contrôle de version et la collaboration entre les membres de l'équipe.
- **CI/CD :** Utilisation de GitHub Actions avec un environnement Node

## Gestion des issues et distribution des fonctionnalité
- **Utilisation de linear :** Lien pour se connecter: https://linear.app/kata-roman-numeral/join/0952c74a9181926babcc462fb4283fcc?s=1

## Utilisation du projet
```bash
npm run start
```
```bash
npm run build
```
```bash
npm run test
```

## Environnement de test
- **Jest :** Utilisation de Jest pour les tests unitaires.

## Création des différentes pipeline de test :
- Test du build
- Lancement des tests unitaires

## Déploiement du projet
- **Description :** Utilisation de onrender.com pour créer le deploiement des différents états de l'application.
- **Prod :** [roman-numeral-prod]('https://roman-numeral.onrender.com')
- **Dev :** [roman-numeral-dev]('https://roman-number-dev.onrender.com')

## CI/CD
- **Création d'une nouvelle fonctionnalités ou bug sur linear**
- **Création de la branche avec le nom de l'issue linear à partir de la branch dev**
- **Dev de la fonctionnalité sur cette branche**
- **Création des tests unitaires pour cette fonctionnalité**
- **Lorsque la fonctionnalité fonctionne création de la pull request sur la branche dev**
- **Attente des tests**
- **Lorsque le groupe de fonctionnalités du sprint est terminé on créer la push request de la branche dev vers la branche master**