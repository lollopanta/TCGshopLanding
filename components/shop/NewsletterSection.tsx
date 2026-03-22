"use client";

import Image from "next/image";
import { FormEvent } from "react";

export function NewsletterSection() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="relative z-10">
      <div className="div--container lg:pt-16">
        <div className="relative">
          <div className="absolute left-0 top-0 z-10 h-full w-full overflow-hidden rounded-2xl border border-solid border-gridcolor bg-black">
            <Image
              src="/img/bg.jpg"
              alt=""
              width={2100}
              height={880}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-20 common--grid p-5 py-16 2xl:p-10 lg:p-8 lg:min-h-[480px]">
            <div className="order-2 col-span-12 space-y-4 self-center text-center text-white lg:order-1 lg:col-span-6 lg:text-left">
              <h2 className="h1 lg:max-w-[80%]">Iscriviti e risparmia</h2>
              <div className="h6 lg:max-w-[65%]">
                <p>
                  Ogni mese ricevi promozioni esclusive e sconti dedicati: vantaggi
                  veri, riservati solo alla community OnlineTCGShop.
                </p>
              </div>
              <form
                className="form-lollopanta lightStyle newsletter-inline novalidate max-w-lg"
                onSubmit={onSubmit}
              >
                <div className="form-full-col-flex">
                  <input
                    type="email"
                    name="your-email"
                    required
                    placeholder="Indirizzo email*"
                    autoComplete="email"
                  />
                  <div className="form-button-col">
                    <input type="submit" value="Iscriviti" />
                  </div>
                </div>
                <div className="form-full-col mt-3">
                  <label className="flex cursor-pointer items-start gap-2 text-left">
                    <input type="checkbox" defaultChecked className="mt-1" />
                    <span>
                      Accetto il trattamento dei miei dati come descritto nella privacy
                      policy, conformemente alla legge.
                    </span>
                  </label>
                </div>
              </form>
            </div>
            <div className="relative order-1 col-span-12 lg:order-2 lg:col-span-6">
              <div className="relative mx-auto w-[200px] lg:absolute lg:bottom-0 lg:left-0 lg:h-[calc(100%+96px)] lg:w-full">
                <Image
                  src="/img/maestro.png"
                  alt=""
                  width={1121}
                  height={1280}
                  className="h-full w-full object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
