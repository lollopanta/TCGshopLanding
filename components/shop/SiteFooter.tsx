import Image from "next/image";
import Link from "next/link";

const infoLinks = [
  { href: "#", label: "Chi siamo" },
  { href: "#", label: "Contatti" },
  { href: "#", label: "Domande frequenti" },
];

const assistLinks = [
  { href: "#", label: "Spedizione e consegna" },
  { href: "#", label: "Resi e rimborsi" },
  { href: "#", label: "Termini e condizioni" },
  { href: "#", label: "Privacy policy" },
  { href: "#", label: "Cookie policy" },
];

const accountLinks = [
  { href: "#", label: "Accedi" },
  { href: "#", label: "Wishlist" },
];

export function SiteFooter() {
  return (
    <footer className="div--container">
      <div className="space-y-20 overflow-hidden rounded-2xl border border-solid border-gridcolor bg-black p-5 2xl:p-10 lg:p-8">
        <div className="z-10">
          <div className="common--grid !gap-y-10">
            <div className="col-span-12 lg:col-span-3">
              <div className="space-y-6 lg:space-y-10">
                <Link href="/" className="mx-auto block max-w-[230px] lg:ml-0">
                  <span className="text-2xl font-bold tracking-widest text-white uppercase">
                    OnlineTCGShop
                  </span>
                </Link>
                <div className="space-y-3 text-center lg:text-left">
                  <div className="h6 lg:w-[65%] opacity-80">
                    <p>
                      Ogni carta è una storia. La tua.
                      <br />
                      Live opening – Shop online – Prodotti sigillati e da collezione.
                    </p>
                    <p className="mt-2">
                      info@onlinetcgshop.com
                      <br />
                      ordini@onlinetcgshop.com
                    </p>
                  </div>
                  <div id="credits" className="font-supplymono opacity-80">
                    <p className="flex select-none items-center justify-center gap-1 lg:justify-start">
                      <span className="translate-y-[0.5px] text-sm font-normal uppercase leading-none">
                        Crafted by
                      </span>
                      <a
                        className="group flex items-center gap-[1px] transition-colors duration-300 hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://lollopanta.it/"
                      >
                        <span className="text-sm font-normal uppercase leading-none">
                          Lollopanta
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 space-y-3 text-center lg:col-span-3 lg:space-y-4 lg:text-left">
              <div className="h5">Informazioni</div>
              <nav className="footer-menu" aria-label="Footer informazioni">
                <ul id="menu-informazioni" className="menu">
                  {infoLinks.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="col-span-12 space-y-3 text-center lg:col-span-3 lg:space-y-4 lg:text-left">
              <div className="h5">Assistenza</div>
              <nav className="footer-menu" aria-label="Footer assistenza">
                <ul className="menu">
                  {assistLinks.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="col-span-12 space-y-3 text-center lg:col-span-3 lg:space-y-4 lg:text-left">
              <div className="h5">Account</div>
              <nav className="footer-menu" aria-label="Footer account">
                <ul className="menu">
                  {accountLinks.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="h6 opacity-40">
                Orari servizio clienti:
                <br />
                dal Lunedi al Venerdì
                <br />
                9.30 - 13.00 / 14 - 18.30
                <br />
                <a href="mailto:info@onlinetcgshop.com">info@onlinetcgshop.com</a>
                <br />
                <a href="mailto:ordini@onlinetcgshop.com">ordini@onlinetcgshop.com</a>
              </div>
              <div className="btn-container h6 justify-center lg:justify-start">
                <a
                  href="https://www.tiktok.com/@onlinetcgshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-5 w-5"
                  >
                    <path
                      fill="currentColor"
                      d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/onlinetcgshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-12 gap-1 lg:gap-4">
            <div className="col-span-12 self-center text-center lg:text-left">
              <div className="h6 opacity-40">
                PARTITA IVA QUI: 11111111111111111111
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
