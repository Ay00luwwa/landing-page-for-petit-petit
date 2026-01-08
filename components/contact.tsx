"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["FHA Kapwa,Opposite Springville Estate, Lugbe, Abuja"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+234 907 309 6453", "+234 704 247 8111"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["petitpetitenterprise@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9AM - 5PM", "Sat: 10AM - 4PM"],
  },
]

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual EmailJS or Netlify Forms)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", phone: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-background/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold tracking-wide uppercase text-sm rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4 font-serif">Contact Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to find your dream home? Have questions about our properties? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <Card className="bg-card border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-foreground mb-6 font-serif">Send Us a Message</h3>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-2 font-serif">Message Sent!</h4>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We&apos;ll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={handleChange}
                          className="bg-background border-border focus:border-primary focus:ring-primary h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          className="bg-background border-border focus:border-primary focus:ring-primary h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+234 801 234 5678"
                        value={formState.phone}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary focus:ring-primary h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="I'm interested in..."
                        value={formState.message}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary focus:ring-primary resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-gold text-primary-foreground py-6 text-lg transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Map */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                    {info.details.map((detail) => (
                      <p key={detail} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-card border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286776380883!2d3.4226018!3d6.4281591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53aec4dd92d%3A0x5e34fe63c3d7b00!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PetitPetit Enterprise Office Location"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Map overlay card */}
                <div className="absolute bottom-4 left-4 glass-card rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Head Office</p>
                      <p className="text-muted-foreground text-xs">Victoria Island, Lagos</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/2347042478111?text=Hello%2C%20I'm%20interested%20in%20your%20properties"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </section>
  )
}
