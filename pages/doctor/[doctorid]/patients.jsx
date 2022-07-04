import React from 'react'
import Link from 'next/link'
//This lists all the patients that were or are treated by the doctor
const patients = () => {

  const props = [
    {
      name: "Aushka Sharsha",
      id: 1,
      sex: "Male",
      health_status: "High BP, Low cholestrol................",
      age: 10,
    },
    {
      name: "Ans",
      id: 1,
      sex: "Male",
      health_status: "High BP, Low cholestrol................",
      age: 10,
    },
    {
      name: "Ans",
      id: 1,
      sex: "Male",
      health_status: "High BP, Low cholestrol................",
    },
    {
      name: "Ans",
      id: 1,
      sex: "Male",
      health_status: "High BP, Low cholestrol................",
      age: 10,
    },
  ];
  return (
    <div>
      <h1 className="font-bold uppercase my-6 text-black text-center text-xl ">
         Patients
      </h1>
      {props.map((p) => {
        return (
          <div className="justifiy-center testimonial-1 py-4 md:py-12">
            <div className="container mx-auto px-4">
              <div className="mb-4">
                <div className="mt-6">
                  <div className="testimonial p-6 border-2 border-solid flex hover:bg-[#E5E4E2]  hover:bg-[#E5E4E2]  transition-colors duration-300">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                      <img
                        src="/halfbodyvector.png"
                        alt="profile image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-bold uppercase mt-6">{p.name}</h2>
                      <p className="text-gray-600">{p.health_status}</p>
                      <div className="text-gray-900 mt-2">
                        Sex: {p.sex}, Age: {p.age}
                      </div>
                      <Link href={`/patient/${p.id}`}>
                        <button
                          type="button"
                          className=" hover:bg-white transition-colors duration-300 bg-[#E5E4E2] inline-flex mt-4 items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-[#A9A9A9] text-sm font-semibold transition"
                        >
                          View health records
                        </button>
                      </Link>
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
export default patients;