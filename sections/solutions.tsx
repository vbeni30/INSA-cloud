"use client"

import { motion } from "framer-motion"
import { GraduationCap, Microscope, Building, CheckCircle } from "lucide-react"

const solutions = [
  {
    title: "Research Computing",
    description: "High-performance computing clusters for computational research, simulations, and data analysis.",
    icon: <Microscope className="h-8 w-8 text-blue-600" />,
    features: [
      "GPU clusters for AI/ML research",
      "Quantum computing simulators",
      "Distributed computing frameworks",
      "Research data management",
    ],
  },
  {
    title: "Educational Platforms",
    description: "Scalable infrastructure for online learning, virtual labs, and collaborative educational tools.",
    icon: <GraduationCap className="h-8 w-8 text-red-600" />,
    features: [
      "Virtual classroom environments",
      "Student project hosting",
      "Learning management systems",
      "Educational content delivery",
    ],
  },
  {
    title: "Institutional IT",
    description: "Enterprise-grade solutions for campus-wide IT infrastructure and administrative systems.",
    icon: <Building className="h-8 w-8 text-green-600" />,
    features: [
      "Campus network management",
      "Student information systems",
      "Administrative applications",
      "Disaster recovery solutions",
    ],
  },
]

export function SolutionsSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">Solutions</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Purpose-built for academic institutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tailored solutions that address the unique challenges and requirements of educational and research
            organizations.
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
              <div className="mb-4 p-3 bg-blue-50 rounded-lg w-fit">{solution.icon}</div>
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
