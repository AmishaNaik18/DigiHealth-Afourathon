import React from 'react'
import DoctorsPatient from '../../../components/DoctorsPatient';
import Admission from '../../../models/Admission';
import Patient from '../../../models/Patient';
import connectMongo from '../../../utils/connectMongo';
//These Are patients of this doctor admitted in hospital or currently treated by doctors
const patients = (props) => {
    //fetching doctos's patients from database and avilable nurses
  // const patients = [
  //   {
  //     pid: 1,
  //     name: "Anusa Naik",
  //     admitted: "True",
  //     health_status:
  //       "Patient condition-It really saves me time and effortFWR Bootstrap Blocks is exactly what our business has een lacking. FWR Bootstrap Blocks was worth a fort to my company. FWR Bootstrap Blocks has really helpe",
  //     sex: "male",
  //     age: "12",
  //   },
  //   {
  //     pid: 1,
  //     name: "Anusa Naik",
  //     admitted: "True",
  //     health_status:
  //       "Patient condition-It really saves me time and effortFWR Bootstrap Blocks is exactly what our business has een lacking. FWR Bootstrap Blocks was worth a fort to my company. FWR Bootstrap Blocks has really helpe",
  //     sex: "male",
  //     age: "12",
  //   },
  // ];
  const nurses = [
    {
      name: "AMAB",
      id: 12,
    },
    {
      name: "AMAB",
      id: 12,
    },
    {
      name: "AMAB",
      id: 12,
    },
  ];
  const patients = props.patients;
  const xprops = {
    patients : patients,
    nurses,
    doctorId:1
  };
  return (
    <DoctorsPatient props = {xprops}/>
  );
}
export async function getServerSideProps(context){
  const doctorId = context.params.doctorid;
  console.log("doctor id ",doctorId);
  var admittedPatients = [];
  try {
    await connectMongo();
  const admissions = await Admission.find({doctor: doctorId, admitted: true});
  for(const admission of admissions){
     const temp = await Patient.findById(admission.patient);
     console.log(temp)
     admittedPatients.push({
      pid: temp._id.toString(),
      name: temp.name,
      admitted: admission.admitted,
      health_status: admission.health_status,
      sex: temp.sex,
      age: 12 // TODO: change
     })
  };
  console.log( admittedPatients);
  return{
    props:{
      patients: admittedPatients,
      doctorId: doctorId
    }
  }
  } catch (error) {
    console.log("Could not find admitted patients", error);
    return {
      props:{}
    }
  }
  
}
export default patients