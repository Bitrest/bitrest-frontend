/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import logo from "@/public/images/plain logo.svg";
import Link from "next/link";
import estate from "@/public/images/estate bit sv.svg";
import google from "@/public/icons/google.svg";
import apple from "@/public/icons/apple.svg";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthHook } from "@/app/_hooks/auth/auth.hook";
import { toastAlert, ToastType } from "@/app/_utils/notifications/toast";
import TextInput from "@/app/components/inputs/textInput";

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("Password is required"),
  privacy: yup.boolean().required().default(false),
});

export type FormValues = yup.InferType<typeof schema>;

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // Form submission logic
    setIsLoading(true);

    const { privacy, ...request } = data;
    const response = await AuthHook.signUp(request);
    setIsLoading(false);

    if (response.success) {
      toastAlert({
        message: response.message,
        type: ToastType.success,
      });
      router.push(`/verify/${data.email}`);
    } else {
      toastAlert({
        message: response.message,
        type: ToastType.error,
      });
      reset();
    }
  };

  return (
    <div className="w-full bg-[#063D37] text-white relative items-center justify-items-center min-h-screen overflow-hidden font-carbonic">
      <Image
        className="absolute bottom-0 left-0 z-10"
        src={estate}
        alt="hero"
      />

      <div className="h-full px-[40px] w-full items-start py-[80px] grid grid-cols-1 gap-[50px] space-y-8 lg:space-y-0 lg:grid-cols-2">
        <div className="col-span-1">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
          <p className="text-[40px] xl:text-[50px] mt-[32px] mb-[16px]">
            Explore Real Estate <br /> investment with Ease
          </p>
          <p
            className={`font-manrope xl:text-[24px] text-[16px] text-white/60`}
          >
            Create your account and explore global real estate investments with
            Bitcoin
          </p>
        </div>
        <div className="col-span-1  flex justify-center ">
          <div className="h-fit bg-[#10352F] w-[578px]  py-8 px-8 z-10 border border-[#5BC6A3]">
            <p className="text-[30px] text-center">Create Account</p>
            <p className="text-[16px] text-white/60 text-center mt-[7px]">
              Already have an account?{" "}
              <Link href={"/signin"} className="text-[#5BC6A3]">
                Log in
              </Link>{" "}
            </p>

            {/* Auth Buttons */}
            <div className="w-full flex gap-[20px]">
              <button className="border-[#D4FAFE1A] flex justify-center items-center gap-[10px] rounded-[10px] text-[#D4FAFE] bg-white/[8%] w-full px-4 mt-8 border  py-2">
                Sign Up With Google
                <Image src={google} alt="google icon" />
              </button>
              <button className="border-[#D4FAFE1A] flex gap-[10px] justify-center items-center rounded-[10px] text-[#D4FAFE] bg-white/[8%] w-full px-4 mt-8 border  py-2">
                Sign Up With Apple
                <Image src={apple} alt="apple icon" />
              </button>
            </div>

            <div className="flex w-full my-[32px] items-center">
              <hr className="flex-grow h-[1px] bg-white/[22%]" />
              <p className="px-4 text-white/[22%]">or</p>
              <hr className="flex-grow h-[1px] bg-white/[22%]" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-[32px]">
              <div className="flex w-full space-x-2">
                <TextInput
                  label="First Name"
                  placeholder="Enter your first name"
                  name="firstName"
                  register={register}
                  required
                  error={errors.firstName}
                />
                <TextInput
                  label="Last Name"
                  placeholder="Enter your last name"
                  name="lastName"
                  register={register}
                  required
                  error={errors.lastName}
                />
              </div>
              <TextInput
                label="Email"
                placeholder="Enter your email address"
                name="email"
                register={register}
                required
                error={errors.email}
              />
              <TextInput
                label="Password"
                placeholder="Enter your password"
                name="password"
                register={register}
                required
                error={errors.password}
              />
              <div className="w-full mt-[40px] mb-[20px] space-y-4">
                <div className="flex w-full space-x-4 items-center">
                  <input
                    type="checkbox"
                    className="accent-[#5BC6A3]"
                    {...register("privacy")}
                  />
                  <p
                    className={`text-[14px] sm:text-[16px] font-manrope text-white/80 `}
                  >
                    By creating an account, I agree to our{" "}
                    <span className="underline">Terms</span> of use and{" "}
                    <span className="underline">Privacy </span>
                    Policy{" "}
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#D4FAFE] w-full flex items-center justify-center px-4 mt-8 border  text-[#063D37] py-2"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 right-0 z-[-1] h-[714px] w-[714px] bg-gradient-to-[131.19deg] from-[#5BC6A3] to-black opacity-50"></div>
    </div>
  );
}
