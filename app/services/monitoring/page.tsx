"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Monitor, Shield, AlertTriangle, Activity, ArrowRight, CheckCircle, Clock, Eye } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const monitoringServices = [
  {
    name: "Managed SIEM Agent",
    description: "Fully managed Security Information and Event Management service",
    icon: <Shield className="h-8 w-8" />,
    features: [
      "Real-time threat detection",
      "Security event correlation",
      "Compliance reporting",
      "24/7 SOC monitoring",
    ],
    pricing: "Starting from 1000 Birr/SIEM-agent/month",
    popular: true,
  },
  {
    name: "Managed Service and Health Monitoring Agent",
    description: "Comprehensive system health and performance monitoring",
    icon: <Activity className="h-8 w-8" />,
    features: [
      "System performance monitoring",
      "Application health checks",
      "Resource utilization tracking",
      "Automated alerting",
    ],
    pricing: "Starting from 500 Birr/Mon-agent/month",
    popular: false,
  },
]

export default function MonitoringSecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Monitor className="h-4 w-4 mr-2" />
              Monitoring & Security Services
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Real-time Monitoring
              <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                & Security
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-600 mb-12 leading-relaxed text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Fully managed service providing real-time monitoring and security event detection, managed entirely by
              INSA for proactive management and response.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent"
                >
                  View Pricing
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Monitoring Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Monitoring Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Comprehensive monitoring and security services managed by INSA experts.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {monitoringServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className={`h-full hover:shadow-xl transition-all duration-300 ${service.popular ? "ring-2 ring-red-500" : ""}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-6 z-10">
                      <Badge className="bg-red-500 text-white">Fully Managed</Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-red-100 text-red-600 rounded-lg mr-4">{service.icon}</div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">{service.name}</CardTitle>
                        <div className="text-sm font-medium text-red-600 mt-1">{service.pricing}</div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Advanced Capabilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Enterprise-grade monitoring and security features for government operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Real-time Alerts",
                description: "Instant notifications for security events and system anomalies",
              },
              {
                icon: Eye,
                title: "Threat Intelligence",
                description: "Advanced threat detection using machine learning and AI",
              },
              {
                icon: CheckCircle,
                title: "Compliance Reporting",
                description: "Automated compliance reports for government standards",
              },
              {
                icon: Clock,
                title: "Incident Response",
                description: "24/7 incident response team for immediate threat mitigation",
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
                <div className="p-4 bg-red-100 text-red-600 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
      <section className="py-24 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Secure Your Infrastructure</h2>
            <p className="text-red-100 mb-8 text-lg max-w-2xl mx-auto">
              Get comprehensive monitoring and security services managed by INSA experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                  Start Monitoring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
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
