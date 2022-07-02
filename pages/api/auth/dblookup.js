import Account from "../../../models/Account";
import Doctor from "../../../models/Doctor";
import Nurse from "../../../models/Nurse";
import Patient from "../../../models/Patient";
import connectMongo from "../../../utils/connectMongo";

export default async function dbLookUp(req, res) {
  await connectMongo();
  Account.findOne({ username: req.body.username },async function (err, docs) {
    if (err) {
      console.log(err);
      return null;
    }
    if (docs !== null){
      if (docs.password === req.body.password) {
        if (docs._doctor) {
          const doctor = await Doctor.findById(docs._doctor);
          return res.status(200).json({
            id: doctor._id,
            name: doctor.name,
            role: "doctor",
          });
        }
        if (docs._nurse) {
          const nurse =await Nurse.findById(docs._nurse);
          return res.status(200).json({
            id: nurse._id,
            name: nurse.name,
            role: "nurse",
          });
        }
        if (docs._patient) {
          const patient = await Patient.findById(docs._patient).exec();
          return res.status(200).json( {
            id: patient._id,
            name: patient.name,
            role: "patient"
          });
        }
      }
    }
    else{
      return null;
    }
      
  });
}
