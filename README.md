# Mon Projet : garage V parrot

## Description
Bienvenue dans le projet Garage ! Nous sommes un garage automobile spécialisé dans la vente de voitures d'occasion. Ce fichier README contient des informations sur mon projet, son installation et son utilisation.
Le projet Garage V parrot a pour objectif d'offrir aux clients une plateforme conviviale pour parcourir et acheter des voitures d'occasion. Le site web est construit en utilisant les technologies suivantes :

## Technologies Utilisées

- **Éditeur de Code :** Visual Studio Code
- **Framework CSS :** Tailwind CSS
- **Langage CSS :** CSS3
- **Framework Front-end :** Next.js
- **Langage de Programmation :** TypeScript
- **Plateforme Serveur :** Node.js
- **ORM (Object-Relational Mapping) :** Prisma
- **Hébergement :** GitHub (pour le code source) et Vercel (pour le déploiement)
- **Base de Données :** PostgreSQL avec Neon

## Table des matières

- [Installation](#installation)
- [Utilisation](#utilisation)
- [Fonctionnalités](#fonctionnalités)



## Installation

Pour installer et exécuter ce projet localement, suivez ces étapes :

1. **Téléchargement de Node.js Sur Windows  :**
   Ouvrez votre navigateur web et allez sur le site officiel de Node.js à l'adresse https://nodejs.org/.
   Sur la page d'accueil, vous verrez deux versions recommandées : "LTS" (Long Term Support) et "Current". Il est généralement recommandé de choisir la version LTS pour la stabilité à moins que vous n'ayez besoin de fonctionnalités spécifiques de la version "Current".
   Cliquez sur la version que vous souhaitez installer. Cela téléchargera le fichier d'installation pour Windows.

2. **Exécutez le programme d'installation  :**   
   Après avoir téléchargé le fichier d'installation, double-cliquez dessus pour l'exécuter.
   Suivez les instructions de l'assistant d'installation. Vous pouvez laisser les options par défaut pour la plupart des cas d'utilisation.

   
3. **Vérification de l'installation  :**  
   Une fois l'installation terminée, ouvrez votre invite de commande (ou PowerShell) et tapez les commandes suivantes pour vérifier que Node.js et npm (Node Package Manager) sont installés avec succès :
   node -v
   npm -v

   Vous devriez voir les numéros de version de Node.js et npm s'afficher dans la fenêtre de commande, ce qui indique que l'installation a réussi.

4. **Node.js Sur macOS  :**
   Si vous avez déjà installé Homebrew, ouvrez votre terminal. Si vous ne l'avez pas installé, vous pouvez le faire en suivant les instructions sur le site officiel de  Homebrew : https://brew.sh/.
   Ensuite, pour installer Node.js, exécutez la commande suivante :
   brew install node
   pour la vérification de l'installation terminée meme procédé que pour la version windows.

5. **Node.js Sur Linux  :**
   Installation avec APT (gestionnaire de paquets)
   Ouvrez votre terminal.
   Mettez à jour la liste des paquets disponibles avec la commande suivante :
   sudo apt update

   Ensuite, installez Node.js et npm en exécutant la commande suivante :
   sudo apt install nodejs npm
   pour la vérification de l'installation terminée meme procédé que pour la version windows.

6. **Téléchargement de Visual Studio Code :**
    Allez sur le site officiel de Visual Studio Code à l'adresse https://code.visualstudio.com/.
    Téléchargez la version appropriée pour votre système d'exploitation (Windows, macOS ou Linux).
    Suivez les instructions d'installation pour installer Visual Studio Code sur votre ordinateur.

7. **Lancement de Visual Studio Code :**
    Une fois l'installation terminée, lancez Visual Studio Code à partir du menu de démarrage (Windows), du Finder (macOS) ou de votre terminal (Linux) en tapant code.

8. **Installation des extensions Recommandées visual Studio Code :**

    Auto Close Tag
    Auto Rename Tag
    ES7 + react
    Eslint
    Live Server
    Prettier code formatter
    Prisma
    Tailwind CSS intelliSense


9. **Cloner le dépôt depuis GitHub :**

    Ouvrez votre terminal ou votre invite de commande
    Utilisez la commande cd pour vous déplacer vers le répertoire où vous souhaitez télécharger le projet.
    Utilisez la commande git clone pour cloner le dépôt GitHub
    par l'URL du dépôt GitHub suivante : 

    git clone https://github.com/spyki78/garage.git

10. **Navigation vers le répertoire du projet :**
    Utilisez la commande cd pour naviguer dans le répertoire du projet que vous venez de cloner.
    cd garage


11. **Utilisation de pnpm et installations des dependances :**
    Ouvrez votre terminal ou votre invite de commande.
    Naviguez jusqu'au répertoire de votre projet Next.js en utilisant la commande cd.

    Une fois dans le répertoire du projet, utilisez la commande suivante pour installer les dépendances du projet à l'aide de npm (Node Package Manager) :

    pnpm install

    Cette commande installera toutes les dépendances nécessaires à partir du fichier package.json du projet.

12. **Accédez à votre application :**

    Ouvrez votre navigateur web et accédez à l'application en entrant l'URL suivante dans la barre d'adresse :
    http://localhost:3000


13. **Accédez à votre application coté back end Admin:**

    http://localhost:3000/connexion

    actif   Admin :  
    adresse e mail : paul@gmail.com
    mot de passe  : Jeudi78!

15. **Accédez à votre application coté back end Employe:** 


16. **Création nouvel employé:**

    une fois connecté en tant Admin
    vous arriverez sur  http://localhost:3000/dashboard
    puis cliquer sur ajouter un employe

    redirigé vers  http://localhost:3000/dashboard/employe

    rentrer l'adresse mail et mot de passe de l'employé à créer.
    
    si souhaitez actif : 
    adresse e mail : didier@gmail.com
    mot de passe  : Vendredi78!

    puis revenir sur  http://localhost:3000/connexion

    afin de vous idendifier en tant que employé

    vous remarquerez qu'en tant qu'un employé vous ne pouvez pas créer de compte.
    
17. **Dashboard utlisation:**

    - de supprimer ou valider les avis
    - de supprimer les messages formumlaire de contact
    - de supprimer les annonces voitures

18. **Création annonces voitures:**

    se rendre sur http://localhost:3000/dashboard/voiture

    afin de pouvoir créer une voiture.
    
19. **posibilité de supprimer les comptes et annonce ou formulaire via prisma studio:**
    excuter la commmande suivante dans votre terminal
    pnpm prisma studio


## Utilisation 

1. **Recherche de Voitures d'Occasion :**
    - Accédez à la page les occasions de l'application.
    - Utilisez le filtre de recherche pour spécifier les critères de recherche tels que le prix, l'année et le kilométrage.
    
2. **Consultation des Détails des Véhicules :**
    - Parcourez la liste des voitures affichées.
    - Cliquez sur galerie d'une voiture pour accéder à sa page de détails et ses photos.
    - Là, vous trouverez des informations détaillées sur le véhicule, y compris les spécifications techniques, les photos et les équipements et Options.
    - Cliquez sur formulaire de contact afin d'avoir un espace de contact dédié au véhicule.

3. **Demande d'Informations Supplémentaires :**
    - Si vous avez des questions ou souhaitez obtenir plus d'informations sur un véhicule particulier, utilisez le formulaire de contact disponible sur la page de les occasions propre à l'annonce du véhicule.
    - Remplissez les champs obligatoires et envoyez votre demande. Un vendeur vous répondra dans les plus brefs délais.
    - ou pour tout autres questions via le formulaire général de contact ou par téléphone / adresse postal.

4. **visibilité prestations :**
    - Si vous souhaitez connaitre les prestations du garage sur les vehicules rendez-vous directement sur la page d'accueil.

5. **Déposer un avis :**
     - Si vous souhaitez déposer un avis rendez-vous directement sur la page d'accueil.


## Fonctionnalités

1. **Visibilité sur les prestations du garage:**
 
 - Les utilisateurs peuvent voir la liste des prestations possible sur véhicule via la page d'accueil du garage.


2. **Recherche de Voitures d'Occasion :**

   - Les utilisateurs peuvent rechercher des voitures d'occasion en fonction de différents critères tels que  l'année , le kilométrage et le prix.

3. **Consultation des Détails des Véhicules :**

   - Les utilisateurs peuvent afficher les détails complets de chaque véhicule, y compris les spécifications techniques et les photos.

4. **Demande d'Informations Supplémentaires :**

   - Les utilisateurs peuvent poser des questions ou demander des informations supplémentaires sur un véhicule particulier en utilisant un formulaire de contact intégré.

5. **Deposition d'un avis :**

 - Les utilisateurs peuvent déposer un avis en indiquant leur nom, le message et le scoring en utilisant un formulaire d'avis dédié.

6. **Consultation horaires d'ouverture et contact :**

 - Les utilisateurs peuvent consuler les horaires d'ouvertures , téléphone et adresse via le bas de page du site.

7. **Création de Compte Utilisateur :**

   - L'administrateur peut créer un compte employé, une annonce , un avis
   - l'employé ne peut uniquement que une annonce , un avis.

8. **Intégration avec GitHub :**

   - Le projet est hébergé sur GitHub, ce qui permet une collaboration aisée et un suivi des versions du code source.

9. **Hébergement sur Vercel :**

   - L'application est déployée sur la plateforme d'hébergement Vercel, garantissant une disponibilité continue et des performances optimales.

10. **Base de Données PostgreSQL avec Neon :**

    - Les données des véhicules et des utilisateurs sont stockées dans une base de données PostgreSQL, gérée avec Neon pour une gestion efficace.










   










    






    






3. **Installer les dépendances :**
   
   Utilisez pnpm (Node Package Manager) pour installer toutes les dépendances nécessaires au projet. Exécutez cette commande à l'intérieur du répertoire du projet :
   pnpm instal

   Cette commande installera toutes les bibliothèques et les modules dont le projet a besoin pour fonctionner correctement.
















This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
