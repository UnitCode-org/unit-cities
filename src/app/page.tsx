import Image from "next/image";

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

import CityTokensMarquee from "./components/CityTokensMarquee";
import FAQ from "./components/FAQ";
import OurMission from "./components/OurMission";
import Roadmap from "./components/Roadmap";

export default function Home() {
  return (
    <Layout>
      <section className="relative grid w-full grid-cols-1 items-center gap-x-8 gap-y-8 overflow-hidden px-8 pt-36 lg:pt-0 lg:grid-cols-2 md:px-16 xl:px-32 2xl:px-96 min-h-screen">
        <div className="flex flex-col items-center justify-center gap-y-6 font-poppins font-semibold text-center lg:text-start lg:items-start md:pr-0">
          <h1 className="text-4xl md:text-6xl">
            Revolutionizing the{" "}
            <span className="bg-gradient-to-r from-unit-purple-40 via-unit-purple-20 to-unit-blue-40 from-0% via-90% inline-block text-transparent bg-clip-text">
              world,
            </span>{" "}
            one{" "}
            <span className="bg-gradient-to-r from-unit-purple-40 via-unit-purple-20 to-unit-blue-40 from-0% via-90% inline-block text-transparent bg-clip-text">
              city
            </span>{" "}
            at a time.
          </h1>
          <p className="px-8 text-center text-base font-light sm:px-24 md:px-0 lg:text-start md:text-xl">
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
      <section className="flex flex-col bg-unit-black-100 pt-32 text-unit-grey-10 px-8 md:px-16 xl:px-56 2xl:px-128 items-center text-center border-2 border-unit-black-100">
        <h2 className="text-3xl md:text-5xl font-semibold space-y-4 mb-3">
          Participate in the launch of{" "}
          <span className="bg-gradient-to-r from-unit-purple-20 to-unit-blue-40 from-90% inline-block text-transparent bg-clip-text h-12 md:h-14">
            city
          </span>{" "}
          <span className="bg-gradient-to-r from-unit-purple-40 to-unit-purple-20 from-0% inline-block text-transparent bg-clip-text h-12 md:h-14">
            tokens
          </span>{" "}
          around the world.
        </h2>
        <p className="text-base md:text-xl font-light mb-12 lg:mb-28">
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
      <FAQ className="!mt-48" />
    </Layout>
  );
}
