import { Leaf, Droplets, Trees, Recycle } from 'lucide-react';

const programs = [
  {
    title: 'Konservasi Mangrove',
    description:
      'Restorasi ekosistem mangrove untuk melindungi garis pantai, meningkatkan keanekaragaman hayati, dan menyerap karbon.',
    icon: Droplets,
    image:
      'https://images.unsplash.com/photo-1530563885674-66db50a1af19?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Reboisasi Hutan',
    description:
      'Penanaman kembali hutan kritis bersama komunitas lokal untuk menjaga sumber air dan habitat satwa.',
    icon: Trees,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Manajemen Sampah',
    description:
      'Pemberdayaan bank sampah dan edukasi 3R untuk mengurangi timbulan sampah ke TPA.',
    icon: Recycle,
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Pertanian Berkelanjutan',
    description:
      'Pendampingan petani menerapkan praktik ramah lingkungan, efisien air, dan rendah emisi.',
    icon: Leaf,
    image:
      'https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function ProgramsGrid() {
  return (
    <section id="programs" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Program Unggulan
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              Berbagai inisiatif berdampak yang kami jalankan bersama mitra dan komunitas.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
          >
            Ajukan Kolaborasi
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-emerald-700">
                  <item.icon className="h-4 w-4" />
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600">{item.description}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Lihat Detail →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
