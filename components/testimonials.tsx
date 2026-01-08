"use client"

import { useState, useEffect, useRef } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Chidinma Okeke",
    role: "Marketing Director",
    image: "/professional-african-woman.png",
    text: "Working with PetitPetit was an absolute pleasure. They understood our family's needs perfectly and found us a beautiful 4-bedroom home in Lekki. The entire process was smooth and transparent.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emeka Nwosu",
    role: "Software Engineer",
    image: "/professional-african-man-portrait-tech.jpg",
    text: "As a first-time buyer, I was nervous about the process. PetitPetit's team walked me through every step and helped me find an amazing apartment in Yaba within my budget. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Funke Adeyemi",
    role: "Entrepreneur",
    image: "/professional-african-businesswoman-portrait.jpg",
    text: "I've worked with many real estate agents in Lagos, but PetitPetit stands out. Their market knowledge, professionalism, and dedication to client satisfaction are unmatched.",
    rating: 5,
  },
  {
    id: 4,
    name: "Oluwaseun Bakare",
    role: "Medical Doctor",
    image: "/placeholder.svg?height=80&width=80",
    text: "After months of searching, PetitPetit found us our dream home in Victoria Island. They negotiated an excellent deal and made the closing process seamless. Forever grateful!",
    rating: 5,
  },
  {
    id: 5,
    name: "Aisha Mohammed",
    role: "Bank Executive",
    image: "/placeholder.svg?height=80&width=80",
    text: "PetitPetit helped me invest in two rental properties that have given excellent returns. Their property management service has been invaluable. A truly professional team.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
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

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-gold font-semibold tracking-wide uppercase text-sm rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4 font-serif">
            What Our Clients Say
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from some of the families and professionals we&apos;ve helped
            find their perfect homes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Main Testimonial */}
            <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-2xl relative">
              {/* Quote icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gold rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 mt-4 font-serif italic">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-card shadow-lg"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-gold scale-110" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Avatar preview bubbles */}
              <div className="absolute -bottom-6 right-8 flex -space-x-3">
                {testimonials.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(idx)
                    }}
                    className={`w-12 h-12 rounded-full border-4 border-card overflow-hidden transition-all duration-300 ${
                      idx === currentIndex ? "ring-2 ring-gold scale-110 z-10" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={t.image || "/placeholder.svg"} alt={t.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-gold rounded-full bg-transparent w-12 h-12"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(idx)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-gold w-8"
                        : "bg-primary-foreground/40 w-2 hover:bg-primary-foreground/60"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-gold rounded-full bg-transparent w-12 h-12"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
