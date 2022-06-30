import Patient from "../../../models/Patient";
import connectMongo from "../../../utils/connectMongo";

export default async function show(req, res) {
    const { slug } = req.query
    try {
    await connectMongo();
    if (slug.length === 1)
    {
       
    }
    else{
      if(slug[1] === "update"){
        await Patient.findByIdAndUpdate(slug[0], {$set: req.body});
        res.status(200).json("Patient Updated");
      }
      else if (slug[1] === "delete")
      {
        await Patient.findByIdAndRemove(slug[0]);
        res.status(200).json("Patient Deleted");
      }
      else{
        res.status(404).json("Not Found");
      }
    }
    } catch (error) {
      console.log("Something went wrong while updating or deleting");
    }
    
  }