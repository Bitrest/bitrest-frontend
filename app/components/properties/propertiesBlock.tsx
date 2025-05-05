import Image from "next/image";
import { useState } from "react";
import propIcon from "@/public/icons/prop value.svg";
import btcCollatIcon from "@/public/icons/btc safe.svg";
import loanTermIcon from "@/public/icons/loan term.svg";

const PropertiesCell = (props: {
  title: string;
  returns: string;
  loanTerm: string;
  units: string;
  address: string;
  price: string;
  images: string[];
  id: string;
  btcPrice: string;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const placeholderImage =
    "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png";

  const getImageSrc = (index: number) => {
    const src = props.images[index];
    return src && src.trim() !== "" ? src : placeholderImage;
  };

  return (
    <div
      // href={`/properties/${props.id}`}
      className="w-full px-[24px] py-[24px] font-manrope"
    >
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
      <p className="font-manrope font-[700] text-base mt-6 mb-3 text-white">
        {props.title}
      </p>
      <div className="text-white font-manrope text-[12px] flex gap-[26px] items-center">
        <p className="text-white/[50%] text-[12px]">{props.address}</p>
        <p className="text-white/[50%]">{"\u2022"}</p>
        <div className="flex items-center gap-[4px]">
          <Image
            className="w-[20px] h-[20px]  cursor-pointer"
            src={btcCollatIcon}
            alt={props.title}
          />
          <p className="text-[12px] font-[500]">{props.returns} %</p>
        </div>
        <div className="flex items-center gap-[4px]">
          <Image
            className="w-[20px] h-[20px]  cursor-pointer"
            src={loanTermIcon}
            alt={props.title}
          />
          <p className="text-[12px] font-[500]">{props.loanTerm}</p>
        </div>
      </div>

      <div className="w-full text-sm mt-4 font-[600] text-white flex justify-between">
        <div className="flex items-center gap-2">
          <Image src={propIcon} alt="btc" />
          <p>
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
            }).format(parseInt(props.price))}{" "}
            <span className="text-white/[40%]">({props.btcPrice} BTC)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCell;
