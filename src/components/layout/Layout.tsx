import { cn } from "@/lib/utils";

import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={cn(
        "flex min-h-screen w-screen flex-col items-center justify-center bg-unit-grey-10 font-lato text-unit-black-80",
        className,
      )}
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
