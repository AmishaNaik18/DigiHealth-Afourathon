import React from 'react'
import DoctorsPatient from '../../../components/DoctorsPatient';
//These Are patients of this doctor admitted in hospital or currently treated by doctors
const patients = () => {
    //fetching doctos's patients from database and avilable nurses
  const patients = [
    {
      pid: 1,
      name: "Anusa Naik",
      admitted: "True",
      health_status:
        "Patient condition-It really saves me time and effortFWR Bootstrap Blocks is exactly what our business has een lacking. FWR Bootstrap Blocks was worth a fort to my company. FWR Bootstrap Blocks has really helpe",
      sex: "male",
      age: "12",
    },
    {
      pid: 1,
      name: "Anusa Naik",
      admitted: "True",
      health_status:
        "Patient condition-It really saves me time and effortFWR Bootstrap Blocks is exactly what our business has een lacking. FWR Bootstrap Blocks was worth a fort to my company. FWR Bootstrap Blocks has really helpe",
      sex: "male",
      age: "12",
    },
  ];
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
  const props = {
    patients,
    nurses,
    doctorId:1
  };
 
  return (
    <DoctorsPatient props = {props}/>
  );
}

export default patients