import { Leaf, Newspaper, Info, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-emerald-600 text-white grid place-items-center">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-gray-900">CSR Kehati</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-emerald-700 inline-flex items-center gap-2">
              <Info className="h-4 w-4" />
              Tentang
            </a>
            <a href="#programs" className="hover:text-emerald-700 inline-flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              Program
            </a>
            <a href="#news" className="hover:text-emerald-700 inline-flex items-center gap-2">
              <Newspaper className="h-4 w-4" />
              Berita
            </a>
            <a href="#contact" className="hover:text-emerald-700 inline-flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Kontak
            </a>
          </nav>

          <a href="#contact" className="ml-4 inline-flex items-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
            Hubungi Kami
          </a>
        </div>
      </div>
    </header>
  );
}
