import React from 'react';
import Login from '../components/Login';
import dynamic from 'next/dynamic';
const login = dynamic(() => import('../components/Login'), { ssr: false });
// const login = props => {
//   return (
//     <Login/>
//   )
// }

export default login;
