import Image from "next/image";
import Link from "next/link";

export function BestCardsSection() {
  return (
    <section className="relative z-10">
      <div className="div--container">
        <div className="relative common--grid">
          <div className="col-span-12 space-y-4 text-left lg:col-span-4 lg:col-start-5">
            <div className="h6">Dove conta la qualità</div>
            <h2 className="h1">Solo le migliori carte</h2>
            <div className="h6">
              <p>
                In OnlineTCGShop trovi solo carte selezionate e garantite: qualità autentica,
                sicurezza totale e la certezza di scegliere sempre il meglio.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="#" className="group block space-y-4">
            <div className="clipped-card-vert relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-800">
              <Image
                src="/img/bg3.jpg"
                alt=""
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
                <Image
                  src="/img/one.png"
                  alt="One Piece"
                  width={400}
                  height={400}
                  className="h-auto max-h-[85%] w-[80%] object-contain object-bottom"
                />
              </div>
            </div>
            <h3 className="h6 text-center">One Piece</h3>
          </Link>

          <Link href="#" className="group block space-y-4">
            <div className="clipped-card-vert relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-800">
              <Image
                src="/img/bg2.jpg"
                alt=""
                fill
                className="object-cover object-center transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
                <Image
                  src="/img/pika.png"
                  alt="Pokémon"
                  width={400}
                  height={500}
                  className="h-auto max-h-[90%] w-[70%] object-contain object-bottom"
                />
              </div>
            </div>
            <h3 className="h6 text-center">Pokémon</h3>
          </Link>

          <Link href="#" className="group block space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="clipped-card-vert relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-800">
              <Image
                src="/img/gok.jpg"
                alt=""
                fill
                className="object-cover object-center transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
                <Image
                  src="/img/mago.png"
                  alt=""
                  width={350}
                  height={500}
                  className="h-auto max-h-[90%] w-[55%] object-contain object-bottom"
                />
              </div>
            </div>
            <h3 className="h6 text-center">Dragon Ball</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
