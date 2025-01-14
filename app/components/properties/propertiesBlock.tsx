import Image from "next/image";
import { useState } from "react";
import btc from "@/public/icons/color btc.svg";
import Link from "next/link";

const PropertiesCell = (props: {
  title: string;
  returns: string;
  units: string;
  address: string;
  price: string;
  images: string[];
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Link href={"/properties/1"} className="w-full">
      <div className="relative group">
        {/* Image container */}
        <div className="relative w-full aspect-video">
          <Image
            src={props.images[currentImageIndex]}
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
      <p className="font-bold text-base mt-6 mb-3 text-white">{props.title}</p>
      <p className="text-white/70 text-xs">
        {props.returns}%{" "}
        <span className="text-white/30">~ returns in 12 months</span>
      </p>
      <div className="w-full text-sm mt-4 text-white flex justify-between">
        <div className="flex items-center gap-2">
          <Image src={btc} alt="btc" />
          <p>{props.price}</p>
        </div>
        <p>{props.units} Units</p>
        <p>{props.address}</p>
      </div>
    </Link>
  );
};

export default PropertiesCell;
