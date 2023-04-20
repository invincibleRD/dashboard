import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const options = {
  providers: [
    GithubProvider({
      clientId: process.env.ID,
      clientSecret: process.env.SECRET,
    }),
  ],
};

export default NextAuth(options);
