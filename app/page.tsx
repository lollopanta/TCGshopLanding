import { BestCardsSection } from "@/components/shop/BestCardsSection";
import { HeroSection } from "@/components/shop/HeroSection";
import { NewsletterSection } from "@/components/shop/NewsletterSection";
import { ProductCarousel } from "@/components/shop/ProductCarousel";
import { SiteFooter } from "@/components/shop/SiteFooter";
import { SiteHeader } from "@/components/shop/SiteHeader";
import { TikTokSection } from "@/components/shop/TikTokSection";
import { WelcomeSection } from "@/components/shop/WelcomeSection";
import { novitaProducts, saldiProducts } from "@/lib/shop-data";

export default function Home() {
  return (
    <>
      <div className="bg-grid absolute inset-0 -z-10 h-full w-full" aria-hidden />
      <div
        className="radial-gold absolute left-0 top-0 z-10 aspect-[2/1.5] w-full -translate-y-1/2 opacity-60"
        aria-hidden
      />
      <div
        className="radial-violet absolute left-0 top-0 z-10 aspect-[2/1.5] w-full opacity-60"
        aria-hidden
      />

      <SiteHeader />

      <div className="page--container verticalspace space-bottom overflow-x-clip">
        <HeroSection />

        <div className="space-y-16 lg:space-y-24">
          <ProductCarousel
            eyebrow="OnlineTCGShop - Ultimi arrivi"
            title="Novità"
            products={novitaProducts}
          />

          <ProductCarousel
            eyebrow="Prodotti Sconti Flash"
            title="Saldi"
            products={saldiProducts}
          />

          <TikTokSection />

          <WelcomeSection />

          <BestCardsSection />

          <NewsletterSection />
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
