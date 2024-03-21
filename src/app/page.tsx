"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

import { useIndexRefStore } from "@/store/useIndexRefStore";

import CityTokensMarquee from "./components/CityTokensMarquee";
import FAQ from "./components/FAQ";
import OurMission from "./components/OurMission";
import Roadmap from "./components/Roadmap";

export default function Home() {
  const faqRef = useRef<HTMLDivElement>(null);

  const { setFAQRef } = useIndexRefStore();

  useEffect(() => {
    setFAQRef(faqRef);
  }, [setFAQRef]);

  return (
    <Layout className="-space-y-1">
      <section className="relative grid min-h-screen w-full grid-cols-1 items-center gap-x-8 gap-y-8 overflow-hidden px-8 pt-36 md:px-16 lg:grid-cols-2 lg:pt-0 xl:px-32 2xl:px-96">
        <div className="flex flex-col items-center justify-center gap-y-6 text-center font-poppins font-semibold md:pr-0 lg:items-start lg:text-start">
          <h1 className="text-4xl md:text-6xl">
            Revolutionizing the{" "}
            <span className="inline-block bg-gradient-to-r from-unit-purple-40 from-0% via-unit-purple-20 via-90% to-unit-blue-40 bg-clip-text text-transparent">
              world,
            </span>{" "}
            one{" "}
            <span className="inline-block bg-gradient-to-r from-unit-purple-40 from-0% via-unit-purple-20 via-90% to-unit-blue-40 bg-clip-text text-transparent">
              city
            </span>{" "}
            at a time.
          </h1>
          <p className="px-8 text-center text-base font-light sm:px-24 md:px-0 md:text-xl lg:text-start">
            Join the movement to tokenize communities and drive financial
            equity, by Unit Cities hosted on Unit Network.
          </p>
          <Button variant="default" className="mt-4 w-fit lg:mt-12">
            Get Started
          </Button>
        </div>
        <Image
          src="/images/logo-3d.png"
          alt="Unit Events"
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-cover"
        />
      </section>
      <section className="flex w-full flex-col items-center border-2 border-unit-black-100 bg-unit-black-100 px-8 pt-32 text-center text-unit-grey-10 md:px-16 xl:px-56 2xl:px-128">
        <h2 className="mb-3 space-y-4 text-3xl font-semibold md:text-5xl">
          Participate in the launch of{" "}
          <span className="inline-block h-12 bg-gradient-to-r from-unit-purple-20 from-90% to-unit-blue-40 bg-clip-text text-transparent md:h-14">
            city
          </span>{" "}
          <span className="inline-block h-12 bg-gradient-to-r from-unit-purple-40 from-0% to-unit-purple-20 bg-clip-text text-transparent md:h-14">
            tokens
          </span>{" "}
          around the world.
        </h2>
        <p className="mb-12 text-base font-light md:text-xl lg:mb-28">
          Embark on a transformative journey with Unit City, a dynamic and
          innovative Decentralized Autonomous Organization (DAO) dedicated to
          revolutionize cities.
        </p>
        <Button variant="secondary" className="md:px-16">
          Get Started
        </Button>
      </section>
      <CityTokensMarquee />
      <OurMission />
      <Roadmap />
      <FAQ ref={faqRef} className="!mt-48" />
    </Layout>
  );
}
