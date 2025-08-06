"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, BookOpen } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to accelerate your research and education?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of academic institutions already using INSA Cloud to push the boundaries of knowledge and
            innovation.
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium bg-transparent"
            >
              <Calculator className="mr-2 h-5 w-5" />
              View Pricing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium bg-transparent"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Documentation
            </Button>
          </div>
          <p className="text-gray-600">
            Questions?{" "}
            <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact our sales team
            </a>{" "}
            or
            <a href="/support" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
              get support
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
