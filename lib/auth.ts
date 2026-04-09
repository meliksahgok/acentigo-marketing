import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'E-posta', type: 'email' },
        password: { label: 'Şifre', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        try {
          const { default: prisma } = await import('@/lib/prisma')
          const email = credentials.email.toLowerCase().trim()
          const user = await prisma.user.findUnique({ where: { email } })
          if (!user) return null
          const ok = await bcrypt.compare(credentials.password, user.passwordHash)
          if (!ok) return null
          return { id: user.id, email: user.email, name: user.name }
        } catch (err) {
          console.error('[next-auth authorize]', err)
          return null
        }
      },
    }),
  ],
  session: { strategy: 'jwt', maxAge: 60 * 60 * 24 * 7 },
  pages: { signIn: '/admin/login' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // `sub` gerekli: middleware içindeki getToken ve bazı istemciler bunu bekler
        token.sub = user.id
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        const id = (token.sub as string) || (token.id as string)
        if (id) session.user.id = id
        session.user.email = (token.email as string) ?? session.user.email ?? ''
        if (token.name !== undefined) session.user.name = token.name as string | null
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
