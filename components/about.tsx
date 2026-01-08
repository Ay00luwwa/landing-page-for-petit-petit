"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Star, TrendingUp, Users, Home, Award } from "lucide-react"

const highlights = [
  "Premium locations across Lagos Island, Victoria Island & Lekki",
  "Transparent pricing with no hidden fees",
  "Dedicated support throughout your property journey",
  "Verified properties with complete documentation",
]

const miniTestimonials = [
  {
    name: "Adebayo Ogundimu",
    role: "Business Owner",
    text: "PetitPetit made finding our family home effortless. Their team understood exactly what we needed.",
    rating: 5,
  },
  {
    name: "Ngozi Eze",
    role: "Tech Professional",
    text: "Exceptional service! They helped me find the perfect apartment within my budget in Lekki Phase 1.",
    rating: 5,
  },
  {
    name: "Olumide Adeyemi",
    role: "Young Professional",
    text: "Professional, responsive, and genuinely cared about finding me the right property. Highly recommend!",
    rating: 5,
  },
]

const statRings = [
  { icon: Home, value: 98, label: "Client Satisfaction", color: "#D4AF37" },
  { icon: Users, value: 500, label: "Properties Sold", suffix: "+", color: "#243E60" },
  { icon: Award, value: 15, label: "Years Experience", suffix: "+", color: "#D4AF37" },
]

function AnimatedRing({ value, color }: { value: number; color: string }) {
  const [progress, setProgress] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setProgress(Math.min(value, 100)), 100)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  const circumference = 2 * Math.PI * 40
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div ref={ref} className="relative w-24 h-24">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#E1E1E1" strokeWidth="8" />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
    </div>
  )
}

export default function About() {
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
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className={`grid grid-cols-12 gap-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="col-span-7 space-y-4">
              <div className="relative group">
                <img
                  src="/modern-lagos-apartment-interior-living-room.jpg"
                  alt="Modern apartment interior"
                  className="w-full h-48 lg:h-64 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-2xl transition-all duration-500" />
              </div>
              <div className="relative group">
                <img
                  src="/luxury-kitchen-modern-apartment-lagos.jpg"
                  alt="Luxury kitchen"
                  className="w-full h-40 lg:h-48 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-2xl transition-all duration-500" />
              </div>
            </div>
            <div className="col-span-5 pt-12">
              <div className="relative group">
                <img
                  src="/exterior-luxury-residential-building-lagos-nigeria.jpg"
                  alt="Luxury residential building exterior"
                  className="w-full h-72 lg:h-[420px] object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-2xl transition-all duration-500" />
              </div>
              <div className="glass-card rounded-xl p-4 shadow-xl -mt-16 ml-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground font-serif">98%</p>
                    <p className="text-xs text-muted-foreground">Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold tracking-wide uppercase text-sm rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-6 font-serif leading-tight">
              Your Trusted Partner in Property Management and Real Estate
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For over 15 years, PetitPetit Enterprise has been at the forefront of Lagos&apos;s real estate market. We
              specialize in affordable luxury properties for young professionals and growing families, offering homes in
              the <span className="text-gold font-semibold">₦50M to ₦200M</span> range.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our dedicated team combines deep market knowledge with personalized service, ensuring every client finds
              not just a property, but a home that fits their lifestyle and aspirations. We believe luxury should be
              accessible.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-4 transition-all duration-500`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground font-serif">What Our Clients Say</h3>
              <div className="grid gap-4">
                {miniTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="glass-card p-5 rounded-xl hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm mb-3 italic">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground text-sm">{testimonial.name}</span>
                      <span className="text-muted-foreground text-xs">• {testimonial.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
