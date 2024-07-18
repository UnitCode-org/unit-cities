"use client";
import unitLogoBlack from "@public/images/unit-logo-black.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";

import { cn } from "@/lib/utils";

import { useIndexRefStore } from "@/store/useIndexRefStore";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(true);
  const checkScroll = () => {
    if (window.scrollY >= 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const { faqRef } = useIndexRefStore();

  return (
    <Sheet>
      <div
        className={cn(
          "fixed left-0 top-0 z-50 w-screen",
          isScrolled && "bg-unit-grey-10 shadow-sm",
        )}
      >
        <div
          className={cn(
            "left-0 right-0 flex w-full items-center gap-x-8 px-8 py-6 font-poppins font-medium transition-all sm:px-16 md:px-24 lg:px-32",
          )}
        >
          <div className="relative mr-auto size-8 lg:size-12">
            <Link href="/">
              <Image
                src={unitLogoBlack}
                alt="Unit Network"
                fill
                sizes="100vw"
                priority={true}
                quality={100}
              />
            </Link>
          </div>
          <div className="hidden items-center gap-x-8 md:flex">
            <Link target="_blank" href="/city-tokens">
              City Tokens
            </Link>
            <div
              className="cursor-pointer"
              onClick={() => {
                if (faqRef && faqRef.current) {
                  const top =
                    faqRef.current.getBoundingClientRect().top +
                    window.scrollY -
                    120;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
            >
              FAQ
            </div>
          </div>
          <SheetTrigger>
            <CgMenuRightAlt className="block size-8 md:hidden" />
          </SheetTrigger>
        </div>
      </div>
      <SheetContent className="w-full">
        <ul className="flex flex-col items-end justify-end gap-y-6 font-poppins text-xl font-semibold">
          <li>
            <SheetClose>
              <Link target="_blank" href="/city-tokens">
                City Tokens
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <div
                onClick={() => {
                  if (faqRef && faqRef.current) {
                    const top =
                      faqRef.current.getBoundingClientRect().top +
                      window.scrollY -
                      120;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                FAQ
              </div>
            </SheetClose>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default Navbar;
