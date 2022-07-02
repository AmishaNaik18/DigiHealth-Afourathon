import Account from "../../../models/Account";
import Patient from "../../../models/Patient";
import connectMongo from "../../../utils/connectMongo";

export default async function addPatient (req,res) {
    try {
        await connectMongo();
        const patient = new Patient(req.body.patient);
        patient.save(async (err)=>{
            const account = new Account({
                username: req.body.account.username,
                password: req.body.account.password,
                _patient: patient._id
            });
            await account.save();
            console.log(account);
        });     
        res.status(200).json("Patient Created");
    } catch (error) {
        console.log("Patient could not be added ", error);
    }
}