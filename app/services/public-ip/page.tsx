"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Share2, Lock, Dna as Dns, ArrowRight, CheckCircle, Eye } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const ipTypes = [
  {
    name: "Shared Public IP",
    description: "Cost-effective shared IP addresses for basic connectivity needs",
    icon: <Share2 className="h-8 w-8" />,
    features: [
      "Cost-effective solution",
      "Basic internet connectivity",
      "Suitable for outbound traffic",
      "No additional charges",
    ],
    pricing: "Free",
    popular: true,
  },
  {
    name: "Dedicated Public IP",
    description: "Exclusive IP addresses assigned to your cloud resources",
    icon: <Lock className="h-8 w-8" />,
    features: ["Exclusive IP assignment", "Inbound traffic support", "Custom DNS configuration", "Enhanced security"],
    pricing: "18 Birr/IP/Month",
    popular: false,
  },
]

export default function PublicIPPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Globe className="h-4 w-4 mr-2" />
              Public IP Addresses
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Public IP
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Addresses
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-600 mb-12 leading-relaxed text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Public IP addresses assigned exclusively to your cloud resources with both shared and dedicated options
              for different use cases.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-300 text-teal-700 hover:bg-teal-50 bg-transparent"
                >
                  View Pricing
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IP Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">IP Address Options</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Choose between shared and dedicated IP addresses based on your connectivity requirements.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ipTypes.map((ipType, index) => (
              <motion.div
                key={ipType.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className={`h-full hover:shadow-xl transition-all duration-300 ${ipType.popular ? "ring-2 ring-teal-500" : ""}`}
                >
                  {ipType.popular && (
                    <div className="absolute -top-3 left-6 z-10">
                      <Badge className="bg-teal-500 text-white">Cost Effective</Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-teal-100 text-teal-600 rounded-lg mr-4">{ipType.icon}</div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">{ipType.name}</CardTitle>
                        <div className="text-sm font-medium text-teal-600 mt-1">{ipType.pricing}</div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">{ipType.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {ipType.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Advanced Features</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Enterprise IP management features for government and mission-critical applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lock,
                title: "Static IP Assignment",
                description: "Permanent IP addresses that don't change over time",
              },
              {
                icon: Dns,
                title: "DNS Management",
                description: "Full DNS control and management for your IP addresses",
              },
              { icon: Globe, title: "Reverse DNS", description: "Configure reverse DNS lookups for your IP addresses" },
              {
                icon: Eye,
                title: "IP Reputation Monitoring",
                description: "Monitor and maintain the reputation of your IP addresses",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-4 bg-teal-100 text-teal-600 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get Your IP Addresses</h2>
            <p className="text-teal-100 mb-8 text-lg max-w-2xl mx-auto">
              Secure reliable IP addresses for your government cloud infrastructure today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
                  Request IP Addresses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
