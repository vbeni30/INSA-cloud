"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wifi, Zap, BarChart3, Settings, ArrowRight, CheckCircle, TrendingUp, Activity } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function InternetBandwidthPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Wifi className="h-4 w-4 mr-2" />
              Internet Bandwidth
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Scalable Internet
              <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Bandwidth
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-600 mb-12 leading-relaxed text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Scalable Internet bandwidth options measured by Mbps with maximum rate limits to match your cloud
              infrastructure needs.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 bg-transparent"
                >
                  View Pricing
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bandwidth Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Bandwidth Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Flexible bandwidth options designed to scale with your government operations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Measured by Mbps",
                description: "Bandwidth allocation measured in Megabits per second for precise resource management",
                icon: <BarChart3 className="h-8 w-8" />,
                features: [
                  "Precise bandwidth allocation",
                  "Real-time usage monitoring",
                  "Flexible scaling options",
                  "Performance analytics",
                ],
              },
              {
                title: "Maximum Rate Limits",
                description: "Configurable rate limits to ensure optimal performance and cost control",
                icon: <Settings className="h-8 w-8" />,
                features: [
                  "Customizable rate limits",
                  "Burst capability",
                  "Traffic shaping",
                  "Quality of Service (QoS)",
                ],
              },
              {
                title: "Custom Quotes",
                description: "Tailored pricing based on your specific bandwidth requirements and usage patterns",
                icon: <TrendingUp className="h-8 w-8" />,
                features: ["Custom pricing models", "Volume discounts", "Long-term contracts", "Dedicated support"],
              },
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg mr-4">{solution.icon}</div>
                      <CardTitle className="text-xl font-bold text-gray-900">{solution.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">{solution.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {solution.features.map((feature, idx) => (
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
              Enterprise networking features for government and mission-critical applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Dedicated Bandwidth",
                description: "Guaranteed bandwidth allocation for consistent performance",
              },
              {
                icon: TrendingUp,
                title: "Burst Capability",
                description: "Temporary bandwidth increases during peak usage periods",
              },
              {
                icon: Activity,
                title: "Traffic Analytics",
                description: "Detailed traffic analysis and usage reporting",
              },
              {
                icon: Settings,
                title: "QoS Management",
                description: "Quality of Service controls for priority traffic",
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
                <div className="p-4 bg-indigo-100 text-indigo-600 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Scale Your Bandwidth</h2>
            <p className="text-indigo-100 mb-8 text-lg max-w-2xl mx-auto">
              Get customized bandwidth solutions that grow with your government operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-indigo-600 bg-transparent"
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
