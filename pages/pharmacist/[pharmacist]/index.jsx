import React from "react";
// import { MongoClient, ObjectId } from "mongodb";
// import { parseIsolatedEntityName } from "typescript";
import Link from "next/link"
const pharmacistid = () => {
  const pharmacistTestData = [
    {
      name: "ABC",
      id: 12,
    },
    {
      name: "ABC",
      id: 12,
    },
    {
      name: "ABC",
      id: 12,
    },
  ];
  
  const MedicinesData = [
    {
      name: "Abc",
      id: 1333,
    },
  ];
  const doctorData = [
    {
      name: 'Asd',
      doctorid: 223,
    }
  ]
  const pharmacistData = {
        name:"Anushka",
        pharmacistid:1
    }
  const props = {
    pharmacistData,
    MedicinesData,
    pharmacistTestData,
    doctorData,
  }
  return (
    <div className="relative bg-white overflow-hidden max-h-screen">
      <aside className="fixed inset-y-0 left-0 bg-[#E5E4E2] shadow-md max-h-screen w-60">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow">
            <div className="px-4 py-6 text-center border-b">
              <h1 className="text-xl font-bold leading-none">
                <span className="text-[#736F6E]">Pharmacist's counter</span>
              </h1>
            </div>
            <div className="p-4">
              <ul className="space-y-1">
                <li>
                  <Link href={`/pharmacist/${props.pharmacistData.pharmacistid}/patients`}>
                    <a
                      href="javascript:void(0)"
                      className="flex items-center bg-white hover:bg-[#A9A9A9] rounded-xl font-bold text-sm text-[#736F6E] py-3 px-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-lg mr-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                      </svg>
                      Patients
                    </a>
                  </Link>
                </li>
                
                <li>
                  <a
                    href="javascript:void(0)"
                    className="flex bg-white hover:bg-[#A9A9A9] rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="text-lg mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                    Tags
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <button
              type="button"
              className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className=""
                viewBox="0 0 16 16"
              >
                <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </button>{" "}
            <span className="font-bold text-sm ml-2">Logout</span>
          </div>
        </div>
      </aside>

      <main className="ml-60 pt-16 max-h-screen overflow-auto">
        <div className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 mb-5">
              <h1 className="text-3xl font-bold mb-10">Description</h1>
              <div className="flex items-center justify-between">
                <div className="flex items-stretch">
                  <div className="text-gray-400 text-xs">
                    Nurses
                    <br />
                    connected
                  </div>
                  <div className="h-100 border-l mx-4"></div>
                  <div className="flex flex-nowrap -space-x-3">
                    <div className="h-9 w-9">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://ui-avatars.com/api/?background=random"
                      />
                    </div>
                    <div className="h-9 w-9">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://ui-avatars.com/api/?background=random"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="bi bi-chat-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                  >
                    Open
                  </button>
                </div>
              </div>

              <hr className="my-10" />

              <div className="grid grid-cols-2 gap-x-20">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Stats</h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <div className="p-4 bg-[#E5E4E2] rounded-xl">
                        <div className="font-bold text-xl text-gray-800 leading-none">
                          Good day, <br />
                          {props.pharmacistData.name}
                        </div>
                        <div className="mt-5">
                          <button
                            type="button"
                            className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition"
                          >
                            <Link
                              href={`/pharmacist/${props.pharmacistData.pharmacistid}/patients`}
                            >
                              Assign nurses
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    
                    
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Your tasks today</h2>

                  <div className="space-y-4">
                    <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                      <div className="flex justify-between">
                        <div className="text-gray-400 text-xs">Number 10</div>
                        <div className="text-gray-400 text-xs">4h</div>
                      </div>
                      <Link
                        href={`/doctor/${props.doctorData.doctorid}/admittedpatients`}
                      >
                        <a
                          
                          className="font-bold hover:text-yellow-800 hover:underline"
                        >
                          Prescribed Medicines
                        </a>
                      </Link>

                      
                    </div>
                    <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                      
                      
                      <a
                        href="javascript:void(0)"
                        className="font-bold hover:text-yellow-800 hover:underline"
                      >
                        New patient review
                      </a>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default pharmacistid;
