"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Server, Shield, Database, Network, Users, ArrowRight, CheckCircle, Cloud, Lock, Zap } from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
  const cloudModels = [
    {
      icon: Cloud,
      title: "Infrastructure as a Service (IaaS)",
      description: "Cloud service model providing virtualized computing resources over the internet",
      features: ["Virtual Machines", "Storage Solutions", "Network Infrastructure", "Backup Services"],
      services: ["Cloud Servers", "Storage & Archival", "Public IP", "Internet Bandwidth"],
    },
    {
      icon: Lock,
      title: "Platform as a Service (PaaS)",
      description:
        "Cloud service model offering hardware and software tools over the internet for application development",
      features: ["Development Platforms", "Database Management", "Application Hosting", "API Management"],
      services: ["Remote Access Services", "Monitoring & Security", "Support Services"],
    },
    {
      icon: Zap,
      title: "Software as a Service (SaaS)",
      description:
        "Cloud service model delivering software applications over the internet, typically on a subscription basis",
      features: ["Ready-to-use Applications", "Automatic Updates", "Multi-tenant Architecture", "Subscription Based"],
      services: ["Custom Training", "Deployment Assistance", "Managed Services"],
    },
  ]

  const solutions = [
    {
      icon: Server,
      title: "Compute Solutions",
      description: "Scalable virtual machine servers for all government workloads",
      services: ["Cloud Servers", "Backup Services"],
      benefits: ["99.99% Uptime", "Auto-scaling", "Multiple Server Types", "SSD & HDD Options"],
    },
    {
      icon: Database,
      title: "Storage Solutions",
      description: "Flexible cloud storage for data archival and active workloads",
      services: ["Storage & Archival Services", "Backup Services"],
      benefits: ["Cost-effective HDD", "High-performance SSD", "Automated Backups", "Data Encryption"],
    },
    {
      icon: Network,
      title: "Connectivity Solutions",
      description: "Secure network access and internet connectivity",
      services: ["Remote Access Services", "Internet Bandwidth", "Public IP"],
      benefits: ["VPN Access", "Dedicated IPs", "Scalable Bandwidth", "Secure Connections"],
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Comprehensive security monitoring and threat detection",
      services: ["Monitoring & Security Services"],
      benefits: ["24/7 SOC", "SIEM Integration", "Real-time Monitoring", "Incident Response"],
    },
    {
      icon: Users,
      title: "Support Solutions",
      description: "Professional support and training services",
      services: ["Support Services", "Custom Training"],
      benefits: ["24/7 Support", "Dedicated Managers", "Custom Training", "Deployment Help"],
    },
  ]

  const deploymentModels = [
    {
      title: "Private Cloud",
      description:
        "Cloud environment operated exclusively for a single government organization, offering greater control and security",
      features: ["Dedicated Infrastructure", "Enhanced Security", "Full Control", "Compliance Ready"],
      ideal: "Sensitive government data and mission-critical applications",
    },
    {
      title: "Hybrid Cloud",
      description:
        "Cloud environment combining public and private clouds, allowing data and applications to be shared between them",
      features: ["Flexible Deployment", "Cost Optimization", "Scalable Resources", "Data Portability"],
      ideal: "Organizations with varying security and performance requirements",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-24">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-blue-600 border-blue-200">
              Government Cloud Solutions
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Comprehensive Cloud Solutions for Government
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Secure, compliant, and scalable cloud solutions designed specifically for government agencies handling
              sensitive data and mission-critical operations.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Cloud Service Models */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Cloud Service Models</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the right cloud service model that fits your government organization's needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cloudModels.map((model, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <model.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{model.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-600 leading-relaxed">{model.description}</p>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {model.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Related Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {model.services.map((service, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Solution Categories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions organized by functionality to meet all your government cloud needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <solution.icon className="h-6 w-6 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{solution.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Services Included:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {solution.services.map((service, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Models */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Deployment Models</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the deployment model that best fits your security and operational requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {deploymentModels.map((model, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{model.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{model.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Features:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {model.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-2">Ideal For:</h4>
                      <p className="text-sm text-slate-600">{model.ideal}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Government Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our experts help you choose the right cloud solution for your government agency's specific needs and
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
