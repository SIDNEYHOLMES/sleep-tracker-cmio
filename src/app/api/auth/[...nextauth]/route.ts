import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import prisma from '../../../../../lib/prisma'

const handler = NextAuth({
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if(!profile?.email) {
        throw new Error('No Profile')
      }

      await prisma.user.upsert({
        where: {
          email: profile.email,
        },
        create: {
          email: profile.email,
          name: <string> profile.name,
        },
        update: {
          name: profile.name,
        }
      })

      return true;
    }
  }
})

export { handler as GET, handler as POST}