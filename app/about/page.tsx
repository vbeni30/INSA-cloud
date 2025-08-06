"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Cloud, Users, Award, Target, Zap } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the highest level of security and compliance for all government operations.",
    },
    {
      icon: Cloud,
      title: "Cloud Excellence",
      description: "Delivering cutting-edge cloud solutions designed specifically for government needs.",
    },
    {
      icon: Users,
      title: "Government Focus",
      description: "Exclusively serving government agencies with tailored, mission-critical solutions.",
    },
    {
      icon: Award,
      title: "Reliability",
      description: "99.99% uptime commitment ensuring your operations never stop.",
    },
  ]

  const milestones = [
    {
      year: "2024",
      title: "G-Cloud Launch",
      description: "Launched comprehensive government cloud services with 9 core offerings.",
    },
    {
      year: "2023",
      title: "Strategic Initiative",
      description: "Initiated strategic plan to become Ethiopia's leading government cloud service provider.",
    },
    {
      year: "2022",
      title: "Infrastructure Development",
      description: "Established secure, compliant cloud infrastructure for government agencies.",
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
              Information Network Security Administration
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">About INSA G-Cloud</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              At INSA, we are dedicated to providing secure, reliable, and scalable cloud solutions. Our services are
              designed to ensure seamless performance while maintaining the highest level of security and compliance for
              government institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                INSA is launching a strategic initiative to become a leading cloud service provider (CSP) for government
                agencies. As government entities increasingly depend on information and communication technology (ICT),
                the demand for a secure, compliant, and efficient cloud infrastructure has never been greater.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Government agencies handle sensitive data and mission-critical operations, making it essential to
                provide cloud solutions that not only meet their performance and scalability requirements but also
                adhere to rigorous security and regulatory standards.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Leading CSP</h3>
                  <p className="text-slate-600">For Government Agencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every decision we make is guided by our commitment to security, reliability, and excellence in serving
              government institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Cloud Services</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              INSA's cloud services encompass virtual machine servers, robust backup and storage solutions, secure
              remote access capabilities, advanced monitoring and security tools, flexible internet bandwidth options,
              dedicated public IPs, and comprehensive support and training services.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Designed for Government Excellence</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
                Our offerings are specifically designed to help government organizations securely manage their IT needs
                in a cloud environment that prioritizes security, compliance, and reliability.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Security Focused
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Compliance Ready
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Mission Critical
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  24/7 Support
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Journey</h2>
            <p className="text-xl text-slate-600">Key milestones in our mission to serve government agencies</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
