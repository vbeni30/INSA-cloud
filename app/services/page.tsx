"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Server,
  Shield,
  Database,
  Network,
  Monitor,
  Globe,
  Users,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      icon: Server,
      title: "Cloud Servers",
      description:
        "Flexible and scalable virtual machine servers designed to handle various workloads, from web hosting to enterprise applications.",
      categories: ["General Purpose", "Compute Optimized", "Memory Optimized", "Storage Optimized"],
      pricing: {
        ssd: "SSD: (vCPU × 930) + (RAM × 210) + (Storage × 10) Birr/month",
        hdd: "HDD: (vCPU × 930) + (RAM × 210) + (Storage × 5) Birr/month",
      },
      link: "/services/cloud-servers",
      featured: true,
    },
    {
      id: 2,
      icon: Shield,
      title: "Backup Services for Cloud Servers",
      description:
        "Automated backup solutions to protect cloud server data ensuring business continuity and data safety.",
      categories: ["Full backup", "Snapshot backup", "Encrypted"],
      pricing: {
        base: "HDD: 11 Birr/GB/month",
      },
      link: "/services/backup-services",
    },
    {
      id: 3,
      icon: Database,
      title: "Storage and Archival Services",
      description:
        "Flexible cloud storage solutions designed to meet various performance needs, from high-speed SSD storage to cost-effective HDD storage.",
      categories: ["Cloud SSD Storage", "Cloud HDD Storage"],
      pricing: {
        ssd: "SSD: 20 Birr/GB/month",
        hdd: "HDD: 11 Birr/GB/month",
      },
      link: "/services/storage-archival",
    },
    {
      id: 4,
      icon: Network,
      title: "Remote Access Services",
      description: "Secure remote access solutions enabling users to connect to their cloud resources from anywhere.",
      categories: ["Remote Access Portal (RAP)", "WireGuard VPN"],
      pricing: {
        rap: "RAP: Starting from 100 Birr/User/month",
        vpn: "WireGuard VPN: Starting from 150 Birr/User/month",
      },
      link: "/services/remote-access",
      featured: true,
    },
    {
      id: 5,
      icon: Monitor,
      title: "Monitoring and Security Services",
      description:
        "A fully managed service providing real-time monitoring and security event detection. This service is managed entirely by INSA.",
      categories: ["Managed SIEM Agent", "Managed Service and Health Monitoring Agent"],
      pricing: {
        siem: "SIEM: Starting from 1000 Birr/agent/month",
        monitoring: "Monitoring: Starting from 500 Birr/agent/month",
      },
      link: "/services/monitoring-security",
      featured: true,
    },
    {
      id: 6,
      icon: Globe,
      title: "Internet Bandwidth",
      description: "Scalable Internet bandwidth options to match your cloud needs with flexible rate limiting.",
      categories: ["Measured by Mbps"],
      pricing: {
        custom: "Maximum Rate limit with Custom Quote (Future Plan)",
      },
      link: "/services/internet-bandwidth",
    },
    {
      id: 7,
      icon: Network,
      title: "Public IP",
      description: "Public IP addresses assigned exclusively to your cloud resources for direct internet access.",
      categories: ["Shared", "Dedicated"],
      pricing: {
        shared: "Shared: Free",
        dedicated: "Dedicated: 18 Birr/IP/month",
      },
      link: "/services/public-ip",
    },
    {
      id: 8,
      icon: Users,
      title: "Support Services",
      description: "24/7 technical support services tailored to help manage and troubleshoot cloud environments.",
      categories: ["Basic Support", "Premium Support"],
      pricing: {
        basic: "Basic: Starting from 500 Birr/month",
        premium: "Premium: Starting from 1000 Birr/month",
      },
      link: "/services/support-services",
    },
    {
      id: 9,
      icon: GraduationCap,
      title: "Custom Training and Deployment Assistance",
      description:
        "Tailored training and consulting services designed to help customers efficiently deploy, manage, and optimize their cloud environments.",
      categories: ["Custom Training Sessions", "Deployment Assistance and Consulting Package"],
      pricing: {
        custom: "Determined based on individual customer requirements - Contact us for a customized quote",
      },
      link: "/services/training-deployment",
    },
  ]

  const slaInfo = {
    infrastructure: "99.99%",
    accessibility: "95.95%",
    support: "24/7",
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-24">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-blue-600 border-blue-200">
              INSA Government Cloud Services
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Comprehensive Cloud Service Catalog
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Secure, reliable, and scalable cloud solutions designed specifically for government institutions. Our
              comprehensive offerings support mission-critical operations with robust and adaptable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="#services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Level Agreements</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              INSA will exert every possible effort to ensure the maximum availability of the cloud infrastructure while
              adhering to operational functionality parameters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{slaInfo.infrastructure}</h3>
                <p className="text-slate-600">Uptime annually for electricity and air conditioning</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{slaInfo.accessibility}</h3>
                <p className="text-slate-600">Uptime annually for cloud infrastructure accessibility</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{slaInfo.support}</h3>
                <p className="text-slate-600">Monitoring and technical support availability</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              * Uptime excludes scheduled maintenance windows and unforeseen circumstances beyond INSA's control
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Cloud Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nine comprehensive cloud services designed to meet all your government organization's IT infrastructure
              needs with security, compliance, and reliability at the forefront.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full ${
                  service.featured ? "ring-2 ring-blue-200 bg-gradient-to-br from-white to-blue-50" : ""
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    {service.featured && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-slate-900 leading-tight">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Service Types:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.categories.map((category, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Pricing:</h4>
                    <div className="space-y-2">
                      {Object.entries(service.pricing).map(([key, value], idx) => (
                        <p key={idx} className="text-sm text-slate-600 bg-slate-50 p-2 rounded">
                          {value}
                        </p>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Terms and Conditions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Important information about our service offerings and pricing structure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Pricing & Contracts</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">
                      All pricing is based on standard configurations and usage; custom solutions may incur additional
                      costs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Discounts available for long-term contracts.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">
                      Service modifications during the contract period may result in price adjustments.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Customer Responsibilities</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">
                      Customers are responsible for providing accurate information for service delivery.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">
                      Timely access and cooperation necessary for service implementation.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">
                      Changes will be communicated and agreed upon before implementation.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us for additional information, service customization, or consultation requests. Our team of experts
            is ready to help you find the perfect cloud solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/solutions">View Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
