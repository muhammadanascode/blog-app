import { PrismaClient } from "@prisma/client";

let prisma;

try {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
} catch (error) {
  // Handle Prisma Client initialization error
  console.error("Error initializing Prisma Client:", error);
}

export default prisma;
