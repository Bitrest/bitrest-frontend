/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import houseImage from "@/public/icons/small image.svg";
import map from "@/public/icons/map.svg";
import investment from "@/public/icons/invest grey.svg";
import barchart from "@/public/icons/bar chart gray.svg";
import date from "@/public/icons/date gray.svg";
import billIcon from "@/public/icons/bill gray.svg";
import tag from "@/public/icons/tag.svg";
import phantom from "@/public/icons/phantom.svg";
import bulb from "@/public/icons/gray bulb.svg";
import back from "@/public/icons/gray back.svg";
import { useState } from "react";
import PaymentModal from "@/app/components/modals/paymentModal";
export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  return (
    <div className="bg-[#101313] font-manrope min-h-screen px-[40px] pt-[50px] pb-[100px] w-full">
      {showPaymentModal && (
        <PaymentModal onClose={() => setShowPaymentModal(false)} />
      )}
      <div className="flex gap-[12px] items-center ">
        <Image src={back} alt="back" />
        <p className="text-[18px] font-[500]">Back</p>
      </div>

      <div className="w-full flex mt-[80px] flex-col sm:flex-row">
        {/* Brief Overview */}
        <div className="w-full">
          <div className="flex gap-[40px] items-center">
            <Image src={houseImage} alt="Small Image" />
            <div>
              <p className="text-[24px]">JAO Apartments</p>
              <div className="text-white/60 flex">
                <Image src={map} alt="Small Image" />
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="mt-[90px]">
            <p className="text-[20px] font-[700]">Investment Summary</p>
            <div className="space-y-[40px] mt-[40px]">
              <CellBox
                icon={billIcon}
                title="Minimum Investment"
                value={
                  <p>
                    0.003648 BTC
                    <span className="text-white/60 ml-[5px]">($600)</span>
                  </p>
                }
              />
              <CellBox
                icon={investment}
                title="Investment Duration"
                value={<p>3 Years </p>}
              />
              <CellBox
                icon={barchart}
                title="Expected Returns"
                value={<p>20.7 %</p>}
              />
              <CellBox
                icon={barchart}
                title="Project Total Investment"
                value={
                  <p>
                    0.004283 BTC
                    <span className="text-white/60 ml-[5px]">($724.2)</span>
                  </p>
                }
              />{" "}
              <CellBox
                icon={date}
                title="Closing Date"
                value={<p>February 12th, 2025 </p>}
              />
            </div>
          </div>
        </div>
        <div className="w-full py-[40px] px-[20px] border-[1px] border-[#191C1C] rounded-[20px]">
          <p className="text-[#33D780] font-carbonic font-[600]">Invest Now</p>
          <p className="text-[14px] text-white/60">
            To invest now, enter the number of shares you will like to purchase
          </p>

          <p className="mt-[60px] mb-[20px]">How many units do you want</p>

          <div className="flex w-full h-[60px] items-center rounded-[8px] justify-between border-[#272F2F] border-[1.5px] px-[20px] bg-white/[1%]">
            <div className="flex gap-[10px]">
              <Image src={tag} alt="tag" />
              <p>500</p>
            </div>
            <p className="text-[14px] text-[#33D780]">Max</p>
          </div>

          {/* Info */}
          <div className="w-full mt-[50px] space-y-[14px]">
            <BoldCellBox
              title="Investment Fee"
              value={
                <p>
                  112.96 BTC
                  <span className="text-white/60 ml-[5px]">($11,090,000)</span>
                </p>
              }
            />
            <hr className="w-full bg-[#262930] h-[1px]" />
            <BoldCellBox
              title="Transaction Fee"
              value={
                <p>
                  0.000374 BTC
                  <span className="text-white/60 ml-[5px]">($3.50)</span>
                </p>
              }
            />
            <hr className="w-full bg-[#262930] h-[1px]" />

            <BoldCellBox
              title="Total"
              value={
                <p>
                  64.37 BTC
                  <span className="text-white/60 ml-[5px]">($6,319,231)</span>
                </p>
              }
            />
            <hr className="w-full bg-[#262930] h-[1px]" />

            <BoldCellBox title="Total" value={<p>Bitcoin Mainnet</p>} />
          </div>

          {/* Connect Wallet */}
          <div className="flex mt-[34px] w-full justify-between items-end">
            <div className="flex flex-col gap-[25px] items-start">
              <p className="font-[700] text-[16px]">Connected Wallet</p>
              <p className="font-[500] text-[14px] font-manrope text-white/60">
                Address
              </p>
            </div>

            <div className="flex flex-col gap-[25px] items-end">
              <div className="flex gap-[5px] items-center">
                <Image src={phantom} alt="phantom" />
                <p>Phantom Wallet</p>
              </div>
              <p>bc1p6tq0yv...aglq7wek9x</p>
            </div>
          </div>

          <div className=" flex space-x-[12px] mt-[60px] items-start">
            <Image src={bulb} alt="bulb" />
            <p className="text-[14px]">
              Confirm that your wallet is on the Bitcoin Mainnet Network before
              proceeding. Using a different network may result in irreversible
              loss of funds.
            </p>
          </div>

          <div className="w-full mt-[40px] mb-[20px] space-y-4">
            <div className="flex items-start w-full space-x-4 ">
              <input type="checkbox" className="accent-[#5BC6A3]" />
              <p
                className={`text-[14px] sm:text-[16px] font-manrope text-white/80 `}
              >
                I have reviewed and agree to the terms outlined in the{" "}
                <span className="underline text-white font-[500]">
                  Private Placement Memorandum and Operating Agreemnet
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setShowPaymentModal(true);
                setIsLoading(false);
              }, 10000);
            }}
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
              "Proceed to Pay"
            )}
          </button>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

const CellBox = (props: { title: string; value: any; icon: any }) => {
  return (
    <div className="w-full flex items-center justify-between font-manrope">
      <div className="flex items-center gap-[10px]">
        <Image src={props.icon} alt="icon" />
        <p className={""}>{props.title}</p>
      </div>

      <div className="text-[14px]  font-[500] text-white">{props.value}</div>
    </div>
  );
};

const BoldCellBox = (props: { title: string; value: any }) => {
  return (
    <div className="w-full flex items-center justify-between font-manrope">
      <p className="text-[14px] font-[600]">{props.title}</p>

      <div className="text-[16px] font-carbonic  font-[600] text-white">
        {props.value}
      </div>
    </div>
  );
};
