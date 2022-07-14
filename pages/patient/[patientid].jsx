import React, { useState } from 'react'

const index = () => {
    
    const medications = [
      {
        doctor: "Anushka",
        medname: "Paracetamol",
        date: "12-09-22",
        purpose: "Cold",
        status: "Active",
      },
      {
        doctor: "Anushka",
        medname: "Paracetamol2",
        date: "12-09-22",
        purpose: "Cold",
        status: "Active",
      },
      {
        doctor: "Anushka",
        medname: "Paracetamo3l",
        date: "12-09-22",
        purpose: "Cold",
        status: "Active",
      },

    ];
  const props = {
    pid:1,
    age:45,
    sex:"male",
    name:"Vivek Naik",
    last_updated:"12-09-1976",

    BP:77,
    height:180,
    weight:50,
    sugar:97,
    health_status:"He is fine now with low BP and high cholestrol",
    allergies:[
        "BAC","NB","SJj"
    ],
    medications,
    diseases:[
        "JIO",'Idea',"vodafone"
    ],
    surgeries:[
        {
            type:"Kidney Stone",
            doctor:"Ramdev baba",
            date:"12-09-2001"
        },
        {
            type:"Piles",
            doctor:"Virat Kohli",
            date:"10-19-2001"
        }
    ]

}
    const [surgeries,setSurgeries] = useState(props.surgeries)
    const [newSurgery,setnewSurgery] = useState({
        type:"",
        doctor:"",
        date:""
    })
    const [editMeasurements, seteditMeasurements] = useState(false)
    const [measurements, setmeasurements] = useState({
        weight:props.weight,
        height:props.height,
        BP:props.BP,
        sugar:props.sugar,
    })
    
    const [diseases,setDiseases] = useState(props.diseases)
    const [medicines, setMedicine] = useState(props.medications);
     const [medChange, setmedChange] = useState(false);
    const setMedicineActivity = (name) => {
      console.log(name)
      medicines.map((m) => {
        if (m.medname === name) {
          if(m.status==="Active")
          m.status = "Not Active";
          else m.status = "Active"
        }
      });
      console.log(medicines)
      setMedicine(medicines);
      setmedChange(!medChange);
    };
   
    const [allergies, setAllergy] = useState(props.allergies);
    const AddDiseases =()=>{
       
          //change in db
          if (value === "") return;
          setDiseases([...diseases, value]);
          setValue("");
        
    }
    const AddAllergy = () => {
      //change in db
      if (value === "") return;
      setAllergy([...diseases, value]);
      setValue("");
    };
    // const DelDiseases = ()=>{
    //     //change in db
    //     if(value==="")
    //     return;
    //     setDiseases((d) => d.filter((di)=>di!==value));
    //     setValue("");
    // }
    const Measurement=()=>{
        //chnage in db
       
        seteditMeasurements(false)
    }
    const Addsurgery=()=>{
        console.log(newSurgery)
        if(newSurgery.type===""||newSurgery.doctor===""||newSurgery.date==="")
         return 
         //change in db
        setSurgeries([...surgeries,newSurgery]);
        setnewSurgery({
          type: "",
          doctor: "",
          date: "",
        });
    }
    const [value,setValue] = useState("")
  return (
    <div className="py-10 px-16">
      <h1 className="text-xl text-black text-center font-bold my-4">
        {props.name}'s Health Information
      </h1>
      <hr></hr>
      <br></br>
      <div className="flex flex-row px-16">
        <div className="md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0 border-sm">
          <img
            src="/halfbodyvector.png"
            alt="profile image"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <text className="text-lg m-4 text-black text-left">
            Age:{props.age}
          </text>
          <br></br>
          <text className="text-lg m-4 text-black text-left">
            Sex: {props.sex}
          </text>
          <br></br>
          <text className="text-lg m-4 text-black text-left">
            last update: {props.last_updated}
          </text>
          <br></br>
        </div>
      </div>
      <div className="border-2 my-6 mx-16 border-slate-300 py-8 px-4 rounded-full text-center">
        <h1 className="text-lg font-semibold text-center">Health Status</h1>
        {props.health_status}
      </div>
      <div className="flex flex-row px-16 mt-7">
        <div className="w-1/2 border-2 border-slate-300 mx-2 py-4 px-8 overflow-y-auto h-44 ">
          <div className="flex flex-row">
            <h1 className="text-xl text-center w-full mb-6">Measurements</h1>
            {editMeasurements ? (
              <button className="justify-right" onClick={Measurement}>
                <img src="/rick.png" className="w-4 h-4" />
              </button>
            ) : (
              <button
                className="justify-right"
                onClick={() => seteditMeasurements(!editMeasurements)}
              >
                <img src="/pencil.png" className="w-4 h-4" />
              </button>
            )}
          </div>
          {editMeasurements ? (
            <div>
              <div className="flex flex-row text-center">
                <div class="text-gray-700 md:flex md:items-center">
                  <div class="m-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Weight</label>
                  </div>
                  <div class="md:w-2/3 md:flex-grow">
                    <input
                      class="w-full h-8 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      placeholder={measurements.weight}
                      id="forms-labelLeftInputCode"
                      onChange={(e) =>
                        setmeasurements({
                          ...measurements,
                          weight: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div class="text-gray-700 md:flex md:items-center">
                  <div class="m-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Height</label>
                  </div>
                  <div class="md:w-2/3 md:flex-grow">
                    <input
                      class="w-full h-8 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      placeholder={measurements.height}
                      id="forms-labelLeftInputCode"
                      onChange={(e) =>
                        setmeasurements({
                          ...measurements,
                          height: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row text-center">
                <div class="m-1 text-gray-700 md:flex md:items-center">
                  <div class="m-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">BP</label>
                  </div>
                  <div class="md:w-2/3 md:flex-grow">
                    <input
                      class="w-full h-8 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      placeholder={measurements.BP}
                      id="forms-labelLeftInputCode"
                      onChange={(e) =>
                        setmeasurements({ ...measurements, BP: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div class="m-1 text-gray-700 md:flex md:items-center">
                  <div class="m-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Sugar</label>
                  </div>
                  <div class="md:w-2/3 md:flex-grow">
                    <input
                      class="w-full h-8 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      placeholder={measurements.sugar}
                      id="forms-labelLeftInputCode"
                      onChange={(e) =>
                        setmeasurements({
                          ...measurements,
                          sugar: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-row text-center">
                <text className="m-2 p-2 w-1/2 text-center">
                  Weight: {measurements.weight}
                </text>

                <text className=" m-2 p-2 w-1-2/2 text-center">
                  Height: {measurements.height}
                </text>
              </div>
              <div className="flex flex-row text-center">
                <text className="m-2 p-2 w-1/2 text-center">
                  Blood Pressure: {measurements.BP}
                </text>

                <text className="m-2 p-2 w-1-2/2 text-center">
                  Sugar: {measurements.sugar}
                </text>
              </div>
            </div>
          )}
        </div>
        {medicines.length && (
          <div className="w-1/2 border-2 border-slate-300 mx-2 py-4 px-8 overflow-y-auto h-44 ">
            <h1 className="text-xl text-center w-full mb-6">
              Medicine History
            </h1>
            <div className="flex flex-col text-center">
              {medicines.map((e) => {
                return (
                  <div className="text-left  m-1 p-1 text-center leading-8 rounded-lg border border-gray-200">
                    <b className="font-semibold"> Name:</b> {e.medname}
                    <br />
                    <b className="font-semibold">Doctor: </b> {e.doctor}
                    <br />
                    <b className="font-semibold">Purpose:</b> {e.purpose} <br />
                    {medChange ? (
                      <>
                        (<b className="font-semibold">Status: </b>
                        {e.status}
                        <button
                          className="justify-right"
                          onClick={() => setMedicineActivity(e.medname)}
                        >
                          <img
                            src={`/${e.status}.png`}
                            className="w-6 h-6 rounded-xl"
                          />
                        </button>
                        )
                      </>
                    ) : (
                      <>
                        (<b className="font-semibold">Status: </b>
                        {e.status} )
                        <button
                          className="justify-right"
                          onClick={() => setMedicineActivity(e.medname)}
                        >
                          <img
                            src={`/${e.status}.png`}
                            className="w-6 h-6 rounded-xl"
                          />
                        </button>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-row px-16 mt-7">
        <div className="w-1/2 border-2 border-slate-300 mx-2 py-4 px-8 overflow-y-auto h-44 ">
          <h1 className="text-xl text-center w-full mb-6">Allergies</h1>
          <div className="flex flex-col text-center">
            {allergies.length &&
              allergies.map((e) => {
                return (
                  <div className="text-left m-1 p-1 text-center leading-8 rounded-lg border border-gray-200">
                    {e}
                  </div>
                );
              })}
            <div class="m-1 text-gray-700 md:flex md:items-center">
              <div class="m-1 md:mb-0 md:w-1/3">
                <button
                  onClick={AddAllergy}
                  className="border-2 rounded-lg bg-gray-200 p-1"
                >
                  Add new Allergy
                </button>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  class="w-full h-8 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  placeholder="New Allergy"
                  id="forms-labelLeftInputCode"
                  name="disease"
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 border-2 border-slate-300 mx-2 py-4 px-8 overflow-y-auto h-44 ">
          <h1 className="text-xl text-center w-full mb-6">Disease History</h1>
          <div className="flex flex-col text-center">
            {diseases.length &&
              diseases.map((e) => {
                return (
                  <div className="text-left m-1 p-1 text-center leading-8 rounded-lg border border-gray-200">
                    {e} {/* <button onclick={DelDiseases}></button> */}
                  </div>
                );
              })}
            <div class="m-1 text-gray-700 md:flex md:items-center">
              <div class="m-1 md:mb-0 md:w-1/3">
                <button
                  onClick={AddDiseases}
                  className="border-2 rounded-lg bg-gray-200 p-1"
                >
                  Add new Disease
                </button>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  class="w-full h-8 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  placeholder="New disease"
                  id="forms-labelLeftInputCode"
                  name="disease"
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row px-16 mt-7 justify-center">
        <div className=" w-1/2 border-2 border-slate-300 mx-2 py-4 px-8 overflow-y-auto h-44 ">
          <h1 className="text-xl text-center w-full ">Surguries</h1>
          <div className="flex flex-col text-center">
            {surgeries.length &&
              surgeries.map((e) => {
                return (
                  <div className="text-left  my-4 px-2 py-4 text-left m-1 p-1 text-center leading-8 rounded-lg border border-gray-200">
                    <text>Type: {e.type}</text>
                    <br></br>
                    <text>Surgeon: {e.doctor}</text>
                    <br></br>
                    <text className="mb-4">Date: {e.date}</text>
                  </div>
                );
              })}
            <hr/>
            <div class=" md:flex-grow">
              <input
                class="w-full m-1 h-8 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Type"
                id="forms-labelLeftInputCode"
                name="disease"
                onChange={(e) =>
                  setnewSurgery({ ...newSurgery, type: e.target.value })
                }
              />
              <input
                class="w-full m-1 h-8 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Surgeon"
                id="forms-labelLeftInputCode"
                name="disease"
                onChange={(e) =>
                  setnewSurgery({ ...newSurgery, doctor: e.target.value })
                }
              />
              <input
                class="w-full m-1 h-8 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Date"
                id="forms-labelLeftInputCode"
                name="disease"
                onChange={(e) =>
                  setnewSurgery({ ...newSurgery, date: e.target.value })
                }
              />
              <div class="m-1 justify-left">
                <button
                  onClick={Addsurgery}
                  className="border-2 rounded-lg bg-gray-200 p-1"
                >
                  {" "}
                  Add a new Surgery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;