"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { ProductItem } from "@/lib/shop-data";
import { ProductCard } from "./ProductCard";
import "swiper/css";

type Props = {
  eyebrow: string;
  title: string;
  products: ProductItem[];
};

export function ProductCarousel({ eyebrow, title, products }: Props) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative">
      <div className="swiperRelated-container div--container space-y-10">
        <div className="common--grid">
          <div className="col-span-12 lg:col-span-9">
            <div className="space-y-2">
              <div className="h6">{eyebrow}</div>
              <div className="h1">{title}</div>
            </div>
          </div>
          <div className="col-span-3 hidden self-end lg:block">
            <div className="flex items-end justify-end gap-2">
              <button
                ref={prevRef}
                type="button"
                className="be-button-prev"
                aria-label="Slide precedente"
              >
                <ChevronLeft />
              </button>
              <button
                ref={nextRef}
                type="button"
                className="be-button-next"
                aria-label="Slide successivo"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.5}
          onBeforeInit={(swiper) => {
            const nav = swiper.params.navigation;
            if (nav && typeof nav === "object") {
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
            }
          }}
          navigation
          breakpoints={{
            650: { slidesPerView: 3.15, spaceBetween: 16 },
            899: { slidesPerView: 4.15, spaceBetween: 16 },
            1280: { slidesPerView: 5.15, spaceBetween: 20 },
          }}
          className="swiperRelated overflow-visible"
        >
          {products.map((p) => (
            <SwiperSlide key={p.id} className="h-auto">
              <ProductCard product={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
