"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Server, HardDrive, Database, Shield, Wifi, Globe, Headphones, GraduationCap, Monitor, ArrowRight, CheckCircle, Clock, Star } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    id: "cloud-servers",
    title: "Cloud Servers",
    description:
      "Flexible and scalable virtual machine servers designed to handle various workloads, from web hosting to enterprise applications.",
    icon: <Server className="h-8 w-8" />,
    types: ["General Purpose", "Compute Optimized", "Memory Optimized", "Storage Optimized"],
    pricing: {
      ssd: "SSD Based: (vCPU × 930) + (RAM × 210) + (Storage × 10) Birr/month",
      hdd: "HDD Based: (vCPU × 930) + (RAM × 210) + (Storage × 5) Birr/month",
    },
    popular: true,
  },
  {
    id: "backup-services",
    title: "Backup Services for Cloud Servers",
    description:
      "Automated backup solutions to protect cloud server data ensuring business continuity and data safety.",
    icon: <Database className="h-8 w-8" />,
    types: ["Full backup", "Snapshot backup", "Encrypted"],
    pricing: {
      hdd: "HDD: 11 Birr/GB/month",
    },
  },
  {
    id: "storage-archival",
    title: "Storage and Archival Services",
    description:
      "Flexible cloud storage solutions designed to meet various performance needs, from high-speed SSD storage to cost-effective HDD storage for long-term archival.",
    icon: <HardDrive className="h-8 w-8" />,
    types: ["Cloud SSD Storage", "Cloud HDD Storage"],
    pricing: {
      ssd: "SSD: 20 Birr/GB/Month",
      hdd: "HDD: 11 Birr/GB/Month",
    },
  },
  {
    id: "remote-access",
    title: "Remote Access Services",
    description: "Secure remote access solutions enabling users to connect to their cloud resources.",
    icon: <Shield className="h-8 w-8" />,
    types: ["Remote Access Portal (RAP)", "WireGuard VPN"],
    pricing: {
      rap: "RAP: Starting from 100 Birr/User/Month",
      vpn: "WireGuard VPN: Starting from 150 Birr/User/Month",
    },
  },
  {
    id: "monitoring-security",
    title: "Monitoring and Security Services",
    description:
      "A fully managed service providing real time monitoring and security event detection. This service is managed entirely by INSA ensuring proactive management and response.",
    icon: <Monitor className="h-8 w-8" />,
    types: ["Managed SIEM Agent", "Managed Service and Health Monitoring Agent"],
    pricing: {
      siem: "Starting from 1000 Birr/SIEM-agent/month",
      monitoring: "Starting from 500 Birr/Mon-agent/month",
    },
    featured: true,
  },
  {
    id: "internet-bandwidth",
    title: "Internet Bandwidth",
    description: "Scalable Internet bandwidth options to match your cloud needs.",
    icon: <Wifi className="h-8 w-8" />,
    types: ["Measured by Mbps"],
    pricing: {
      custom: "Maximum Rate limit with Custom Quote (Future Plan)",
    },
  },
  {
    id: "public-ip",
    title: "Public IP",
    description: "Public IP addresses assigned exclusively to your cloud resources.",
    icon: <Globe className="h-8 w-8" />,
    types: ["Shared", "Dedicated"],
    pricing: {
      shared: "Shared: Free",
      dedicated: "Dedicated: 18 Birr/IP/Month",
    },
  },
  {
    id: "support-services",
    title: "Support Services",
    description:
      "24/7 technical support services tailored to help manage and troubleshoot cloud environments, ensuring smooth operations and quick resolution of technical issues.",
    icon: <Headphones className="h-8 w-8" />,
    types: [
      "Basic Support: Email support with response times during business hours",
      "Premium Support: Phone and email support with prioritized response times. With dedicated support manager",
    ],
    pricing: {
      basic: "Basic Support: Starting from 500 Birr/month",
      premium: "Premium Support: Starting from 1000 Birr/month",
    },
  },
  {
    id: "training-deployment",
    title: "Custom Training and Deployment Assistance",
    description:
      "Tailored training and consulting services designed to help customers efficiently deploy, manage, and optimize their cloud environments.",
    icon: <GraduationCap className="h-8 w-8" />,
    types: ["Custom Training Sessions Only", "Deployment Assistance and Consulting Package"],
    pricing: {
      custom: "Determined based on individual customer requirements. Contact us for a customized quote.",
    },
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Government Grade Cloud Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              INSA G-Cloud
              <span className="block text-green-600">Service Catalog</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed">
              Comprehensive cloud solutions designed specifically for government agencies. Our services ensure seamless
              performance while maintaining the highest level of security and compliance.
            </p>

            {/* Key Features */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200">
                <Shield className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Government Grade Security</span>
              </div>
              <div className="flex items-center justify-center bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200">
                <Server className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">99.99% Infrastructure Uptime</span>
              </div>
              <div className="flex items-center justify-center bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200">
                <Headphones className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Cloud Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of cloud services, each designed to meet the specific needs of
              government agencies with robust security and reliability.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card
                  className={`h-full hover:shadow-xl transition-all duration-300 group cursor-pointer relative border-0 shadow-lg ${
                    service.featured
                      ? "bg-gradient-to-br from-green-50 to-emerald-50 ring-2 ring-green-200"
                      : "bg-white"
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-6 z-10">
                      <Badge className="bg-red-500 hover:bg-red-600 text-white shadow-lg">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  {service.featured && (
                    <div className="absolute -top-3 left-6 z-10">
                      <Badge className="bg-green-500 hover:bg-green-600 text-white shadow-lg">Fully Managed</Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div
                      className={`inline-flex p-4 rounded-xl mb-6 w-fit transition-colors ${
                        service.featured
                          ? "bg-green-100 text-green-600 group-hover:bg-green-200"
                          : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                          Service Types
                        </h4>
                        <ul className="space-y-3">
                          {service.types.map((type, idx) => (
                            <li key={idx} className="flex items-start text-sm text-slate-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="leading-relaxed">{type}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-slate-200 pt-6">
                        <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Pricing</h4>
                        <div className="space-y-2">
                          {Object.entries(service.pricing).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="font-medium text-green-600">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Link href={`/services/${service.id}`} className="block">
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-all duration-200 group-hover:shadow-lg">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Service Level Agreements</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              INSA will exert every possible effort to ensure the maximum availability of the cloud infrastructure
              created and allocated to its customers while adhering to operational functionality parameters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl font-bold text-slate-900">
                  <div className="p-3 bg-green-100 rounded-lg mr-4">
                    <Server className="h-6 w-6 text-green-600" />
                  </div>
                  Infrastructure Uptime
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold text-green-600 mb-4">99.99%</div>
                <p className="text-slate-600 leading-relaxed">
                  Uptime annually for electricity and/or air conditioning systems ensuring continuous operation of your
                  cloud infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl font-bold text-slate-900">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  Cloud Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold text-blue-600 mb-4">95.95%</div>
                <p className="text-slate-600 leading-relaxed">
                  Uptime annually for the accessibility of the cloud infrastructure created and allocated by INSA for
                  its clients.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start">
                <div className="p-2 bg-amber-100 rounded-lg mr-4 flex-shrink-0">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Important Notice</h4>
                  <p className="text-amber-700 leading-relaxed">
                    Uptime excludes scheduled maintenance windows and unforeseen circumstances beyond INSA's control.
                    All maintenance activities are scheduled during off-peak hours with advance notification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Terms and Conditions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Clear and transparent terms to ensure smooth service delivery and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  Pricing & Contracts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-slate-600 leading-relaxed">
                      All pricing is based on standard configurations and usage; custom solutions may incur additional
                      costs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-slate-600 leading-relaxed">
                      Discounts available for long-term contracts.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-slate-600 leading-relaxed">
                      Service modifications during the contract period may result in price adjustments. Changes will be communicated and agreed upon before implementation.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <Headphones className="h-5 w-5 text-blue-600" />
                  </div>
                  Customer Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-slate-600 leading-relaxed">
                      Customers are responsible for providing accurate information, timely access, and cooperation
                      necessary for service delivery.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-slate-600 leading-relaxed">
                      Regular backup and security practices are recommended for optimal service performance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-slate-600 leading-relaxed">
                      Service level agreements are maintained through collaborative partnership and clear communication.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            For additional information, service customization, or consultation requests, please reach out to our expert
            team. We're here to help you build the perfect cloud solution for your government agency.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-600 hover:bg-gray-100 font-medium px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">Contact Sales Team</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 bg-transparent font-medium px-8 py-4 text-lg"
              asChild
            >
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
          <div className="text-lg opacity-90">
            <p className="mb-2">Get in touch with our cloud specialists</p>
            <p className="text-base opacity-75">Email: info@insa.gov.et | Phone: +251-11-XXX-XXXX</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
