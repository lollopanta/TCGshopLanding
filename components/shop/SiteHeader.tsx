"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { brandLogos } from "@/lib/shop-data";

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("noscrollbar", mobileOpen || searchOpen);
    return () => document.documentElement.classList.remove("noscrollbar");
  }, [mobileOpen, searchOpen]);

  return (
    <>
      <header
        id="header-desktop"
        className="div--container relative sticky top-8 z-[9999] hidden w-full lg:block"
      >
        <div
          style={{ backdropFilter: "blur(5px)" }}
          className="relative z-20 rounded-2xl border border-solid border-gridcolor bg-black/80"
        >
          <div className="grid grid-cols-[1fr_auto_1fr] items-center px-5 py-5 lg:px-8 2xl:px-10">
            <div className="flex items-center">
              <Link href="/" className="block w-full max-w-[120px]">
                <span className="text-xl font-bold tracking-widest text-white uppercase">
                  OnlineTCGShop
                </span>
              </Link>
            </div>
            <div className="flex h-full items-center justify-center">
              <nav
                className="header-menu-container h-full"
                aria-label="Navigazione principale"
              >
                <ul id="menu-menu-generale" className="menu">
                  <li className="current-menu-item menu-item">
                    <Link href="/" aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li className="with-megamenu menu-item-has-children menu-item">
                    <Link href="#">Pokémon</Link>
                    <div className="sub-menu-wrap">
                      <ul className="sub-menu">
                        <li>
                          <Link href="#">Pokémon ITA</Link>
                        </li>
                        <li>
                          <Link href="#">Pokémon JAP</Link>
                        </li>
                        <li>
                          <Link href="#">Pokémon ENG</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="with-megamenu menu-item-has-children menu-item">
                    <Link href="#">One Piece</Link>
                    <div className="sub-menu-wrap">
                      <ul className="sub-menu">
                        <li>
                          <Link href="#">One Piece JAP</Link>
                        </li>
                        <li>
                          <Link href="#">One Piece ENG</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item">
                    <Link href="#">Yu-Gi-Oh</Link>
                  </li>
                  <li className="with-megamenu menu-item-has-children menu-item">
                    <Link href="#">Carte</Link>
                    <div className="sub-menu-wrap">
                      <ul className="sub-menu border border-gridcolor bg-black/95 p-3 shadow-xl backdrop-blur-md grid max-w-[640px] grid-cols-3 gap-4 sm:grid-cols-5">
                        {brandLogos.map((b) => (
                          <li key={b.alt} className="!p-0">
                            <Link href={b.href} className="block">
                              <Image
                                src={b.src}
                                alt={b.alt}
                                width={140}
                                height={60}
                                className="mx-auto max-h-12 w-auto object-contain"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item-has-children menu-item">
                    <Link href="#">Extra</Link>
                    <div className="sub-menu-wrap">
                      <ul className="sub-menu">
                        <li>
                          <Link href="#">Accessori</Link>
                        </li>
                        <li>
                          <Link href="#">Merch</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                id="js--search-trigger"
                className="h6 flex cursor-pointer items-center"
                onClick={() => setSearchOpen((v) => !v)}
                aria-expanded={searchOpen}
              >
                <span className="material-symbols-outlined !text-[22px]">search</span>
              </button>
              <Link href="#" className="h6 flex items-center">
                <span className="material-symbols-outlined !text-[22px]">heart_plus</span>
              </Link>
              <Link href="#" className="h6 flex items-center gap-[2px] uppercase">
                <span className="material-symbols-outlined !text-[22px]">
                  shopping_bag
                </span>
                <span className="cart-counter-fragment">0</span>
              </Link>
              <Link href="#" className="h6 flex items-center">
                <span className="material-symbols-outlined !text-[22px]">
                  account_circle
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div
          id="js--search-bar"
          className={`div--container absolute left-0 right-0 top-full z-10 pt-2 transition-all duration-500 ${searchOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
            }`}
        >
          <div
            style={{ backdropFilter: "blur(5px)" }}
            className="rounded-2xl border border-solid border-gridcolor bg-black/80 p-3"
          >
            <form role="search" className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="site-search" className="sr-only">
                Cerca prodotti
              </label>
              <input
                id="site-search"
                type="search"
                placeholder="Cerca..."
                className="focus:border-primary w-full rounded-lg border border-gridcolor bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg border border-gridcolor bg-[#0a0a0a] px-4 text-white"
                aria-label="Cerca"
              >
                <span className="material-symbols-outlined text-[22px]">search</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      <nav
        id="header-mobile"
        className="div--container sticky top-4 z-[9999] block w-full lg:hidden"
      >
        <div className="common--grid overflow-hidden rounded-2xl border border-solid border-gridcolor bg-black px-4 py-4">
          <div className="col-span-5 flex items-center gap-3 self-center">
            <button
              type="button"
              id="js--openmenu"
              className="h6 flex cursor-pointer items-center gap-2"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <Link href="/" className="block w-full max-w-[100px]">
              <span className="text-lg font-bold tracking-widest text-white uppercase">
                OnlineTCGShop
              </span>
            </Link>
          </div>
          <div className="col-span-7 flex items-center justify-end gap-2 self-center">
            <Link href="#" className="h6 flex items-center">
              <span className="material-symbols-outlined !text-[22px]">heart_plus</span>
            </Link>
            <Link href="#" className="h6 flex items-center gap-[2px] uppercase">
              <span className="material-symbols-outlined !text-[22px]">
                shopping_bag
              </span>
              <span>0</span>
            </Link>
            <Link href="#" className="h6 flex items-center">
              <span className="material-symbols-outlined !text-[22px]">
                account_circle
              </span>
            </Link>
          </div>
        </div>

        <div
          id="header-mobile-overlay"
          style={{ backdropFilter: "blur(4px)" }}
          className={`fixed left-0 top-0 z-30 flex h-[100dvh] w-full flex-col bg-black/40 transition-transform duration-500 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="div--container flex min-h-full flex-col gap-6 overflow-y-scroll pt-4">
            <div className="navigator flex items-center justify-between rounded-2xl border border-gridcolor bg-black px-4 py-4">
              <Link href="/" className="block max-w-[100px]">
                <span className="text-lg font-bold tracking-widest text-white uppercase">
                  OnlineTCGShop
                </span>
              </Link>
              <button
                type="button"
                id="js--closemenu"
                className="h6 flex cursor-pointer items-center"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-4 px-2">
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="search"
                  placeholder="Cerca..."
                  className="focus:border-primary w-full rounded-lg border border-gridcolor bg-[#0a0a0a] px-3 py-2 text-sm"
                />
              </form>
              <ul className="space-y-1 text-sm font-medium uppercase">
                <li>
                  <Link href="/" onClick={() => setMobileOpen(false)} className="block py-2">
                    Home
                  </Link>
                </li>
                <li>
                  <button
                    className="flex w-full items-center justify-between py-2 text-left"
                    onClick={() => toggleMenu("pokemon")}
                  >
                    <span>Pokémon</span>
                    <span className="material-symbols-outlined text-[18px]">
                      {expandedMenu === "pokemon" ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMenu === "pokemon" ? "max-h-48" : "max-h-0"}`}>
                    <ul className="space-y-2 pb-2 pl-4 text-xs normal-case text-white/70">
                      <li>
                        <Link href="#" onClick={() => setMobileOpen(false)} className="block py-1">Pokémon ITA</Link>
                      </li>
                      <li>
                        <Link href="#" onClick={() => setMobileOpen(false)} className="block py-1">Pokémon JAP</Link>
                      </li>
                      <li>
                        <Link href="#" onClick={() => setMobileOpen(false)} className="block py-1">Pokémon ENG</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <button
                    className="flex w-full items-center justify-between py-2 text-left"
                    onClick={() => toggleMenu("onepiece")}
                  >
                    <span>One Piece</span>
                    <span className="material-symbols-outlined text-[18px]">
                      {expandedMenu === "onepiece" ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMenu === "onepiece" ? "max-h-48" : "max-h-0"}`}>
                    <ul className="space-y-2 pb-2 pl-4 text-xs normal-case text-white/70">
                      <li>
                        <Link href="#" onClick={() => setMobileOpen(false)} className="block py-1">One Piece JAP</Link>
                      </li>
                      <li>
                        <Link href="#" onClick={() => setMobileOpen(false)} className="block py-1">One Piece ENG</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="#" onClick={() => setMobileOpen(false)} className="block py-2">
                    Yu-Gi-Oh
                  </Link>
                </li>
                <li>
                  <button
                    className="flex w-full items-center justify-between py-2 text-left"
                    onClick={() => toggleMenu("carte")}
                  >
                    <span>Carte</span>
                    <span className="material-symbols-outlined text-[18px]">
                      {expandedMenu === "carte" ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMenu === "carte" ? "max-h-[800px]" : "max-h-0"}`}>
                    <ul className="grid grid-cols-2 gap-2 pb-2 pl-4 text-xs normal-case text-white/70">
                      {brandLogos.map((b) => (
                        <li key={b.alt}>
                          <Link href={b.href} onClick={() => setMobileOpen(false)} className="block py-1">
                            {b.alt}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="#" onClick={() => setMobileOpen(false)} className="block py-2">
                    Novità
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={() => setMobileOpen(false)} className="block py-2">
                    Saldi
                  </Link>
                </li>
                <li>
                  <button
                    className="flex w-full items-center justify-between py-2 text-left"
                    onClick={() => toggleMenu("extra")}
                  >
                    <span>Extra</span>
                    <span className="material-symbols-outlined text-[18px]">
                      {expandedMenu === "extra" ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMenu === "extra" ? "max-h-48" : "max-h-0"}`}>
                    <ul className="space-y-2 pb-2 pl-4 text-xs normal-case text-white/70">
                      <li>
                        <Link href="#" onClick={() => setMobileOpen(false)} className="block py-1">Accessori</Link>
                      </li>
                      <li>
                        <Link href="#" onClick={() => setMobileOpen(false)} className="block py-1">Merch</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
