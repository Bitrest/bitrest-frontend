export interface SignUpRequestInterface {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface SignInRequestInterface {
  email: string;
  password: string;
}

export interface ForgotPasswordRequestInterface {
  email: string;
}

export interface ResetPasswordRequestInterface {
  newPassword: string;
  token: string;
}

export interface ResendOTPRequestInterface {
  email: string;
}

export interface VerifyOTPRequestInterface {
  email: string;
  otp: string;
}
