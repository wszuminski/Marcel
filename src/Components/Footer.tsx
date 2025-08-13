import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const nav = [
  { label: "Oferta", href: "#oferta" },
  { label: "Przemiany", href: "#przemiany" },
  { label: "O mnie", href: "#o-mnie" },
  { label: "Kontakt", href: "#kontakt" },
];

const services = [
  { label: "Trening personalny", href: "#oferta" },
  { label: "Plan żywieniowy", href: "#oferta" },
  { label: "Online coaching", href: "#oferta" },
  { label: "Konsultacja 1:1", href: "#kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 text-zinc-200">
      {/* Divider with subtle gradient line */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      {/* CTA band */}

      {/* Main footer content */}
      <div className="mx-auto mt-14 py-10 max-w-7xl px-6 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand + summary */}
          <div className="md:col-span-2">
            <a
              href="#"
              className="inline-flex items-center gap-2"
              aria-label="MK – strona główna"
            >
              <img
                src="/Logo.svg"
                alt="Logo"
                className="flex items-center justify-center h-9 w-9 -mt-4"
              />
              <span className="text-lg font-extrabold tracking-tight">
                Marcel Kaczmarek
              </span>
            </a>
            <p className="mt-4 max-w-prose text-sm text-zinc-400">
              Spersonalizowany trening siłowy i coaching żywieniowy. Bez
              uniwersalnych planów – tylko rozwiązania dopasowane do Twoich
              celów i stylu życia.
            </p>

            {/* Contact */}
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-zinc-400" aria-hidden />
                <a
                  href="mailto:kontakt@mkfitness.pl"
                  className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
                >
                  kontakt@mkfitness.pl
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-zinc-400" aria-hidden />
                <a
                  href="tel:+48600000000"
                  className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
                >
                  +48 600 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-zinc-400" aria-hidden />
                <span className="text-zinc-300">Warszawa, Polska</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-300">Nawigacja</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="rounded text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-300">Usługi</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="rounded text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-zinc-400">
              © {year} MK Fitness. Wszystkie prawa zastrzeżone.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#polityka-prywatnosci"
                className="text-xs text-zinc-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
              >
                Polityka prywatności
              </a>
              <a
                href="#regulamin"
                className="text-xs text-zinc-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
              >
                Regulamin
              </a>
              <div className="h-4 w-px bg-white/10" aria-hidden />
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                  className="rounded text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  aria-label="Facebook"
                  className="rounded text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  aria-label="YouTube"
                  className="rounded text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
