import { PrismaClient } from "@prisma/client"; //Ce code utilise Prisma pour interagir avec la base de données dans une application

declare global {
    var prisma: PrismaClient | undefined
}
export const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV == "production") {
    globalThis.prisma = prisma;
}

