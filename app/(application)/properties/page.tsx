/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import map from "@/public/icons/map.svg";
import btc from "@/public/icons/color btc.svg";
import { propertiesData } from "@/app/constants";
import dropdownIcon from "@/public/icons/dropdown.svg";
import filterIcon from "@/public/icons/filters.svg";
import { useState } from "react";
import { useListings } from "@/app/_hooks/listing/useListings";
import PropertiesCell from "@/app/components/properties/propertiesBlock";
import { useRouter } from "next/navigation";
export default function Page() {
  const { listingLoading, mutateListings, error, listings, page } =
    useListings();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [tab, setTab] = useState<"trust" | "prop">("prop");
  const router = useRouter();

  return (
    <div className="bg-[#101313] min-h-screen pt-[50px] pb-[100px] w-full px-[36px]">
      <div className="py-[7px] px-[10px] bg-[#171A1A] rounded-[200px] mx-auto w-fit flex gap-4 mb-[50px] items-center text-[16px] text-[#B9B9B9CC]/[80%] font-[600] font-manrope text-white">
        <div
          onClick={() => setTab("prop")}
          className={`${
            tab === "prop" && "bg-[#D4FAFE] text-black rounded-[200px] "
          } px-[20px] py-[10px] cursor-pointer transition-transform ease-in-out duration-1000`}
        >
          PROPERTIES
        </div>
        <div
          onClick={() => setTab("trust")}
          className={`${
            tab === "trust" && "bg-[#D4FAFE] text-black rounded-[200px] "
          } px-[20px] py-[10px] cursor-pointer transition-transform ease-in-out duration-1000`}
        >
          INVESTMENT TRUST
        </div>
      </div>

      <div className="flex justify-center w-full  mb-[40px]">
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
          <div className="w-full sm:w-fit h-[44px] flex items-center rounded-[8px] bg-white/[8%]">
            <select
              defaultValue={"Luxury Condo"}
              className="h-[40px] text-[12px] sm:text-[14px] outline-none bg-transparent w-full px-4 text-white placeholder-white/60 appearance-none"
            >
              <option value="" disabled className="text-gray-500">
                Select a Property
              </option>
              <option value="property1" className="text-black">
                Luxury Condo
              </option>
              <option value="property2" className="text-black">
                Modern Loft
              </option>
              <option value="property3" className="text-black">
                Cozy Apartment
              </option>
              <option value="property4" className="text-black">
                Suburban Home
              </option>
            </select>
            <Image
              className="w-[20px] h-[20px] mr-4 cursor-pointer"
              src={dropdownIcon}
              alt="Dropdown Icon"
            />
          </div>
          <div className="w-full sm:w-fit flex items-center rounded-[8px] bg-white/[8%]">
            <select className="h-[40px] text-[12px] sm:text-[14px] outline-none bg-transparent w-full px-4 text-white placeholder-white/60 appearance-none">
              <option value="" disabled className="text-gray-500">
                Expected ROI
              </option>
              <option value="property1" className="text-black">
                10%
              </option>
              <option value="property2" className="text-black">
                20%
              </option>
            </select>
            <Image
              className="w-[20px] h-[20px] mr-4 cursor-pointer"
              src={dropdownIcon}
              alt="Dropdown Icon"
            />
          </div>
          <div className="w-full sm:w-fit flex items-center rounded-[8px] bg-white/[8%]">
            <select className="h-[40px] text-[12px] sm:text-[14px] outline-none bg-transparent w-full px-4 text-white placeholder-white/60 appearance-none">
              <option value="" disabled className="text-gray-500">
                Investment Duration
              </option>
              <option value="property1" className="text-black">
                Short Term
              </option>
              <option value="property2" className="text-black">
                Long Term{" "}
              </option>
            </select>
            <Image
              className="w-[20px] h-[20px] mr-4 cursor-pointer"
              src={dropdownIcon}
              alt="Dropdown Icon"
            />
          </div>
          <div className="w-full sm:w-fit h-[44px] text-[12px] sm:text-[14px]  px-4 justify-between gap-2 flex items-center rounded-[8px] bg-white/[8%]">
            <p className="text-white">Filter</p>
            <Image
              className="w-[20px] h-[20px]  cursor-pointer"
              src={filterIcon}
              alt="filter Icon"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-fit lg:h-[398px] flex-col lg:flex-row bg-white/[9%] gap-[20px] border border-white-[3%] rounded-[16px] flex lg:pr-[30px]">
        {/* Image Section - Modified for large screens */}
        <div className="relative group lg:w-1/2">
          <div className="relative w-full h-full min-h-[300px]">
            <Image
              src={propertiesData[0].images[currentImageIndex]}
              alt={`${propertiesData[0].title} - Image ${
                currentImageIndex + 1
              }`}
              className="object-cover rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Image navigation dots */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {propertiesData[0].images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImageIndex === index
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>

          {/* Previous/Next buttons */}
          <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() =>
                setCurrentImageIndex((prev) =>
                  prev === 0 ? propertiesData[0].images.length - 1 : prev - 1
                )
              }
              className="p-2 m-2 rounded-full bg-black/50 hover:bg-black/75 transition-colors"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentImageIndex((prev) =>
                  prev === propertiesData[0].images.length - 1 ? 0 : prev + 1
                )
              }
              className="p-2 m-2 rounded-full bg-black/50 hover:bg-black/75 transition-colors"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-[40px] px-[30px] lg:w-1/2">
          {/* First Row */}
          <div className="flex justify-between items-center">
            <p className="text-[20px] text-white font-[500]">Tedro Courts</p>
            <div className="flex items-center gap-2">
              <Image src={map} alt="map" />
              <p className="text-[16px] text-white/[60%]">Lagos, Nigeria</p>
            </div>
            <p className="py-[9px] px-[21px] text-[#063D37] bg-[#26CE92] rounded-[27px] text-[12px]">
              FEATURED
            </p>
          </div>

          {/* Second Row */}
          <div className="flex mt-[34px] mb-[56px] items-start justify-between">
            <p className="text-white/[60%] text-[14px] font-manrope">
              Experience serene living surrounded by rolling hills and
              breathtaking vineyards. These countryside homes offer the perfect
              escape for investors seeking charm...{" "}
              <span className="text-[#5BC6A3]">Read More</span>
            </p>
          </div>

          {/* Third Row */}
          <div className="flex flex-col lg:flex-row gap-4 items-start w-full justify-between">
            <InfoBlock
              title="Minimum Investment"
              info={
                <div className="flex gap-2 text-[16px]">
                  <Image src={btc} alt="map" />
                  0.01847
                </div>
              }
            />
            <InfoBlock title="Expected ROI" info="23.85%" />
            <InfoBlock title="Units" info="50" />
            <InfoBlock title="Investment Duration" info="10 Months" />
          </div>
          <button
            onClick={() => router.push("/properties/1")}
            className="bg-[#D4FAFE] w-[198px] px-4 mt-8 border text-[#063D37] py-2"
          >
            Invest Now
          </button>
        </div>
      </div>

      {/* Properties */}
      <div className="grid grid-col-1 gap-x-[36px] gap-y-[72px] mt-[55px] sm:grid-col-2 lg:grid-cols-4">
        {propertiesData.map((property, index) => (
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

      <div className="w-full flex flex-col items-center mt-[150px]">
        <p className="text-center text-[20px] text-white">
          Continue exploring new investments
        </p>
        <button className="bg-[#D4FAFE] text-[500] font-carbonic w-[198px] px-4 mt-8 border  text-[#063D37] py-2">
          Show more
        </button>
      </div>
    </div>
  );
}

const InfoBlock = ({ title, info }: { title: string; info: any }) => {
  return (
    <div className="flex flex-col w-full pr-[20px]">
      <p className="text-white/[60%] font-[500] text-[14px] font-manrope">
        {title}
      </p>

      <div className="text-[16px] text-white font-[600]">{info}</div>
    </div>
  );
};
