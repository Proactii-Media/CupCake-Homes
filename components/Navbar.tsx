"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stays", href: "#stays" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Background change
      setIsScrolled(currentScroll > 20);

      // Hide / Show Navbar
      if (currentScroll > lastScroll && currentScroll > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/70 backdrop-blur-lg shadow-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-14 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
          />
          <span className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#2C2C2C]">
            Cupcake Homes
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm md:text-base">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`relative transition-colors duration-200 ${
                  active === link.href
                    ? "text-[#C2A878]"
                    : "text-gray-700 hover:text-[#C2A878]"
                }`}
              >
                {link.label}

                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#C2A878] transition-all duration-300 ${
                    active === link.href ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-full border border-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl bg-white shadow-xl border border-gray-200 p-4">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActive(link.href);
                  }}
                  className={`block px-4 py-2 rounded-lg text-sm transition ${
                    active === link.href
                      ? "bg-[#E8DFC8] text-[#2C2C2C]"
                      : "hover:bg-[#E8DFC8]/50"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
