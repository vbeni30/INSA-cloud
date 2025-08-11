"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Cloud, Users, Award, Target, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the highest level of security and compliance for all government operations, ensuring data protection and regulatory adherence.",
    },
    {
      icon: Cloud,
      title: "Cloud Excellence",
      description: "Delivering cutting-edge cloud solutions with seamless performance, scalability, and reliability designed specifically for government needs.",
    },
    {
      icon: Users,
      title: "Government Focus",
      description: "Exclusively serving government agencies with tailored, mission-critical solutions that understand the unique challenges of public sector IT.",
    },
    {
      icon: Award,
      title: "Reliability",
      description: "99.99% uptime commitment ensuring your operations never stop, with robust infrastructure and proactive monitoring.",
    },
  ]

  const capabilities = [
    "Virtual machine servers for various workloads",
    "Robust backup and storage solutions",
    "Secure remote access capabilities",
    "Advanced monitoring and security tools",
    "Flexible internet bandwidth options",
    "Dedicated public IP addresses",
    "Comprehensive support and training services"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-blue-600 border-blue-200 px-4 py-2">
              Information Network Security Administration
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              About INSA G-Cloud
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-8">
              At INSA, we are dedicated to providing secure, reliable, and scalable cloud solutions. Our services are
              designed to ensure seamless performance while maintaining the highest level of security and compliance for
              government institutions.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Our Strategic Mission</h2>
              </div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                INSA is launching a strategic initiative to become a leading cloud service provider (CSP) for government
                agencies. As government entities increasingly depend on information and communication technology (ICT),
                the demand for a secure, compliant, and efficient cloud infrastructure has never been greater.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Government agencies handle sensitive data and mission-critical operations, making it essential to
                provide cloud solutions that not only meet their performance and scalability requirements but also
                adhere to rigorous security and regulatory standards.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Commitment</h3>
                <p className="text-slate-700">
                  This service catalog outlines our comprehensive offerings, each tailored to meet the specific needs of 
                  government institutions, supporting their mission-critical operations with robust and adaptable solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="h-20 w-20 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Leading CSP</h3>
                  <p className="text-slate-600 text-lg">For Government Agencies</p>
                  <div className="mt-6 flex justify-center space-x-4">
                    <Badge variant="secondary">Secure</Badge>
                    <Badge variant="secondary">Compliant</Badge>
                    <Badge variant="secondary">Efficient</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every decision we make is guided by our commitment to security, reliability, and excellence in serving
              government institutions with the highest standards of cloud computing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Cloud Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              INSA's cloud services are specifically designed to help government organizations securely manage their IT
              needs in a cloud environment that prioritizes security, compliance, and reliability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Service Portfolio Includes:</h3>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-slate-600">{capability}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-10">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Designed for Government Excellence</h3>
                <p className="text-lg text-slate-600 mb-8">
                  Our offerings encompass everything government organizations need to modernize their IT infrastructure
                  while maintaining the highest standards of security and operational excellence.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">99.99%</div>
                    <div className="text-sm text-slate-600">Infrastructure Uptime</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-green-600 mb-1">95.95%</div>
                    <div className="text-sm text-slate-600">Cloud Accessibility</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                    <div className="text-sm text-slate-600">Support Available</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-orange-600 mb-1">9</div>
                    <div className="text-sm text-slate-600">Core Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose INSA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose INSA G-Cloud?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand the unique challenges government agencies face and have built our cloud platform specifically 
              to address these requirements with uncompromising quality and security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Government-Grade Security</h3>
                <p className="text-slate-600 leading-relaxed">
                  Built with rigorous security standards and regulatory compliance to protect sensitive government data 
                  and mission-critical operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cloud className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Scalable & Reliable</h3>
                <p className="text-slate-600 leading-relaxed">
                  Elastic cloud infrastructure that grows with your needs while maintaining consistent performance 
                  and availability for critical government services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Expert Support</h3>
                <p className="text-slate-600 leading-relaxed">
                  Dedicated support team with deep understanding of government requirements, providing 24/7 assistance 
                  and specialized training services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Government Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the growing number of government agencies that trust INSA G-Cloud for their critical IT infrastructure. 
            Let us help you modernize your operations with secure, reliable, and scalable cloud solutions.
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
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
