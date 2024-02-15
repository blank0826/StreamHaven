import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv1.19a86f698eee2389",
      clientSecret: "83bdbf83de7953ce0baa18c7a70478eb050b24b0",
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session?.user?.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
  secret: "default_secret_key",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
