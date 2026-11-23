"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Explore" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

function isActivePath(href: string, pathname: string) {
  if (href === "/") return pathname === href;
  if (href === "/experiences") {
    return pathname === href || pathname.startsWith(`${href}/`);
  }
  return pathname === href;
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link className="font-semibold text-slate-900" href="/">
          Wanderlust Explorer
        </Link>
        <div className="flex flex-wrap items-center gap-1">
          {navigationItems.map(({ href, label }) => {
            const active = isActivePath(href, pathname);

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-slate-100 font-medium text-slate-950"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}