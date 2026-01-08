"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, MapPin, Award, Users, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: MapPin, value: 30, suffix: "+", label: "Properties Sold" },
  { icon: Award, value: 1, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 100, suffix: "+", label: "Happy Clients" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <span ref={ref} className="text-2xl md:text-4xl font-bold text-card font-serif">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-modern-apartment-building-lagos-nigeria-sun.jpg"
          alt="Luxury apartment building in Lagos"
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        {/* Gradient overlay with depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-4xl">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 glass-dark rounded-full text-card text-sm font-medium mb-8 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Affordable Luxury Living in Nigeria
          </div>

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-card leading-[1.1] mb-6 font-serif transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Discover Your <span className="text-gold">Dream Home</span> in Nigeria
          </h1>

          <p
            className={`text-lg md:text-xl text-card/90 mb-10 max-w-2xl leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            PetitPetit Enterprise specializes in connecting young professionals and families with affordable luxury
            properties starting from <span className="font-semibold text-gold">₦1M</span>. From stunning apartments to
            elegant homes in Nigeria&apos;s most prestigious neighborhoods.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-card text-primary hover:bg-gold hover:text-primary-foreground shadow-2xl hover:shadow-gold/25 transition-all duration-300 group text-base px-8 py-6"
            >
              <a href="#properties">
                View Properties
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-card text-card hover:bg-card/10 backdrop-blur-sm bg-transparent transition-all duration-300 group text-base px-8 py-6"
            >
              <a href="#contact">
                <Play className="mr-2 w-5 h-5" />
                Schedule Viewing
              </a>
            </Button>
          </div>

          <div
            className={`grid grid-cols-3 gap-4 lg:gap-8 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-dark rounded-2xl p-4 lg:p-6 text-center group hover:bg-card/20 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-gold" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <span className="block text-xs lg:text-sm text-card/70 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-card/70 hover:text-card transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-card/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
