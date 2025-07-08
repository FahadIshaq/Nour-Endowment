"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, ArrowRight, Award, Shield, CheckCircle, Globe, BookOpen, UserCheck, Target, Infinity } from "lucide-react"
import Link from "next/link"
import DonorVoicesCarousel from "@/components/DonorVoicesCarousel"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Nour Endowment 2025
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="text-slate-800">Building a</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Sustainable Future
                </span>
                <br />
                <span className="text-slate-600">Through Education</span>
              </motion.h1>

              <motion.p
                className="text-xl text-slate-600 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                We create lasting impact by investing in education and opportunity for historically marginalized
                communities. Your contribution grows forever, funding change for generations.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link href="/donate">
                  <motion.div {...scaleOnHover}>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-lg px-8 py-6"
                    >
                      Start Contributing
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/about">
                  <motion.div {...scaleOnHover}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-2 hover:bg-slate-50 bg-transparent"
                    >
                      Learn Our Story
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-full"
            >
              <div className="relative z-10">
                <motion.img
                  src="/image1.png"
                  alt="Educational Impact"
                  className="rounded-2xl shadow-2xl w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-emerald-200 to-teal-200 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading and subheading can be added here if needed */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
          >
            {[
              {
                number: "25+",
                label: "Committed Members",
                description: "Growing community of supporters",
                icon: UserCheck,
                gradient: "from-emerald-100 to-emerald-300",
                iconColor: "text-emerald-600"
              },
              {
                number: "$1M+",
                label: "Target Endowment",
                description: "Building sustainable impact",
                icon: Target,
                gradient: "from-blue-100 to-blue-300",
                iconColor: "text-blue-600"
              },
              {
                number: "∞",
                label: "Years of Impact",
                description: "Perpetual giving model",
                icon: Infinity,
                gradient: "from-yellow-100 to-emerald-100",
                iconColor: "text-emerald-600"
              },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex justify-center items-stretch">
                <Card className="flex flex-col items-center text-center rounded-2xl bg-white/80 backdrop-blur-lg border border-gradient-to-br from-emerald-200 via-white to-blue-200 shadow-lg hover:shadow-emerald-200/40 transition-all duration-300 w-full max-w-[320px] p-4 sm:p-6 relative overflow-hidden group">
                  {/* Gradient accent bar */}
                  <div className="absolute top-0 left-0 w-full h-1.5 rounded-t-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 opacity-70 group-hover:opacity-100 transition-all duration-300" />
                  {/* Icon with glow */}
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${stat.gradient} mb-3 mt-3 shadow ring-2 ring-white/60`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor} drop-shadow`} />
                  </div>
                  <div className="text-3xl font-extrabold mb-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-500 bg-clip-text text-transparent tracking-wide">{stat.number}</div>
                  <div className="text-base font-semibold text-slate-800 mb-1 tracking-wider">{stat.label}</div>
                  <div className="text-slate-500 text-sm">{stat.description}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Donor Voices Carousel */}
      <DonorVoicesCarousel />

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold mb-6">
              How{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                It Works
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your gift isn't spent - it's invested. We use only the returns to fund education and opportunity.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                step: "01",
                title: "You Contribute",
                description: "Make a one-time or recurring donation to build the endowment principal.",
                icon: Heart,
                color: "from-emerald-500 to-emerald-600",
              },
              {
                step: "02",
                title: "We Invest",
                description: "Your contribution is professionally invested using halal-compliant strategies.",
                icon: ArrowRight, // Changed from TrendingUp to ArrowRight
                color: "from-teal-500 to-teal-600",
              },
              {
                step: "03",
                title: "Impact Forever",
                description: "Investment returns fund education and opportunity while your principal grows.",
                icon: Globe,
                color: "from-blue-500 to-blue-600",
              },
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex justify-center items-stretch">
                <Card className="relative flex flex-col items-center text-center rounded-3xl bg-white/70 backdrop-blur-xl border border-gradient-to-br from-emerald-200 via-white to-blue-200 shadow-xl hover:shadow-emerald-200/40 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 w-full max-w-xs p-8 group overflow-hidden">
                  {/* Floating Icon with Glow */}
                  <div className={`absolute -top-10 left-1/2 -translate-x-1/2 z-10 w-20 h-20 rounded-full bg-gradient-to-br ${step.color} opacity-80 blur-md`} />
                  <div className={`relative z-20 w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Step Number */}
                  <div className="text-5xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-500 bg-clip-text text-transparent mb-2 drop-shadow-lg">{step.step}</div>
                  <div className="text-xl font-bold mb-2">{step.title}</div>
                  <div className="text-slate-600 leading-relaxed text-center">{step.description}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/clild.jpg"
                alt="Why Choose Nour Endowment"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-3xl font-bold mb-6 text-slate-800">Why Choose Nour Endowment?</h3>
              </motion.div>

              {[
                {
                  icon: Shield,
                  title: "Perpetual Impact",
                  description: "Your principal is never touched - it grows forever while funding continuous change.",
                },
                {
                  icon: CheckCircle,
                  title: "Islamic Compliance",
                  description: "Zakat-eligible, Sadaqah Jariyah qualified, with halal-certified investments.",
                },
                {
                  icon: BookOpen,
                  title: "Education Focus",
                  description: "Specifically designed to expand educational access and opportunity.",
                },
                {
                  icon: Award,
                  title: "Transparent Management",
                  description: "Professional investment management with regular reporting and updates.",
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h3 className="text-4xl font-bold mb-6">Ready to Create Lasting Change?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join our community of changemakers. Your contribution today creates educational opportunities for
              generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-6 bg-white text-emerald-600 hover:bg-slate-100"
                  >
                    Start Contributing
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/projects">
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
                  >
                    See Our Projects
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
