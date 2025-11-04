import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgramsGrid from './components/ProgramsGrid';
import NewsList from './components/NewsList';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Tentang</h4>
            <p className="mt-3 text-sm text-gray-600">
              Kami berkomitmen menjalankan program CSR yang berkelanjutan, berfokus pada pelestarian
              lingkungan dan peningkatan kesejahteraan masyarakat.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Kontak</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-700" /> hello@csr-kehati.org</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-700" /> +62 812-3456-7890</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-700" /> Jakarta, Indonesia</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Langganan</h4>
            <form className="mt-3 flex max-w-sm gap-2">
              <input
                type="email"
                required
                placeholder="Email Anda"
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              />
              <button
                type="submit"
                className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Daftar
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} CSR Kehati. Semua hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                  Latar Belakang & Solusi
                </h2>
                <p className="mt-4 text-sm text-gray-600">
                  Perubahan iklim, degradasi ekosistem, dan pengelolaan sampah menjadi tantangan utama
                  bagi keberlanjutan. Melalui program-program kami, kami menghadirkan solusi yang
                  terukur dengan melibatkan para pemangku kepentingan, pakar, dan komunitas lokal.
                </p>
                <ul className="mt-4 list-disc pl-5 text-sm text-gray-600 space-y-2">
                  <li>Konservasi berbasis ilmu pengetahuan</li>
                  <li>Pemberdayaan ekonomi masyarakat</li>
                  <li>Pemantauan dampak yang transparan</li>
                </ul>
              </div>
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=1600&auto=format&fit=crop"
                    alt="Komunitas dan lingkungan"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProgramsGrid />
        <NewsList />
      </main>
      <Footer />
    </div>
  );
}
