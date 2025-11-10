import { Button, Input, Select, SelectItem } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "../Services/AuthServices";
import { Link, useNavigate } from "react-router-dom";
import { schema } from "../assets/Schemas/LoginSchema";
import { authContext } from "../assets/Context/AuthContext";


export default function Login() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();
  let { setIsLoggedIn}=useContext(authContext)
  let {handleSubmit , register , formState:{errors , touchedFields}} = useForm({
  defaultValues:{
    email : "",
    password : ""
  },
  resolver : zodResolver(schema),
  mode:'onBlur',
  reValidateMode : 'onBlur',
  })


async function sendData(userData){
  setLoading(true);
  const response = await signIn(userData);
  setLoading(false);
  if(response.message == 'success'){
    localStorage.setItem('token' , response.token)
    setIsLoggedIn(response.token)
    navigate('/');
    }
    else{
      setApiError(response.error);
    }
  }

    return <>
    <div className="bg-white rounded-2xl shadow-2xl py-10 px-6 min-w-md">
    <h1 className="text-2xl text-center mb-4 font-medium">Login</h1>
    <form onSubmit={handleSubmit(sendData)} className="flex flex-col gap-4">
      <Input
          label="Email"
          type="email"
          {...register("email")}
          variant="bordered"
          isInvalid={Boolean(errors.email && touchedFields.email)}
          errorMessage={errors.email?.message}
        />
        <Input
          label="Password"
          type="password"
          {...register("password")}
          variant="bordered"
          isInvalid={Boolean(errors.password && touchedFields.password)}
          errorMessage={errors.password?.message}
        />
        <Button className="bg-gray-300" isLoading={loading} isDisabled={loading} variant="shadow" type='submit' > Login</Button>
        {apiError && <span className="text-center text-red-500">{apiError}</span>}
        <div className="p-2"> Don't have an account! <Link to="/register"><span className=" text-blue-600">Register</span></Link></div>
    </form>
    </div>
    </>

  }

