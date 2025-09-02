"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Globe, Lock, CheckCircle, ArrowLeft, Users, Wifi, Monitor, Smartphone, Laptop } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    id: "rap",
    name: "Remote Access Portal (RAP)",
    description: "Web-based secure remote access solution for government users",
    icon: <Globe className="h-6 w-6" />,
    price: "100 Birr/user/month",
    features: [
      "Web-based access portal",
      "Multi-factor authentication",
      "Session recording and monitoring",
      "Role-based access control",
      "Single sign-on (SSO) integration",
      "Audit trail and compliance reporting",
      "Device trust verification",
      "Bandwidth optimization",
    ],
    useCases: [
      "Government employees working remotely",
      "Contractors needing temporary access",
      "Multi-location government offices",
      "Emergency response scenarios",
    ],
    security: [
      "End-to-end encryption",
      "Zero-trust architecture",
      "Compliance with government standards",
      "Regular security audits",
    ],
  },
  {
    id: "wireguard",
    name: "WireGuard VPN",
    description: "Modern, high-performance VPN solution for secure network access",
    icon: <Shield className="h-6 w-6" />,
    price: "150 Birr/user/month",
    features: [
      "Modern VPN protocol",
      "High-performance encryption",
      "Cross-platform compatibility",
      "Automatic key rotation",
      "Network-level access control",
      "Traffic monitoring and analytics",
      "Failover and redundancy",
      "Mobile device support",
    ],
    useCases: [
      "Site-to-site connectivity",
      "Mobile workforce access",
      "Secure inter-agency communication",
      "Remote server administration",
    ],
    security: ["ChaCha20 encryption", "Curve25519 key exchange", "BLAKE2s hashing", "Minimal attack surface"],
  },
]

const comparisonFeatures = [
  { feature: "Web-based Access", rap: true, wireguard: false },
  { feature: "Native VPN Client", rap: false, wireguard: true },
  { feature: "Multi-factor Authentication", rap: true, wireguard: true },
  { feature: "Session Recording", rap: true, wireguard: false },
  { feature: "Network-level Access", rap: false, wireguard: true },
  { feature: "Mobile Support", rap: true, wireguard: true },
  { feature: "Site-to-site Connectivity", rap: false, wireguard: true },
  { feature: "Audit Logging", rap: true, wireguard: true },
  { feature: "Single Sign-on", rap: true, wireguard: false },
  { feature: "High Performance", rap: false, wireguard: true },
]

const benefits = [
  {
    icon: <Lock className="h-8 w-8 text-green-600" />,
    title: "Government-Grade Security",
    description: "Military-grade encryption and security protocols designed for government use",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Scalable Access Management",
    description: "Easily manage access for hundreds or thousands of government users",
  },
  {
    icon: <Monitor className="h-8 w-8 text-purple-600" />,
    title: "Complete Visibility",
    description: "Full audit trails and monitoring for compliance and security oversight",
  },
  {
    icon: <Wifi className="h-8 w-8 text-yellow-600" />,
    title: "Reliable Connectivity",
    description: "High-availability infrastructure ensuring consistent remote access",
  },
]

export default function RemoteAccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-slate-600">
            <Link href="/services" className="hover:text-green-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Remote Access Services</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Secure Remote Access</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Remote Access Services</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Secure remote access solutions enabling government users to connect to their cloud resources from
              anywhere, while maintaining the highest levels of security and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Remote Access Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the right remote access solution for your government agency's specific needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <Card key={solution.id} className="hover:shadow-lg transition-shadow duration-200 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-3 bg-green-100 rounded-lg mr-4">{solution.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{solution.name}</CardTitle>
                        <CardDescription className="mt-1">{solution.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{solution.price.split("/")[0]}</div>
                      <div className="text-sm text-slate-500">/{solution.price.split("/")[1]}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="features" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="features">Features</TabsTrigger>
                      <TabsTrigger value="usecases">Use Cases</TabsTrigger>
                      <TabsTrigger value="security">Security</TabsTrigger>
                    </TabsList>
                    <TabsContent value="features" className="mt-4">
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="usecases" className="mt-4">
                      <ul className="space-y-2">
                        {solution.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="security" className="mt-4">
                      <ul className="space-y-2">
                        {solution.security.map((security, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <Lock className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {security}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our Remote Access?</h2>
            <p className="text-xl text-slate-600">
              Secure, scalable, and compliant remote access for government agencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-white rounded-xl shadow-sm mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Solution Comparison</h2>
            <p className="text-xl text-slate-600">Compare features between RAP and WireGuard VPN solutions</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Feature Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Feature</th>
                        <th className="text-center py-3 px-4">
                          <div className="flex items-center justify-center">
                            <Globe className="h-5 w-5 mr-2" />
                            RAP
                          </div>
                        </th>
                        <th className="text-center py-3 px-4">
                          <div className="flex items-center justify-center">
                            <Shield className="h-5 w-5 mr-2" />
                            WireGuard VPN
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((item, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="py-3 px-4 font-medium text-slate-900">{item.feature}</td>
                          <td className="py-3 px-4 text-center">
                            {item.rap ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <div className="w-5 h-5 mx-auto"></div>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {item.wireguard ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <div className="w-5 h-5 mx-auto"></div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Device Support */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Multi-Device Support</h2>
            <p className="text-xl text-slate-600">Access your government systems from any device, anywhere</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="p-6 bg-white rounded-xl shadow-sm mb-4">
                <Laptop className="h-12 w-12 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Desktop & Laptop</h3>
              <p className="text-slate-600">Windows, macOS, and Linux support with native clients</p>
            </div>
            <div className="text-center">
              <div className="p-6 bg-white rounded-xl shadow-sm mb-4">
                <Smartphone className="h-12 w-12 text-green-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Mobile Devices</h3>
              <p className="text-slate-600">iOS and Android apps for secure mobile access</p>
            </div>
            <div className="text-center">
              <div className="p-6 bg-white rounded-xl shadow-sm mb-4">
                <Globe className="h-12 w-12 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Web Browser</h3>
              <p className="text-slate-600">No installation required with web-based access portal</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Enable Secure Remote Access Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Empower your government workforce with secure, reliable remote access to critical systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
