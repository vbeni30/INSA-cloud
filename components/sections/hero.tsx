"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Shield, Cloud, Server, Lock } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0)
  const router = useRouter()

  const stats = [
    { label: "Infrastructure Uptime", value: "99.99%", color: "text-blue-600" },
    { label: "Cloud Accessibility", value: "95.95%", color: "text-cyan-600" },
    { label: "Support Response", value: "24/7", color: "text-blue-700" },
    { label: "Security Level", value: "Gov Grade", color: "text-cyan-700" },
  ]

  useEffect(() => {
    let mounted = true

    const interval = setInterval(() => {
      if (mounted) {
        setCurrentStat((prev) => (prev + 1) % stats.length)
      }
    }, 3000)

    return () => {
      mounted = false
      clearInterval(interval)
    }
  }, [stats.length])

  const handleNavigation = (href: string) => {
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-100 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-blue-200 rounded-full opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.div
              className="mb-8 flex items-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="relative">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Image
                    src="/images/gotera-logo.webp"
                    alt="Gotera Cloud"
                    width={180}
                    height={60}
                    className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                    priority
                  />
                </motion.div>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-lg blur-sm -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <div className="ml-4 hidden sm:block">
                <motion.div
                  className="text-sm font-semibold text-blue-800 tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  CLOUD PLATFORM
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="mb-6" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-100 to-blue-100 text-blue-800 border border-blue-200 shadow-sm">
                <Shield className="w-4 h-4 mr-2" />
                Government Cloud Platform
              </span>
            </motion.div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Secure Government Cloud
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Infrastructure
              </motion.span>
            </h1>

            <motion.p
              className="text-slate-600 mb-8 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              GOTERA Cloud provides secure, reliable, and scalable cloud solutions designed specifically for government
              agencies and mission-critical operations.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-3 text-base font-semibold shadow-lg transition-all duration-300 transform hover:shadow-xl"
                  onClick={() => handleNavigation("/pricing")}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 px-8 py-3 text-base font-semibold bg-white/80 backdrop-blur-sm transition-all duration-300"
                  onClick={() => handleNavigation("/services")}
                >
                  View Services
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-6 text-sm text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {[
                { icon: CheckCircle, text: "99.99% Infrastructure Uptime", delay: 0 },
                { icon: CheckCircle, text: "Government Compliant", delay: 0.1 },
                { icon: CheckCircle, text: "24/7 Support Available", delay: 0.2 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1 + item.delay }}
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="h-4 w-4 text-cyan-500 mr-2 group-hover:text-cyan-600 transition-colors" />
                  <span className="group-hover:text-slate-800 transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-200 relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full -translate-y-16 translate-x-16 opacity-50" />

              <div className="mb-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">Service Level Agreements</h3>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Cloud className="w-5 h-5 text-blue-500" />
                  </motion.div>
                </div>

                <motion.div
                  className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200"
                  key={currentStat}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`text-3xl font-bold ${stats[currentStat].color} mb-1`}>
                    {stats[currentStat].value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{stats[currentStat].label}</div>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className={`text-center p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                        index === currentStat
                          ? "bg-blue-50 border-blue-200 shadow-md"
                          : "bg-slate-50 border-slate-100 hover:bg-slate-100"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setCurrentStat(index)}
                    >
                      <div className={`text-xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-slate-600 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6 relative z-10">
                <div className="flex items-center justify-between">
                  <motion.div
                    className="flex items-center text-sm text-slate-600 font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Lock className="w-4 h-4 mr-2 text-blue-500" />
                    Government Compliant
                  </motion.div>
                  <motion.div
                    className="flex items-center text-sm text-slate-600 font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Server className="w-4 h-4 mr-2 text-cyan-500" />
                    Secure by Design
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
