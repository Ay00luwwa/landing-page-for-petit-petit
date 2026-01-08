"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTABanner() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-8">
            Limited Time Offer
          </span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-serif leading-tight">
            Ready to Find Your <span className="text-gold">Perfect Home?</span>
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get exclusive access to off-market properties and enjoy zero agency fees on your first purchase. Our experts
            are ready to guide you every step of the way.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Button
              asChild
              size="lg"
              className="bg-card text-primary hover:bg-gold hover:text-primary-foreground shadow-2xl transition-all duration-300 group text-base px-8 py-6"
            >
              <a href="coming-soon">
                Browse Properties
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent transition-all duration-300 group text-base px-8 py-6"
            >
              <a href="tel:+2348012345678">
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
