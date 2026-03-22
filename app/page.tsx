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
