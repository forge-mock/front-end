import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { noAuthApi } from "@shared/api";

interface GitHubDto {
  userEmail: string;
  userName: string;
  accessToken: string;
}

const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === "google" && account?.id_token) {
        token.tokens = await noAuthApi.post("/provider/google", account.id_token);
      }

      if (account?.provider === "github" && account?.access_token && token?.name && token?.email) {
        const gitHubDto: GitHubDto = {
          userEmail: token.email ?? "",
          userName: token.name ?? "",
          accessToken: account.access_token,
        };

        token.tokens = await noAuthApi.post("/provider/github", gitHubDto);
      }

      return token;
    },

    async redirect({ baseUrl }) {
      const redirectUrl = new URL(baseUrl + "/oauth-handle");
      return redirectUrl.toString();
    },
  },
};

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };
