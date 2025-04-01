import RegHeader from "@/app/components/headers/regHeader";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <RegHeader />

      {/* Background Image */}
      <Image
        src="/images/coming soon.png"
        alt="Coming Soon Background"
        width={1512}
        height={887}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Clouds */}
      <Image
        src="/images/clouds left.svg"
        alt="Clouds Left"
        width={100}
        height={100}
        className="absolute left-5 sm:left-10 top-[30%] transform -translate-y-1/2 w-24 sm:w-48 z-10"
      />
      <Image
        src="/images/planes.svg"
        alt="Planes Right"
        width={100}
        height={100}
        className="absolute right-1/3 sm:right-[40%] top-1/3 transform -translate-y-1/2 w-12 sm:w-12 z-10"
      />
      <Image
        src="/images/clouds right.svg"
        alt="Clouds Right"
        width={100}
        height={100}
        className="absolute right-5 sm:right-10 top-1/2 transform -translate-y-1/2 w-32 sm:w-48 z-10"
      />

      {/* Text Content */}
      <p className="text-white text-[40px] md:text-[76px] text-center z-10 relative">
        Coming Soon !
      </p>
      <p className="text-white/[55%] w-[80%] text-center text-[18px] md:text-[40px] z-10 relative">
        Thank you for signing up! We&apos;re hard at work building the
        world&apos;s first end-to-end BTC Collateralization platform.
        You&apos;ll be the first to know when we go live.
      </p>
    </div>
  );
}
