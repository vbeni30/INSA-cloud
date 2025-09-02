"use client"

import { motion } from "framer-motion"
import { Lock, Shield, CheckCircle, Activity } from "lucide-react"

const securityFeatures = [
  {
    title: "Data Protection",
    description: "End-to-end encryption, key management, and data loss prevention.",
    icon: <Lock className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Identity & Access",
    description: "Multi-factor authentication, SSO integration, and role-based access control.",
    icon: <Shield className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Compliance",
    description: "SOC 2, GDPR, FERPA, and other academic compliance requirements.",
    icon: <CheckCircle className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Monitoring",
    description: "Real-time security monitoring, threat detection, and incident response.",
    icon: <Activity className="h-6 w-6 text-purple-600" />,
  },
]

export function SecuritySection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">Security & Compliance</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Built on a foundation of trust and security
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade security controls and compliance certifications that meet the stringent requirements of
            academic institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((security, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-4 flex justify-center">{security.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{security.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{security.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
