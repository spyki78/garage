import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/../libs/prismadb";
import NextAuth, { AuthOptions } from "next-auth";
import { z } from "zod";
import bcrypt from "bcrypt";

const UserBodyScheme = z.object({
  email: z
    .string({
      required_error: "Le champs email est requis !",
      invalid_type_error: "Le champs email est requis !",
    })
    .email("Le champs email n'est pas valide !")
    .trim(),
  password: z
    .string({
      required_error: "Le champs mot de passe est requis !",
      invalid_type_error: "Le champs mot de passe est requis !",
    })
    .trim(),
});

type User = {
  id: number;
  name: string;
  email: string;
  // ...
};

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    // utilisation d'un non provider / general avec mail et mot de passe
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials: any) {
        const userBody = UserBodyScheme.parse(credentials);
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashed_password) {
          throw new Error("Invalide Credential");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashed_password
        );

        if (!isCorrectPassword) {
          throw new Error("Invalide Credential");
        }

        return { user } as any;
      },
    }),
  ],
  debug: process.env.NODE_ENV == "development",
  session: {
    strategy: "jwt",
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
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, UserBodyScheme };
