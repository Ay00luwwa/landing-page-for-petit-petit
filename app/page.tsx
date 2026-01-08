import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Partners from "@/components/partners"
import FeaturedProperties from "@/components/featured-properties"
import WhyChooseUs from "@/components/why-choose-us"
import Services from "@/components/services"
import CTABanner from "@/components/cta-banner"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Newsletter from "@/components/newsletter"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      {/* <Partners /> */}
      <FeaturedProperties />
      <WhyChooseUs />
      <Services />
      <CTABanner />
      {/* <Testimonials /> */}
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  )
}
