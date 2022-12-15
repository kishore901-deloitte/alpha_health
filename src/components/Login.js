import { Card } from "antd";
import React, {useState, useContext} from "react";
import { toast } from 'react-toastify';
import UserContext from "./contexts/UserContext";
import { LoginAPI } from "../routes/routes.js";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setIsLoggedIn, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password.length < 6){
            toast.error('Password is too short!');
            return
        }
        const response = await LoginAPI('http://localhost:3000/login', email, password)
        if(response.status === 200){
          setIsLoggedIn(true)
          setUser(response.data.user)
          // Clear
          setEmail('')
          setPassword('')
          toast.success('Login Success');

          // redirect after login
          navigate('/dashboard')
        }else{
          setIsLoggedIn(false)
          setUser({})
          toast.error(response.data);
        }
    }
  return (
    <div className="flex h-screen bg-gradient-to-b from-red-50 to-red-200 lg:bg-none">
      <div className="h-screen hidden lg:block w-2/5">
        <img
          className="h-full w-full"
          src="/images/login-pic.jpg"
          alt="Doctor"
        />
      </div>
      <div className="flex items-center justify-center w-full lg:w-3/5">
        <Card style={{ width: 400 }} className="border-2">
          <div>
            <h2 className="text-center text-2xl font-semibold">Welcome to Alpha Health</h2>
            <h4 className="text-center text-xl mt-10">Login</h4>
            <div className="flex flex-col justify-center items-center mt-10">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-10 p-6 outline-none border border-slate-300 rounded-md text-xl" placeholder="Email" type="email" name="email" required />
                </div>
                <div className="mb-6">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full h-10 p-6 outline-none border border-slate-300 rounded-md text-xl" placeholder="Password" type="password" name="pass" required />
                </div>
                <div className="flex justify-center">
                    <button className="outline-none bg-red-400 text-white rounded-lg px-10 py-2 text-black hover:bg-red-500" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
