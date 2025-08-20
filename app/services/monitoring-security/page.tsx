"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, CheckCircle, ArrowLeft, Eye, Activity, Lock, Clock, Users, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "siem",
    name: "Managed SIEM Agent",
    description: "Security Information and Event Management with real-time threat detection",
    icon: <Shield className="h-6 w-6" />,
    price: "1000 Birr/agent/month",
    features: [
      "Real-time security event monitoring",
      "Threat detection and analysis",
      "Incident response automation",
      "Compliance reporting",
      "24/7 security operations center",
      "Advanced threat intelligence",
      "Custom security rules",
      "Forensic analysis capabilities",
    ],
    benefits: [
      "Proactive threat detection",
      "Automated incident response",
      "Compliance assurance",
      "Expert security team",
    ],
  },
  {
    id: "monitoring",
    name: "Managed Service and Health Monitoring Agent",
    description: "Comprehensive system health and performance monitoring",
    icon: <Activity className="h-6 w-6" />,
    price: "500 Birr/agent/month",
    features: [
      "System performance monitoring",
      "Application health checks",
      "Resource utilization tracking",
      "Uptime monitoring",
      "Custom alerting rules",
      "Performance analytics",
      "Capacity planning insights",
      "Automated remediation",
    ],
    benefits: ["Prevent system downtime", "Optimize performance", "Proactive maintenance", "Cost optimization"],
  },
]

const managedBenefits = [
  {
    icon: <Users className="h-8 w-8 text-green-600" />,
    title: "Fully Managed by INSA",
    description:
      "Our expert team handles all monitoring and security operations, so you can focus on your core business",
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "24/7 Monitoring",
    description: "Round-the-clock monitoring and immediate response to any security or performance issues",
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-600" />,
    title: "Proactive Response",
    description: "Automated threat response and proactive system maintenance to prevent issues before they occur",
  },
  {
    icon: <Lock className="h-8 w-8 text-purple-600" />,
    title: "Government Grade Security",
    description: "Enterprise-level security monitoring designed specifically for government agencies and compliance",
  },
]

const comparisonFeatures = [
  { feature: "Real-time Monitoring", siem: true, monitoring: true },
  { feature: "Threat Detection", siem: true, monitoring: false },
  { feature: "Performance Analytics", siem: false, monitoring: true },
  { feature: "Incident Response", siem: true, monitoring: true },
  { feature: "Compliance Reporting", siem: true, monitoring: false },
  { feature: "System Health Checks", siem: false, monitoring: true },
  { feature: "24/7 SOC Support", siem: true, monitoring: true },
  { feature: "Custom Alerting", siem: true, monitoring: true },
]

export default function MonitoringSecurityPage() {
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
            <span className="text-slate-900">Monitoring & Security Services</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-red-100 text-red-800 mb-4">Fully Managed Service</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Monitoring & Security Services</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              A fully managed service providing real-time monitoring and security event detection. This service is
              managed entirely by INSA ensuring proactive management and response for your government infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Contact Security Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Managed Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our comprehensive monitoring and security solutions, fully managed by INSA's expert team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow duration-200 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-3 bg-green-100 rounded-lg mr-4">{service.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                        <CardDescription className="mt-1">{service.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{service.price.split("/")[0]}</div>
                      <div className="text-sm text-slate-500">/{service.price.split("/")[1]}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="features" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="features">Features</TabsTrigger>
                      <TabsTrigger value="benefits">Benefits</TabsTrigger>
                    </TabsList>
                    <TabsContent value="features" className="mt-4">
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="benefits" className="mt-4">
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
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

      {/* Managed Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Managed Services?</h2>
            <p className="text-xl text-slate-600">
              Let INSA's experts handle your monitoring and security while you focus on your mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managedBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-white rounded-xl shadow-sm mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Comparison</h2>
            <p className="text-xl text-slate-600">Compare features between our SIEM and Monitoring services</p>
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
                            <Shield className="h-5 w-5 mr-2" />
                            SIEM Agent
                          </div>
                        </th>
                        <th className="text-center py-3 px-4">
                          <div className="flex items-center justify-center">
                            <Activity className="h-5 w-5 mr-2" />
                            Monitoring Agent
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((item, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="py-3 px-4 font-medium text-slate-900">{item.feature}</td>
                          <td className="py-3 px-4 text-center">
                            {item.siem ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <div className="w-5 h-5 mx-auto"></div>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {item.monitoring ? (
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

      {/* Pricing */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-slate-600">Simple per-agent pricing with full management included</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-red-200">
              <CardHeader className="text-center">
                <div className="p-3 bg-red-100 rounded-lg w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl">SIEM Agent</CardTitle>
                <CardDescription>Advanced security monitoring and threat detection</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">1000 Birr</div>
                <div className="text-slate-600 mb-6">per agent per month</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 Security Operations Center
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time threat detection
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Incident response automation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Compliance reporting
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700">Get SIEM Protection</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader className="text-center">
                <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                  <Activity className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Monitoring Agent</CardTitle>
                <CardDescription>Comprehensive system health and performance monitoring</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500 Birr</div>
                <div className="text-slate-600 mb-6">per agent per month</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 system monitoring
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance analytics
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Automated remediation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Capacity planning insights
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Monitoring</Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-start">
                <div className="p-2 bg-green-100 rounded-lg mr-4 flex-shrink-0">
                  <Eye className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Recommended Approach</h4>
                  <p className="text-green-700 leading-relaxed">
                    For comprehensive protection, we recommend deploying both SIEM and Monitoring agents. This provides
                    complete visibility into both security threats and system performance, ensuring optimal protection
                    for your government infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Secure Your Infrastructure Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Let INSA's security experts protect and monitor your government systems 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Start Security Assessment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              Contact Security Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
