/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { axiosClient } from "../axios";
import {
  SignUpRequestInterface,
  SignInRequestInterface,
  VerifyOTPRequestInterface,
  ResendOTPRequestInterface,
  ForgotPasswordRequestInterface,
  ResetPasswordRequestInterface,
} from "./auth.interface";
import { IApiResponse } from "../response.interface";

export class AuthHook {
  static signUp = async (
    body: SignUpRequestInterface
  ): Promise<IApiResponse<null>> => {
    try {
      const { data, status } = await axiosClient.post("/api/auth/signUp", body);

      return {
        data,
        success: status >= 200 && status < 300,
        status: status >= 200 && status < 300 ? "success" : "error",
        message:
          status >= 200 && status < 300
            ? "Sign up successful"
            : data?.message || "An error occurred while signing up",
      };
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : "An error occurred";

      return {
        data: null,
        success: false,
        status: "error",
        message: errorMessage,
      };
    }
  };

  static signIn = async (
    body: SignInRequestInterface
  ): Promise<IApiResponse<null>> => {
    try {
      const { data, status } = await axiosClient.post("/api/auth/signin", body);

      return {
        data,
        success: status >= 200 && status < 300,
        status: status >= 200 && status < 300 ? "success" : "error",
        message:
          status >= 200 && status < 300
            ? "Sign in successful"
            : data?.message || "An error occurred while signing in",
      };
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : "An error occurred";

      return {
        data: null,
        success: false,
        status: "error",
        message: errorMessage,
      };
    }
  };

  static verifyOTP = async (
    body: VerifyOTPRequestInterface
  ): Promise<IApiResponse<null>> => {
    try {
      const { data, status } = await axiosClient.post(
        "/api/auth/verify-otp",
        body
      );

      return {
        data,
        success: status >= 200 && status < 300,
        status: status >= 200 && status < 300 ? "success" : "error",
        message:
          status >= 200 && status < 300
            ? "Identity successfully verified"
            : data?.message || "An error occurred while verify otp",
      };
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : "An error occurred";

      return {
        data: null,
        success: false,
        status: "error",
        message: errorMessage,
      };
    }
  };

  static resendOTP = async (
    body: ResendOTPRequestInterface
  ): Promise<IApiResponse<null>> => {
    try {
      const { data, status } = await axiosClient.post(
        "/api/auth/resend-otp",
        body
      );

      return {
        data,
        success: status >= 200 && status < 300,
        status: status >= 200 && status < 300 ? "success" : "error",
        message:
          status >= 200 && status < 300
            ? "OTP Resent successful"
            : data?.message || "An error occurred while resending otp",
      };
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : "An error occurred";

      return {
        data: null,
        success: false,
        status: "error",
        message: errorMessage,
      };
    }
  };

  static forgotPassword = async (
    body: ForgotPasswordRequestInterface
  ): Promise<IApiResponse<null>> => {
    try {
      const { data, status } = await axiosClient.post(
        "/api/auth/forgot-password",
        body
      );

      return {
        data,
        success: status >= 200 && status < 300,
        status: status >= 200 && status < 300 ? "success" : "error",
        message:
          status >= 200 && status < 300
            ? "Reset Link Set Successfully"
            : data?.message || "An error occurred while sorting out password",
      };
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : "An error occurred";

      return {
        data: null,
        success: false,
        status: "error",
        message: errorMessage,
      };
    }
  };

  static resetPassword = async (
    body: ResetPasswordRequestInterface
  ): Promise<IApiResponse<null>> => {
    try {
      const { data, status } = await axiosClient.post(
        "/api/auth/reset-password",
        body
      );

      return {
        data,
        success: status >= 200 && status < 300,
        status: status >= 200 && status < 300 ? "success" : "error",
        message:
          status >= 200 && status < 300
            ? "Password successfully reset"
            : data?.message || "An error occurred while resetting password",
      };
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : "An error occurred";

      return {
        data: null,
        success: false,
        status: "error",
        message: errorMessage,
      };
    }
  };
}
