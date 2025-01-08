"use client";
import Image from "next/image";
import logo from "@/public/icons/Bitrest full.svg";
import Link from "next/link";
import * as yup from "yup";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthHook } from "@/app/_hooks/auth/auth.hook";
import { toastAlert, ToastType } from "@/app/_utils/notifications/toast";
import TextInput from "@/app/components/inputs/textInput";

const schema = yup.object({
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your password"),
});

export type FormValues = yup.InferType<typeof schema>;

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

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

    const response = await AuthHook.resetPassword({
      newPassword: data.newPassword,
      token: token!,
    });
    setIsLoading(false);

    if (response.success) {
      toastAlert({
        message: response.message,
        type: ToastType.success,
      });
      router.push("/signin");
    } else {
      toastAlert({
        message: response.message,
        type: ToastType.error,
      });
      reset();
    }
  };
  return (
    <div className="w-full bg-[#063D37] min-h-screen text-white relative flex flex-col justify-center items-center justify-items-center  overflow-hidden  font-carbonic">
      <Link href={"/"}>
        <Image src={logo} alt="logo" />
      </Link>
      <div className="h-full px-[40px] w-full items-start py-[80px] grid grid-cols-1 gap-[50px]">
        <div className="col-span-1  flex justify-center ">
          <div className="h-fit bg-[#10352F] w-[497px] rounded-[12px] border-[2px]  py-8 px-8 z-10  border-white/[11%]">
            <p className="text-[30px] text-left font-[500]">
              Create a New Password
            </p>
            <p className="text-[16px] text-white/60 text-left mt-[7px]">
              Enter your new password below
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-[32px]">
              <div className="w-full mb-[32px]">
                <TextInput
                  label="New Password"
                  placeholder="Enter your new password"
                  name="newPassword"
                  register={register}
                  required
                  error={errors.newPassword}
                />
              </div>

              <TextInput
                label="Confirm Password"
                placeholder="Re-enter your new password"
                name="confirmPassword"
                register={register}
                required
                error={errors.confirmPassword}
              />
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
                  "Proceed"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
