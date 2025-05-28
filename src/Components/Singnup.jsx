import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import js from '@eslint/js';
import Cookies from "js-cookie"

const Signup = () => {
    const [authUser,setAuthUser]= useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



  const onSubmit = async(data) => {
    const UserInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
        confirmpassword:data.confirmpassword
    }
    // console.log(UserInfo);
    await axios.post(" https://socket-io-chat-app-liart.vercel.app/user/singnup",UserInfo,{
      withCredentials: true,
    })
    .then((response)=>{
      console.log(response.data);
 
        if (response.data) {
            
            toast.success("successfully registerd")
        }
        localStorage.setItem("chatapp",JSON.stringify(response.data))
        Cookies.set("jwt",response.data)
        setAuthUser(response.data)

    })
    .catch((error)=>{
      if (error.response) {
        toast.error("Error:"+error.response.data.error)
        
      }
        
    }
        
    )

    
    
  }

  const password = watch("password", "");

  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
      <form
        className="border border-white p-6 rounded-md w-80 space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl text-center">
          Chat <span className="text-green-400 font-semibold">App</span>
        </h1>
        <h3 className="text-lg font-bold text-center">Signup</h3>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          {...register("fullname", { required: "Full name is required" })}
          className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {errors.fullname && <span className="text-red-400 font-bold">{errors.fullname.message}</span>}

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
        {errors.password && <span className="text-red-400 font-bold">{errors.password.message}</span>}

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmpassword", {
            required: "Confirm password is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
          className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {errors.confirmpassword && (
          <span className="text-red-400 font-bold">{errors.confirmpassword.message}</span>
        )}

        {/* Submit + Link */}
        <div className="flex items-center justify-between">
          <p className="text-sm">
            Have an account?{' '}
            <Link className="text-blue-400 underline cursor-pointer" to="/Login">Login</Link>
          </p>
          <input
            type="submit"
            value="Signup"
            className="bg-green-500 px-4 py-2 rounded-md text-white cursor-pointer hover:bg-green-600"
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
