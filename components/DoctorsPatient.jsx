import React from 'react';
import PrescribePatient from './PrescribePatient';

const DoctorsPatient = ({props}) => {
  return (
    <div>
    
      <h1 className="font-bold uppercase my-6 text-black text-center text-xl ">
        My Patients
      </h1>
      {props.patients.map((p) => {
        return (
          <div>
            <div className="justifiy-center testimonial-1 py-4 md:py-12">
              <div className="container mx-auto px-4">
                <div className="mb-4">
                  <div className="mt-6">
                    <div className="testimonial p-6 border-2 border-solid flex hover:bg-[#E5E4E2]  hover:bg-[#E5E4E2]  transition-colors duration-300">
                      <div className="w-16 h-16  md:w-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                        <img
                          src="/halfbodyvector.png"
                          alt="profile image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h1 className="font-bold uppercase" >{p.name}</h1>
                        <p className="text-gray-600">{p.health_status}</p>
                        <div className="text-gray-900  uppercase mt-6">
                          - Doctor Jesse D.
                        </div>
                        <div className="flex flex-col justify-right">
                          {p.admitted && (
                            <div class="flex my-2">
                              <div class="mb-3 xl:w-96">
                                <select
                                  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal 
                            text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#A9A9A9] focus:outline-none"
                                  aria-label="Default select example"
                                >
                                  <option selected>Select the nurse</option>
                                  {props.nurses.map((e) => {
                                    return (
                                      <option value={`${e.id}`}>
                                        {e.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                              <button
                                type="button"
                                className=" mx-4 h-8 hover:bg-white transition-colors duration-300 bg-[#CECECE] inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-[#A9A9A9] text-sm font-semibold transition"
                              >
                                Assign Nurse
                              </button>
                            </div>
                          )}
                          <PrescribePatient patient={p} doctorId={props.doctorId} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DoctorsPatient