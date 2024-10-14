// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";

// const handler = NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//         name: "Credentials",
//         credentials: {
//           email: { label: "Email", type: "text" },
//           password: { label: "Password", type: "password" },
//         },
//         async authorize(credentials, req) {
//             const user = { id: "1", name: "User", email: credentials.email };
//               // const user ={id: "1",name:req.name,email:req.email}
//             if (user) {
//                 console.log(user);
                
//               return user;
//             } else {
//               return null;
//             }
//           },
//         // authorize(credentials) {
//         //   // Here you can implement your own authentication logic
//         //   const user = { id: 1, name: "User", email: credentials.email }; // Example user
//         //   return user ? Promise.resolve(user) : Promise.resolve(null);
//         // },
//       }),
//   ],
// });

// export { handler as GET, handler as POST };






import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// NextAuth configuration
const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("Credentials:", credentials); // Log received credentials

        // Here, implement your own authentication logic
        const user = { id: "1", name: "User", email: credentials.email }; // Replace with real authentication

        if (user) {
          console.log("Authenticated User:", user); // Log authenticated user
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT strategy for session handling
  },callbacks: {
    async jwt({ token, user }) {
        if (user) {
            token.id = user.id; // Include user ID in token
        }
        console.log("JWT Token:", token); // Log the token
        return token;
    },
    async session({ session, token }) {
        if (token) {
            session.user.id = token.id; // Include user ID in session
        }
        console.log("Session:", session); // Log the session
        return session;
    },
},

  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id; // Include user ID in token
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     if (token) {
  //       session.user.id = token.id; // Include user ID in session
  //     }
  //     return session;
  //   },
  // },
  pages: {
    signIn: '/Login', // Custom sign-in page
  },
});

export { handler as GET, handler as POST };
