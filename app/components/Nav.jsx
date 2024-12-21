"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/resume", name: "Resume" },
  { path: "/work", name: "Work" },
  { path: "/contact", name: "Contact" },
];
export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link key={link.path} href={link.path} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
