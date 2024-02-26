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
      if(!profile?.email) { // if there is no profile returned from the google authentication error throw
        throw new Error('No Profile')
      }

      await prisma.user.upsert({ // google auth Success! check via email for database match
        where: {
          email: profile.email,
        }, 
        create: { // if the email does not exsist create the user in the database with the email and name from the google provider
          email: profile.email,
          name: <string> profile.name,
        },
        update: { // otherwise update the name (in case someone changes there google name)
          name: profile.name,
        }
      })

      return true
    }
  }
})

export { handler as GET, handler as POST}