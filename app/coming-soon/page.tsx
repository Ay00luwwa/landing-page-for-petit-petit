"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Home, ArrowLeft, Bell, Building2, Key, MapPin, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 0,
  })

  useEffect(() => {
    setIsLoaded(true)

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  const features = [
    {
      icon: Building2,
      title: "Expanded Listings",
      description: "More properties across Lagos",
    },
    {
      icon: Key,
      title: "Virtual Tours",
      description: "360° property walkthroughs",
    },
    {
      icon: MapPin,
      title: "Neighborhood Guides",
      description: "Detailed area insights",
    },
    {
      icon: Clock,
      title: "Instant Bookings",
      description: "Schedule viewings in seconds",
    },
  ]

  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      {/* Background with animated elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-gold/5" />

        {/* Animated building silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-10">
          <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
            <rect x="50" y="80" width="60" height="120" fill="currentColor" className="text-primary" />
            <rect x="120" y="40" width="80" height="160" fill="currentColor" className="text-primary" />
            <rect x="220" y="100" width="50" height="100" fill="currentColor" className="text-primary" />
            <rect x="290" y="20" width="100" height="180" fill="currentColor" className="text-primary" />
            <rect x="410" y="60" width="70" height="140" fill="currentColor" className="text-primary" />
            <rect x="500" y="30" width="90" height="170" fill="currentColor" className="text-primary" />
            <rect x="610" y="80" width="60" height="120" fill="currentColor" className="text-primary" />
            <rect x="690" y="50" width="80" height="150" fill="currentColor" className="text-primary" />
            <rect x="790" y="90" width="55" height="110" fill="currentColor" className="text-primary" />
            <rect x="865" y="25" width="95" height="175" fill="currentColor" className="text-primary" />
            <rect x="980" y="70" width="65" height="130" fill="currentColor" className="text-primary" />
            <rect x="1065" y="40" width="85" height="160" fill="currentColor" className="text-primary" />
          </svg>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-40 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 min-h-screen flex flex-col">
        {/* Header */}
        <header className="py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:bg-gold transition-colors duration-300 shadow-lg">
                <Home className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight font-serif text-foreground">PetitPetit</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Enterprise</span>
              </div>
            </Link>
            <Button asChild variant="ghost" className="gap-2 text-muted-foreground hover:text-primary">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </nav>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center py-12">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Something Amazing is Coming
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-serif leading-tight">
              Building Your <span className="text-primary">Dream</span> Experience
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              We&apos;re crafting an exceptional new feature to enhance your property search journey. Get ready for a
              seamless way to find your perfect home in Lagos.
            </p>

            {/* Countdown */}
            <div
              className={`grid grid-cols-4 gap-4 md:gap-6 max-w-lg mx-auto mb-12 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {[
                { value: countdown.days, label: "Days" },
                { value: countdown.hours, label: "Hours" },
                { value: countdown.minutes, label: "Minutes" },
                { value: countdown.seconds, label: "Seconds" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-2xl p-4 md:p-6 text-center group hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="text-3xl md:text-5xl font-bold text-primary font-serif block">
                    {item.value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1 block">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Email signup */}
            <div
              className={`max-w-md mx-auto transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {isSubmitted ? (
                <div className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bell className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-serif">You&apos;re on the list!</h3>
                  <p className="text-muted-foreground">We&apos;ll notify you when this feature goes live.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-14 px-6 rounded-xl border-2 border-border focus:border-primary bg-card text-foreground"
                    required
                  />
                  <Button
                    type="submit"
                    className="h-14 px-8 bg-primary hover:bg-gold text-primary-foreground rounded-xl transition-all duration-300"
                  >
                    <Bell className="w-5 h-5 mr-2" />
                    Notify Me
                  </Button>
                </form>
              )}
              <p className="text-xs text-muted-foreground mt-4">
                Be the first to know when we launch. No spam, just updates.
              </p>
            </div>
          </div>

          {/* Features preview */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 w-full max-w-4xl transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-6 text-center group hover:bg-primary/5 transition-all duration-300"
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 font-serif">{feature.title}</h4>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="py-6 text-center">
          <p className="text-sm text-muted-foreground">
            Questions? Contact us at{" "}
            <a href="mailto:info@petitpetit.ng" className="text-primary hover:text-gold transition-colors">
              info@petitpetit.ng
            </a>
          </p>
        </footer>
      </div>
    </main>
  )
}
