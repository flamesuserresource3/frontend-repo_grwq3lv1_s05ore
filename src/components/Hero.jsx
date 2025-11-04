import { ArrowRight, Users, Globe, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
              CSR & Lingkungan
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Mendorong Dampak Nyata untuk Alam dan Masyarakat
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600 max-w-xl">
              Kami menginisiasi program berkelanjutan yang menjawab masalah lingkungan saat ini: pelestarian keanekaragaman hayati, pemberdayaan masyarakat, dan pengurangan emisi karbon.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Pelajari Program Kami
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Tentang Kami
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <dt className="text-sm text-gray-600 inline-flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-emerald-700" />
                  Pohon Ditanam
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-gray-900">10.000+</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600 inline-flex items-center gap-2">
                  <Users className="h-4 w-4 text-emerald-700" />
                  Penerima Manfaat
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-gray-900">3.500+</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600 inline-flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-700" />
                  Wilayah Dampingan
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-gray-900">12+</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl ring-1 ring-gray-200">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop"
                alt="Kegiatan penanaman pohon"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden md:block">
              <div className="rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-200">
                <p className="text-sm font-semibold text-gray-900">Cerita Dampak</p>
                <p className="mt-1 max-w-[16rem] text-xs text-gray-600">
                  Rehabilitasi mangrove meningkatkan ketahanan pesisir dan ekonomi nelayan lokal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
