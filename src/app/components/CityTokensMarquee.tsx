"use client";

import { CirclePause, CirclePlay } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";

import { cityTokens } from "@/constant/CityToken";

function CityTokensMarquee() {
  const [play, setPlay] = useState(true);

  return (
    <section className="py-20 bg-unit-black-100 text-unit-grey-10 w-full flex flex-col gap-y-10">
      <div className="hidden md:flex justify-end px-8 xl:px-32 2xl:px-72">
        {play ? (
          <CirclePause
            onClick={() => {
              setPlay(!play);
            }}
            className="size-8"
          />
        ) : (
          <CirclePlay
            onClick={() => {
              setPlay(!play);
            }}
            className="size-8"
          />
        )}
      </div>
      <Marquee play={play} className="flex items-center">
        {cityTokens.map((cityToken) => (
          <div
            key={cityToken.name}
            className="bg-unit-black-90 rounded-md border border-unit-black-60 px-3 py-5 flex flex-col gap-y-3 items-center justify-center mr-5 min-w-36 min-h-36"
          >
            <Image
              src={cityToken.image}
              alt="City Tokens"
              width={80}
              height={80}
              priority={true}
              className="object-contain grayscale"
            />
            <span className="text-unit-grey-30 font-semibold uppercase">
              ${cityToken.name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default CityTokensMarquee;
