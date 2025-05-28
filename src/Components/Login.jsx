import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthProvider';
import { Link, Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const [authUser,setAuthUser]=useAuth()
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const UserInfo={
      
        email:data.email,
        password:data.password,
      
    }
    // console.log(UserInfo);
    axios.post(" https://socket-io-chat-app-liart.vercel.app/login", UserInfo, {
      withCredentials: true,// ✅ اس لائن کو add کریں
    })
    .then((response)=>{
        console.log(response.data);
        if (response.data) {
            
            toast.success("successfully login")
        }
        localStorage.setItem("chatapp",JSON.stringify(response.data))
        setAuthUser(response.data)
      
    })
    .catch((error)=>{
      if (error.response) {
        toast.error("Error:"+error.response.data.error)
        
      }
        
    }
        
    )

    
    
  }



  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
      <form
        className="border border-white p-6 rounded-md w-80 space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl text-center">
          Chat <span className="text-green-400 font-semibold">App</span>
        </h1>
        <h3 className="text-lg font-bold text-center">Login</h3>

    

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {errors.email && <span className="text-red-400 font-bold">{errors.email.message}</span>}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {errors.password && <span className="text-red-400 font-bold">This field is required</span>}

        {/* Confirm Password */}

        {/* Submit + Link */}
        <div className="flex items-center justify-between">
          <p className="text-sm">
            New user ?{' '}
            <Link className="text-blue-400 underline cursor-pointer"  to="/singnup">Singnup</Link>
          </p>
          <input
            type="submit"
            value="login"
            className="bg-green-500 px-4 py-2 rounded-md text-white cursor-pointer hover:bg-green-600"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
