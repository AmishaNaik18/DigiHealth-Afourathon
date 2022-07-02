import { signIn } from "next-auth/react"
import { React, useState, Fragment } from "react"

const Login = () => {

  const [formData,setForm] = useState({
    username:'',
    password:''
  })
  const [error, setError] = useState(null);
  const {username,password} = formData

  const onSubmit = async (e) => {
    e.preventDefault()
    const res = await signIn('credentials',{
      username: username,
      password: password,
      callbackUrl: "/"
    });
    if (res?.error) {
      setError(res.error);
      console.log(res.error);
    } else {
      setError(null);
    }
    // Login action function
    
  }

  const onChange = (e) => { setForm({...formData, [e.name]:e.value })}

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="lg:flex flex-row">
          <img src="login/d3.jpg" className="h-screen" />
          <div className="flex flex-col items-center w-full py-10">
            <text className="text-3xl font-extrabold">Welcome Back</text>
            <text className="text-sm font-semibold">
              Lets get you logged in
            </text>
            <text>{error}</text>
            <div className="h-10 w-[70%] bg-[#DCDCDC] mt-8 rounded-sm flex flex-row">
              <img src="login/stethoscope.png" className="h-10" />
              <input
                type="username"
                className="h-10 w-full bg-[#DCDCDC] px-4"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => {
                  onChange(e.target);
                }}
              />
            </div>
            <div className="h-10 w-[70%] bg-[#DCDCDC] mt-6 rounded-sm flex flex-row ">
              <img src="login/key.jpg" className="h-10 w-10" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => {
                  onChange(e.target);
                }}
                className="h-10 w-full bg-[#DCDCDC] px-4"
              />
            </div>
            <button
              className="bg-[#D3D3D3] py-2 mt-10 w-[70%] rounded-sm "
              type="submit"
            >
              <text className="text-lg"> Login</text>
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
}

export default Login