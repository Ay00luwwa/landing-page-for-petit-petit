"use client"

import { useEffect, useRef, useState } from "react"

const partners = [
  { name: "First Bank", logo: "FB" },
  { name: "GTBank", logo: "GT" },
  { name: "Access Bank", logo: "AB" },
  { name: "Zenith Bank", logo: "ZB" },
  { name: "UBA", logo: "UBA" },
  { name: "Stanbic IBTC", logo: "SI" },
]

export default function Partners() {
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
    <section ref={sectionRef} className="py-16 bg-secondary border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Trusted Mortgage Partners</span>
          <h3 className="text-xl font-semibold text-foreground mt-2 font-serif">Financing Made Easy</h3>
        </div>

        <div
          className={`flex flex-wrap justify-center items-center gap-8 md:gap-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="text-center">
                <span className="text-2xl md:text-3xl font-bold text-primary group-hover:text-gold transition-colors font-serif">
                  {partner.logo}
                </span>
                <p className="text-[10px] text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Access competitive mortgage rates from Nigeria&apos;s leading banks
        </p>
      </div>
    </section>
  )
}
