"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { roadmaps } from "@/constant/Roadmap";

function Roadmap() {
  return (
    <section className="translate-y-1 flex flex-col items-center gap-y-8">
      <div className="relative flex flex-col items-center">
        <div className="w-[1px] h-24 bg-gradient-to-b from-unit-blue-40 via-unit-purple-20 to-unit-purple-40 from-0% via-90%" />
        <div className="size-3 bg-unit-blue-40 rounded-full absolute bottom-0" />
      </div>
      <h2 className="text-4xl font-semibold">
        2024 Launch{" "}
        <span className="from-unit-purple-20 to-unit-blue-40 from-0% via-90% bg-gradient-to-r inline-block text-transparent bg-clip-text">
          Roadmap
        </span>
      </h2>
      <p className="text-xl text-center px-8 xl:px-56 2xl:px-128">
        By helping cities to tokenize their economy, everyone will have access
        to have a financial stake in their favorite cities and communities.
      </p>
      <div className="flex flex-col w-full items-center">
        {roadmaps.map((roadmap, index) => (
          <div
            key={roadmap.title}
            className={cn(
              "flex gap-x-2",
              index % 2 !== 0 && "flex-row-reverse",
            )}
          >
            <div
              className={cn(
                "w-[1px] bg-unit-grey-40",
                roadmaps.length === index + 1 ? "h-16" : "h-32",
              )}
            />
            {index === 0 && (
              <div className="size-3 border border-unit-grey-40 bg-unit-grey-10 rounded-full absolute -translate-x-1.5" />
            )}
            <div
              className={cn(
                "size-3 border border-unit-grey-40 bg-unit-grey-10 rounded-full absolute translate-y-16",
                index % 2 === 0 ? "-translate-x-1.5" : "translate-x-1.5",
              )}
            />
            <motion.div
              className={cn(
                "shadow-lg drop-shadow-sm lg:flex w-fit absolute",
                index % 2 !== 0 && "flex-row-reverse",
              )}
              initial={{ opacity: 0, x: index % 2 === 0 ? 26 : -26 }}
              whileInView={{ opacity: 1, x: index % 2 === 0 ? 16 : -16 }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-52">
                <Image
                  src={roadmap.image}
                  alt={roadmap.title}
                  priority={true}
                  quality={100}
                  fill
                  sizes="100vw"
                  data-loaded="false"
                  onLoad={(event) => {
                    event.currentTarget.setAttribute("data-loaded", "true");
                  }}
                  className={cn(
                    "peer -z-10 object-cover data-[loaded=false]:hidden",
                    index % 2 === 0 ? "rounded-l-md" : "rounded-r-md",
                  )}
                />
                <div
                  className={cn(
                    "absolute -z-10 h-full w-full bg-black opacity-40 peer-data-[loaded=false]:hidden",
                    index % 2 === 0 ? "rounded-l-md" : "rounded-r-md",
                  )}
                />
                <div
                  className={cn(
                    "absolute -z-10 h-full w-full animate-pulse bg-unit-black-60 peer-data-[loaded=true]:hidden",
                    index % 2 === 0 ? "rounded-l-md" : "rounded-r-md",
                  )}
                />
                <div className="flex h-full w-full flex-col items-center justify-center gap-y-2 px-6 py-8 font-poppins text-white">
                  <span className="text-2xl font-semibold">{roadmap.date}</span>
                  <span className="font-medium">{roadmap.month_year}</span>
                </div>
              </div>
              <Card className={cn("flex flex-1 items-center p-0")}>
                <CardHeader
                  className={cn(
                    "h-full px-6 py-3 justify-between",
                    index % 2 === 0 ? "items-start" : "items-end",
                  )}
                >
                  <CardTitle
                    className={cn(
                      "text-2xl flex flex-col",
                      index % 2 === 0
                        ? "items-start text-start"
                        : "items-end text-end",
                    )}
                  >
                    <span className="text-sm text-unit-grey-40 font-normal tracking-wide w-fit">
                      UNIT CITIES
                    </span>
                    <span className="w-fit">{roadmap.title}</span>
                  </CardTitle>
                  <CardDescription className="text-base text-unit-grey-40">
                    {roadmap.location}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Roadmap;
