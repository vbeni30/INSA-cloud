"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const plans = [
  {
    name: "Student",
    price: "Free",
    description: "Perfect for individual students and coursework",
    features: ["$100 monthly credits", "Basic compute instances", "Community support", "Educational resources"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Research",
    price: "$500",
    period: "/month",
    description: "Ideal for research projects and small teams",
    features: [
      "$2,000 monthly credits",
      "GPU instances",
      "Priority support",
      "Advanced analytics",
      "Collaboration tools",
    ],
    cta: "Start Trial",
    popular: true,
  },
  {
    name: "Institution",
    price: "Custom",
    description: "Enterprise solutions for universities",
    features: ["Unlimited usage", "Dedicated support", "Custom integrations", "Volume discounts", "SLA guarantees"],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">Pricing</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Transparent, academic-friendly pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexible pricing models designed for educational budgets with special rates for students, researchers, and
            institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-lg p-8 shadow-sm border-2 relative ${
                plan.popular ? "border-blue-500" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
