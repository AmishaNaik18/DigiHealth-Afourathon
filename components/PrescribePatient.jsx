import React from 'react'
import { useState } from "react";

const PrescribePatient = ({props}) => {
  const [prescribe, setPrescibe] = useState(false);
  const [medicine,setMedicine] = useState({
    name:"",
    doses:"",
    purpose:"",
    active:false
  })

  const medicineAdd=()=>{
   
     console.log(medicine);
     if (
       medicine.active === "" ||
       medicine.name === "" ||
       medicine.purpose === "" ||
       medicine.doses === ""
     )
       return;
     //add in db
     setMedicine({ name: "", doses: "", purpose: "", active: "" });
    setPrescibe(!prescribe);

  }
  return (
    <div class="">
      <div class="mb-3 my-3 xl:w-96">
        {prescribe && (
          <>
            <input
              className="my-2 form-select appearance-none block w-full px-3 py-1.5 text-base font-normal 
                            text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#A9A9A9] focus:outline-none"
              aria-label="Default select example"
              placeholder="Medicine name"
              onChange={(e) =>
                setMedicine({ ...medicine, name: e.target.value })
              }
            />
            <input
              className="my-2 form-select appearance-none block w-full px-3 py-1.5 text-base font-normal 
                            text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#A9A9A9] focus:outline-none"
              aria-label="Default select example"
              placeholder="Purpose"
              onChange={(e) =>
                setMedicine({ ...medicine, purpose: e.target.value })
              }
            />
            <input
              className="my-2 form-select appearance-none block w-full px-3 py-1.5 text-base font-normal 
                            text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#A9A9A9] focus:outline-none"
              aria-label="Default select example"
              placeholder="Doses"
              onChange={(e) =>
                setMedicine({ ...medicine, doses: e.target.value })
              }
            />
            <div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-500 checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
                  type="radio"
                  name="active"
                  id="flexRadioDisabled"
                  onChange={(e) => setMedicine({ ...medicine, active: true })}
                />
                <label
                  class="form-check-label inline-block text-gray-800 opacity-50"
                  for="flexRadioDisabled"
                >
                  Active
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-500 checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
                  type="radio"
                  name="active"
                  id="flexRadioCheckedDisabled"
                  onChange={(e) => setMedicine({ ...medicine, active: false })}
                />
                <label
                  class="form-check-label inline-block text-gray-800 opacity-50"
                  for="flexRadioCheckedDisabled"
                >
                  Not Active
                </label>
              </div>
            </div>
          </>
        )}
      </div>
      {prescribe ? (
        <button
          type="button"
          className="mx-4 h-8 hover:bg-white transition-colors duration-300 bg-[#CECECE] inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-[#A9A9A9] text-sm font-semibold transition"
          onClick={() => medicineAdd()}
        >
          Submit
        </button>
      ) : (
        <button
          type="button"
          className=" h-8 hover:bg-white transition-colors duration-300 bg-[#CECECE] inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-[#A9A9A9] text-sm font-semibold transition"
          onClick={() => setPrescibe(!prescribe)}
        >
          Prescribe medicine
        </button>
      )}
    </div>
  );
}

export default PrescribePatient