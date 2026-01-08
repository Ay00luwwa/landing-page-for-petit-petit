"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight, Heart, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Property {
  id: number
  title: string
  location: string
  price: string
  beds: number
  baths: number
  size: string
  image: string
  images: string[]
  type: string
  badge?: string
  description: string
  features: string[]
}

const properties: Property[] = [
  {
    id: 1,
    title: "Luxurious 3-Bed Apartment",
    location: "Victoria Island, Lagos",
    price: "₦85,000,000",
    beds: 3,
    baths: 3,
    size: "180 sqm",
    image: "/luxury-apartment-victoria-island-lagos-modern-inte.jpg",
    images: [
      "/luxury-apartment-living-room-victoria-island-lagos.jpg",
      "/modern-bedroom-apartment-lagos.jpg",
      "/luxury-bathroom-lagos-apartment.jpg",
    ],
    type: "Apartment",
    badge: "Featured",
    description:
      "Experience premium living in this stunning 3-bedroom apartment featuring floor-to-ceiling windows, a modern open-plan kitchen, and breathtaking city views. Located in the heart of Victoria Island with easy access to top restaurants and business districts.",
    features: [
      "24/7 Security",
      "Swimming Pool",
      "Gym Access",
      "Covered Parking",
      "Backup Generator",
      "Smart Home System",
    ],
  },
  {
    id: 2,
    title: "Modern 4-Bed Duplex",
    location: "Lekki Phase 1, Lagos",
    price: "₦150,000,000",
    beds: 4,
    baths: 4,
    size: "320 sqm",
    image: "/modern-duplex-lekki-lagos-exterior-garden.jpg",
    images: [
      "/modern-duplex-living-room-lekki-lagos.jpg",
      "/luxury-master-bedroom-duplex-lagos.jpg",
      "/modern-kitchen-duplex-lagos.jpg",
    ],
    type: "Duplex",
    badge: "New Build",
    description:
      "A magnificent 4-bedroom duplex perfect for families seeking space and elegance. Features include a private garden, spacious living areas, a modern kitchen with high-end appliances, and a dedicated study room.",
    features: ["Private Garden", "Boys Quarter", "Study Room", "Double Garage", "Service Area", "Terrace"],
  },
  {
    id: 3,
    title: "Elegant 2-Bed Flat",
    location: "Ikoyi, Lagos",
    price: "₦65,000,000",
    beds: 2,
    baths: 2,
    size: "120 sqm",
    image: "/elegant-apartment-ikoyi-lagos-waterfront-view.jpg",
    images: [
      "/elegant-living-room-ikoyi-lagos.jpg",
      "/modern-bedroom-ikoyi-apartment.jpg",
      "/modern-kitchen-ikoyi.jpg",
    ],
    type: "Flat",
    description:
      "A beautifully designed 2-bedroom flat in prestigious Ikoyi. Enjoy stunning waterfront views, premium finishes throughout, and access to world-class amenities in one of Lagos's most sought-after neighborhoods.",
    features: ["Waterfront View", "Balcony", "Concierge Service", "Elevator Access", "Central AC", "CCTV Security"],
  },
  {
    id: 4,
    title: "Spacious 5-Bed House",
    location: "Banana Island, Lagos",
    price: "₦195,000,000",
    beds: 5,
    baths: 6,
    size: "450 sqm",
    image: "/luxury-mansion-banana-island-lagos.jpg",
    images: ["/mansion-living-room-banana-island.jpg", "/luxury-master-suite-lagos.jpg", "/private-pool-mansion-lagos.jpg"],
    type: "House",
    badge: "Premium",
    description:
      "An exceptional 5-bedroom mansion in the exclusive Banana Island enclave. This property boasts a private swimming pool, landscaped gardens, entertainment areas, and the highest level of privacy and security.",
    features: ["Private Pool", "Cinema Room", "Wine Cellar", "Staff Quarters", "Landscaped Garden", "4-Car Garage"],
  },
  {
    id: 5,
    title: "Cozy 2-Bed Apartment",
    location: "Yaba, Lagos",
    price: "₦52,000,000",
    beds: 2,
    baths: 2,
    size: "95 sqm",
    image: "/modern-apartment-yaba-lagos-tech-hub.jpg",
    images: ["/modern-living-room-yaba-apartment.jpg", "/bedroom-modern-yaba-lagos.jpg", "/home-office-apartment-lagos.jpg"],
    type: "Apartment",
    badge: "Best Value",
    description:
      "Perfect for young professionals, this modern 2-bedroom apartment is located in Lagos's tech hub. Walking distance to co-working spaces, restaurants, and entertainment venues. Modern design meets practical living.",
    features: [
      "Fiber Optic Internet",
      "Rooftop Access",
      "Bike Storage",
      "Laundry Facility",
      "24/7 Power",
      "Pet Friendly",
    ],
  },
  {
    id: 6,
    title: "Executive 3-Bed Penthouse",
    location: "Eko Atlantic, Lagos",
    price: "₦180,000,000",
    beds: 3,
    baths: 4,
    size: "280 sqm",
    image: "/luxury-penthouse-eko-atlantic-ocean-view.jpg",
    images: ["/penthouse-living-room-ocean-view-lagos.jpg", "/penthouse-terrace-eko-atlantic.jpg", "/luxury-master-bedroom-ocean-view.jpg"],
    type: "Penthouse",
    badge: "Exclusive",
    description:
      "The pinnacle of luxury living in Eko Atlantic City. This stunning penthouse offers panoramic ocean and city views, a private terrace, and access to exclusive amenities including a helipad, marina, and private beach.",
    features: ["Ocean View", "Private Terrace", "Helipad Access", "Marina Access", "Private Beach", "Infinity Pool"],
  },
]

export default function FeaturedProperties() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])
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

  const nextImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProperty.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length)
    }
  }

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]))
  }

  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case "Featured":
        return "bg-gold text-primary"
      case "New Build":
        return "bg-green-500 text-white"
      case "Premium":
        return "bg-primary text-primary-foreground"
      case "Best Value":
        return "bg-blue-500 text-white"
      case "Exclusive":
        return "bg-purple-600 text-white"
      default:
        return "bg-primary text-primary-foreground"
    }
  }

  return (
    <section ref={sectionRef} id="properties" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold tracking-wide uppercase text-sm rounded-full mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4 font-serif">Featured Properties</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties across Lagos. From elegant apartments to spacious
            family homes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card
              key={property.id}
              className={`group overflow-hidden bg-card border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => {
                setSelectedProperty(property)
                setCurrentImageIndex(0)
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                    {property.type}
                  </span>
                  {property.badge && (
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full shadow-lg flex items-center gap-1 ${getBadgeColor(property.badge)}`}
                    >
                      <Sparkles className="w-3 h-3" />
                      {property.badge}
                    </span>
                  )}
                </div>
                {/* Favorite button */}
                <button
                  onClick={(e) => toggleFavorite(property.id, e)}
                  className="absolute top-4 right-4 p-2.5 glass-card rounded-full hover:bg-card transition-all duration-300 group/fav"
                  aria-label={favorites.includes(property.id) ? "Remove from favorites" : "Add to favorites"}
                >
                  <Heart
                    className={`w-5 h-5 transition-all duration-300 ${
                      favorites.includes(property.id)
                        ? "fill-red-500 text-red-500 scale-110"
                        : "text-muted-foreground group-hover/fav:text-red-500"
                    }`}
                  />
                </button>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                  <span className="text-card font-medium text-sm tracking-wide uppercase">View Details</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>{property.location}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-serif">
                  {property.title}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Square className="w-4 h-4" />
                    <span>{property.size}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-primary font-serif">{property.price}</span>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-gold text-primary-foreground transition-all duration-300"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedProperty && (
          <div
            className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedProperty(null)}
          >
            <div
              className="bg-card rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-6 right-6 p-3 bg-card/90 rounded-full hover:bg-card transition-colors z-10 shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>

              {/* Image Gallery */}
              <div className="relative">
                <img
                  src={selectedProperty.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${selectedProperty.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-80 lg:h-[450px] object-cover rounded-t-3xl"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-card/90 rounded-full hover:bg-card transition-colors shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-card/90 rounded-full hover:bg-card transition-colors shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProperty.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? "bg-gold w-8" : "bg-card/70 hover:bg-card"
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
                {/* Badges in modal */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg">
                    {selectedProperty.type}
                  </span>
                  {selectedProperty.badge && (
                    <span
                      className={`px-4 py-1.5 text-sm font-semibold rounded-full shadow-lg ${getBadgeColor(selectedProperty.badge)}`}
                    >
                      {selectedProperty.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Property Details */}
              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-serif mb-2">
                      {selectedProperty.title}
                    </h2>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-gold" />
                      <span>{selectedProperty.location}</span>
                    </div>
                  </div>
                  <p className="text-3xl lg:text-4xl font-bold text-primary font-serif">{selectedProperty.price}</p>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-6 py-6 border-y border-border mb-6">
                  <div className="flex items-center gap-3 px-4 py-2 bg-secondary rounded-xl">
                    <Bed className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{selectedProperty.beds} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-secondary rounded-xl">
                    <Bath className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{selectedProperty.baths} Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-secondary rounded-xl">
                    <Square className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{selectedProperty.size}</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-lg font-serif">About This Property</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedProperty.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-lg font-serif">Property Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProperty.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-gold rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border">
                  <Button
                    className="flex-1 bg-primary hover:bg-gold text-primary-foreground py-6 text-lg transition-all duration-300"
                    asChild
                  >
                    <a href="#contact">Schedule Viewing</a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 text-lg transition-all duration-300 bg-transparent"
                    asChild
                  >
                    <a href="#contact">Request Info</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
