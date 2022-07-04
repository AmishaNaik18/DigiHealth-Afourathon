import React from 'react'
import { Nurses } from '../../components/Nurses'

const index = () => {
    const props = [
      {
        name: "Nin Naik",
        age: "30",
        patients: [
          {
            name: "Virat kohli",
            id: 1,
          },
          {
            name: "Virat kohli",
            id: 2,
          },
          {
            name: "Virat kohli",
            id: 42,
          },
        ],
      },
      {
        name: "Nin Naik",
        age: "30",
        patients: [
          {
            name: "Virat kohli",
            id: 19,
          },
          {
            name: "Virat kohli",
            id: 121,
          },
          {
            name: "Virat kohli",
            id: 122,
          },
        ],
      },
    ];
  return (
    <div>
      <h1 className="text-2xl font-bold text-center m-2">Nurses</h1>
      <Nurses nursedetails={props} />
    </div>
  );
}

export default index