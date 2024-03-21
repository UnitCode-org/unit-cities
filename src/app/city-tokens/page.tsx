import { InfoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function CityToken() {
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
          <CardContent className="w-full pb-0">
            <div className="flex w-full items-center gap-x-12">
              <div className="flex w-full items-start gap-x-5 py-4 md:items-center">
                <div className="hidden flex-col items-center justify-center rounded-xl border border-unit-purple-10 text-unit-purple-60 md:flex">
                  <div className="rounded-t-xl bg-unit-purple-10 px-3 py-1 text-sm">
                    MAR
                  </div>
                  <div className="text-2xl">4</div>
                </div>
                <div className="relative flex size-16 min-w-16 items-center justify-center rounded-full bg-unit-black-80 text-sm font-semibold text-unit-grey-10 md:size-20 md:min-w-20 md:text-base">
                  <Image
                    src="/images/token/placeholder.png"
                    alt="Unit City"
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
                      $PARIS token from Unit Network
                    </h4>
                    <p className="text-sm text-unit-grey-40 md:text-base">
                      Fri, Apr 26 - Apr 28, 11.00 PM GMT +1
                    </p>
                  </div>
                  <Link href="#" className="md:ml-auto">
                    <Button className="rounded-full bg-unit-purple-40 px-8 py-2 hover:bg-unit-purple-40 hover:opacity-90 sm:py-2 sm:text-base md:py-2">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full border border-unit-grey-20 bg-unit-grey-10">
          <CardHeader className="border-b border-unit-grey-20">
            <CardTitle className="flex items-center gap-x-2 font-lato text-xl font-normal text-unit-black-60">
              Active Now <InfoIcon className="text-unit-grey-30" />
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full p-0">
            <div className="flex w-full items-center gap-x-12 border-b border-unit-grey-20 px-6">
              <div className="flex w-full items-start gap-x-5 py-4 md:items-center">
                <div className="hidden flex-col items-center justify-center rounded-xl border border-unit-purple-10 text-unit-purple-60 md:flex">
                  <div className="rounded-t-xl bg-unit-purple-10 px-3 py-1 text-sm">
                    MAR
                  </div>
                  <div className="text-2xl">4</div>
                </div>
                <div className="relative flex size-16 min-w-16 items-center justify-center rounded-full bg-unit-black-80 text-sm font-semibold text-unit-grey-10 md:size-20 md:min-w-20 md:text-base">
                  <Image
                    src="/images/token/placeholder.png"
                    alt="Unit City"
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
                      $PARIS token from Unit Network
                    </h4>
                    <p className="text-sm text-unit-grey-40 md:text-base">
                      Fri, Apr 26 - Apr 28, 11.00 PM GMT +1
                    </p>
                  </div>
                  <Link href="#" className="md:ml-auto">
                    <Button className="rounded-full bg-unit-purple-40 px-8 py-2 hover:bg-unit-purple-40 hover:opacity-90 sm:py-2 sm:text-base md:py-2">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center gap-x-12 px-6">
              <div className="flex w-full items-start gap-x-5 py-4 md:items-center">
                <div className="hidden flex-col items-center justify-center rounded-xl border border-unit-purple-10 text-unit-purple-60 md:flex">
                  <div className="rounded-t-xl bg-unit-purple-10 px-3 py-1 text-sm">
                    MAR
                  </div>
                  <div className="text-2xl">4</div>
                </div>
                <div className="relative flex size-16 min-w-16 items-center justify-center rounded-full bg-unit-black-80 text-sm font-semibold text-unit-grey-10 md:size-20 md:min-w-20 md:text-base">
                  <Image
                    src="/images/token/placeholder.png"
                    alt="Unit City"
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
                      $PARIS token from Unit Network
                    </h4>
                    <p className="text-sm text-unit-grey-40 md:text-base">
                      Fri, Apr 26 - Apr 28, 11.00 PM GMT +1
                    </p>
                  </div>
                  <Link href="#" className="md:ml-auto">
                    <Button className="rounded-full bg-unit-purple-40 px-8 py-2 hover:bg-unit-purple-40 hover:opacity-90 sm:py-2 sm:text-base md:py-2">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}

export default CityToken;
