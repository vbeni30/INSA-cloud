"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Server, Shield, Database, Network, Users, ArrowRight, CheckCircle, Cloud, Lock, Zap, Monitor } from 'lucide-react'
import Link from "next/link"

export default function SolutionsPage() {
  const cloudModels = [
    {
      icon: Cloud,
      title: "Infrastructure as a Service (IaaS)",
      description: "Cloud service model providing virtualized computing resources over the internet",
      features: ["Virtual Machine Servers", "Storage Solutions", "Network Infrastructure", "Backup Services"],
      services: ["Cloud Servers", "Storage & Archival", "Public IP", "Internet Bandwidth"],
      benefits: "Complete control over your computing infrastructure with the flexibility to scale resources up or down based on demand."
    },
    {
      icon: Lock,
      title: "Platform as a Service (PaaS)",
      description:
        "Cloud service model offering hardware and software tools over the internet for application development",
      features: ["Development Platforms", "Database Management", "Application Hosting", "API Management"],
      services: ["Remote Access Services", "Monitoring & Security", "Support Services"],
      benefits: "Focus on application development while we manage the underlying infrastructure and platform components."
    },
    {
      icon: Zap,
      title: "Software as a Service (SaaS)",
      description:
        "Cloud service model delivering software applications over the internet, typically on a subscription basis",
      features: ["Ready-to-use Applications", "Automatic Updates", "Multi-tenant Architecture", "Subscription Based"],
      services: ["Custom Training", "Deployment Assistance", "Managed Services"],
      benefits: "Access fully functional applications without the need for installation, maintenance, or infrastructure management."
    },
  ]

  const solutions = [
    {
      icon: Server,
      title: "Compute Solutions",
      description: "Scalable virtual machine servers designed to handle various workloads from web hosting to enterprise applications",
      services: ["Cloud Servers", "Backup Services"],
      benefits: ["99.99% Uptime SLA", "Auto-scaling Capabilities", "Multiple Server Types", "SSD & HDD Storage Options"],
      pricing: "Starting from calculated rates based on vCPU, RAM, and storage requirements",
    },
    {
      icon: Database,
      title: "Storage Solutions",
      description: "Flexible cloud storage solutions for various performance needs, from high-speed SSD to cost-effective HDD storage",
      services: ["Storage & Archival Services", "Backup Services"],
      benefits: ["Cost-effective HDD Storage", "High-performance SSD", "Automated Backup Systems", "Data Encryption"],
      pricing: "SSD: 20 Birr/GB/Month | HDD: 11 Birr/GB/Month",
    },
    {
      icon: Network,
      title: "Connectivity Solutions",
      description: "Secure network access and internet connectivity options to match your cloud infrastructure needs",
      services: ["Remote Access Services", "Internet Bandwidth", "Public IP"],
      benefits: ["VPN Access", "Dedicated IP Addresses", "Scalable Bandwidth", "Secure Remote Connections"],
      pricing: "RAP: 100 Birr/User/Month | VPN: 150 Birr/User/Month",
    },
    {
      icon: Monitor,
      title: "Security Solutions",
      description: "Comprehensive security monitoring and threat detection managed entirely by INSA with proactive response",
      services: ["Monitoring & Security Services"],
      benefits: ["24/7 SOC Monitoring", "SIEM Integration", "Real-time Threat Detection", "Incident Response"],
      pricing: "SIEM: 1000 Birr/agent/month | Monitoring: 500 Birr/agent/month",
      featured: true,
    },
    {
      icon: Users,
      title: "Support Solutions",
      description: "Professional support and training services to help manage and optimize your cloud environments",
      services: ["Support Services", "Custom Training & Deployment"],
      benefits: ["24/7 Technical Support", "Dedicated Support Managers", "Custom Training Programs", "Deployment Assistance"],
      pricing: "Basic: 500 Birr/month | Premium: 1000 Birr/month",
    },
  ]

  const deploymentModels = [
    {
      title: "Private Cloud",
      description:
        "Cloud environment operated exclusively for a single government organization, offering greater control and security",
      features: ["Dedicated Infrastructure", "Enhanced Security Controls", "Full Administrative Control", "Compliance Ready"],
      ideal: "Sensitive government data and mission-critical applications requiring maximum security and control",
      benefits: ["Complete data sovereignty", "Customizable security policies", "Dedicated resources", "Regulatory compliance"]
    },
    {
      title: "Hybrid Cloud",
      description:
        "Cloud environment combining public and private clouds, allowing data and applications to be shared between them",
      features: ["Flexible Deployment Options", "Cost Optimization", "Scalable Resources", "Data Portability"],
      ideal: "Organizations with varying security and performance requirements across different workloads",
      benefits: ["Workload flexibility", "Cost efficiency", "Scalability on demand", "Risk distribution"]
    },
  ]

  const cloudDefinitions = [
    {
      term: "Scalability",
      definition: "Capability of a cloud service to handle growing amounts of work or its potential to be enlarged to accommodate that growth."
    },
    {
      term: "Elasticity", 
      definition: "Ability of a cloud system to automatically adjust capacity to meet changing demand."
    },
    {
      term: "Cloud Security",
      definition: "Broad set of policies, technologies, and controls deployed to protect data, applications, and infrastructure associated with cloud computing."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-blue-600 border-blue-200 px-4 py-2">
              Government Cloud Solutions
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Comprehensive Cloud Solutions for Government
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-8">
              Secure, compliant, and scalable cloud solutions designed specifically for government agencies handling
              sensitive data and mission-critical operations with the highest standards of reliability.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="#solutions">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
              Choose the right cloud service model that fits your government organization's specific requirements and operational needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cloudModels.map((model, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <model.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{model.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 flex-grow">
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
                    <h4 className="font-semibold text-slate-900 mb-3">Benefits:</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{model.benefits}</p>
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
      <section id="solutions" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Solution Categories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions organized by functionality to meet all your government cloud infrastructure needs
              with security, compliance, and reliability at the forefront.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full ${
                solution.featured ? "ring-2 ring-green-200 bg-gradient-to-br from-white to-green-50" : ""
              }`}>
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <solution.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    {solution.featured && (
                      <Badge className="bg-green-500 text-white">Fully Managed</Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{solution.description}</p>

                  <div className="space-y-6">
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

                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-2">Pricing:</h4>
                      <p className="text-sm text-slate-600">{solution.pricing}</p>
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
              Choose the deployment model that best fits your security requirements, operational needs, and compliance standards
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {deploymentModels.map((model, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
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

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {model.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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

      {/* Cloud Computing Definitions */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Key Cloud Computing Concepts</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding essential cloud computing terms that define our service capabilities and your benefits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cloudDefinitions.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.term}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.definition}</p>
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
            requirements. We provide comprehensive consultation to ensure optimal deployment and management.
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
