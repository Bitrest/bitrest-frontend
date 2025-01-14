/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";

export default function PaymentModal(props: { onClose: () => void }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-80">
      <div className="relative w-full max-w-lg p-4">
        <div className="w-full py-[40px] px-[20px] bg-[#141515] border-[1px] border-[#191C1C] rounded-[20px]">
          <p className="text-[#33D780] font-carbonic font-[600]">
            Proceed to pay
          </p>
          <p className="text-[14px] text-white/60">
            Choose your preferred method to complete your investment.
          </p>
          <button
            type="submit"
            className="bg-[#D4FAFE] w-full font-carbonic flex items-center justify-center px-4 mt-8 border  text-[#063D37] py-2"
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
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
              "Connect Wallet"
            )}
          </button>

          <div className="flex items-center my-[36px] gap-2">
            <hr className="w-full border-white/[22%] border-[1px] " />{" "}
            <p className="text-[16px] text-white/[22%]">or</p>{" "}
            <hr className="w-full border-[1px] border-white/[22%]" />
          </div>
          <p className="text-[14px] text-white/60 mb-[26px]">
            Send <span className="text-white">0.47482 BTC ($3000.00)</span> to
            the wallet address below.
          </p>
          <div className="flex w-full h-[60px] items-center rounded-[8px] justify-between border-[#272F2F] border-[1.5px] px-[20px] bg-white/[1%]">
            <div className="flex gap-[10px]">
              <p>0x1474839203843829023...abc</p>
            </div>
            <p className="text-[14px] text-[#33D780]">Copy</p>
          </div>
          <ul className="text-[12px] list-disc text-white/60 space-y-[10px] mt-[50px] px-[20px]">
            <li>Double-check the wallet address before sending funds.</li>
            <li>
              Only send BTC or compatible tokens supported by this address.
            </li>
            <li>
              Transactions are final and irreversible—we cannot recover lost
              funds from incorrect transfers.
            </li>
          </ul>
          <div
            onClick={() => props.onClose()}
            className="h-[53px]  text-[14px] rounded-[6px] text-[#B0C2C4] mt-[30px] w-full bg-white/[3%] flex items-center justify-center"
          >
            Click here after payment
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}
