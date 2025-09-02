"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Check,
  Star,
  Zap,
  Shield,
  Server,
  HardDrive,
  Users,
  Wifi,
  Phone,
  Calculator,
  Info,
  TrendingUp,
  Award,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ServiceConfig {
  // Cloud Servers
  serverType: "ssd" | "hdd"
  vcpu: number
  ram: number
  storage: number

  // Storage & Backup
  backupStorage: number
  cloudStorage: number
  cloudStorageType: "ssd" | "hdd"

  // Network
  dedicatedIPs: number

  // Remote Access & Security
  remoteAccessUsers: number
  remoteAccessType: "rap" | "wireguard"
  siemAgents: number
  monitoringAgents: number

  // Support
  supportType: "none" | "basic" | "premium"
}

export default function PricingPage() {
  const [config, setConfig] = useState<ServiceConfig>({
    serverType: "ssd",
    vcpu: 2,
    ram: 4,
    storage: 50,
    backupStorage: 0,
    cloudStorage: 0,
    cloudStorageType: "hdd",
    dedicatedIPs: 0,
    remoteAccessUsers: 0,
    remoteAccessType: "rap",
    siemAgents: 0,
    monitoringAgents: 0,
    supportType: "none",
  })

  const [selectedTier, setSelectedTier] = useState<number | null>(null)
  const [animateTotal, setAnimateTotal] = useState(false)
  const [comparisonMode, setComparisonMode] = useState(false)
  const [savingsCalculator, setSavingsCalculator] = useState({ currentCost: 0, period: 12 })
  const [appliedConfigName, setAppliedConfigName] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })

    const savedConfig = sessionStorage.getItem("selectedPricingConfig")
    if (savedConfig) {
      try {
        const { config: appliedConfig, planName } = JSON.parse(savedConfig)
        setConfig(appliedConfig)
        setAppliedConfigName(planName)
        setAnimateTotal(true)
        setTimeout(() => setAnimateTotal(false), 500)
        sessionStorage.removeItem("selectedPricingConfig")
      } catch (error) {
        console.error("Error loading saved configuration:", error)
      }
    }
  }, [])

  const presetConfigs = {
    starter: {
      name: "Starter Package",
      description: "Perfect for small government departments",
      config: {
        serverType: "hdd" as const,
        vcpu: 2,
        ram: 4,
        storage: 100,
        backupStorage: 50,
        cloudStorage: 0,
        cloudStorageType: "hdd" as const,
        dedicatedIPs: 0,
        remoteAccessUsers: 5,
        remoteAccessType: "rap" as const,
        siemAgents: 1,
        monitoringAgents: 1,
        supportType: "basic" as const,
      },
    },
    professional: {
      name: "Professional Package",
      description: "Ideal for medium-sized agencies",
      config: {
        serverType: "ssd" as const,
        vcpu: 4,
        ram: 8,
        storage: 250,
        backupStorage: 100,
        cloudStorage: 200,
        cloudStorageType: "ssd" as const,
        dedicatedIPs: 2,
        remoteAccessUsers: 15,
        remoteAccessType: "rap" as const,
        siemAgents: 2,
        monitoringAgents: 3,
        supportType: "premium" as const,
      },
    },
    enterprise: {
      name: "Enterprise Package",
      description: "Comprehensive solution for large organizations",
      config: {
        serverType: "ssd" as const,
        vcpu: 8,
        ram: 16,
        storage: 500,
        backupStorage: 250,
        cloudStorage: 500,
        cloudStorageType: "ssd" as const,
        dedicatedIPs: 5,
        remoteAccessUsers: 50,
        remoteAccessType: "wireguard" as const,
        siemAgents: 5,
        monitoringAgents: 10,
        supportType: "premium" as const,
      },
    },
  }

  const applyPreset = (presetKey: keyof typeof presetConfigs) => {
    setConfig(presetConfigs[presetKey].config)
    setAppliedConfigName(presetConfigs[presetKey].name)
    setAnimateTotal(true)
    setTimeout(() => setAnimateTotal(false), 500)
  }

  const validateAndUpdate = (key: keyof ServiceConfig, value: number, min: number, max: number) => {
    const validValue = Math.max(min, Math.min(max, value || min))
    updateConfig(key, validValue)
  }

  const updateConfig = (key: keyof ServiceConfig, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }))
    setAnimateTotal(true)
    setTimeout(() => setAnimateTotal(false), 500)
  }

  // Calculate total cost
  const calculateTotalCost = () => {
    let total = 0

    // Cloud Server
    total += config.vcpu * 930 + config.ram * 210 + config.storage * (config.serverType === "ssd" ? 10 : 5)

    // Storage & Backup
    total += config.backupStorage * 11
    total += config.cloudStorage * (config.cloudStorageType === "ssd" ? 20 : 11)

    // Network
    total += config.dedicatedIPs * 18

    // Remote Access & Security
    total += config.remoteAccessUsers * (config.remoteAccessType === "rap" ? 100 : 150)
    total += config.siemAgents * 1000
    total += config.monitoringAgents * 500

    // Support
    if (config.supportType === "basic") total += 500
    if (config.supportType === "premium") total += 1000

    return total
  }

  const totalCost = calculateTotalCost()

  const pricingTiers = [
    {
      name: "Starter",
      price: "6,250",
      period: "month",
      description: "Perfect for small government departments",
      popular: false,
      features: ["2 vCPU, 4GB RAM", "50GB SSD Storage", "Basic Support", "Shared Public IP", "Email Support"],
      specs: {
        vcpu: 2,
        ram: 4,
        storage: 50,
        support: "basic",
      },
      savings: "Save 15% vs custom config",
    },
    {
      name: "Professional",
      price: "19,036",
      period: "month",
      description: "Ideal for medium-sized agencies",
      popular: true,
      features: [
        "4 vCPU, 8GB RAM",
        "200GB SSD Storage",
        "Premium Support",
        "2 Dedicated IPs",
        "24/7 Phone Support",
        "Basic Monitoring",
      ],
      specs: {
        vcpu: 4,
        ram: 8,
        storage: 200,
        support: "premium",
        ips: 2,
        monitoring: 1,
      },
      savings: "Save 25% vs custom config",
    },
    {
      name: "Enterprise",
      price: "47,140",
      period: "month",
      description: "Comprehensive solution for large organizations",
      popular: false,
      features: [
        "8 vCPU, 16GB RAM",
        "500GB SSD Storage",
        "Premium Support",
        "5 Dedicated IPs",
        "SIEM & Monitoring",
        "VPN Access (10 users)",
        "Backup Services",
      ],
      specs: {
        vcpu: 8,
        ram: 16,
        storage: 500,
        support: "premium",
        ips: 5,
        monitoring: 2,
        siem: 1,
        vpn: 10,
        backup: 100,
      },
      savings: "Save 30% vs custom config",
    },
  ]

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="relative bg-gradient-to-br from-muted/50 to-background py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full opacity-60"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full opacity-60"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 text-primary border-primary/20 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Government-Grade Cloud Solutions
              </Badge>
              {appliedConfigName && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
                    <Check className="w-4 h-4 mr-2" />
                    {appliedConfigName} Configuration Applied
                  </Badge>
                </motion.div>
              )}
              <h1 className="heading-primary mb-6">GOTERA Cloud Pricing</h1>
              <p className="body-large max-w-3xl mx-auto mb-8">
                Transparent, government-grade cloud pricing designed for Ethiopian public sector organizations. All
                prices are in Ethiopian Birr (ETB) per month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Your Costs
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/20 text-primary hover:bg-primary/5 bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Speak with Expert
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs defaultValue="packages" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <TabsList className="grid w-full grid-cols-2 mb-12 bg-muted p-2 rounded-2xl">
                <TabsTrigger
                  value="packages"
                  className="text-lg py-4 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Pricing Packages
                </TabsTrigger>
                <TabsTrigger
                  value="calculator"
                  className="text-lg py-4 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Custom Calculator
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="packages" className="space-y-12">
              <div className="grid md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -10 }}
                    onHoverStart={() => setSelectedTier(index)}
                    onHoverEnd={() => setSelectedTier(null)}
                  >
                    <Card
                      className={`relative h-full transition-all duration-500 ${
                        tier.popular ? "pricing-card-popular" : "pricing-card"
                      }`}
                    >
                      {tier.popular && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg">
                            <Star className="w-4 h-4 mr-1" />
                            Most Popular
                          </Badge>
                        </motion.div>
                      )}
                      <CardHeader className="text-center pb-6">
                        <CardTitle className="heading-tertiary mb-2">{tier.name}</CardTitle>
                        <CardDescription className="body-regular mb-6">{tier.description}</CardDescription>
                        <div className="mb-4">
                          <motion.span
                            className="text-5xl font-black text-primary"
                            animate={selectedTier === index ? { scale: [1, 1.05, 1] } : {}}
                            transition={{ duration: 0.3 }}
                          >
                            {tier.price}
                          </motion.span>
                          <span className="body-regular ml-2">ETB/{tier.period}</span>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {tier.savings}
                        </Badge>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-4 mb-8">
                          {tier.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-center body-small"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                            >
                              <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                        <Button className="w-full btn-primary" size="lg">
                          Get Started
                          <Zap className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Service Details Grid */}
              <div className="mt-16">
                <motion.h2
                  className="text-3xl font-bold text-center text-gray-900 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Individual Service Pricing
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Server className="w-5 h-5 mr-2 text-blue-600" />
                          Cloud Servers
                        </CardTitle>
                        <CardDescription>Flexible virtual machine servers with multiple configurations</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>SSD Based:</strong> (vCPU × 930) + (RAM × 210) + (Storage × 10) ETB/month
                          </p>
                          <p>
                            <strong>HDD Based:</strong> (vCPU × 930) + (RAM × 210) + (Storage × 5) ETB/month
                          </p>
                          <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                            <strong>Types:</strong> General Purpose, Compute Optimized, Memory Optimized, Storage
                            Optimized
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <HardDrive className="w-5 h-5 mr-2 text-blue-600" />
                          Storage & Backup
                        </CardTitle>
                        <CardDescription>Automated backup and flexible storage solutions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>Backup Services:</strong> 11 ETB per GB/month
                          </p>
                          <p>
                            <strong>Cloud SSD Storage:</strong> 20 ETB per GB/month
                          </p>
                          <p>
                            <strong>Cloud HDD Storage:</strong> 11 ETB per GB/month
                          </p>
                          <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                            <strong>Features:</strong> Full backup, Snapshot backup, Encrypted
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Users className="w-5 h-5 mr-2 text-blue-600" />
                          Remote Access
                        </CardTitle>
                        <CardDescription>Secure remote access to cloud resources</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>Remote Access Portal:</strong> Starting from 100 ETB per user/month
                          </p>
                          <p>
                            <strong>WireGuard VPN:</strong> Starting from 150 ETB per user/month
                          </p>
                          <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                            <strong>Note:</strong> Secure solutions for connecting to cloud resources
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Shield className="w-5 h-5 mr-2 text-blue-600" />
                          Security & Monitoring
                        </CardTitle>
                        <CardDescription>Fully managed security and monitoring services</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>SIEM Agent:</strong> Starting from 1,000 ETB per agent/month
                          </p>
                          <p>
                            <strong>Monitoring Agent:</strong> Starting from 500 ETB per agent/month
                          </p>
                          <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                            <strong>Managed by INSA:</strong> Real-time monitoring and security event detection
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Wifi className="w-5 h-5 mr-2 text-blue-600" />
                          Network & Bandwidth
                        </CardTitle>
                        <CardDescription>Public IPs and internet bandwidth options</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>Shared Public IP:</strong> Free
                          </p>
                          <p>
                            <strong>Dedicated Public IP:</strong> 18 ETB per IP/month
                          </p>
                          <p>
                            <strong>Internet Bandwidth:</strong> Custom Quote
                          </p>
                          <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                            <strong>Future Plan:</strong> Maximum rate limit with custom pricing
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Phone className="w-5 h-5 mr-2 text-blue-600" />
                          Support & Training
                        </CardTitle>
                        <CardDescription>24/7 support and custom training services</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>Basic Support:</strong> Starting from 500 ETB/month
                          </p>
                          <p>
                            <strong>Premium Support:</strong> Starting from 1,000 ETB/month
                          </p>
                          <p>
                            <strong>Custom Training:</strong> Contact for quote
                          </p>
                          <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                            <strong>Premium includes:</strong> Dedicated support manager, priority response
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </TabsContent>

            {/* Custom Calculator */}
            <TabsContent value="calculator" className="space-y-8">
              <div className="lg:col-span-3 mb-8">
                <motion.div
                  className={`bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border-2 border-primary/20 ${
                    animateTotal ? "animate-pulse" : ""
                  }`}
                  animate={animateTotal ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center">
                    {appliedConfigName && (
                      <div className="mb-4">
                        <Badge variant="outline" className="text-primary border-primary/30 px-3 py-1">
                          <Star className="w-4 h-4 mr-1" />
                          {appliedConfigName} Applied
                        </Badge>
                      </div>
                    )}
                    <h3 className="heading-tertiary mb-2">Total Monthly Cost</h3>
                    <div className="text-6xl font-black text-primary mb-2">
                      {totalCost.toLocaleString()}
                      <span className="text-2xl font-semibold text-muted-foreground ml-2">ETB</span>
                    </div>
                    <p className="body-regular">Custom configuration based on your specific requirements</p>
                    {appliedConfigName && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Configuration automatically applied from {appliedConfigName}
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {/* Custom Configuration */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Server className="w-5 h-5 mr-2" />
                          Cloud Server Configuration
                        </CardTitle>
                        <CardDescription>
                          Configure your virtual machine specifications using INSA's exact pricing formula
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="serverType" className="flex items-center text-sm font-medium">
                              Storage Type
                              <Tooltip>
                                <TooltipTrigger>
                                  <Info className="w-4 h-4 ml-1 text-gray-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>
                                    SSD: High performance, faster access times, 10 ETB/GB
                                    <br />
                                    HDD: Cost effective, suitable for archival, 5 ETB/GB
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </Label>
                            <Select
                              value={config.serverType}
                              onValueChange={(value: "ssd" | "hdd") => updateConfig("serverType", value)}
                            >
                              <SelectTrigger className="mt-2">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ssd">
                                  <div className="flex flex-col">
                                    <span>SSD Storage</span>
                                    <span className="text-xs text-gray-500">High Performance - 10 ETB/GB</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="hdd">
                                  <div className="flex flex-col">
                                    <span>HDD Storage</span>
                                    <span className="text-xs text-gray-500">Cost Effective - 5 ETB/GB</span>
                                  </div>
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="vcpu" className="text-sm font-medium">
                              vCPU Cores
                              <span className="text-xs text-gray-500 ml-2">(930 ETB per core)</span>
                            </Label>
                            <div className="mt-2 space-y-2">
                              <Input
                                type="number"
                                value={config.vcpu}
                                onChange={(e) => validateAndUpdate("vcpu", Number(e.target.value), 1, 48)}
                                min="1"
                                max="48"
                                className="text-center"
                                placeholder="Enter number of CPU cores"
                              />
                              <input
                                type="range"
                                min="1"
                                max="48"
                                value={config.vcpu}
                                onChange={(e) => updateConfig("vcpu", Number(e.target.value))}
                                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                              <div className="flex justify-between text-xs text-gray-500">
                                <span>1 core</span>
                                <span>48 cores</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="ram" className="text-sm font-medium">
                              RAM (GB)
                              <span className="text-xs text-gray-500 ml-2">(210 ETB per GB)</span>
                            </Label>
                            <div className="mt-2 space-y-2">
                              <Input
                                type="number"
                                value={config.ram}
                                onChange={(e) => validateAndUpdate("ram", Number(e.target.value), 1, 384)}
                                min="1"
                                max="384"
                                className="text-center"
                                placeholder="Enter RAM in GB"
                              />
                              <input
                                type="range"
                                min="1"
                                max="384"
                                value={config.ram}
                                onChange={(e) => updateConfig("ram", Number(e.target.value))}
                                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                              <div className="flex justify-between text-xs text-gray-500">
                                <span>1 GB</span>
                                <span>384 GB</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="storage" className="text-sm font-medium">
                              Storage (GB)
                              <span className="text-xs text-gray-500 ml-2">
                                ({config.serverType === "ssd" ? "10" : "5"} ETB per GB)
                              </span>
                            </Label>
                            <div className="mt-2 space-y-2">
                              <Input
                                type="number"
                                value={config.storage}
                                onChange={(e) => validateAndUpdate("storage", Number(e.target.value), 20, 10000)}
                                min="20"
                                max="10000"
                                className="text-center"
                                placeholder="Enter storage in GB"
                              />
                              <input
                                type="range"
                                min="20"
                                max="1000"
                                value={Math.min(config.storage, 1000)}
                                onChange={(e) => updateConfig("storage", Number(e.target.value))}
                                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                              <div className="flex justify-between text-xs text-gray-500">
                                <span>20 GB</span>
                                <span>1000+ GB</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <div className="text-sm font-medium text-blue-900 mb-2">Server Cost Breakdown:</div>
                          <div className="space-y-1 text-sm text-blue-800">
                            <div className="flex justify-between">
                              <span>vCPU: {config.vcpu} × 930 ETB</span>
                              <span className="font-medium">{(config.vcpu * 930).toLocaleString()} ETB</span>
                            </div>
                            <div className="flex justify-between">
                              <span>RAM: {config.ram}GB × 210 ETB</span>
                              <span className="font-medium">{(config.ram * 210).toLocaleString()} ETB</span>
                            </div>
                            <div className="flex justify-between">
                              <span>
                                Storage: {config.storage}GB × {config.serverType === "ssd" ? "10" : "5"} ETB
                              </span>
                              <span className="font-medium">
                                {(config.storage * (config.serverType === "ssd" ? 10 : 5)).toLocaleString()} ETB
                              </span>
                            </div>
                            <div className="border-t border-blue-200 pt-2 mt-2 flex justify-between font-semibold">
                              <span>Server Total:</span>
                              <span>
                                {(
                                  config.vcpu * 930 +
                                  config.ram * 210 +
                                  config.storage * (config.serverType === "ssd" ? 10 : 5)
                                ).toLocaleString()}{" "}
                                ETB/month
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Storage & Backup Configuration */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <HardDrive className="w-5 h-5 mr-2" />
                          Storage & Backup Services
                        </CardTitle>
                        <CardDescription>
                          Additional storage and automated backup solutions for data protection
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="backupStorage" className="text-sm font-medium">
                              Backup Storage (GB)
                              <span className="text-xs text-gray-500 ml-2">(11 ETB per GB/month)</span>
                            </Label>
                            <div className="mt-2 space-y-2">
                              <Input
                                type="number"
                                value={config.backupStorage}
                                onChange={(e) => validateAndUpdate("backupStorage", Number(e.target.value), 0, 10000)}
                                min="0"
                                max="10000"
                                className="text-center"
                                placeholder="Enter backup storage in GB"
                              />
                              <input
                                type="range"
                                min="0"
                                max="1000"
                                value={Math.min(config.backupStorage, 1000)}
                                onChange={(e) => updateConfig("backupStorage", Number(e.target.value))}
                                className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                              <div className="text-xs text-gray-500">Automated HDD-based backup solution</div>
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="cloudStorage" className="text-sm font-medium">
                              Additional Cloud Storage (GB)
                              <span className="text-xs text-gray-500 ml-2">
                                ({config.cloudStorageType === "ssd" ? "20" : "11"} ETB per GB)
                              </span>
                            </Label>
                            <div className="mt-2 space-y-2">
                              <Input
                                type="number"
                                value={config.cloudStorage}
                                onChange={(e) => validateAndUpdate("cloudStorage", Number(e.target.value), 0, 10000)}
                                min="0"
                                max="10000"
                                className="text-center"
                                placeholder="Enter additional storage in GB"
                              />
                              <input
                                type="range"
                                min="0"
                                max="1000"
                                value={Math.min(config.cloudStorage, 1000)}
                                onChange={(e) => updateConfig("cloudStorage", Number(e.target.value))}
                                className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="cloudStorageType" className="text-sm font-medium">
                            Cloud Storage Type
                          </Label>
                          <Select
                            value={config.cloudStorageType}
                            onValueChange={(value: "ssd" | "hdd") => updateConfig("cloudStorageType", value)}
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ssd">
                                <div className="flex flex-col">
                                  <span>SSD Storage</span>
                                  <span className="text-xs text-gray-500">High Performance - 20 ETB/GB</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="hdd">
                                <div className="flex flex-col">
                                  <span>HDD Storage</span>
                                  <span className="text-xs text-gray-500">Cost Effective - 11 ETB/GB</span>
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {(config.backupStorage > 0 || config.cloudStorage > 0) && (
                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <div className="text-sm font-medium text-green-900 mb-2">Storage Cost Breakdown:</div>
                            <div className="space-y-1 text-sm text-green-800">
                              {config.backupStorage > 0 && (
                                <div className="flex justify-between">
                                  <span>Backup: {config.backupStorage}GB × 11 ETB</span>
                                  <span className="font-medium">
                                    {(config.backupStorage * 11).toLocaleString()} ETB
                                  </span>
                                </div>
                              )}
                              {config.cloudStorage > 0 && (
                                <div className="flex justify-between">
                                  <span>
                                    Cloud Storage: {config.cloudStorage}GB ×{" "}
                                    {config.cloudStorageType === "ssd" ? "20" : "11"} ETB
                                  </span>
                                  <span className="font-medium">
                                    {(
                                      config.cloudStorage * (config.cloudStorageType === "ssd" ? 20 : 11)
                                    ).toLocaleString()}{" "}
                                    ETB
                                  </span>
                                </div>
                              )}
                              <div className="border-t border-green-200 pt-2 mt-2 flex justify-between font-semibold">
                                <span>Storage Total:</span>
                                <span>
                                  {(
                                    config.backupStorage * 11 +
                                    config.cloudStorage * (config.cloudStorageType === "ssd" ? 20 : 11)
                                  ).toLocaleString()}{" "}
                                  ETB/month
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Remote Access & Security Configuration */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Users className="w-5 h-5 mr-2" />
                          Remote Access & Security
                        </CardTitle>
                        <CardDescription>Secure remote access and comprehensive monitoring services</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="remoteAccessUsers" className="text-sm font-medium">
                              Remote Access Users
                              <span className="text-xs text-gray-500 ml-2">
                                ({config.remoteAccessType === "rap" ? "100" : "150"} ETB per user)
                              </span>
                            </Label>
                            <div className="mt-2 space-y-2">
                              <Input
                                type="number"
                                value={config.remoteAccessUsers}
                                onChange={(e) =>
                                  validateAndUpdate("remoteAccessUsers", Number(e.target.value), 0, 1000)
                                }
                                min="0"
                                max="1000"
                                className="text-center"
                                placeholder="Number of remote users"
                              />
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={Math.min(config.remoteAccessUsers, 100)}
                                onChange={(e) => updateConfig("remoteAccessUsers", Number(e.target.value))}
                                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="remoteAccessType" className="text-sm font-medium">
                              Remote Access Type
                            </Label>
                            <Select
                              value={config.remoteAccessType}
                              onValueChange={(value: "rap" | "wireguard") => updateConfig("remoteAccessType", value)}
                            >
                              <SelectTrigger className="mt-2">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="rap">
                                  <div className="flex flex-col">
                                    <span>Remote Access Portal (RAP)</span>
                                    <span className="text-xs text-gray-500">Web-based access - 100 ETB/user</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="wireguard">
                                  <div className="flex flex-col">
                                    <span>WireGuard VPN</span>
                                    <span className="text-xs text-gray-500">Advanced VPN - 150 ETB/user</span>
                                  </div>
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="siemAgents" className="text-sm font-medium">
                              SIEM Agents
                              <span className="text-xs text-gray-500 ml-2">(1,000 ETB per agent)</span>
                            </Label>
                            <div className="mt-2 space-y-2">
                              <Input
                                type="number"
                                value={config.siemAgents}
                                onChange={(e) => validateAndUpdate("siemAgents", Number(e.target.value), 0, 100)}
                                min="0"
                                max="100"
                                className="text-center"
                                placeholder="Number of SIEM agents"
                              />
                              <input
                                type="range"
                                min="0"
                                max="20"
                                value={Math.min(config.siemAgents, 20)}
                                onChange={(e) => updateConfig("siemAgents", Number(e.target.value))}
                                className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                              <div className="text-xs text-gray-500">Security Information & Event Management</div>
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="monitoringAgents" className="text-sm font-medium">
                              Monitoring Agents
                              <span className="text-xs text-gray-500 ml-2">(500 ETB per agent)</span>
                            </Label>
                            <div className="mt-2 space-y-2">
                              <Input
                                type="number"
                                value={config.monitoringAgents}
                                onChange={(e) => validateAndUpdate("monitoringAgents", Number(e.target.value), 0, 100)}
                                min="0"
                                max="100"
                                className="text-center"
                                placeholder="Number of monitoring agents"
                              />
                              <input
                                type="range"
                                min="0"
                                max="20"
                                value={Math.min(config.monitoringAgents, 20)}
                                onChange={(e) => updateConfig("monitoringAgents", Number(e.target.value))}
                                className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                              <div className="text-xs text-gray-500">Service & Health Monitoring</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Network & Support Configuration */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Wifi className="w-5 h-5 mr-2" />
                          Network & Support
                        </CardTitle>
                        <CardDescription>Public IP addresses and professional support services</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="dedicatedIPs" className="text-sm font-medium">
                              Dedicated Public IPs
                              <span className="text-xs text-gray-500 ml-2">(18 ETB per IP/month)</span>
                            </Label>
                            <div className="mt-2 space-y-2">
                              <Input
                                type="number"
                                value={config.dedicatedIPs}
                                onChange={(e) => validateAndUpdate("dedicatedIPs", Number(e.target.value), 0, 50)}
                                min="0"
                                max="50"
                                className="text-center"
                                placeholder="Number of dedicated IPs"
                              />
                              <input
                                type="range"
                                min="0"
                                max="20"
                                value={Math.min(config.dedicatedIPs, 20)}
                                onChange={(e) => updateConfig("dedicatedIPs", Number(e.target.value))}
                                className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                              <div className="text-xs text-gray-500">Shared IPs are included at no cost</div>
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="supportType" className="text-sm font-medium">
                              Support Level
                            </Label>
                            <Select
                              value={config.supportType}
                              onValueChange={(value: "none" | "basic" | "premium") =>
                                updateConfig("supportType", value)
                              }
                            >
                              <SelectTrigger className="mt-2">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">
                                  <div className="flex flex-col">
                                    <span>No Support</span>
                                    <span className="text-xs text-gray-500">Self-service only - Free</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="basic">
                                  <div className="flex flex-col">
                                    <span>Basic Support</span>
                                    <span className="text-xs text-gray-500">Email support - 500 ETB/month</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="premium">
                                  <div className="flex flex-col">
                                    <span>Premium Support</span>
                                    <span className="text-xs text-gray-500">24/7 phone & email - 1,000 ETB/month</span>
                                  </div>
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Cost Summary Panel */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="sticky top-8"
                  >
                    <Card className="border-2 border-blue-200 shadow-lg">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                        <CardTitle className="flex items-center">
                          <Calculator className="w-5 h-5 mr-2 text-blue-600" />
                          Cost Summary
                        </CardTitle>
                        <CardDescription>Monthly cost breakdown based on INSA pricing</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 p-6">
                        <div className="space-y-3">
                          {/* Server Costs */}
                          <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-sm font-medium">Cloud Server</span>
                            <span className="text-sm font-bold text-blue-600">
                              {(
                                config.vcpu * 930 +
                                config.ram * 210 +
                                config.storage * (config.serverType === "ssd" ? 10 : 5)
                              ).toLocaleString()}{" "}
                              ETB
                            </span>
                          </div>

                          {/* Storage Costs */}
                          {(config.backupStorage > 0 || config.cloudStorage > 0) && (
                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                              <span className="text-sm font-medium">Storage & Backup</span>
                              <span className="text-sm font-bold text-green-600">
                                {(
                                  config.backupStorage * 11 +
                                  config.cloudStorage * (config.cloudStorageType === "ssd" ? 20 : 11)
                                ).toLocaleString()}{" "}
                                ETB
                              </span>
                            </div>
                          )}

                          {/* Network Costs */}
                          {config.dedicatedIPs > 0 && (
                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                              <span className="text-sm font-medium">Dedicated IPs</span>
                              <span className="text-sm font-bold text-yellow-600">
                                {(config.dedicatedIPs * 18).toLocaleString()} ETB
                              </span>
                            </div>
                          )}

                          {/* Remote Access Costs */}
                          {config.remoteAccessUsers > 0 && (
                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                              <span className="text-sm font-medium">Remote Access</span>
                              <span className="text-sm font-bold text-purple-600">
                                {(
                                  config.remoteAccessUsers * (config.remoteAccessType === "rap" ? 100 : 150)
                                ).toLocaleString()}{" "}
                                ETB
                              </span>
                            </div>
                          )}

                          {/* Security Costs */}
                          {(config.siemAgents > 0 || config.monitoringAgents > 0) && (
                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                              <span className="text-sm font-medium">Security & Monitoring</span>
                              <span className="text-sm font-bold text-red-600">
                                {(config.siemAgents * 1000 + config.monitoringAgents * 500).toLocaleString()} ETB
                              </span>
                            </div>
                          )}

                          {/* Support Costs */}
                          {config.supportType !== "none" && (
                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                              <span className="text-sm font-medium">Support</span>
                              <span className="text-sm font-bold text-gray-600">
                                {config.supportType === "basic" ? "500" : "1,000"} ETB
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Total Cost */}
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-lg font-bold text-blue-900">Total Monthly Cost:</span>
                            <motion.span
                              className="text-2xl font-bold text-blue-600"
                              animate={animateTotal ? { scale: [1, 1.1, 1] } : {}}
                              transition={{ duration: 0.3 }}
                            >
                              {totalCost.toLocaleString()} ETB
                            </motion.span>
                          </div>
                          <div className="text-sm text-blue-700">
                            Annual Cost: {(totalCost * 12).toLocaleString()} ETB
                          </div>
                          <div className="text-xs text-blue-600 mt-1">
                            Daily Cost: {Math.round(totalCost / 30).toLocaleString()} ETB
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
                            Get Detailed Quote
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                          >
                            Contact Sales Team
                          </Button>
                          <Button variant="ghost" className="w-full text-gray-600 hover:bg-gray-50" size="sm">
                            Save Configuration
                          </Button>
                        </div>

                        {/* Service Level Agreement */}
                        <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600 border">
                          <div className="font-semibold mb-1 text-gray-800">Service Level Agreement:</div>
                          <div>• 99.99% uptime annually for infrastructure</div>
                          <div>• 95.95% accessibility for cloud services</div>
                          <div>• Government-grade security compliance</div>
                          <div>• 24/7 monitoring and support available</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>

        <Footer />
      </div>
    </TooltipProvider>
  )
}
