"use client";

import { CirclePause, CirclePlay } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";

type CityToken = {
  name: string;
  image: string;
};

const cityTokens: CityToken[] = [
  {
    name: "London",
    image: "/images/angels.png",
  },
  {
    name: "New York",
    image: "/images/angels.png",
  },
  {
    name: "Istanbul",
    image: "/images/angels.png",
  },
  {
    name: "Miami",
    image: "/images/angels.png",
  },
  {
    name: "Berlin",
    image: "/images/angels.png",
  },
  {
    name: "Cairo",
    image: "/images/angels.png",
  },
  {
    name: "Paris",
    image: "/images/angels.png",
  },
  {
    name: "Panama",
    image: "/images/angels.png",
  },
  {
    name: "Lisbon",
    image: "/images/angels.png",
  },
  {
    name: "Cape Town",
    image: "/images/angels.png",
  },
  {
    name: "Nairobi",
    image: "/images/angels.png",
  },
  {
    name: "San Francisco",
    image: "/images/angels.png",
  },
  {
    name: "Davos",
    image: "/images/angels.png",
  },
  {
    name: "Los Angeles",
    image: "/images/angels.png",
  },
  {
    name: "Mexico City",
    image: "/images/angels.png",
  },
  {
    name: "Seoul",
    image: "/images/angels.png",
  },
  {
    name: "Tokyo",
    image: "/images/angels.png",
  },
];

function CityTokensMarquee() {
  const [play, setPlay] = useState(true);

  return (
    <section className="py-20 bg-unit-black-100 text-unit-grey-10 w-full -translate-y-1 flex flex-col gap-y-10">
      <div className="flex justify-end px-8 xl:px-32 2xl:px-72">
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
