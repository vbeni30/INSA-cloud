"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Database,
  Shield,
  Clock,
  CheckCircle,
  ArrowLeft,
  HardDrive,
  Lock,
  RefreshCw,
  AlertTriangle,
  Zap,
} from "lucide-react"
import Link from "next/link"

const backupTypes = [
  {
    id: "full",
    name: "Full Backup",
    description: "Complete backup of all server data and configurations",
    icon: <Database className="h-6 w-6" />,
    features: [
      "Complete system backup",
      "All files and databases",
      "System configurations",
      "Application data",
      "User data and settings",
    ],
    frequency: "Daily, Weekly, or Monthly",
    retention: "30, 60, or 90 days",
    recovery: "Complete system restore",
  },
  {
    id: "snapshot",
    name: "Snapshot Backup",
    description: "Point-in-time snapshots of your cloud server state",
    icon: <RefreshCw className="h-6 w-6" />,
    features: [
      "Instant point-in-time capture",
      "Minimal performance impact",
      "Quick recovery options",
      "Incremental changes only",
      "Space-efficient storage",
    ],
    frequency: "Hourly, Daily, or Custom",
    retention: "7, 14, or 30 days",
    recovery: "Instant rollback",
  },
  {
    id: "encrypted",
    name: "Encrypted Backup",
    description: "Secure encrypted backups with government-grade encryption",
    icon: <Lock className="h-6 w-6" />,
    features: [
      "AES-256 encryption",
      "Encrypted in transit and at rest",
      "Key management service",
      "Compliance ready",
      "Audit trail logging",
    ],
    frequency: "Configurable schedule",
    retention: "Customizable",
    recovery: "Secure decryption process",
  },
]

const benefits = [
  {
    icon: <Shield className="h-8 w-8 text-green-600" />,
    title: "Data Protection",
    description: "Protect your critical government data with automated backup solutions",
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Business Continuity",
    description: "Ensure minimal downtime with quick recovery and restore capabilities",
  },
  {
    icon: <Lock className="h-8 w-8 text-purple-600" />,
    title: "Security & Compliance",
    description: "Government-grade encryption and compliance with data protection regulations",
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-600" />,
    title: "Automated Process",
    description: "Set-and-forget automated backups with monitoring and alerting",
  },
]

const pricingFeatures = [
  "HDD-based storage for cost efficiency",
  "Automated backup scheduling",
  "Multiple retention policies",
  "Encryption at rest and in transit",
  "24/7 monitoring and alerts",
  "Quick restore capabilities",
  "Compliance reporting",
  "Technical support included",
]

export default function BackupServicesPage() {
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
            <span className="text-slate-900">Backup Services</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">Data Protection</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Backup Services for Cloud Servers</h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Automated backup solutions to protect cloud server data ensuring business continuity and data safety.
                Built with government-grade security and compliance in mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <HardDrive className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">Simple Pricing</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">11 Birr</div>
                <div className="text-slate-600 mb-6">per GB per month</div>
                <div className="text-sm text-slate-500 mb-6">HDD-based storage for cost efficiency</div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Calculate Your Costs</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backup Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Backup Types</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the right backup strategy for your government workloads and compliance requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {backupTypes.map((type) => (
              <Card key={type.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-100 rounded-lg mr-4">{type.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{type.name}</CardTitle>
                      <CardDescription className="mt-1">{type.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="features" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="features">Features</TabsTrigger>
                      <TabsTrigger value="details">Details</TabsTrigger>
                    </TabsList>
                    <TabsContent value="features" className="mt-4">
                      <ul className="space-y-2">
                        {type.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="details" className="mt-4">
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm font-medium text-slate-900">Frequency</div>
                          <div className="text-sm text-slate-600">{type.frequency}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">Retention</div>
                          <div className="text-sm text-slate-600">{type.retention}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">Recovery</div>
                          <div className="text-sm text-slate-600">{type.recovery}</div>
                        </div>
                      </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our Backup Services?</h2>
            <p className="text-xl text-slate-600">Comprehensive data protection designed for government agencies</p>
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

      {/* Backup Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Automated Backup Process</h2>
            <p className="text-xl text-slate-600">Simple, reliable, and fully automated backup workflow</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Schedule Setup</h3>
              <p className="text-slate-600">Configure backup frequency and retention policies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Automated Execution</h3>
              <p className="text-slate-600">Backups run automatically according to your schedule</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Secure Storage</h3>
              <p className="text-slate-600">Data encrypted and stored in secure government-grade facilities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Monitoring & Alerts</h3>
              <p className="text-slate-600">24/7 monitoring with instant alerts for any issues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-slate-600">Simple per-GB pricing with no hidden costs</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-green-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Backup Storage</CardTitle>
                <CardDescription>HDD-based storage for cost-effective data protection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-green-600 mb-2">11 Birr</div>
                  <div className="text-xl text-slate-600">per GB per month</div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">What's Included:</h4>
                    <ul className="space-y-2">
                      {pricingFeatures.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Additional Benefits:</h4>
                    <ul className="space-y-2">
                      {pricingFeatures.slice(4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-1">Pricing Example</h4>
                      <p className="text-sm text-yellow-700">
                        For a 100GB server backup: 100GB × 11 Birr = 1,100 Birr per month
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Data Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't risk losing critical government data. Start with automated backup services now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Start Backup Service
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
