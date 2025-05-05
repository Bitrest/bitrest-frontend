/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import map from "@/public/icons/map.svg";
import btc from "@/public/icons/color btc.svg";
import { propertiesData } from "@/app/constants";
import dropdownIcon from "@/public/icons/dropdown.svg";
import filterIcon from "@/public/icons/filters.svg";
import { JSX, useState } from "react";
import { useListings } from "@/app/_hooks/listing/useListings";
import PropertiesCell from "@/app/components/properties/propertiesBlock";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/loaders/loader";
import Link from "next/link";
import propIcon from "@/public/icons/prop value.svg";
import btcCollatIcon from "@/public/icons/btc safe.svg";
import loanTermIcon from "@/public/icons/loan term.svg";
import router from "next/navigation";
import banner from "@/public/images/unlock property.png";
export default function Page() {
  const { listingLoading, mutateListings, error, listings, page } =
    useListings();

  // Show loading skeleton while fetching data

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [tab, setTab] = useState<"crowdfunding" | "broker">("broker");
  const router = useRouter();

  if (listingLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#101313] min-h-screen pt-[50px] pb-[100px] w-full px-[36px]">
      <div className="py-[7px] px-[10px] bg-[#171A1A] rounded-[20px] mx-auto w-fit flex gap-4 mb-[36px] items-center text-[16px] text-[#B9B9B9CC]/[80%] font-[600] font-manrope text-white">
        <div
          onClick={() => setTab("crowdfunding")}
          className={`${
            tab === "crowdfunding" && "bg-[#D4FAFE] text-black rounded-[10px] "
          } px-[20px] py-[10px] cursor-pointer transition-transform ease-in-out duration-1000`}
        >
          CROWD FUNDING
        </div>
        <div
          onClick={() => setTab("broker")}
          className={`${
            tab === "broker" && "bg-[#D4FAFE] text-black rounded-[10px] "
          } px-[20px] py-[10px] cursor-pointer transition-transform ease-in-out duration-1000`}
        >
          BROKER MANAGEMENT
        </div>
      </div>

      <div className="mb-[55px] relative h-[400px] text-black md:h-[600px] rounded-[36px] overflow-hidden">
        <Image
          src={banner}
          alt="banner"
          fill
          className="object-cover rounded-[36px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-[58px] text-black">
          <p className="font-[600] text-[18px] font-manrope mb-2">
            WELCOME TO BITREST
          </p>
          <p className="text-[30px] md:text-[55px] leading-tight">
            Unlock{" "}
            <span className="font-bricolage italic">property ownership</span>
            <br />
            with bitcoin
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full  mb-[40px]">
        <div className="sm:flex grid grid-cols-2 items-center justify-center sm:flex-row gap-4">
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
              src={listings[1].images[currentImageIndex]}
              alt={`${listings[1].title} - Image ${currentImageIndex + 1}`}
              className="object-cover rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Image navigation dots */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {listings[1].images.map((_, index) => (
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
                  prev === 0 ? listings[1].images.length - 1 : prev - 1
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

        <FeatureBlock
          title={listings[0].title}
          location={listings[0].propertyLocation}
          description={listings[0].description}
          id={listings[0]._id}
          value={
            <p>
              $
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(listings[0].price)}{" "}
              <span className="text-white/[50%]">(1.2 BTC)</span>
            </p>
          }
          collateral={listings[0].returnPotential.toString()}
          term={`${listings[0].duration.toString()} days`}
        />
      </div>

      {/* Properties */}
      <div className="relative">
        <div className="grid grid-col-1 gap-x-[36px] gap-y-[72px] mt-[55px] sm:grid-col-2 lg:grid-cols-4">
          {listings?.map((property, index) => (
            <PropertiesCell
              key={index}
              id={property._id}
              title={property.title}
              returns={property.returnPotential.toString()}
              units={property.totalSupply.toString()}
              address={property.propertyLocation.toString()}
              price={property.price.toString()}
              images={property?.images}
              loanTerm={"10 months"}
              btcPrice="1.2"
            />
          ))}
        </div>

        <div className="w-full absolute flex h-[200px] bg-gradient-to-b from-[#101313]/[0%] bottom-[0px] to-[#101313] flex-col items-center mt-[150px]">
          <button className="bg-[#D4FAFE] text-[500] font-carbonic w-[198px] px-4 mt-8 border  text-[#063D37] py-2">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

const FeatureBlock = ({
  title,
  location,
  description,
  value,
  collateral,
  term,
  id,
}: {
  title: string;
  location: string;
  description: string;
  value: any;
  collateral: string;
  term: string;
  id: string;
}) => {
  const router = useRouter();
  return (
    <div className="py-[40px] px-[30px] lg:w-1/2">
      {/* First Row */}
      <div className="flex justify-between items-center">
        <div className="flex gap-[16px]">
          <p className="text-[20px] text-white font-[500]">{title}</p>
          <div className="flex items-center gap-2">
            <Image src={map} alt="map" />
            <p className="text-[16px] text-white/[60%]">{location}</p>
          </div>
        </div>
        <p className="py-[9px] px-[21px] text-[#063D37] bg-[#3EEEBF] rounded-[9px] text-[12px]">
          FEATURED
        </p>
      </div>

      <div className="flex mt-[34px] mb-[56px] items-start justify-between">
        <p className="text-white/[60%] text-[14px] font-manrope">
          {description}
          {description.length > 50 && (
            <span className="text-[#3EEEBF]">Read More</span>
          )}
        </p>
      </div>

      {/* Third Row */}
      <div className="flex flex-row lg:flex-row gap-4 items-start w-full mb-[40px] justify-between">
        <InfoBlock
          icon={propIcon}
          title="Property Value"
          info={<p className="flex gap-2 text-[16px]">{value}</p>}
        />
        <InfoBlock
          icon={btcCollatIcon}
          title="BTC Collateral"
          info={<p>{collateral}</p>}
        />
        <InfoBlock icon={loanTermIcon} title="Loan Term" info={<p>{term}</p>} />
      </div>
      <button
        onClick={() => router.push(`properties/${id}`)}
        className="bg-[#D4FAFE] w-[134px] h-[47px]  font-[500] text-[16px] mt-8  rounded-[6px] text-[#000000]"
      >
        Buy Now
      </button>
    </div>
  );
};

const InfoBlock = ({
  title,
  info,
  icon,
}: {
  title: any;
  info: JSX.Element;
  icon: any;
}) => {
  return (
    <div className="flex flex-col min-h-[50px] gap-[20px] w-full pr-[20px]">
      <div className="flex gap-[7px]  text-white/[60%] font-[500] text-[14px] font-manrope">
        <Image
          className="w-[20px] h-[20px]  cursor-pointer"
          src={icon}
          alt={title}
        />
        {title}
      </div>

      <div className="text-[16px] text-white font-[600]">{info}</div>
    </div>
  );
};
