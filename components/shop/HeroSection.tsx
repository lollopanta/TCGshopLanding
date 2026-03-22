"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const heroSlides: {
  desktop: string;
  mobile?: string;
  href?: string;
  remoteDesktop?: string;
}[] = [
    { desktop: "/img/hero1-2.jpg", mobile: "/img/hero1-2.jpg" },
    { desktop: "/img/prevendite.jpg", href: "#" },
    {
      desktop: "/img/hero2-one-piece.jpg",
      href: "#",
    },
    {
      desktop: "/img/hero1-2.jpg",
      remoteDesktop:
        "/img/hero3-pokemon.jpg",
      href: "#",
      mobile: "/img/hero1-2.jpg",
    },
  ];

export function HeroSection() {
  return (
    <section id="hero" className="relative z-20">
      <div className="div--container relative space-y-0 pt-5 verticalspace-small">
        <Swiper
          modules={[Autoplay, Keyboard]}
          className="swiperHero z-30 overflow-visible"
          spaceBetween={16}
          slidesPerView={1}
          loop
          speed={1500}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          keyboard
          grabCursor
        >
          {heroSlides.map((slide, i) => {
            const inner = (
              <div
                className={`relative flex aspect-[16/9] flex-col items-center justify-center overflow-hidden rounded-2xl lg:aspect-[2/0.85] lg:items-start ${slide.href ? "" : ""
                  }`}
              >
                <div className="absolute inset-0 z-10 h-full w-full bg-black">
                  {slide.remoteDesktop ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={slide.remoteDesktop}
                        alt=""
                        fill
                        priority={i === 0}
                        className="object-cover object-center lg:object-cover"
                        sizes="100vw"
                      />
                    </div>
                  ) : (
                    <>
                      <Image
                        src={slide.desktop}
                        alt=""
                        width={1920}
                        height={820}
                        priority={i === 0}
                        className="hidden h-full w-full object-cover object-center lg:block"
                      />
                      <Image
                        src={slide.mobile ?? slide.desktop}
                        alt=""
                        width={800}
                        height={450}
                        priority={i === 0}
                        className="block h-full w-full object-contain lg:hidden"
                      />
                    </>
                  )}
                </div>
              </div>
            );
            return (
              <SwiperSlide key={i}>
                {slide.href ? (
                  <Link href={slide.href} className="block">
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>

        <FeatureCards />
      </div>
    </section>
  );
}

function FeatureCards() {
  return (
    <>
      <br />
      <br />
      <div className="z-30">
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:gap-5">
          <div className="lg:col-span-3">
            <div className="relative flex min-h-[240px] flex-col items-start justify-center space-y-2 rounded-lg p-5">
              <div className="clipped-card absolute inset-0 h-full w-full bg-gray-800">
                <Image
                  src="/img/bg2.jpg"
                  alt=""
                  width={600}
                  height={322}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-0 right-2 z-20 w-1/2 lg:h-[calc(100%+24px)]">
                <Image
                  src="/img/mago.png"
                  alt=""
                  width={475}
                  height={658}
                  className="h-full w-full object-contain object-top"
                />
              </div>
              <div className="relative z-30 max-w-[50%] space-y-1">
                <h3 className="h4 leading-[100%] uppercase">Spedizione gratuita</h3>
                <p className="h6">Per ordini superiori a 99€</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="relative flex min-h-[240px] flex-col items-start justify-center space-y-2 rounded-lg p-5">
              <div className="clipped-card absolute inset-0 h-full w-full -scale-x-100 scale-y-100 bg-gray-800">
                <Image
                  src="/img/bg1.jpg"
                  alt=""
                  width={600}
                  height={322}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-0 right-2 z-20 w-1/2 lg:h-[calc(100%+24px)]">
                <Image
                  src="/img/pika.png"
                  alt=""
                  width={517}
                  height={722}
                  className="h-full w-full object-contain object-top"
                />
              </div>
              <div className="relative z-30 max-w-[50%] space-y-1">
                <h3 className="h4 leading-[100%] uppercase">Prodotti Originali</h3>
                <p className="h6">Selezionati e sempre aggiornati</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative flex min-h-[240px] flex-col items-start justify-center space-y-2 rounded-lg p-5">
              <div className="clipped-card absolute inset-0 h-full w-full bg-gray-800">
                <Image
                  src="/img/bg3.jpg"
                  alt=""
                  width={600}
                  height={322}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-0 right-2 z-20 w-1/2 lg:h-[calc(100%+24px)]">
                <Image
                  src="/img/one.png"
                  alt=""
                  width={767}
                  height={726}
                  className="h-full w-full object-contain object-top"
                />
              </div>
              <div className="relative z-30 max-w-[50%] space-y-1">
                <h3 className="h4 leading-[100%] uppercase">
                  Ordini veloci e garantiti
                </h3>
                <p className="h6">Spedizione garantita in 24/48h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="!pt-5">
        <div className="relative flex min-h-[240px] w-full flex-col items-start justify-center space-y-2 overflow-hidden rounded-lg p-5">
          <div className="absolute inset-0 bg-gray-800">
            <Image
              src="/img/gok.jpg"
              alt=""
              width={600}
              height={322}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative z-30 mx-auto grid max-w-[360px] grid-cols-4 gap-4 text-center">
            <div className="col-span-4 space-y-2 self-center lg:col-span-1">
              <Image
                src="/img/tt.png"
                alt="TikTok"
                width={151}
                height={223}
                className="mx-auto max-w-[64px] lg:max-w-[80px]"
              />
            </div>
            <div className="col-span-4 space-y-2 self-center lg:col-span-3">
              <Image
                src="/img/stars.png"
                alt=""
                width={231}
                height={56}
                className="mx-auto max-w-[150px]"
              />
              <h3 className="h4 leading-[100%] uppercase">Super Store Tiktok</h3>
              <p className="h6">
                Più di 5000 prodotti venduti ed evasi con successo
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
