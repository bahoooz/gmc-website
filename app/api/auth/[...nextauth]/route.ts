// // @ts-nocheck

// import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'
// import { connectMongoDB } from '@/lib/mongodb'
// import User from "@/models/user"

// type CredentialsType = {
//   username: string
//   password: string
// }

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       name: 'Credentials',
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: {  label: "Password", type: "password" }
//       },
//       authorize: async (credentials: CredentialsType) => {
//         const { username, password } = credentials

//         // Ajoutez ici votre logique pour trouver l'utilisateur et vérifier les informations d'identification
//         const user: | null = await findUser(username, password) // Remplacez ceci par votre fonction pour trouver l'utilisateur

//         if (user) {
//           return Promise.resolve(user)
//         } else {
//           return Promise.resolve(null)
//         }
//       }
//     })
//   ],
//   database: process.env.MONGODB_URI,
//   session: {
//     jwt: true,
//   },
//   callbacks: {
//     async jwt(token: any, user: any) {
//       if (user) {
//         token.id = user.id
//       }
//       return token
//     },
//     async session(session : any, token: {id: number}) {
//       session.user.id = token.id
//       return session
//     },
//   },
// })
