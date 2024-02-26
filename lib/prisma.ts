declare global {
  var prisma: PrismaClient; // This must be a `var` and not a `let / const` 
}
import { PrismaClient } from "@prisma/client";

// Prisma Client to be exported and used for read/write of the postgresql database
let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;