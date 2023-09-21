
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
