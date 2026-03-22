import Image from "next/image";
import Link from "next/link";
import type { ProductItem } from "@/lib/shop-data";

type Props = {
  product: ProductItem;
};

export function ProductCard({ product }: Props) {
  return (
    <div
      data-sale={product.sale ? "on" : "off"}
      className="product-card group relative flex h-full flex-col gap-2 overflow-hidden rounded border border-solid border-gridcolor bg-black p-3"
    >
      <div className="absolute left-0 top-0 z-50 flex w-full items-start justify-between gap-2 p-3 pb-0">
        <div className="flex flex-wrap gap-1">
          {product.tags.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="btn size-xsmall btn-fill-black hover:border-primary hover:bg-primary !border !border-solid !border-gridcolor !py-[2px] !text-xs"
            >
              {t.label}
            </Link>
          ))}
        </div>
        <div className="flex w-10 justify-end">
          <button
            type="button"
            className="btn size-xsmall btn-fill-black flex !aspect-square !h-6 !w-6 !items-center !justify-center !border !border-solid !border-gridcolor !p-0"
            aria-label="Aggiungi alla wishlist"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <Link
        href={product.href}
        className="relative z-20 block aspect-square w-full overflow-hidden rounded"
      >
        <Image
          src={product.image}
          alt={product.title}
          width={1024}
          height={1024}
          className="h-full w-full object-contain object-center transition-transform duration-300 ease-in-out group-hover:scale-[0.975]"
        />
      </Link>

      <div className="leading-none">
        <h3 className="h6">{product.title}</h3>
      </div>

      <div className="!mt-auto flex flex-col gap-2">
        <div className="product-prices flex flex-col gap-1 text-lg lg:flex-row lg:items-center lg:gap-2 lg:text-sm">
          {product.sale ? (
            <>
              <del className="text-white/50">
                <span className="woocommerce-Price-amount">
                  €{product.sale.was}
                </span>
              </del>
              <ins className="no-underline">
                <span className="woocommerce-Price-amount">€{product.sale.now}</span>
              </ins>
            </>
          ) : (
            <span className="woocommerce-Price-amount">€{product.price}</span>
          )}
        </div>
        <div>
          {product.soldOut ? (
            <span className="btn size-small btn-fill-black pointer-events-none !w-full">
              Esaurito
            </span>
          ) : (
            <button
              type="button"
              className="btn size-small btn-fill-purple !w-full"
            >
              <span className="hidden lg:inline">Aggiungi al carrello</span>
              <span className="lg:hidden">Aggiungi</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
