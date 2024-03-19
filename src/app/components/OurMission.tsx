"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function OurMission() {
  return (
    <section className="bg-unit-black-100 text-unit-grey-10 px-8 xl:px-56 2xl:px-128 flex flex-col">
      <div className="flex items-center gap-x-32 relative">
        <div className="w-1 bg-unit-grey-30 h-96" />
        <div className="absolute size-3 border border-unit-grey-10 bg-unit-black-100 rounded-full -left-1.5 top-20" />
        <motion.div
          className="flex flex-col gap-y-3 relative"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-semibold">
            Our{" "}
            <span className="bg-gradient-to-r from-unit-purple-40 via-unit-purple-20 to-unit-blue-40 from-0% via-90% inline-block text-transparent bg-clip-text h-14">
              Mission.
            </span>
          </h2>
          <p className="text-xl font-light">
            At Unit Network, we're on a mission to address financial disparities
            by democratizing access to community wealth, fostering inclusive
            growth, and incentivizing top talent to contribute to our collective
            mission. We empower cities and communities worldwide to establish
            their own ecosystem tokens, facilitating equitable participation in
            local economies.
          </p>
        </motion.div>
      </div>
      <div className="flex items-center gap-x-32 relative">
        <div className="w-1 bg-unit-grey-30 h-96" />
        <div className="absolute size-3 border border-unit-grey-10 bg-unit-black-100 rounded-full -left-1.5 top-20" />
        <motion.div
          className="flex flex-col gap-y-3 relative"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-semibold">
            Incentivizing Community{" "}
            <span className="bg-gradient-to-r from-unit-purple-40 via-unit-purple-20 to-unit-blue-40 from-0% via-90% inline-block text-transparent bg-clip-text h-14">
              Support.
            </span>
          </h2>
          <p className="text-xl font-light">
            Cities lack the financial incentives to garner support from their
            local residents. Wealth inequality is at all time highs, in part due
            to the legacy financial system creating immense barriers for the
            average person to participate in the financial upside of their local
            community.
          </p>
        </motion.div>
      </div>
      <div className="flex items-center gap-x-32 relative">
        <div className="w-0.5 bg-unit-grey-30 h-96" />
        <div className="absolute size-3 border border-unit-grey-10 bg-unit-black-100 rounded-full -left-1.5 top-20" />
        <motion.div
          className="flex flex-col gap-y-3 relative"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-semibold">
            Bridging the wealth{" "}
            <span className="bg-gradient-to-r from-unit-purple-40 via-unit-purple-20 to-unit-blue-40 from-0% via-90% inline-block text-transparent bg-clip-text h-14">
              gap.
            </span>
          </h2>
          <p className="text-xl font-light">
            By helping cities to tokenize their economy, everyone will have
            access to have a financial stake in their favorite cities and
            communities.
          </p>
          <div className="flex items-center gap-x-5">
            <div className="bg-unit-black-90 rounded-md border border-unit-black-60 px-3 py-5 flex flex-col gap-y-3 items-center justify-center mr-5 min-w-36 min-h-36">
              <Image
                src="/images/angels.png"
                alt="City Tokens"
                width={80}
                height={80}
                priority={true}
                className="object-contain grayscale"
              />
              <span className="text-unit-grey-30 font-semibold uppercase">
                $PARIS
              </span>
            </div>
            <div className="bg-unit-black-90 rounded-md border border-unit-black-60 px-3 py-5 flex flex-col gap-y-3 items-center justify-center mr-5 min-w-36 min-h-36">
              <Image
                src="/images/angels.png"
                alt="City Tokens"
                width={80}
                height={80}
                priority={true}
                className="object-contain grayscale"
              />
              <span className="text-unit-grey-30 font-semibold uppercase">
                $LONDON
              </span>
            </div>
            <div className="bg-unit-black-90 rounded-md border border-unit-black-60 px-3 py-5 flex flex-col gap-y-3 items-center justify-center mr-5 min-w-36 min-h-36">
              <Image
                src="/images/angels.png"
                alt="City Tokens"
                width={80}
                height={80}
                priority={true}
                className="object-contain grayscale"
              />
              <span className="text-unit-grey-30 font-semibold uppercase">
                $NEW YORK
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center gap-x-32 relative pr-8">
        <div className="border-l border-b rounded-bl-2xl border-unit-grey-30 w-1/2 h-48" />
      </div>
      <div className="flex items-center gap-x-32 relative px-4">
        <div className="h-36 w-1/2 bg-gradient-to-r from-unit-blue-40 via-unit-purple-20 to-unit-purple-40 from-0% via-90% pr-[1px] pt-[1px] -translate-y-[1px] rounded-tr-2xl">
          <div className="flex h-full w-full bg-unit-black-100 rounded-tr-2xl" />
        </div>
      </div>
    </section>
  );
}

export default OurMission;
