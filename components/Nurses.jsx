import React from 'react'
import NurseDetails from './NurseDetails';
export const Nurses = ({nursedetails}) => {
  return (nursedetails.map((n)=>{
              return <NurseDetails nurse={n}/>
            }))
  
}
