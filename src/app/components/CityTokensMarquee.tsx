"use client";

import { CirclePause, CirclePlay } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";

import { cityTokens } from "@/constant/CityToken";

function CityTokensMarquee() {
  const [play, setPlay] = useState(true);

  return (
    <section className="flex w-full flex-col gap-y-10 bg-unit-black-100 py-20 text-unit-grey-10">
      <div className="hidden justify-end px-8 md:flex xl:px-32 2xl:px-72">
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
            className="mr-5 flex min-h-36 min-w-36 flex-col items-center justify-center gap-y-3 rounded-md border border-unit-black-60 bg-unit-black-90 px-3 py-5"
          >
            <Image
              src={cityToken.image}
              alt="City Tokens"
              width={80}
              height={80}
              priority={true}
              className="object-contain grayscale"
            />
            <span className="font-semibold uppercase text-unit-grey-30">
              ${cityToken.name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default CityTokensMarquee;
