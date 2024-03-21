"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function OurMission() {
  return (
    <section className="flex w-full flex-col bg-unit-black-100 px-8 text-unit-grey-10 md:px-16 xl:px-56 2xl:px-128">
      <div className="relative flex items-start gap-x-8 sm:gap-x-12 md:hidden md:items-center md:gap-x-24 xl:gap-x-32">
        <div className="h-32 w-[1px] bg-unit-grey-30" />
      </div>
      <div className="relative flex items-start gap-x-8 sm:gap-x-12 md:items-center md:gap-x-24 xl:gap-x-32">
        <div className="h-96 w-[1px] bg-unit-grey-30" />
        <div className="absolute -left-1.5 top-4 size-3 rounded-full border border-unit-grey-10 bg-unit-black-100 md:top-20" />
        <motion.div
          className="relative flex flex-col gap-y-3"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold md:text-5xl">
            Our{" "}
            <span className="inline-block h-12 bg-gradient-to-r from-unit-purple-40 from-0% via-unit-purple-20 via-90% to-unit-blue-40 bg-clip-text text-transparent md:h-14">
              Mission.
            </span>
          </h2>
          <p className="text-base font-light md:text-xl">
            At Unit Network, we're on a mission to address financial disparities
            by democratizing access to community wealth, fostering inclusive
            growth, and incentivizing top talent to contribute to our collective
            mission. We empower cities and communities worldwide to establish
            their own ecosystem tokens, facilitating equitable participation in
            local economies.
          </p>
        </motion.div>
      </div>
      <div className="relative flex items-start gap-x-8 sm:gap-x-12 md:items-center md:gap-x-24 xl:gap-x-32">
        <div className="h-96 w-[1px] bg-unit-grey-30" />
        <div className="absolute -left-1.5 top-4 size-3 rounded-full border border-unit-grey-10 bg-unit-black-100 md:top-20" />
        <motion.div
          className="relative flex flex-col gap-y-3"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold md:text-5xl">
            Incentivizing Community{" "}
            <span className="inline-block h-12 bg-gradient-to-r from-unit-purple-40 from-0% via-unit-purple-20 via-90% to-unit-blue-40 bg-clip-text text-transparent md:h-14">
              Support.
            </span>
          </h2>
          <p className="text-base font-light md:text-xl">
            Cities lack the financial incentives to garner support from their
            local residents. Wealth inequality is at all time highs, in part due
            to the legacy financial system creating immense barriers for the
            average person to participate in the financial upside of their local
            community.
          </p>
        </motion.div>
      </div>
      <div className="relative flex items-start gap-x-8 sm:gap-x-12 md:items-center md:gap-x-24 xl:gap-x-32">
        <div className="h-48 w-[1px] bg-unit-grey-30 md:h-96" />
        <div className="absolute -left-1.5 top-4 size-3 rounded-full border border-unit-grey-10 bg-unit-black-100 md:top-20" />
        <motion.div
          className="relative flex flex-col gap-y-3"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold md:text-5xl">
            Bridging the wealth{" "}
            <span className="inline-block h-12 bg-gradient-to-r from-unit-purple-40 from-0% via-unit-purple-20 via-90% to-unit-blue-40 bg-clip-text text-transparent md:h-14">
              gap.
            </span>
          </h2>
          <p className="text-base font-light md:text-xl">
            By helping cities to tokenize their economy, everyone will have
            access to have a financial stake in their favorite cities and
            communities.
          </p>
          <div className="hidden items-center gap-x-5 md:flex">
            <div className="mr-5 flex min-h-36 min-w-36 flex-col items-center justify-center gap-y-3 rounded-md border border-unit-black-60 bg-unit-black-90 px-3 py-5">
              <Image
                src="/images/angels.png"
                alt="City Tokens"
                width={80}
                height={80}
                priority={true}
                className="object-contain grayscale"
              />
              <span className="font-semibold uppercase text-unit-grey-30">
                $PARIS
              </span>
            </div>
            <div className="mr-5 flex min-h-36 min-w-36 flex-col items-center justify-center gap-y-3 rounded-md border border-unit-black-60 bg-unit-black-90 px-3 py-5">
              <Image
                src="/images/angels.png"
                alt="City Tokens"
                width={80}
                height={80}
                priority={true}
                className="object-contain grayscale"
              />
              <span className="font-semibold uppercase text-unit-grey-30">
                $LONDON
              </span>
            </div>
            <div className="mr-5 flex min-h-36 min-w-36 flex-col items-center justify-center gap-y-3 rounded-md border border-unit-black-60 bg-unit-black-90 px-3 py-5">
              <Image
                src="/images/angels.png"
                alt="City Tokens"
                width={80}
                height={80}
                priority={true}
                className="object-contain grayscale"
              />
              <span className="font-semibold uppercase text-unit-grey-30">
                $NEW YORK
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative flex items-start gap-x-8 pr-8 sm:gap-x-12 md:items-center md:gap-x-24 xl:gap-x-32">
        <div className="h-48 w-1/2 rounded-bl-2xl border-b border-l border-unit-grey-30" />
      </div>
      <div className="relative flex items-start gap-x-8 px-4 sm:gap-x-12 md:items-center md:gap-x-24 xl:gap-x-32">
        <div className="h-36 w-1/2 -translate-y-[1px] rounded-tr-2xl bg-gradient-to-r from-unit-blue-40 from-0% via-unit-purple-20 via-90% to-unit-purple-40 pr-[1px] pt-[1px]">
          <div className="flex h-full w-full rounded-tr-2xl bg-unit-black-100" />
        </div>
      </div>
    </section>
  );
}

export default OurMission;
