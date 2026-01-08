"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"

const faqs = [
  {
    question: "What is the price range of properties you offer?",
    answer:
      "We specialize in affordable luxury properties ranging from ₦50 million to ₦200 million. This includes apartments, duplexes, and standalone houses across premium Lagos locations like Victoria Island, Ikoyi, Lekki, and Banana Island.",
  },
  {
    question: "Do you offer mortgage assistance?",
    answer:
      "Yes! We have partnerships with leading Nigerian banks including First Bank, GTBank, Access Bank, and others. Our team helps you navigate the mortgage application process and secure competitive interest rates tailored to your financial situation.",
  },
  {
    question: "How do I schedule a property viewing?",
    answer:
      "You can schedule a viewing by filling out our contact form, calling us directly at +234 801 234 5678, or sending us a WhatsApp message. We offer flexible viewing times including weekends and can arrange virtual tours for out-of-state clients.",
  },
  {
    question: "What documents do I need to purchase a property?",
    answer:
      "Typically you'll need a valid ID (National ID, Passport, or Driver's License), proof of income or employment, bank statements for the last 6 months, and tax clearance certificates. Our team guides you through the entire documentation process.",
  },
  {
    question: "Do you handle property management after purchase?",
    answer:
      "Our property management services include tenant sourcing, rent collection, property maintenance, and regular inspections. This is ideal for property investors or homeowners living abroad.",
  },
  {
    question: "Are the listed properties legally verified?",
    answer:
      "Yes, every property on our platform undergoes thorough legal verification. This includes confirmation of land titles, government-approved building plans, Certificate of Occupancy (C of O), and Governor's Consent where applicable.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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
    <section ref={sectionRef} id="faq" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold tracking-wide uppercase text-sm rounded-full mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4 font-serif">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about buying, renting, and investing in Lagos real estate.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${openIndex === index ? "shadow-lg border-gold/30" : "hover:border-primary/30"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-foreground pr-4 font-serif">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-gold" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="px-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional help */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border">
            <MessageCircle className="w-5 h-5 text-gold" />
            <span className="text-muted-foreground">
              Still have questions?{" "}
              <a href="#contact" className="text-primary hover:text-gold font-semibold transition-colors">
                Contact our team
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
