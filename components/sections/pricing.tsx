"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const plans = [
  {
    name: "Basic Cloud Server",
    price: "1,150",
    period: " Birr/month",
    description: "1 vCPU, 1GB RAM, 10GB SSD Storage",
    features: ["General Purpose VM", "SSD Storage", "Basic Support", "99.99% Uptime SLA"],
    cta: "Get Quote",
    popular: false,
  },
  {
    name: "Standard Package",
    price: "3,000",
    period: " Birr/month",
    description: "2 vCPU, 4GB RAM, 50GB SSD + Backup",
    features: [
      "Compute Optimized VM",
      "Automated Backup (11 Birr/GB)",
      "Remote Access Portal",
      "Premium Support",
      "Monitoring & Security",
    ],
    cta: "Get Quote",
    popular: true,
  },
  {
    name: "Enterprise Solution",
    price: "Custom",
    description: "Tailored for large government agencies",
    features: [
      "Unlimited Resources",
      "Dedicated Support Manager",
      "Custom Training",
      "SLA Guarantees",
      "Volume Discounts",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-3">Pricing</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Transparent, government-friendly pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexible pricing models designed for government budgets with discounts available for long-term contracts.
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
                plan.popular ? "border-green-500" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All pricing is based on standard configurations. Custom solutions may incur additional costs.
          </p>
          <p className="text-sm text-gray-500">
            Discounts available for long-term contracts. Contact us for volume pricing.
          </p>
        </div>
      </div>
    </section>
  )
}
