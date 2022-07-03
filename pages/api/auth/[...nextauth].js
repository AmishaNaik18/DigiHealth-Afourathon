import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import Account from "../../../models/Account";
import Doctor from "../../../models/Doctor";
import Nurse from "../../../models/Nurse";
import Patient from "../../../models/Patient";
import connectMongo from "../../../utils/connectMongo";


const dbLookUp =async (req) => {
  await connectMongo();
  const account = await Account.findOne({ username: req.username });
    if (account !== null){
      if (account.password === req.password) {
        if (account._doctor) {
          const doctor = await Doctor.findById(account._doctor);
          return{
            id: doctor._id,
            name: doctor.name,
            role: "doctor",
          };
        }
        if (account._nurse) {
          const nurse =await Nurse.findById(account._nurse);
          return {
            id: nurse._id,
            name: nurse.name,
            role: "nurse",
          };
        }
        if (account._patient) {
          const patient = await Patient.findById(account._patient).exec();
          return  {
            id: patient._id,
            name: patient.name,
            role: "patient"
          };
        }
      }
    }
    else{
      return null;
    }  
  }

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

      const user = await dbLookUp(credentials);
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