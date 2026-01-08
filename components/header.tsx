"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Properties", href: "#properties" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

const externalLinks = [
  { name: "Blog", href: "/coming-soon" },
  { name: "Careers", href: "/coming-soon" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-card shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group" aria-label="PetitPetit Enterprise Home">
            <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center transition-colors duration-300 shadow-lg">
              <img
              alt="PetitPetit Logo"
              src="/logo(w).png"
              className="w-30 h-30 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold tracking-tight font-serif transition-colors duration-300 ${isScrolled ? "text-primary" : "text-card"}`}
              >
                PetitPetit
              </span>
              <span
                className={`text-[10px] uppercase tracking-widest transition-colors duration-300 ${isScrolled ? "text-muted-foreground" : "text-card/70"}`}
              >
                Enterprise
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-primary/10 ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-card hover:text-gold"
                }`}
              >
                {link.name}
              </a>
            ))}
            {externalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-primary/10 ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-card hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="ml-4 bg-primary hover:bg-gold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a href="#contact">Schedule Viewing</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled ? "hover:bg-primary/10" : "hover:bg-card/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-card"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-card"}`} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 py-6 glass-card rounded-2xl shadow-2xl animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-3 px-4 text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {externalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="py-3 px-4 text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 bg-primary hover:bg-gold text-primary-foreground transition-all duration-300"
              >
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Schedule Viewing
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
