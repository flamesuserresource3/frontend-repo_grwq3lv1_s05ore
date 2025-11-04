import { CalendarDays, ArrowRight } from 'lucide-react';

const news = [
  {
    title: 'Pelatihan Bank Sampah di Pesisir Utara',
    excerpt:
      'Melatih 60 kader lingkungan untuk mengelola sampah plastik dan memperkuat ekonomi sirkular desa.',
    date: '12 Sep 2025',
    image:
      'https://images.unsplash.com/photo-1549986553-cb2af91f131f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Penanaman 2.000 Bibit Mangrove',
    excerpt:
      'Kegiatan bersama komunitas nelayan untuk memperkuat sabuk hijau dan habitat biota pesisir.',
    date: '29 Agu 2025',
    image:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Pilot Project Irigasi Hemat Air',
    excerpt:
      'Teknologi tetes diterapkan pada 15 hektar lahan jagung untuk menghemat hingga 40% konsumsi air.',
    date: '2 Agu 2025',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function NewsList() {
  return (
    <section id="news" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Berita Terbaru
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              Update kegiatan dan cerita terbaru dari lapangan.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            Lihat Semua
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-gray-600 text-xs">
                  <CalendarDays className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="mt-2 line-clamp-2 text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600">{item.excerpt}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Baca Selengkapnya →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
