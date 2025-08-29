"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "INSA Cloud has transformed our research capabilities. We've reduced computational time by 75% and can now tackle problems that were previously impossible.",
    author: "Dr. Sarah Chen",
    title: "Director of Computational Research",
    institution: "Stanford University",
    metrics: { students: "45K", research: "$1.2B", time_saved: "75%" },
  },
  {
    quote:
      "The security and compliance features give us complete confidence in handling sensitive research data while maintaining the flexibility we need.",
    author: "Prof. Michael Rodriguez",
    title: "Chief Information Officer",
    institution: "MIT",
    metrics: { faculty: "11K", projects: "3K", uptime: "99.99%" },
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">Customer Success</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by leading academic institutions worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how universities and research organizations are leveraging our platform to advance their mission.
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
                    <div className="text-sm font-medium text-blue-600">{testimonial.institution}</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(testimonial.metrics).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace("_", " ")}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
