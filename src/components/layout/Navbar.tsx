"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";
import { navLinks } from "@/constants/navigation";

interface NavbarProps {
  openModal: () => void;
}

export default function Navbar({ openModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let current = "hero";

      sections.forEach((section) => {
        const sec = section as HTMLElement;

        if (window.scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-blue-600"
          >
            Accredian
          </Link>

          {/* Desktop Navigation */}

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`relative pb-1 text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                      activeSection === id
                        ? "text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${
                        activeSection === id
                          ? "w-full"
                          : "w-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Button */}

          <div className="hidden lg:block">
            <Button onClick={openModal}>
                Enquire Now
              </Button>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[500px] py-5" : "max-h-0"
          }`}
        >
          <ul className="space-y-5">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-2 py-2 transition ${
                      activeSection === id
                        ? "bg-blue-50 font-semibold text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Button className="mt-6 w-full">
            Enquire Now
          </Button>
        </div>
      </Container>
    </header>
  );
}