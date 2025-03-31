import Image from "next/image";
import { useState } from "react";
import bed from "@/public/icons/bed.svg";
import safe from "@/public/icons/safe.svg";
import dimensions from "@/public/icons/dimension.svg";
import bath from "@/public/icons/bath.svg";
import lock from "@/public/icons/lock.svg";

import money from "@/public/icons/money.svg";
import { useRouter } from "next/navigation";

const PropertiesBlock = (props: {
  title: string;
  returns: string;
  units: string;
  address: string;
  price: string;
  bath: string;
  bed: string;
  value: string;
  images: string[];
  id: string;
  dimensions: string;
  active: boolean;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();
  const placeholderImage =
    "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png";

  const getImageSrc = (index: number) => {
    const src = props.images[index];
    return src && src.trim() !== "" ? src : placeholderImage;
  };

  return (
    <div className="w-full px-[24px] py-[24px] font-manrope">
      <div className="relative group">
        {/* Image container */}
        <div className="relative w-full aspect-video">
          <Image
            src={getImageSrc(currentImageIndex)}
            alt={`${props.title} - Image ${currentImageIndex + 1}`}
            className="object-cover rounded-lg"
            fill
          />
        </div>
        <div className="absolute top-[18px] font-[700] bg-custom-gray-gradient text-white text-[12px] px-[8px] py-[5px] rounded-[130px] border-[0.67px] border-white/[20%] right-[10px]">
          <p>{props.active ? "ACTIVE" : "COMING SOON"}</p>
        </div>

        {/* Image navigation dots */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {props.images.map((_, index) => (
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
                prev === 0 ? props.images.length - 1 : prev - 1
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
                prev === props.images.length - 1 ? 0 : prev + 1
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

      {/* Property details */}
      <p className="font-aeonik mb-[16px] font-[700] text-[16px] mt-6 text-white">
        {props.title}
      </p>

      {/* Modified details section to allow wrapping */}
      <div className="text-[10.5px] font-aeonik flex flex-wrap w-full">
        <div className="flex items-center mr-[8px] mb-[4px]">
          <p className="text-white/[50%]">{props.address}</p>
        </div>

        <div className="w-[4.22px] h-[4.22px] bg-[#4F5353] rounded-full mx-[4px] self-center mb-[4px] hidden sm:block"></div>

        <div className="flex items-center mr-[8px] mb-[4px]">
          <Image src={safe} alt="safe" className="mr-[4px]" />
          <p className="text-white/[50%]">{props.returns} %</p>
        </div>

        <div className="w-[4.22px] h-[4.22px] bg-[#4F5353] rounded-full mx-[4px] self-center mb-[4px] hidden sm:block"></div>

        <div className="flex items-center mr-[8px] mb-[4px]">
          <Image src={bed} alt="bed" className="mr-[4px]" />
          <p className="text-white/[50%]">{props.bed} Bed</p>
        </div>

        <div className="w-[4.22px] h-[4.22px] bg-[#4F5353] rounded-full mx-[4px] self-center mb-[4px] hidden sm:block"></div>

        <div className="flex items-center mr-[8px] mb-[4px]">
          <Image src={bath} alt="bath" className="mr-[4px]" />
          <p className="text-white/[50%]">{props.bath} Bath</p>
        </div>

        <div className="w-[4.22px] h-[4.22px] bg-[#4F5353] rounded-full mx-[4px] self-center mb-[4px] hidden sm:block"></div>

        <div className="flex items-center mb-[4px]">
          <Image src={dimensions} alt="dimension" className="mr-[4px]" />
          <p className="text-white/[50%]">{props.dimensions}</p>
        </div>
      </div>

      <div className="w-full flex mt-[30px] font-aeonik items-center justify-between flex-wrap">
        <div className="text-white flex items-center font-[600] gap-[10px] text-[14px] mb-[10px] sm:mb-0">
          <Image src={money} alt="money" />
          <p>{props.value}</p>
          <p className="text-white/30">(${props.price})</p>
        </div>
        <div
          onClick={() => {
            if (props.active) {
              router.push("/signup");
            } else {
              alert("Property not available yet");
            }
          }}
          className={`rounded-[12px] gap-[5px] w-fit py-[10px] font-bold px-[16px] md:py-[5px] md:px-[8px] md:text-[8px] text-[12px] flex items-center justify-center ${
            props.active
              ? "text-black  bg-[#D4FAFE]"
              : "bg-[#1E2020] text-white/[52%]"
          }   hover:bg-[#5BC6A3] hover:text-[#02291B] transition-all`}
        >
          {!props.active && <Image src={lock} alt="lock" />}
          Buy Now
        </div>
      </div>
    </div>
  );
};

export default PropertiesBlock;
