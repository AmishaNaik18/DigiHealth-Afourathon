import React from 'react'
import Link from "next/link";
import { useState } from "react";
const NurseDetails = ({nurse}) => {
    const [patients, setPatients] = useState(nurse.patients);
    const RemoveItem = (e) => {
      //change in db
      console.log(e)
      setPatients(patients.filter((item) => item.id !== e));console.log(patients);
    };
  return (     <div>
                <div className="testimonial-1 py-4 md:py-12 mx-4  ">
                  <div className="container mx-auto px-4 overflow-y-auto h-50 border-2 border-solid hover:border-black">
                    <div className=" mb-4 ">
                      <div className="mt-6 md:mt-0">
                        <div className="testimonial p-6 flex  hover:bg-[#E5E4E2] transition-colors duration-300 ">
                          <div className="h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                            <img
                              src="//via.placeholder.com/100/eee"
                              alt="profile image"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h1 className="text-xl font-bold">{nurse.name}</h1>
                            <div className="text-gray-900 font-bold uppercase mt-6">
                              Age : {nurse.age}
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-600 m-1 p-1 font-semibold  border-b border-gray-200">
                          Current Patients
                        </div>
                        {patients&&patients.length&&patients.map((p) => {
                          return (
                            <div className="flex h-16 " key={p.id}>
                              <div className="w-1/2 text-left m-1 p-1 bg-[#E5E4E2] text-center leading-8 rounded-lg border border-gray-200">
                                {p.name}
                              </div>
                              <Link href={`/patient/${p.id}`}>
                                <button
                                  type="button"
                                  className=" hover:bg-white transition-colors duration-300 bg-[#E5E4E2] inline-flex m-1 p-1  items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-[#A9A9A9] text-sm font-semibold transition"
                                >
                                  View health records
                                </button>
                              </Link>
                              <button
                                name={p.id}
                                onClick={() => RemoveItem(p.id)}
                              >
                                <img src="/wrong.png" className="m-2 rounded-xl w-6 h-6"></img>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
  
}

export default NurseDetails