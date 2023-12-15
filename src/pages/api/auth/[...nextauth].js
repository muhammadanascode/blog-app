import NextAuth, { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../../../utils/connect";

const callbackUrl =
  process.env.NODE_ENV === "production"
    ? "https://scriptsynergy.vercel.app/api/auth/callback/google"
    : "http://localhost:3000/api/auth/callback/google";

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      scope: "openid profile email",
      callbackUrl,
    }),
  ],
};

export default NextAuth(authOptions);

export const getAuthSession = () => getServerSession(authOptions);
