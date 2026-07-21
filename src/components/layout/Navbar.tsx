"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";
import { navLinks } from "@/constants/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-blue-600"
          >
            Accredian
          </Link>
          

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-gray-700 transition-colors duration-200 hover:text-blue-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Button>Enquire Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-1 lg:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t py-5 lg:hidden">
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-700 transition-colors duration-200 hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                </li>
              ))}
            </ul>

            <Button className="mt-6 w-full">
              Enquire Now
            </Button>
          </div>
        )}
      </Container>
    </header>
  );
}