import { addHours, isFuture, isPast, parse } from "date-fns";
import { InfoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cityTokens } from "@/constant/CityToken";

function CityToken() {
  const launchingSoon = cityTokens.filter((token) => {
    const timezoneOffset = parseInt(
      token.schedule.timezone.replace("GMT", "").trim(),
    );
    const scheduleDateWithoutTimezone = parse(
      `${token.schedule.start_date}, ${token.schedule.year}, ${token.schedule.time}`,
      "MMM dd, yyyy, hh.mm a",
      new Date(),
    );
    const scheduleDate = addHours(scheduleDateWithoutTimezone, timezoneOffset);
    return isFuture(scheduleDate);
  });
  const activeNow = cityTokens.filter((token) => {
    const timezoneOffset = parseInt(
      token.schedule.timezone.replace("GMT", "").trim(),
    );
    const scheduleDateWithoutTimezone = parse(
      `${token.schedule.start_date}, ${token.schedule.year}, ${token.schedule.time}`,
      "MMM dd, yyyy, hh.mm a",
      new Date(),
    );
    const scheduleDate = addHours(scheduleDateWithoutTimezone, timezoneOffset);
    return isPast(scheduleDate);
  });

  return (
    <Layout>
      <section className="flex flex-col items-center gap-y-8 px-8 pt-48 text-center md:px-16 xl:px-56 2xl:px-96">
        <h1 className="h-14 text-5xl font-semibold">
          <span className="text-unit-purple-60">City</span> Tokens
        </h1>
        <p className="mb-12 text-xl 2xl:px-32">
          At Unit Network, we're on a mission to address financial disparities
          by democratizing access to community wealth, fostering inclusive
          growth
        </p>
        <Card className="w-full border border-unit-grey-20 bg-unit-grey-10">
          <CardHeader className="border-b border-unit-grey-20">
            <CardTitle className="flex items-center gap-x-2 font-lato text-xl font-normal text-unit-black-60">
              Launching Soon <InfoIcon className="text-unit-grey-30" />
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full p-0">
            {launchingSoon.map((cityToken, index) => (
              <div
                key={cityToken.name}
                className={cn(
                  "flex w-full items-center gap-x-12 px-6",
                  launchingSoon.length - 1 !== index &&
                    "border-b border-unit-grey-20",
                )}
              >
                <div className="flex w-full items-start gap-x-5 py-4 md:items-center">
                  <div className="hidden flex-col items-center justify-center rounded-xl border border-unit-purple-10 text-unit-purple-60 md:flex">
                    <div className="rounded-t-xl bg-unit-purple-10 px-3 py-1 text-sm">
                      {cityToken.schedule.start_date.slice(0, 3).toUpperCase()}
                    </div>
                    <div className="text-2xl">
                      {cityToken.schedule.start_date.slice(4)}
                    </div>
                  </div>
                  <div className="relative flex size-16 min-w-16 items-center justify-center rounded-full bg-unit-black-80 text-sm font-semibold text-unit-grey-10 md:size-20 md:min-w-20 md:text-base">
                    <Image
                      src={cityToken.image}
                      alt={cityToken.name}
                      priority={true}
                      quality={100}
                      fill
                      sizes="100vw"
                      className={cn("object-cover")}
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-x-5 gap-y-2 md:flex-row md:items-center">
                    <div className="flex flex-col items-start gap-y-2 text-start">
                      <h4 className="text-lg font-semibold md:text-xl">
                        {cityToken.headline}
                      </h4>
                      <p className="text-sm text-unit-grey-40 md:text-base">
                        {cityToken.schedule.day},{" "}
                        {cityToken.schedule.start_date} -{" "}
                        {cityToken.schedule.end_date}, {cityToken.schedule.time}{" "}
                        {cityToken.schedule.timezone}
                      </p>
                    </div>
                    <Link
                      target="_blank"
                      href={cityToken.link}
                      className="md:ml-auto"
                    >
                      <Button className="rounded-full bg-unit-purple-40 px-8 py-2 hover:bg-unit-purple-40 hover:opacity-90 sm:py-2 sm:text-base md:py-2">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="w-full border border-unit-grey-20 bg-unit-grey-10">
          <CardHeader className="border-b border-unit-grey-20">
            <CardTitle className="flex items-center gap-x-2 font-lato text-xl font-normal text-unit-black-60">
              Active Now <InfoIcon className="text-unit-grey-30" />
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full p-0">
            {activeNow.map((cityToken, index) => (
              <div
                key={cityToken.name}
                className={cn(
                  "flex w-full items-center gap-x-12 px-6",
                  launchingSoon.length - 1 !== index &&
                    "border-b border-unit-grey-20",
                )}
              >
                <div className="flex w-full items-start gap-x-5 py-4 md:items-center">
                  <div className="hidden flex-col items-center justify-center rounded-xl border border-unit-purple-10 text-unit-purple-60 md:flex">
                    <div className="rounded-t-xl bg-unit-purple-10 px-3 py-1 text-sm">
                      {cityToken.schedule.start_date.slice(0, 3).toUpperCase()}
                    </div>
                    <div className="text-2xl">
                      {cityToken.schedule.start_date.slice(4)}
                    </div>
                  </div>
                  <div className="relative flex size-16 min-w-16 items-center justify-center rounded-full bg-unit-black-80 text-sm font-semibold text-unit-grey-10 md:size-20 md:min-w-20 md:text-base">
                    <Image
                      src={cityToken.image}
                      alt={cityToken.name}
                      priority={true}
                      quality={100}
                      fill
                      sizes="100vw"
                      className={cn("object-cover")}
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-x-5 gap-y-2 md:flex-row md:items-center">
                    <div className="flex flex-col items-start gap-y-2 text-start">
                      <h4 className="text-lg font-semibold md:text-xl">
                        {cityToken.headline}
                      </h4>
                      <p className="text-sm text-unit-grey-40 md:text-base">
                        {cityToken.schedule.day},{" "}
                        {cityToken.schedule.start_date} -{" "}
                        {cityToken.schedule.end_date}, {cityToken.schedule.time}{" "}
                        {cityToken.schedule.timezone}
                      </p>
                    </div>
                    <Link
                      target="_blank"
                      href={cityToken.link}
                      className="md:ml-auto"
                    >
                      <Button className="rounded-full bg-unit-purple-40 px-8 py-2 hover:bg-unit-purple-40 hover:opacity-90 sm:py-2 sm:text-base md:py-2">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}

export default CityToken;
