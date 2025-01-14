/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import hold from "@/public/icons/holding.svg";
import bulb from "@/public/icons/bulb.svg";
import map from "@/public/icons/map.svg";
import { propertiesData } from "@/app/constants";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import btc from "@/public/icons/bit mini.svg";
import coin from "@/public/icons/money-coin.svg";
import chart from "@/public/icons/chart.svg";
import calender from "@/public/icons/calendar.svg";
import duration from "@/public/icons/duration.svg";
import commercial from "@/public/icons/commercial.svg";
import { useSingleListing } from "@/app/_hooks/listing/useSingleListing";
import { useParams, useRouter } from "next/navigation";
import documentIcon from "@/public/icons/Document Icon.svg";
import downloadIcon from "@/public/icons/Download Icon.svg";
import box from "@/public/icons/box cube.svg";
import PropertiesCell from "@/app/components/properties/propertiesBlock";
export default function Page() {
  const params = useParams<{ id: string }>();

  const { listing, error, singleListingLoading, mutateSingleListing } =
    useSingleListing({ id: params.id });

  const [activeTab, setActiveTab] = useState("essential");

  // Tabs data
  const tabs = [
    { id: "essential", label: "Essential" },
    { id: "investment", label: "Investment Risks" },
    { id: "financial", label: "Financial Structure" },
    { id: "documents", label: "Documents" },
  ];
  const sliderRef = useRef<any>(null);
  const router = useRouter();

  return (
    <div className="bg-[#101313] flex flex-col items-center min-h-screen pt-[50px] pb-[100px] w-full">
      {/* Image Slide */}
      <div className="w-full">
        {/* Image Slider Section */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-[20px] scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {propertiesData[0].images.map((image, index) => (
              <div
                key={index}
                className="relative w-[90%] rounded-[16px]  h-[400px] flex-shrink-0 snap-center"
              >
                <Image
                  src={image}
                  alt={`Property image ${index + 1}`}
                  fill
                  className="object-cover rounded-[16px] "
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {propertiesData[0].images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  sliderRef.current?.scrollTo({
                    left: index * window.innerWidth,
                    behavior: "smooth",
                  });
                }}
                className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/75 transition-all"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8 justify-between mt-[82px] px-[40px]">
        <div className="w-full">
          <p className="text-[24px]">Scenic Countryside Homes in Lagos</p>
          <div className="flex gap-2 text-white/[60%]  text-[16px] mt-[26px] items-center">
            <Image src={map} alt="map" />
            <p className="">Lagos, Nigeria</p>
          </div>

          <div className="flex mt-[150px] gap-8 border-b border-white/20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 relative ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-white/[60%] hover:text-white/80"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#26CE92]"
                    initial={false}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="w-full">
            {activeTab === "investment" && (
              <div className="w-full  py-[50px]">
                <div className="space-y-[16px]">
                  <InfoBox
                    title="Market Risk"
                    description="Potential oversupply of real estate developments in the region could affect lease-up rates or rental income."
                  />
                  <InfoBox
                    title="Our Assessment"
                    fade={true}
                    description="While this is a valid concern, Scenic Countryside Homes targets a niche market of eco-conscious buyers. With only one similar development in the submarket and population growth projected at 20% over the next five years, demand for this project is likely to remain stable."
                  />
                </div>
                <hr className="w-full my-[50px] border-white/20 " />
                <div>
                  <InfoBox
                    title="Construction Risk"
                    description="Delays in construction could push back the project timeline and impact returns."
                  />
                  <InfoBox
                    title="Our Assessment"
                    fade={true}
                    description="The project is already four months into construction, with permits secured and earthwork completed. The use of prefabricated materials and small-scale construction minimizes risks associated with large multifamily developments."
                  />
                </div>
                <hr className="w-full my-[50px] border-white/20 " />
                <div className="space-y-[16px]">
                  <InfoBox
                    title="Liquidity Risk"
                    description="Investments in real estate are inherently illiquid, and early exits may not be possible."
                  />
                  <InfoBox
                    title="Our Assessment"
                    fade={true}
                    description="Investors are encouraged to maintain a long-term outlook. The sponsor has structured the investment with an expected hold period of 3 years, ensuring clear exit strategies, including refinancing or property sales."
                  />
                </div>
              </div>
            )}
            {activeTab === "financial" && (
              <div className="w-full font-manrope py-[50px]">
                <p className="text-[14px] font-[500] mb-[82px] text-white/[60%]">
                  This property investment is structured to maximize investor
                  returns while maintaining transparency. Below is a breakdown
                  of the financial structure, sources and uses of funds, and
                  expected returns.
                </p>
                <p className="font-carbonic text-[20px] mb-[25px] text-white">
                  Offering Structure
                </p>
                <div className="space-y-[40px]">
                  <InfoBox
                    title="Ownership Structure"
                    fade={true}
                    description=" Investors receive project-level distributions proportional to their ownership."
                  />
                  <InfoBox
                    title="Distributions"
                    fade={true}
                    description="100% of Net Operating and Capital Event Proceeds, with no promote applied"
                  />
                  <InfoBox
                    title="Anticipated Timeline"
                    fade={true}
                    description=" Distributions expected upon project exit in August 2027."
                  />
                  <InfoBox
                    title="Disclaimer"
                    fade={true}
                    description=" Distributions are discretionary, not guaranteed, and subject to market conditions. Refer to Section 4.2 of the Operating Agreement for details."
                  />
                </div>
                <div className="mt-[82px]">
                  <p className="font-carbonic text-[20px] mb-[25px] text-white">
                    Capital Stack
                  </p>
                  <FundingTable />
                </div>
              </div>
            )}
            {activeTab === "essential" && (
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 text-white gap-y-[50px] py-[50px]">
                  {/* Minimum Investment */}
                  <div className="flex gap-[5px]">
                    <div className="h-[43px] bg-[#2A2C30]text-white w-[43px] rounded-full flex items-center justify-center">
                      <Image src={coin} alt="icon" />
                    </div>
                    <div className="font-manrope font-[500]">
                      <p className="text-[14px] text-white/[60%]">
                        Minimum Investment
                      </p>
                      <div className="text-[16px] flex font-[600]">
                        <div className="flex items-center">
                          <Image src={btc} alt="btc" />
                          0.01847{" "}
                          <span className="font-[500] text-white/[60%]">
                            ($1813.30)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Expected ROI */}
                  <div className="flex gap-[5px]">
                    <div className="h-[43px] bg-[#2A2C30] w-[43px] rounded-full flex items-center justify-center">
                      <Image src={chart} alt="chart" />
                    </div>
                    <div className="font-manrope font-[500]">
                      <p className="text-[14px] text-white/[60%]">
                        Expected ROI
                      </p>
                      <div className="text-[16px] font-[600]">
                        <p>23.5%</p>
                      </div>
                    </div>
                  </div>
                  {/* Return Potential */}
                  <div className="flex gap-[5px]">
                    <div className="h-[43px] bg-[#2A2C30] w-[43px] rounded-full flex items-center justify-center">
                      <Image src={chart} alt="chart" />
                    </div>
                    <div className="font-manrope font-[500]">
                      <p className="text-[14px] text-white/[60%]">
                        Total Return Potential
                      </p>
                      <div className="text-[16px] font-[600]">
                        <p>3.5x</p>
                      </div>
                    </div>
                  </div>
                  {/* Investmentb Duration */}
                  <div className="flex gap-[5px]">
                    <div className="h-[43px] bg-[#2A2C30] w-[43px] rounded-full flex items-center justify-center">
                      <Image src={duration} alt="duration" />
                    </div>
                    <div className="font-manrope font-[500]">
                      <p className="text-[14px] text-white/[60%]">
                        Investment Duration
                      </p>
                      <div className="text-[16px] font-[600]">
                        <p>12 Months</p>
                      </div>
                    </div>
                  </div>
                  {/* Commercial */}
                  <div className="flex gap-[5px]">
                    <div className="h-[43px] bg-[#2A2C30] w-[43px] rounded-full flex items-center justify-center">
                      <Image src={commercial} alt="commercial" />
                    </div>
                    <div className="font-manrope font-[500]">
                      <p className="text-[14px] text-white/[60%]">
                        Property Type
                      </p>
                      <div className="text-[16px] font-[600]">
                        <p>Commercial</p>
                      </div>
                    </div>
                  </div>
                  {/* Closing Date */}
                  <div className="flex gap-[5px]">
                    <div className="h-[43px] bg-[#2A2C30] w-[43px] rounded-full flex items-center justify-center">
                      <Image src={calender} alt="calendar" />
                    </div>
                    <div className="font-manrope font-[500]">
                      <p className="text-[14px] text-white/[60%]">
                        Closing Date
                      </p>
                      <div className="text-[16px] font-[600]">
                        <p>February 3rd, 2028</p>
                      </div>
                    </div>
                  </div>
                  {/* Launch Date */}
                  <div className="flex gap-[5px]">
                    <div className="h-[43px] bg-[#2A2C30] w-[43px] rounded-full flex items-center justify-center">
                      <Image src={calender} alt="calendar" />
                    </div>
                    <div className="font-manrope font-[500]">
                      <p className="text-[14px] text-white/[60%]">
                        Launch Date
                      </p>
                      <div className="text-[16px] font-[600]">
                        <p>January 3rd. 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="w-full border-[1px] border-[#262930]" />
                <div className="mt-[60px]">
                  <p className="font-[500] text-[24px]">Description</p>
                  <p className="font-manrope text-[16px] leading-[37px] text-white/60">
                    Scenic Countryside Homes offers a unique opportunity to
                    invest in a beautifully designed mixed-use property set in a
                    serene countryside location. This development combines the
                    charm of nature with the modern conveniences of urban
                    living, promising not just a property, but an experience.
                    With an emphasis on eco-friendly design and sustainable
                    construction, this project presents an ideal investment for
                    those seeking long-term growth in the real estate sector.
                  </p>
                </div>
              </div>
            )}
            {activeTab === "documents" && (
              <div className="w-full py-2 pt-[62px] space-y-[20px]">
                <div className="h-[82px] bg-[#191C1C] radius-[8px] flex justify-between px-[16px] py-[20px] ">
                  <div className="flex items-center gap-2">
                    <Image src={documentIcon} alt="document" />
                    <p className="text-[16px] text-white font-[500]">W-9</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={downloadIcon} alt="download" />
                    <p className="text-[16px] font-[500] text-[#26CE92]">
                      Download
                    </p>
                  </div>
                </div>
                <div className="h-[82px]  bg-[#191C1C] radius-[8px] flex justify-between px-[16px] py-[20px] ">
                  <div className="flex items-center gap-2">
                    <Image src={documentIcon} alt="document" />
                    <p className="text-[16px] text-white font-[500]">
                      Schedule of real estate
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={downloadIcon} alt="download" />
                    <p className="text-[16px] font-[500] text-[#26CE92]">
                      Download
                    </p>
                  </div>
                </div>
                <div className="h-[82px] bg-[#191C1C] radius-[8px] flex justify-between px-[16px] py-[20px] ">
                  <div className="flex items-center gap-2">
                    <Image src={documentIcon} alt="document" />
                    <p className="text-[16px] text-white font-[500]">
                      Investor Packet
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={downloadIcon} alt="download" />
                    <p className="text-[16px] font-[500] text-[#26CE92]">
                      Download
                    </p>
                  </div>
                </div>
                <div className="h-[82px] flex bg-[#191C1C] radius-[8px] justify-between px-[16px] py-[20px] ">
                  <div className="flex items-center gap-2">
                    <Image src={documentIcon} alt="document" />
                    <p className="text-[16px] text-white font-[500]">
                      Q1 2025 Asset Management Report
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={downloadIcon} alt="download" />
                    <p className="text-[16px] font-[500] text-[#26CE92]">
                      Download
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Progress Section */}
        <div className="px-[22px] rounded-[20px] border-[1px] border-[#262930] font-[500] font-manrope w-full lg:w-[405px]  py-[40px]">
          <div className="flex justify-between">
            <div className="font-manrope">
              <p className="font-[700] text-[16px]">Hertex Holdings</p>
              <p className="font-[500] text-[12px]">Lagos, Nigeria</p>
            </div>
            <Image src={hold} alt={"icon"} />
          </div>

          <div className="h-[91px] bg-[#262930] px-[10px] py-[16px] mt-[30px] mb-[40px] rounded-[8px]">
            <p className="text-white/[80%] mb-[18px] text-[12px]">
              Investment Milestone ~{" "}
              <span className="text-white font-[700]">75%</span>
            </p>
            <div className="relative h-6 bg-[#343840] rounded-md">
              {/* Progress fill */}
              <div
                className="absolute top-0 left-0 h-full rounded-md"
                style={{
                  width: `50%`,
                  background:
                    "linear-gradient(89.14deg, #C7E86D -16.67%, #33D780 99.26%)",
                }}
              />
              {/* Percentage text overlay */}
              <div className="absolute w-full h-full flex items-center justify-start px-4">
                <span className="text-black text-sm font-semibold z-10">
                  50
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 text-white/[60%] text-[12px]">
            <Image src={bulb} alt={"bulb"} />
            Join 142 investors already participating in this eco-friendly
            investment, designed with sustainability in mind.
          </div>

          <button
            onClick={() => router.push("properties/1/checkout")}
            className="bg-[#D4FAFE] mt-[21px] font-carbonic  rounded-[6px]  w-full text-[18px] px-4 border  text-[#116158] py-2"
          >
            Invest
          </button>
        </div>
      </div>

      <div className="flex flex-col  mt-[50px] sm:mt-[250px] items-center">
        <Image src={box} alt="box" />
        <p className="mt-[30px] font-[16px]">Hertex Holdings</p>

        <p className="text-[12px] text-white/60 mt-[20px]">
          1234 Blockchain Ave, Suite 100, San Francisco, CA 94107
        </p>
      </div>

      <div className="mt-[76px] w-full px-[40px] flex flex-col items-start">
        <p className="text-[20px] mb-[40px] font-carbonic text-white/80">
          Other listing by Hertex Holdings
        </p>
        <div className="grid grid-col-2 w-full gap-x-[36px] gap-y-[72px] mt-[55px] sm:grid-col-2 lg:grid-cols-4">
          {propertiesData.slice(0, 4).map((property, index) => (
            <PropertiesCell
              key={index}
              title={property.title}
              returns={property.returns}
              units={property.units}
              address={property.address}
              price={property.price}
              images={property.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const FundingTable = () => {
  const tableData = [
    {
      source: "Construction Loan",
      amount: "112.96 BTC",
      usd: "$11,090,000",
      percentage: "40%",
    },
    {
      source: "Preferred Equity",
      amount: "50.45 BTC",
      usd: "$4,950,000",
      percentage: "18%",
    },
    {
      source: "Common Equity (Limited Partners)",
      amount: "95.76 BTC",
      usd: "$9,380,000",
      percentage: "34%",
    },
    {
      source: "Common Equity (GP Controlled)",
      amount: "24.12 BTC",
      usd: "$2,360,000",
      percentage: "8%",
    },
  ];

  return (
    <div className="w-full overflow-x-auto bg-[#101313] rounded-lg">
      <table className="w-full text-left text-sm text-white">
        <thead className="text-white">
          <tr>
            <th className="py-3 font-[700] text-[16px] px-4">Source</th>
            <th className="py-3 font-[700] text px-4">Amount</th>
            <th className="py-3 font-[700] text px-4">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-[#101313]" : "bg-[#101313]/80"
              } border-b text-white/[90%] font-[600] text-[14px] border-gray-600`}
            >
              <td className="py-3 px-4">{row.source}</td>
              <td className="py-3 px-4">
                {row.amount} <span className="text-white/50">({row.usd})</span>
              </td>
              <td className="py-3 px-4">{row.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const InfoBox = (props: {
  title: string;
  description: string;
  fade?: boolean;
}) => {
  return (
    <div className="w-full font-manrope">
      <p
        className={`${
          props.fade
            ? "text-[16px] font-manrope font-[600] text-white/[80%]"
            : "text-[20px] font-carbonic font-[500] text-white"
        } mb-[16px]`}
      >
        {props.title}
      </p>
      <p className="text-[14px] font-[400] text-white/[60%]">
        {props.description}
      </p>
    </div>
  );
};
