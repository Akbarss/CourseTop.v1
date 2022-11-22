import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../../prisma/prisma';
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { phone, password } = credentials as {
          phone: string;
          password: string;
        };

        //perform login logic
        // find out user from db
        const user = await prisma.user.findUnique({
          where: { phone: phone },
        });
        if (user) {
          const isPswValid = await bcrypt.compare(password, user?.password);

          if (!isPswValid) {
            throw new Error('Invalid credentials');
          }

          return {
            id: user.id,
            name: user.name,
            second_name: user.second_name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            country: user.country,
            state: user.state,
            city: user.city,
            created_at: user.created_at,
            updated_at: user.updated_at,
            last_visit: user.last_visit,
          };
        } else {
          throw new Error('Invalid credentials');
        }
      },
    }),
  ],
  pages: {
    signIn: '/admin/auth/signin',
  },
  callbacks: {
    jwt(params) {
      //update token

      if (params.user?.role) {
        params.token.role = params.user.role;
        params.token.user = params.user;
      }
      return params.token;
    },
    session(params) {
      params.session.user = params.token.user || {};
      return params.session;
    },
  },
};

export default NextAuth(authOptions);
