import { AuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import apiAuthProvider from "utils/api";

const options: AuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = await apiAuthProvider(credentials);
        if (user.error) {
          throw new Error(user.error);
        } else {
          return user;
        }
      },
    }),
  ],
  session: {
    // jwt: true,
  },
  jwt: {
    secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  },
  callbacks: {
    // async session({ session, token, user }) {
    //   console.log("session:::" +session); // profile:::undefined
    //   console.log("token:::" + token); // isNewUser:::false
    //   console.log("user:::" + user); // isNewUser:::false
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    async jwt({ token }) {
      // if (account?.expires_in && token.expires_at - Date.now() < 60000) {
      if (1 > 0) {
        // try {
        //     const response = await fetch("http://localhost:8080/api/auth/refresh", {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify({
        //         username:"lee21137",
        //         email: "lee21137@mangot5.com",
        //         password: "lee21137",
        //       }),            //body: JSON.stringify({ refreshToken: token.refreshToken }),
        //     });
        //     console.log("response.json()::");
        //     console.log(response.json());
        // //     const { accessToken, refreshToken, expiresAt } = await response.json();
        // //     token.accessToken = accessToken;
        // //     token.refreshToken = refreshToken;
        // //     token.expires_at = expiresAt;
        //   } catch (error) {
        //     console.log(error);
        //   }
        // }
        // if (user) {
        //   token.user = user;
      }
      return token;
    },
    //https://www.epochconverter.com/
    async session({ session, token }) {
      // token.exp ... > 크면 업데이트..
      console.log(session);
      console.log(token);

      //session.expires = '2024-01-18T09:36:35.354Z';
      //console.log(session.expires);
      // session.user = token..token.
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
