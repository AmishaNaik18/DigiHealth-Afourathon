import React from 'react'

const Login = () => {
  return (
    <div className="lg:flex flex-row">
      <img src="login/d3.jpg" className="h-screen" />
      <div className="flex flex-col items-center w-full py-10">
        <text className="text-3xl font-extrabold">Welcome Back</text>
        <text className="text-sm font-semibold">Lets get you logged in</text>
        <div className="h-10 w-[70%] bg-[#DCDCDC] mt-8 rounded-sm flex flex-row">
          <img src="login/stethoscope.png" className="h-10" />
          <input className="h-10 w-full bg-[#DCDCDC]" name="userid" />
        </div>
        <div className="h-10 w-[70%] bg-[#DCDCDC] mt-6 rounded-sm flex flex-row">
          <img src="login/key.jpg" className="h-10 w-10" />
          <input
            className="h-10 w-full bg-[#DCDCDC]"
            name="password"
            type="password"
          />
        </div>
        <button
          className="bg-[#D3D3D3] py-2 mt-10 w-[70%] rounded-sm"
          type="submit"
        >
          <text className='text-lg'> Login</text>
        </button>
      </div>
    </div>
  );
}

export default Login