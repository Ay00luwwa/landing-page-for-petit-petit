"use client"

import { useEffect, useRef, useState } from "react"
import { Home, KeyRound, Building2, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Home,
    title: "Buy Property",
    description:
      "Find your perfect home from our extensive portfolio of verified properties across Lagos. We guide you through every step of the purchase process.",
    color: "from-primary to-primary/80",
  },
  {
    icon: KeyRound,
    title: "Sell Property",
    description:
      "List your property with us and reach thousands of qualified buyers. Our marketing expertise ensures maximum visibility and the best market value.",
    color: "from-gold to-gold/80",
  },
  {
    icon: Building2,
    title: "Rent Property",
    description:
      "Browse our selection of premium rental properties. From short-term leases to long-term homes, we have options for every need.",
    color: "from-primary to-primary/80",
  },
  {
    icon: Settings,
    title: "Property Management",
    description:
      "Let us handle the day-to-day management of your investment properties. From tenant screening to maintenance, we've got you covered.",
    color: "from-gold to-gold/80",
  },
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
    <section ref={sectionRef} id="services" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(36,62,96,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold tracking-wide uppercase text-sm rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4 font-serif">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs. Whether buying, selling, renting, or managing
            properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group overflow-hidden bg-card border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-8 lg:p-10 relative">
                {/* Hover background effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                      hoveredIndex === index ? "animate-pulse-glow" : ""
                    }`}
                  >
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 w-16 h-16 border-2 border-primary/20 rounded-2xl scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors font-serif">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                {/* Learn more link */}
                <div className="mt-6 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
