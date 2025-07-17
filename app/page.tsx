"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, ArrowRight, Award, Shield, CheckCircle, Globe, BookOpen, UserCheck, Target, Infinity, HelpCircle } from "lucide-react"
import Link from "next/link"
import DonorVoicesCarousel from "@/components/DonorVoicesCarousel"
import InvestmentCalculator from "@/components/InvestmentCalculator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
                className="inline-block px-4 py-2 bg-[#116b36] text-white rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Nour Endowment 2025
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-5xl font-bold leading-tight text-black"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                A Sustainable Endowment That Reinvests In Marginalized Communities Through Education
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
                      className="bg-[#116b36] hover:bg-[#116b36]/90 text-white text-lg px-8 py-6"
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
              <div className="relative z-10 w-full h-full">
                <motion.img
                  src="/1.jpg"
                  alt="Educational Impact"
                  className="rounded-2xl shadow-2xl w-full h-full object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-[#116b36]/20 rounded-2xl -z-10"></div>
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
                number: "50+",
                label: "Committed Members",
                description: "Growing community of supporters",
                icon: UserCheck,
              },
              {
                number: "$1B",
                label: "Target Endowment",
                description: "We only use the returns for education",
                icon: Target,
              },
              {
                number: "∞",
                label: "Years of Impact",
                description: "Perpetual giving model",
                icon: Infinity,
              },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex justify-center items-stretch">
                <Card className="flex flex-col items-center text-center rounded-2xl bg-white border border-[#116b36]/20 shadow-lg hover:shadow-[#116b36]/20 transition-all duration-300 w-full max-w-[320px] p-4 sm:p-6 relative overflow-hidden group">
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 w-full h-1.5 rounded-t-2xl bg-[#116b36] opacity-70 group-hover:opacity-100 transition-all duration-300" />
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#116b36] mb-3 mt-3 shadow ring-2 ring-white/60">
                    <stat.icon className="w-6 h-6 text-white drop-shadow" />
                  </div>
                  <div className="text-3xl font-extrabold mb-1 text-[#116b36] tracking-wide">{stat.number}</div>
                  <div className="text-base font-semibold text-black mb-1 tracking-wider">{stat.label}</div>
                  <div className="text-slate-500 text-sm">{stat.description}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Committed Members Section */}
      {/* <section className="py-20 bg-[#f9f7f1]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl lg:text-7xl font-extrabold mb-4 text-[#116b36] tracking-tight"
            >
              50+
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl lg:text-4xl font-bold mb-4 text-black"
            >
              Committed Members
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-slate-600"
            >
              People contributed so far
            </motion.p>
          </motion.div>
        </div>
      </section> */}
      <InvestmentCalculator/>

      {/* Our Goal Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our Goal
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building a sustainable endowment through three tiers of committed supporters
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                number: "1,000",
                title: "Founding Members",
                description: "giving $1,000 a year",
                color: "bg-[#116b36]",
                textColor: "text-[#116b36]"
              },
              {
                number: "100",
                title: "Impact Partners",
                description: "giving $10,000+",
                color: "bg-[#116b36]/80",
                textColor: "text-[#116b36]"
              },
              {
                number: "10",
                title: "Legacy Builders",
                description: "giving $50,000+",
                color: "bg-[#116b36]/60",
                textColor: "text-[#116b36]"
              }
            ].map((tier, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex justify-center items-stretch">
                <Card className="relative flex flex-col items-center text-center rounded-3xl bg-white border border-[#116b36]/20 shadow-xl hover:shadow-[#116b36]/20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 w-full p-8 group overflow-hidden">
                  {/* Decorative accent */}
                  <div className={`absolute top-0 left-0 w-full h-2 rounded-t-3xl ${tier.color} opacity-70 group-hover:opacity-100 transition-all duration-300`} />
                  
                  {/* Number */}
                  <div className={`text-5xl lg:text-6xl font-extrabold mb-4 ${tier.textColor} tracking-tight`}>
                    {tier.number}
                  </div>
                  
                  {/* Title */}
                  <div className="text-2xl font-bold mb-2 text-black">
                    {tier.title}
                  </div>
                  
                  {/* Description */}
                  <div className="text-slate-600 text-lg leading-relaxed">
                    {tier.description}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Donor Voices Carousel */}
      <DonorVoicesCarousel />

      {/* How It Works */}
      <section className="py-20 bg-[#f9f7f1]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              How It Works
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
                description: "Make a recurring donation to build the endowment principal.",
                icon: Heart,
              },
              {
                step: "02",
                title: "We Invest",
                description: "Your contribution is professionally and ethically invested.",
                icon: ArrowRight,
              },
              {
                step: "03",
                title: "Impact Forever",
                description: "Investment returns fund education while your principal grows.",
                icon: Globe,
              },
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex justify-center items-stretch">
                <Card className="relative flex flex-col items-center text-center rounded-3xl bg-white border border-[#116b36]/20 shadow-xl hover:shadow-[#116b36]/20 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 w-full max-w-xs p-8 group overflow-hidden">
                  {/* Floating Icon with Glow */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10 w-20 h-20 rounded-full bg-[#116b36] opacity-80 blur-md" />
                  <div className="relative z-20 w-16 h-16 rounded-2xl bg-[#116b36] flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Step Number */}
                  <div className="text-5xl font-extrabold text-[#116b36] mb-2 drop-shadow-lg">{step.step}</div>
                  <div className="text-xl font-bold mb-2 text-black">{step.title}</div>
                  <div className="text-slate-600 leading-relaxed text-center">{step.description}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/2.jpg"
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
                <h3 className="text-3xl font-bold mb-6 text-black">Why Choose Nour Endowment?</h3>
              </motion.div>

              {[
                {
                  icon: Shield,
                  title: "Perpetual Impact",
                  description: "Your contribution is professionally and ethically invested.",
                },
                {
                  icon: BookOpen,
                  title: "Education Focus",
                  description: "Investment returns fund education while your principal grows.",
                },
                {
                  icon: Award,
                  title: "Transparent Management",
                  description: "Professional investment management with quarterly & annual reporting.",
                },
                {
                  icon: CheckCircle,
                  title: "Compliance",
                  description: "Zakat-eligible, Sadaqah Jariyah qualified, with halal-certified investments.",
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#116b36] rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Gift Planting Section */}
      <section className="py-20 bg-[#f9f7f1]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl lg:text-5xl font-bold mb-8 text-black"
            >
              Your gift isn't spent — it's planted.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed"
            >
              Nour Endowment preserves your contribution, using only the investment returns to support education.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/donate">
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    className="bg-[#116b36] hover:bg-[#116b36]/90 text-white text-lg px-8 py-6"
                  >
                    Support Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#116b36] rounded-2xl flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get answers to common questions about Nour Endowment and how your contribution creates lasting impact.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How is my donation used and is the principal ever touched?",
                  answer: "Your contribution is never spent. It's invested, and only the returns are used to fund initiatives. This ensures your gift creates a permanent, growing source of support every year."
                },
                {
                  question: "Who manages the endowment and ensures transparency?",
                  answer: "The endowment is managed by a team committed to ethical (halal) investing, financial transparency, and long-term sustainability. We provide regular updates and clear reporting so you know exactly how funds are being used and invested."
                },
                {
                  question: "What kind of impact will my contribution have?",
                  answer: "Your gift helps fund projects that support education for marginalized communities. These are long-term investments that build stability creating a ripple effect across generations."
                }
              ].map((faq, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <AccordionItem value={`item-${index}`} className="border border-[#116b36]/20 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-black hover:text-[#116b36] hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
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
                    className="text-lg px-8 py-6 bg-white text-[#116b36] hover:bg-slate-100"
                  >
                    Start Contributing
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/grants">
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-[#116b36] bg-transparent"
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
