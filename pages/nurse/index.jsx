import mongoose from 'mongoose';
import React from 'react'
import { Nurses } from '../../components/Nurses'
import Nurse from '../../models/Nurse';
import connectMongo from '../../utils/connectMongo';
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
    await connectMongo();
    const nurses = await Nurse.find({});
      const listOfNurses = nurses.map(x => {
      return {
        id: x._id.toString(),
        name: x.name,
        age: x.age
      }
    });
    return {
      props: {
        nurses: listOfNurses
      }
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
