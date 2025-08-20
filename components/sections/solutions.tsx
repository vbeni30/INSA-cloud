"use client"

import { motion } from "framer-motion"
import { Building, Shield, Database, CheckCircle } from "lucide-react"

const solutions = [
  {
    title: "Government Agencies",
    description: "Secure cloud infrastructure designed for federal, regional, and local government operations.",
    icon: <Building className="h-8 w-8 text-green-600" />,
    features: [
      "Mission-critical application hosting",
      "Citizen service platforms",
      "Inter-agency data sharing",
      "Disaster recovery solutions",
    ],
  },
  {
    title: "Security & Compliance",
    description: "Government-grade security controls and compliance certifications for sensitive data handling.",
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    features: [
      "End-to-end encryption",
      "Multi-factor authentication",
      "Audit trails and logging",
      "Regulatory compliance",
    ],
  },
  {
    title: "Data Management",
    description: "Comprehensive data storage, backup, and archival solutions for government records and operations.",
    icon: <Database className="h-8 w-8 text-purple-600" />,
    features: [
      "Automated backup systems",
      "Long-term data archival",
      "Data lifecycle management",
      "Cross-region replication",
    ],
  },
]

export function SolutionsSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-3">Solutions</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Purpose-built for government institutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            Tailored solutions that address the unique challenges and requirements of government agencies handling
            sensitive data and mission-critical operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-4 p-3 bg-green-50 rounded-lg w-fit">{solution.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
