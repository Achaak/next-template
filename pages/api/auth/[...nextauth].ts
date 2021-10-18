import { prisma } from '@/server/context'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session({ session }) {
      return session // The return type will match the one returned in `useSession()`
    },
  },
})
