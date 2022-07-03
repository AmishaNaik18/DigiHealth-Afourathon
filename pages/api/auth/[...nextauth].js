import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import { HOST_URL } from "../../../utils/appData";
import connectMongo from "../../../utils/connectMongo"
export default NextAuth({
providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',

    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: {  label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const res = await fetch(`${HOST_URL}/api/auth/dblookup`, {
        method: 'POST', 
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      });
      const user = await res.json()
      return user;
      // If no error and we have user data, return it
      // Return null if user data could not be retrieved
    },
  })
],
pages:{
    signIn: '/login'
},
callbacks:{
    jwt: async ({token,user}) =>{
        if(user){
            token.id = user.id;
            token.role = user.role;
        }
        return token
    },
    session: ({token,session}) =>{
        if(token){
            session.id = token.id;
            session.role = token.role;
        }
        return session
    }
},
secret: "tester"
})