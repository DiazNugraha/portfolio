import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { Footer, HamburgerMenu, Sidebar } from ".";
import { cn } from "@/utils/cn";

interface IMainLayoutProps {
  hideFooter?: boolean;
  className?: string;
}

export default function MainLayout({
  hideFooter = false,
  children,
  className,
}: IMainLayoutProps & PropsWithChildren) {
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

  const isMobileSize = useMemo(() => {
    return screenSize ? screenSize < 1024 : false;
  }, [screenSize]);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex h-full w-full justify-center">
      <div className="h-full w-full min-w-0 px-4 lg:w-[30%] lg:px-0">
        <div
          className={cn(
            "flex px-5 py-36 text-white flex-col items-center gap-y-20",
            className,
          )}
        >
          {children}
          {!hideFooter && <Footer />}
        </div>
      </div>

      {isMobileSize ? <HamburgerMenu /> : <Sidebar />}
    </div>
  );
}
