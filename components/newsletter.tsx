"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section ref={sectionRef} className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 font-serif">Get Property Alerts</h3>
          <p className="text-muted-foreground mb-6">
            Be the first to know about new listings matching your criteria. No spam, just properties.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 p-6 bg-green-500/10 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-foreground font-medium">
                You&apos;re subscribed! Check your inbox for confirmation.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
                <Send className="w-5 h-5 mr-2" />
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
