"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, BookOpen } from "lucide-react"
import { useRouter } from "next/navigation"

export function CTASection() {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to modernize your government operations?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            Join government agencies across Ethiopia already using INSA G-Cloud for secure, reliable, and scalable cloud
            infrastructure.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-medium"
              onClick={() => handleNavigation("/contact")}
            >
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium bg-transparent"
              onClick={() => handleNavigation("/pricing")}
            >
              <Calculator className="mr-2 h-5 w-5" />
              View Pricing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium bg-transparent"
              onClick={() => handleNavigation("/services")}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Documentation
            </Button>
          </div>
          <p className="text-gray-600">
            Questions?{" "}
            <button
              onClick={() => handleNavigation("/contact")}
              className="text-green-600 hover:text-green-700 font-medium cursor-pointer"
            >
              Contact Us
            </button>{" "}
            or
            <button
              onClick={() => handleNavigation("/support")}
              className="text-green-600 hover:text-green-700 font-medium ml-1 cursor-pointer"
            >
              get support
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
