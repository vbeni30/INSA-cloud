"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "INSA G-Cloud has transformed our agency's IT infrastructure. The security features and compliance standards give us complete confidence in handling sensitive government data.",
    author: "Dr. Alemayehu Tadesse",
    title: "IT Director",
    institution: "Ministry of Innovation and Technology",
    metrics: { uptime: "99.99%", security: "Gov Grade", support: "24/7" },
  },
  {
    quote:
      "The scalability and reliability of INSA's cloud services have enabled us to modernize our citizen services while maintaining the highest security standards.",
    author: "Ato Bekele Mekonnen",
    title: "Chief Information Officer",
    institution: "Ethiopian Revenue and Customs Authority",
    metrics: { users: "10K+", transactions: "1M+", availability: "95.95%" },
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-3">Customer Success</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by government agencies across Ethiopia
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            See how government organizations are leveraging Gotera Cloud to modernize their operations while maintaining security and compliance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">"{testimonial.quote}"</blockquote>
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm font-medium text-green-600">{testimonial.institution}</div>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
