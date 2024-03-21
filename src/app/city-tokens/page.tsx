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
      <section className="flex flex-col px-8 md:px-16 xl:px-56 2xl:px-96 items-center text-center gap-y-8 pt-48">
        <h1 className="text-5xl font-semibold h-14">
          <span className="text-unit-purple-60">City</span> Tokens
        </h1>
        <p className="text-xl 2xl:px-32 mb-12">
          At Unit Network, we're on a mission to address financial disparities
          by democratizing access to community wealth, fostering inclusive
          growth
        </p>
        <Card className="w-full bg-unit-grey-10 border border-unit-grey-20">
          <CardHeader className="border-b border-unit-grey-20">
            <CardTitle className="flex items-center gap-x-2 text-unit-black-60 text-xl font-normal font-lato">
              Launching Soon <InfoIcon className="text-unit-grey-30" />
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-0 w-full">
            <div className="flex items-center gap-x-12 w-full">
              <div className="flex items-start md:items-center gap-x-5 py-4 w-full">
                <div className="hidden md:flex flex-col items-center justify-center rounded-xl text-unit-purple-60 border border-unit-purple-10">
                  <div className="bg-unit-purple-10 px-3 py-1 rounded-t-xl text-sm">
                    MAR
                  </div>
                  <div className="text-2xl">4</div>
                </div>
                <div className="rounded-full relative bg-unit-black-80 size-16 md:size-20 text-sm md:text-base flex items-center justify-center text-unit-grey-10 font-semibold min-w-16 md:min-w-20">
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
                <div className="flex flex-col md:flex-row items-start md:items-center gap-x-5 gap-y-2 w-full">
                  <div className="flex flex-col gap-y-2 items-start text-start">
                    <h4 className="text-lg md:text-xl font-semibold">
                      $PARIS token from Unit Network
                    </h4>
                    <p className="text-unit-grey-40 text-sm md:text-base">
                      Fri, Apr 26 - Apr 28, 11.00 PM GMT +1
                    </p>
                  </div>
                  <Link href="#" className="md:ml-auto">
                    <Button className="rounded-full px-8 py-2 bg-unit-purple-40 sm:py-2 sm:text-base md:py-2 hover:bg-unit-purple-40 hover:opacity-90">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full bg-unit-grey-10 border border-unit-grey-20">
          <CardHeader className="border-b border-unit-grey-20">
            <CardTitle className="flex items-center gap-x-2 text-unit-black-60 text-xl font-normal font-lato">
              Active Now <InfoIcon className="text-unit-grey-30" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 w-full">
            <div className="flex items-center gap-x-12 w-full border-b border-unit-grey-20 px-6">
              <div className="flex items-start md:items-center gap-x-5 py-4 w-full">
                <div className="hidden md:flex flex-col items-center justify-center rounded-xl text-unit-purple-60 border border-unit-purple-10">
                  <div className="bg-unit-purple-10 px-3 py-1 rounded-t-xl text-sm">
                    MAR
                  </div>
                  <div className="text-2xl">4</div>
                </div>
                <div className="rounded-full relative bg-unit-black-80 size-16 md:size-20 text-sm md:text-base flex items-center justify-center text-unit-grey-10 font-semibold min-w-16 md:min-w-20">
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
                <div className="flex flex-col md:flex-row items-start md:items-center gap-x-5 gap-y-2 w-full">
                  <div className="flex flex-col gap-y-2 items-start text-start">
                    <h4 className="text-lg md:text-xl font-semibold">
                      $PARIS token from Unit Network
                    </h4>
                    <p className="text-unit-grey-40 text-sm md:text-base">
                      Fri, Apr 26 - Apr 28, 11.00 PM GMT +1
                    </p>
                  </div>
                  <Link href="#" className="md:ml-auto">
                    <Button className="rounded-full px-8 py-2 bg-unit-purple-40 sm:py-2 sm:text-base md:py-2 hover:bg-unit-purple-40 hover:opacity-90">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-12 w-full px-6">
              <div className="flex items-start md:items-center gap-x-5 py-4 w-full">
                <div className="hidden md:flex flex-col items-center justify-center rounded-xl text-unit-purple-60 border border-unit-purple-10">
                  <div className="bg-unit-purple-10 px-3 py-1 rounded-t-xl text-sm">
                    MAR
                  </div>
                  <div className="text-2xl">4</div>
                </div>
                <div className="rounded-full relative bg-unit-black-80 size-16 md:size-20 text-sm md:text-base flex items-center justify-center text-unit-grey-10 font-semibold min-w-16 md:min-w-20">
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
                <div className="flex flex-col md:flex-row items-start md:items-center gap-x-5 gap-y-2 w-full">
                  <div className="flex flex-col gap-y-2 items-start text-start">
                    <h4 className="text-lg md:text-xl font-semibold">
                      $PARIS token from Unit Network
                    </h4>
                    <p className="text-unit-grey-40 text-sm md:text-base">
                      Fri, Apr 26 - Apr 28, 11.00 PM GMT +1
                    </p>
                  </div>
                  <Link href="#" className="md:ml-auto">
                    <Button className="rounded-full px-8 py-2 bg-unit-purple-40 sm:py-2 sm:text-base md:py-2 hover:bg-unit-purple-40 hover:opacity-90">
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
