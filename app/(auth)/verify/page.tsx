"use client";
import Image from "next/image";
import logo from "@/public/icons/Bitrest full.svg";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useState,
  useRef,
  KeyboardEvent,
  ClipboardEvent,
  RefCallback,
} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthHook } from "@/app/_hooks/auth/auth.hook";
import { toastAlert, ToastType } from "@/app/_utils/notifications/toast";
import Loader from "@/app/components/loaders/loader";

const schema = yup.object({
  otp: yup.string().min(6).required("OTP must be at least 6 in length"),
});

type FormValues = yup.InferType<typeof schema>;

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResend, setShowResend] = useState<boolean>(false);
  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const {
    //register,
    handleSubmit,
    setValue,
    reset,
    formState: { isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  // Create a ref callback for each input
  const setRef: RefCallback<HTMLInputElement> = (
    element: HTMLInputElement | null
  ) => {
    if (element) {
      const index = parseInt(element.dataset.index || "0");
      inputRefs.current[index] = element;
    }
  };

  const handleChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Update the form value
    setValue("otp", newOtpValues.join(""), { shouldValidate: true });

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      // Move to previous input on backspace if current input is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    const pastedValues = pastedData.slice(0, 6).split("");

    const newOtpValues = [...otpValues];
    pastedValues.forEach((value, index) => {
      if (index < 6) {
        newOtpValues[index] = value;
      }
    });

    setOtpValues(newOtpValues);
    setValue("otp", newOtpValues.join(""), { shouldValidate: true });
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    const response = await AuthHook.verifyOTP({
      email: email || "",
      otp: data.otp,
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
      setOtpValues(Array(6).fill(""));
      reset();
    }
  };

  const handleResend = async () => {
    setShowResend(true);
    const response = await AuthHook.resendOTP({ email: email! });
    setShowResend(false);

    if (response.success) {
      toastAlert({
        message: response.message,
        type: ToastType.success,
      });
    } else {
      toastAlert({
        message: response.message,
        type: ToastType.error,
      });
    }
  };

  return (
    <div className="w-full bg-[#063D37] min-h-screen text-white relative flex flex-col justify-center items-center justify-items-center overflow-hidden font-carbonic">
      {showResend && <Loader />}

      <Link href={"/"}>
        <Image src={logo} alt="logo" />
      </Link>
      <div className="h-full px-[40px] w-full items-start py-[80px] grid grid-cols-1 gap-[50px]">
        <div className="col-span-1 flex justify-center">
          <div className="h-fit bg-[#10352F] w-[497px] rounded-[12px] border-[2px] py-8 px-8 z-10 border-white/[11%]">
            <p className="text-[30px] text-left font-[500]">
              Verify Your Identity
            </p>
            <p className="text-[16px] text-white/60 text-left mt-[7px]">
              We&apos;ve sent a verification code to {email}. Enter the code
              below to continue.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full mt-[40px] mb-[20px]"
            >
              <div className="flex justify-between space-x-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <input
                    key={index}
                    ref={setRef}
                    data-index={index}
                    type="text"
                    maxLength={1}
                    value={otpValues[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-[62px] h-[62px] bg-white/[8%] rounded-[8px] px-4 text-center text-lg text-white focus:outline-none focus:ring focus:ring-[#5BC6A3]"
                  />
                ))}
              </div>

              <div className="w-full mt-[40px] mb-[20px] space-y-4">
                <div className="flex w-full space-x-4 items-center">
                  <p className="text-[16px] text-white/60 text-center mt-[7px]">
                    Didn&apos;t receive the code?{" "}
                    <span
                      onClick={handleResend}
                      className="text-[#5BC6A3] cursor-pointer"
                    >
                      Resend Code
                    </span>
                  </p>
                </div>
              </div>
              <button
                type="submit"
                disabled={!isValid}
                className="bg-[#D4FAFE] disabled:bg-[#D4FAFE]/[80%] w-full flex items-center justify-center px-4 mt-8 border text-[#063D37] py-2"
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
