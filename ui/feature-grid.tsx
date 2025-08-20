"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import type React from "react"

interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
  features?: string[]
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
}

export const FeatureGrid = ({ features, columns = 3 }: FeatureGridProps) => {
  const gridCols = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  }

  return (
    <div className={`grid md:grid-cols-2 ${gridCols[columns]} gap-8`}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
        >
          {feature.icon && <div className="mb-4 p-3 bg-blue-50 rounded-lg w-fit">{feature.icon}</div>}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
          {feature.features && (
            <ul className="space-y-2">
              {feature.features.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  )
}
