import Image from "next/image";

export function WelcomeSection() {
  return (
    <section className="relative z-10">
      <div className="div--container">
        <div className="relative common--grid">
          <div className="order-1 col-span-12 self-center text-center">
            <div className="mx-auto max-w-[720px]">
              <h1 className="h3">
                Benvenuto su OnlineTCGShop, lo shop italiano dedicato alle carte
                collezionabili
              </h1>
            </div>
          </div>

          <div className="order-3 col-span-5 self-center lg:order-2 lg:col-span-4 lg:col-start-1 lg:pr-16 xl:col-span-3">
            <div className="group block space-y-4">
              <div className="relative flex aspect-[16/9] flex-col items-center justify-center space-y-2 p-5 lg:aspect-[3/4]">
                <div className="absolute inset-0 overflow-hidden rounded-2xl bg-gray-800">
                  <Image
                    src="/img/bg2.jpg"
                    alt=""
                    width={600}
                    height={322}
                    className="h-full w-full scale-105 object-cover object-center transition-transform duration-500 group-hover:scale-100"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 col-span-12 self-center text-center lg:order-3 lg:col-span-4 lg:col-start-5">
            <div className="text-sm opacity-80">
              <p>
                Qui trovi <strong>prodotti sealed</strong> e{" "}
                <strong>carte singole</strong> originali in{" "}
                <strong>edizione italiana e giapponese</strong>: Pokémon, One Piece
                Card Game, Yu-Gi-Oh!, Dragon Ball Fusion World, Topps e altri brand del
                mondo trading card.
              </p>
              <p className="mt-4">
                Che tu stia cercando la carta rara, la full art perfetta o un box da
                tenere sigillato, su <strong>OnlineTCGShop</strong> trovi un catalogo
                pensato per comprare con chiarezza, passione e sicurezza.
              </p>
            </div>
          </div>

          <div className="order-4 col-span-12 self-center sm:col-span-6 lg:col-span-4 lg:col-start-9 lg:pl-16 xl:col-span-3">
            <div className="group block space-y-4">
              <div className="relative flex aspect-[16/9] flex-col items-center justify-center space-y-2 rounded-lg p-5 lg:aspect-[3/4]">
                <div className="absolute inset-0 overflow-hidden rounded-2xl bg-gray-800">
                  <Image
                    src="/img/gok.jpg"
                    alt=""
                    width={600}
                    height={322}
                    className="h-full w-full scale-105 object-cover object-center transition-transform duration-500 group-hover:scale-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
