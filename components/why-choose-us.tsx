"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Handshake, Clock, BadgeCheck, TrendingUp, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Verified Properties",
    description: "Every listing undergoes thorough legal verification and property inspection before being featured.",
  },
  {
    icon: Handshake,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. What you see is exactly what you pay.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated team is available round the clock to assist with your property inquiries.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed Experts",
    description: "Work with certified real estate professionals with deep knowledge of the Lagos market.",
  },
  {
    icon: TrendingUp,
    title: "Investment Guidance",
    description: "Get expert advice on property appreciation trends and investment opportunities.",
  },
  {
    icon: HeartHandshake,
    title: "After-Sale Support",
    description: "Continued assistance with documentation, registration, and property management.",
  },
]

export default function WhyChooseUs() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold tracking-wide uppercase text-sm rounded-full mb-4">
            Why PetitPetit
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4 font-serif">
            The PetitPetit Advantage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We go beyond just listing properties. Here&apos;s why thousands of Lagos residents trust us with their real
            estate journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group p-8 bg-card rounded-2xl border border-border hover:border-gold/50 hover:shadow-xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-gold transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
