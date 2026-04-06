const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stays", href: "#stays" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2C2C2C]/10 bg-white/70 px-6 py-10 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 text-sm text-[#2C2C2C]/80 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-lg text-[#2C2C2C]">Cupcake Homes</h3>
          <p>Calm luxury stays in Goa.</p>
        </div>

        <div>
          <h4 className="mb-2 font-medium text-[#2C2C2C]">Quick Links</h4>
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  className="transition-colors hover:text-[#C2A878]"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 font-medium text-[#2C2C2C]">Contact</h4>

          <div className="flex flex-col space-y-1">
            <a
              className="transition-colors hover:text-[#C2A878]"
              href="tel:+917774048747"
            >
              +91 7774048747
            </a>

            <a
              className="transition-colors hover:text-[#C2A878]"
              href="mailto:info@cupcake-homes.com"
            >
              info@cupcake-homes.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
