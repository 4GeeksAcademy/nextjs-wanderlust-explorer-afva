
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="relative isolate flex min-h-[560px] lg:min-h-[calc(100svh-64px)]">
        <Image
          src="/images/home-hero.jpg"
          alt="Sunset over an open landscape"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-slate-950/45"
        />
        <div className="mx-auto flex w-full max-w-7xl items-end px-6 pb-14 pt-16 sm:px-8 sm:pb-20 lg:items-center lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/85">
              Wanderlust Explorer
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Experiences worth travelling for.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-7 text-white/90 sm:text-xl">
              Find local culture, wild landscapes, and moments worth remembering.
            </p>
            <Link
              href="/experiences"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-md bg-white px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore Experiences
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
