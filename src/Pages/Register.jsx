import { Button, Input, Select, SelectItem } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signUp } from "../Services/AuthServices";
import { Link, useNavigate } from "react-router-dom";
import { schema } from "../assets/Schemas/RegisterSchema";


export default function Register() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();
  let {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },
    resolver: zodResolver(schema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  async function sendData(userData) {
    setLoading(true);
    console.log(userData)
    const response = await signUp(userData);
    // console.log(response);
    setLoading(false);
    if(response.message == 'success'){
        navigate('/login');
    }
    else{
      setApiError(response.error)
    }
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl py-10 px-6 min-w-md">
        <h1 className="text-2xl text-center mb-4 font-medium">Register Now</h1>
        <form onSubmit={handleSubmit(sendData)} className="flex flex-col gap-4">
          <Input
            label="Name"
            type="text"
            {...register("name")}
            variant="bordered"
            isInvalid={Boolean(errors.name && touchedFields.name)}
            errorMessage={errors.name?.message}
          />
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
          <Input
            label="rePassword"
            type="password"
            {...register("rePassword")}
            variant="bordered"
            isInvalid={Boolean(errors.rePassword && touchedFields.rePassword)}
            errorMessage={errors.rePassword?.message}
          />
          <div className="flex gap-2">
            <Input
              label="DateOfBirth"
              type="date"
              {...register("dateOfBirth")}
              variant="bordered"
              isInvalid={Boolean(
                errors.dateOfBirth && touchedFields.dateOfBirth
              )}
              errorMessage={errors.dateOfBirth?.message}
            />
            <Select
              className="max-w-xs"
              label="Gender"
              placeholder="Select your gender"
              variant="bordered"
              {...register("gender")}
              isInvalid={Boolean(errors.gender && touchedFields.gender)}
              errorMessage={errors.gender?.message}
            >
              <SelectItem key={"male"} >Male</SelectItem>
              <SelectItem key={"female"} >female</SelectItem>
            </Select>
          </div>
          <Button className="bg-gray-300" isLoading={loading} disabled={loading} variant="shadow" type="submit">
            register
          </Button>
          {
            apiError && <span className="text-center text-red-600">{apiError}</span>
          }
        </form>
        <div className="p-2">Already have an account! <Link className="text-blue-500" to={'/login'}>log in</Link></div>
      </div>
      
    </>
  );
}
