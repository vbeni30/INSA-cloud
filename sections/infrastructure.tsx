"use client"

import { motion } from "framer-motion"
import { Globe, Server, Network, Gauge, CheckCircle } from "lucide-react"

const stats = [
  { label: "Regions", value: "25+", icon: Globe, color: "blue" },
  { label: "Availability Zones", value: "84", icon: Server, color: "red" },
  { label: "Edge Locations", value: "400+", icon: Network, color: "green" },
  { label: "Network Performance", value: "<50ms", icon: Gauge, color: "purple" },
]

const advantages = [
  "99.99% uptime SLA with automatic failover",
  "Data residency compliance for academic institutions",
  "Direct connections to research networks (Internet2, GÉANT)",
  "24/7 monitoring and incident response",
  "Carbon-neutral data centers",
]

export function InfrastructureSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">Global Infrastructure</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Worldwide presence, academic focus</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our global network of data centers and edge locations ensures optimal performance for academic institutions
            worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center"
                >
                  <div className={`inline-flex p-3 rounded-lg mb-3 bg-${stat.color}-50`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Infrastructure advantages</h3>
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
