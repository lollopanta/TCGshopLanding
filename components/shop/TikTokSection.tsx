import Image from "next/image";
import Link from "next/link";

export function TikTokSection() {
  return (
    <section id="tiktok" className="relative">
      <div className="div--container">
        <div className="common--grid overflow-hidden rounded-2xl border border-solid border-gridcolor bg-black">
          <div className="relative col-span-12 bg-gray-600 lg:col-span-5 lg:min-h-[280px]">
            <Image
              src="/img/sbustiamo.jpg"
              alt="Live TikTok"
              width={1024}
              height={1024}
              className="h-full min-h-[220px] w-full object-cover object-center lg:absolute lg:inset-0 lg:min-h-0"
            />
          </div>
          <div className="col-span-12 space-y-5 self-center p-5 lg:col-span-7 lg:min-h-[360px] 2xl:p-10 lg:p-8">
            <div className="btn size-xsmall">Sbusta in Live con St3pNy e Steven!</div>
            <div className="h1">Seguici su TikTok</div>
            <div className="text-sm opacity-80">
              <p>
                <strong>Ehi collezionista! Benvenuto su OnlineTCGShop!</strong>
              </p>
              <p className="mt-3">
                Ogni settimana sbustiamo Pokémon, One Piece e tante altre chicche…{" "}
                <strong>in diretta su TikTok</strong>.
                <br />
                Se ami l&apos;adrenalina della bustina che si apre e le carte rare che
                brillano, sei nel posto giusto.
                <br />
                Live piene di hype, risate e una community sempre carica.
              </p>
              <p className="mt-3">
                👉 <strong>Vieni a sbustare con noi!</strong>
                <br />👉 Seguici su TikTok: <strong>@onlinetcgshop</strong>
              </p>
            </div>
            <div className="btn-container justify-start">
              <Link
                href="https://www.tiktok.com/@onlinetcgshop"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-fill-gradient"
              >
                Segui OnlineTCGShop!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
