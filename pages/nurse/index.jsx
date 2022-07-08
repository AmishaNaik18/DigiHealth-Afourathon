import mongoose from 'mongoose';
import React from 'react'
import { Nurses } from '../../components/Nurses'
import Nurse from '../../models/Nurse';
//import AdmittedPatient from '../../models/AdmittedPatient';

const index = (props) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center m-2">Nurses</h1>
      <Nurses nursedetails={props.nurses} />
    </div>
  );
}

export async function getServerSideProps(){
  try{
    const conn=await mongoose.connect('mongodb+srv://rounaknaik8:cXugJcThgSClattb@cluster0.4djaxks.mongodb.net/afourtest?retryWrites=true&w=majority')
    const list_of_nurses=await Nurse.find();

    //Getting Admitted Patients of Nurses
    // var nurses_list=[]
    // for (const doc of list_of_nurses)
    // {
    //   const nurse_detail = doc.toObject()
    //   const nursepatients=await AdmittedPatient.find({
    //     nurse: nurse_detail._id,
    //   })
    //   const nurse_patients=await nursepatients.map((nurse_doc) => {
    //     const nurse_patient=nurse_doc.toObject()
    //     nurse_patient._id=nurse_patient._id.toString();
    //     nurse_patient.pid=nurse_patient.pid.toString();
    //     return nurse_patient;
    //   })
    //   nurse_detail.patients=nurse_patients;
    //   nurse_detail._id=nurse_detail._id.toString()
    //   console.log(nurse_detail)
    //   nurses_list.push(nurse_detail)
    // }

    const nurses_list = list_of_nurses.map((doc) => {
      const nurse_detail = doc.toObject()
      nurse_detail._id=nurse_detail.toString()
      return nurse_detail
    })
    // console.log(typeof(nurses_list))
    return {
      props: {
        nurses: nurses_list,
      },
    }  
  }
  catch(error)
  {
    console.log(error);
    return {
      props: {}
    }
  }
  
}

export default index