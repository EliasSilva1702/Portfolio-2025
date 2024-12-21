"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/resume", name: "Resume" },
  { path: "/work", name: "Work" },
  { path: "/contact", name: "Contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-3xl text-accent mx-auto" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Elias Silva <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center gap-8 ">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              }  text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
