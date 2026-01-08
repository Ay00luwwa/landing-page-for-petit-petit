"use client"

import { useState } from "react"
import { Home, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const quickLinks = [
  { name: "Home", href: "#hero", isExternal: false },
  { name: "About Us", href: "#about", isExternal: false },
  { name: "Properties", href: "#properties", isExternal: false },
  { name: "Services", href: "#services", isExternal: false },
  { name: "Contact", href: "#contact", isExternal: false },
  { name: "Blog", href: "/coming-soon", isExternal: true },
  { name: "Careers", href: "/coming-soon", isExternal: true },
]

const propertyTypes = [
  { name: "Apartments", href: "/coming-soon" },
  { name: "Duplexes", href: "/coming-soon" },
  { name: "Penthouses", href: "/coming-soon" },
  { name: "Houses", href: "/coming-soon" },
  { name: "Commercial", href: "/coming-soon" },
]

const locations = ["Victoria Island", "Ikoyi", "Lekki", "Banana Island", "Eko Atlantic"]

const socialLinks = [
  { icon: Facebook, href: "/coming-soon", label: "Facebook" },
  { icon: Twitter, href: "/coming-soon", label: "Twitter" },
  { icon: Instagram, href: "/coming-soon", label: "Instagram" },
  { icon: Linkedin, href: "/coming-soon", label: "LinkedIn" },
]

const legalLinks = [
  {
    name: "Privacy Policy",
    content:
      "Your privacy is important to us. We collect and process your personal data in accordance with Nigerian data protection regulations. We use your information solely to provide property-related services, communicate updates, and improve your experience. Your data is never sold to third parties. You have the right to access, correct, or delete your personal information at any time by contacting us.",
  },
  {
    name: "Terms of Service",
    content:
      "By using PetitPetit Enterprise services, you agree to our terms and conditions governing property transactions. All property listings are subject to availability and verification. Prices displayed are indicative and may vary. We act as intermediaries between buyers/renters and property owners. Final transactions are subject to legal documentation and due diligence processes.",
  },
]

export default function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <a href="#hero" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-primary-foreground rounded-xl flex items-center justify-center transition-colors duration-300">
                <img
              alt="PetitPetit Logo"
              src="/logo.png"
              className="w-30 h-30 object-contain"
              />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-serif">PetitPetit</span>
                <span className="text-[10px] uppercase tracking-widest text-primary-foreground/70">Enterprise</span>
              </div>
            </a>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Your trusted partner in finding affordable luxury homes in Lagos. We&apos;ve been helping families and
              professionals find their dream properties.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.isExternal ? (
                    <Link
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-gold transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-gold/50 rounded-full group-hover:bg-gold transition-colors" />
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-gold transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-gold/50 rounded-full group-hover:bg-gold transition-colors" />
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types - Now linking to coming-soon */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Property Types</h4>
            <ul className="space-y-3">
              {propertyTypes.map((type) => (
                <li key={type.name}>
                  <Link
                    href={type.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gold/50 rounded-full group-hover:bg-gold transition-colors" />
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  FHA Kapwa, Opposite Springville Estate
                  <br />
                  Lugbe, Abuja
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+2349073096453"
                  className="text-primary-foreground/80 text-sm hover:text-gold transition-colors"
                >
                  +234 907 309 6453
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@petitpetit.ng"
                  className="text-primary-foreground/80 text-sm hover:text-gold transition-colors"
                >
                  petitpetitenterprise@gmail.com
                </a>
              </li>
            </ul>

            {/* Locations Served */}
            {/* <div className="mt-6">
              <h5 className="font-semibold text-sm mb-3">Locations We Serve</h5>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <Link
                    key={location}
                    href="/coming-soon"
                    className="px-3 py-1 bg-primary-foreground/10 hover:bg-gold/20 rounded-full text-xs transition-colors cursor-pointer"
                  >
                    {location}
                  </Link>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="grid md:grid-cols-2 gap-4">
            {legalLinks.map((legal) => (
              <div key={legal.name} className="bg-primary-foreground/5 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === legal.name ? null : legal.name)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-primary-foreground/10 transition-colors"
                >
                  <span className="font-medium text-sm">{legal.name}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold transition-transform duration-300 ${
                      expandedSection === legal.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSection === legal.name && (
                  <div className="px-4 pb-4">
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">{legal.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} PetitPetit Enterprise. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/50 text-xs">Designed with excellence for homebuyers</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="text-primary-foreground/70 hover:text-gold hover:bg-primary-foreground/10 rounded-full w-10 h-10"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
