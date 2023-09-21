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

    Une fois dans le répertoire du projet, utilisez la commande suivante pour installer les dépendances du projet à l'aide de pnpm (Node Package Manager) :

    pnpm install

    Cette commande installera toutes les dépendances nécessaires à partir du fichier package.json du projet.

12. **Accédez à votre application :**

    Ouvrez votre navigateur web et accédez à l'application en entrant l'URL suivante dans la barre d'adresse :
    http://localhost:3000

13. **Création du compte administrateur:**   
    Créez un modèle Prisma pour les administrateurs :
    Si vous n'en avez pas déjà un, créez un modèle Prisma pour représenter les administrateurs dans votre base de données. dans le terminal au préalable installer prisma :
    
    npm install -g prisma

    Cette commande téléchargera et installera Prisma sur votre système.
    Vérifiez l'installation

    prisma -v

 ensuite dans le dossier prisma puis fichier shema.prisma
 
 mettre  :
    generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id           Int              @id @default(autoincrement())
  email        String           @unique
  hashed_password     String
  isAdmin      Boolean @default(false)
  

  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
}

puis dans le dossier API

créer le dossier auth puis dans auth le dossier [...nextauth]
ajouter un fichier au dossier 
route.ts

dans ce meme fichier mettre : 


// Import des modules et packages nécessaires

import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/../libs/prismadb";
import NextAuth, { AuthOptions } from "next-auth";
import { z } from "zod";
import bcrypt from "bcrypt";

// Définition du schéma de validation des données utilisateur avec Zod
const UserBodyScheme = z.object({
  email: z
    .string({
      required_error: "Le champs email est requis !", // Message d'erreur si le champ est vide
      invalid_type_error: "Le champs email est requis !",// Message d'erreur si le champ est au mauvais format
    })
    .email("Le champs email n'est pas valide !")// Validation du format de l'email
    .trim(),// Suppression des espaces blancs autour de l'email
  password: z
    .string({
      required_error: "Le champs mot de passe est requis !", // Message d'erreur si le champ est vide
      invalid_type_error: "Le champs mot de passe est requis !",// Message d'erreur si le champ est au mauvais format
    })
    .trim(), // Suppression des espaces blancs autour du mot de passe
});

// Définition du type User
type User = {
  id: number;
  name: string;
  email: string;
  // ...
};

// Configuration de NextAuth.js
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as any,// Utilisation de Prisma comme adaptateur
  providers: [
    // utilisation d'un non provider / general avec mail et mot de passe
    CredentialsProvider({
      // Utilisation d'un fournisseur d'authentification "credentials" (email/mot de passe)
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" }, // Configuration du champ email
        password: { label: "password", type: "password" }, // Configuration du champ mot de passe
      },
 // Fonction d'autorisation pour valider les informations d'identification
      async authorize(credentials: any) {
        const userBody = UserBodyScheme.parse(credentials);// Validation des données utilisateur avec Zod
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashed_password) {
          throw new Error("Invalide Credential"); // Erreur si les informations d'identification sont invalides
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashed_password
        );

        if (!isCorrectPassword) {
          throw new Error("Invalide Credential"); // Erreur si le mot de passe est incorrect
        }

        return { user } as any; // Renvoie l'utilisateur en cas de succès
      },
    }),
  ],
  debug: process.env.NODE_ENV == "development", // Activation du mode débogage en développement
  session: {
    strategy: "jwt", // Utilisation de JSON Web Tokens pour gérer les sessions
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      return { ...token, ...user };
    },
    async session({
      session,
      user,
      token,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Clé secrète pour la sécurité
};

// Création du gestionnaire d'authentification NextAuth
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, UserBodyScheme };

Imports :
Les premières lignes importent les modules et packages nécessaires à la configuration de l'authentification. Cela inclut NextAuth.js pour gérer l'authentification, le package PrismaAdapter pour utiliser Prisma comme adaptateur d'authentification, ainsi que d'autres dépendances comme Zod (un outil de validation de schéma) et bcrypt (pour le hachage et la comparaison des mots de passe).

Schéma de validation de l'utilisateur :
La partie suivante définit un schéma de validation des données utilisateur à l'aide de Zod. Il spécifie les règles de validation pour les champs email et mot de passe.

Type User :
Le type User est défini pour représenter les données d'un utilisateur, telles que l'ID, le nom, l'email, etc. Cela peut être utilisé pour typage statique.

authOptions :
Cette variable contient la configuration pour NextAuth.js. Elle spécifie l'adaptateur Prisma, les fournisseurs d'authentification (dans ce cas, il s'agit d'un fournisseur de "credentials" qui permet l'authentification par email et mot de passe), les options de débogage, la stratégie de session (dans ce cas, "jwt" pour JSON Web Tokens), et des callbacks pour personnaliser le comportement de NextAuth.js.

Le callback authorize est utilisé pour valider les informations d'identification (email et mot de passe) soumises par l'utilisateur. Il vérifie si les informations sont valides en comparant le mot de passe haché stocké en base de données avec le mot de passe soumis après hachage.

Les callbacks jwt et session sont utilisés pour gérer la création et la mise à jour du jeton JWT (JSON Web Token) utilisé pour l'authentification.

La clé secrète NEXTAUTH_SECRET est généralement stockée dans les variables d'environnement pour des raisons de sécurité.

handler :
Enfin, le code exporte un gestionnaire d'authentification en utilisant NextAuth.js avec les options de configuration précédemment définies. Il exporte également UserBodyScheme qui peut être utilisé pour valider les données d'identification.

Ce fichier de configuration définit la logique d'authentification de votre application Next.js en utilisant NextAuth.js et Prisma comme adaptateur. Il permet aux utilisateurs de s'authentifier en fournissant leur email et leur mot de passe, puis il vérifie ces informations par rapport à la base de données. Si les informations sont valides, l'utilisateur est authentifié et un jeton JWT est généré pour gérer les sessions utilisateur.

puis créer un dossier user dans api et dans ce dossier un fichier route.ts

import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
import { prisma } from "@/../libs/prismadb";

/* pour configurer un shéma de user souhaitez pour la validation du formulaire*/
const UserBodyScheme = z.object({
  email: z
    .string({
      required_error: "Le champs email est requis !",
      invalid_type_error: "Le champs email est requis !",
    })
    .email("Le champs email n'est pas valide !")
    /* supprime les espaces auto*/
    .trim(),
  password: z
    .string({
      required_error: "Le champs mot de passe est requis !",
      invalid_type_error: "Le champs mot de passe est requis !",
    })
    .min(8, { message: "Must be 8 or more characters long" })
    .max(20, { message: "Mot de passe 20 carac" })
    .regex(/[A-Z]/, {
      message: "Le champ mot de passe doit contenir au moins une majuscule !",
    })
    .regex(/[0-9]/, {
      message: "Le champ mot de passe doit contenir au moins un chiffre !",
    })
    .regex(/[@#$%^&+=!:/?~]/, {
      message:
        "Le champ mot de passe doit contenir au moins un caractère spécial !",
    })
    .trim(),
});



export async function POST(request: Request) {
  try {
    /*recupere les données du body*/
    const body = await request.json();
    /*Body doit etre identique aux configurations sinon retour error*/
    const userBody = UserBodyScheme.parse(body);
    /*securisation du mot de passe*/
    const hashed_password = await bcrypt.hash(userBody.password, 12);
    const user = await prisma.user.create({
      data: {
        email: userBody.email,
        hashed_password: hashed_password,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}


    Ce code semble gérer l'inscription d'un nouvel utilisateur dans une base de données en utilisant des données soumises via une requête HTTP POST. Il effectue des vérifications de sécurité telles que la validation des données utilisateur et le hachage du mot de passe avant de l'enregistrer dans la base de données.

    Côté client (Front-end) :

    Dans les composants React : Vous pouvez conditionner l'affichage de certaines fonctionnalités ou éléments d'interface utilisateur en fonction du rôle ou des autorisations de l'administrateur.

    voir le fichier situé dans (admin)\dashboard\employe\page.tsx

    La première étape consiste à obtenir la session utilisateur côté serveur en utilisant getServerSession et la configuration d'authentification authOptions.

    Ensuite, il y a une vérification pour s'assurer que l'utilisateur est connecté. Si la session est nulle (c'est-à-dire que l'utilisateur n'est pas connecté), la fonction effectue une redirection vers la page "/connexion". Cela signifie que si l'utilisateur n'est pas connecté, il est redirigé vers une page de connexion.

    Après la vérification de la connexion, la fonction semble vérifier si l'utilisateur a le statut d'administrateur. La variable isAdmin est extraite de la session utilisateur 
    (session.user) et est vérifiée. Si l'utilisateur n'est pas un administrateur (!isAdmin), une autre redirection vers la page de connexion est effectuée. Cela signifie que même si l'utilisateur est connecté, il doit également être un administrateur pour accéder à la page.


13. **Accédez à votre application coté back end Admin:**

    http://localhost:3000/connexion

    actif   Admin :  
    adresse e mail : paul@gmail.com
    mot de passe  : Jeudi78!



16. **Création nouvel employé:**

    une fois connecté en tant Admin
    vous arriverez sur  http://localhost:3000/dashboard
    puis cliquer sur ajouter un employe

    redirigé vers  http://localhost:3000/dashboard/employe

    rentrer l'adresse mail et mot de passe de l'employé à créer.
    
    ## si souhaitez employé déjà actif ## : 
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
    - Utilisez le filtre de recherche pour spécifier les critères de recherche tels que le prix, l'année  et le kilométrage.
    
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


1. **Supplémentaire:**

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
