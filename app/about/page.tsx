"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Globe, Heart, CheckCircle, TrendingUp, Shield, ArrowRight, Lightbulb } from "lucide-react"
import Link from "next/link"

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

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold leading-tight mb-8 text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About Nour Endowment
            </motion.h1>

            <motion.p
              className="text-xl text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Founded with a vision to create sustainable change through education and community empowerment, the Nour
              Endowment is at the forefront of transformative initiatives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
              Mission
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-2xl text-slate-700 max-w-6xl mx-auto leading-relaxed font-medium"
            >
To Build a Sustainable Endowment That Reinvests In Marginalized Communities Through Education            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/3.jpg"
                alt="Why We Started Nour Endowment"
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
                <h3 className="text-3xl font-bold mb-6 text-slate-800">Why We Started Nour Endowment</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                Rather than offering short-term relief, we believe in building long term equitable systems that honor resilience and right to growth.  We are committed to building a sustainable financial foundation that expands educational access and long-term opportunities.


                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8 lg:order-2"
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-3xl font-bold mb-6 text-black">How it Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#084120] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg text-slate-600">
                      We invest all contributions and use only the returns to fund long-term educational and
                      opportunistic initiatives.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#084120] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg text-slate-600">
                      The principal remains untouched forever, allowing the endowment to grow perpetually.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-1"
            >
              <img
                src="/4.jpg"
                alt="How it Works"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {[
              // {
              //   icon: Globe,
              //   title: "Our Vision",
              //   description:
              //     "A world where every individual has access to quality education and the resources needed to reach their full potential, regardless of their background or circumstances.",
              // },
              { icon: CheckCircle, title: "Excellence", description: "We strive for the highest standards in everything we do, from our programs to our partnerships." },
              { icon: Shield, title: "Integrity", description: "We act with honesty, transparency, and accountability in all our actions." },
              { icon: Lightbulb, title: "Innovation", description: "We embrace new ideas and creative solutions to drive lasting impact." },
              { icon: Heart, title: "Compassion", description: "We are committed to empathy, kindness, and service to others." },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp} className={`relative flex justify-center items-stretch ${index === 0 ? 'mt-0 md:mt-0' : 'mt-8 md:mt-0'}`}>
                {/* Floating Icon */}
                <motion.div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 w-20 h-20 rounded-3xl shadow-lg bg-[#084120] flex items-center justify-center border-4 border-white/70"
                  whileHover={{ scale: 1.08, rotate: 8 }}
                  transition={{ duration: 0.4 }}
                  style={{ boxShadow: '0 8px 32px 0 rgba(91, 106, 63, 0.15)' }}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>
                {/* Card */}
                <Card className="h-full pt-16 pb-8 px-6 bg-white border border-[#084120]/20 border-t-8 rounded-3xl shadow-xl transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl"> 
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold mb-2 text-black text-center">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-slate-600 leading-relaxed text-base text-center">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-20"
          >
            {/* <Card className="bg-white/70 backdrop-blur-lg border border-slate-200/60 rounded-3xl shadow-2xl p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold mb-4 text-black">Core Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: "Excellence" },
                    { name: "Integrity" },
                    { name: "Innovation" },
                    { name: "Compassion" },
                  ].map((principle) => (
                    <motion.div
                      key={principle.name}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 hover:bg-white/80 transition group shadow"
                      whileHover={{ x: 6 }}
                    >
                      <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#084120] shadow-md mr-2">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </span>
                      <span className="text-lg text-slate-700 font-semibold group-hover:text-[#084120] transition">{principle.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card> */}
          {/* </motion.div> */} 
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
            <h3 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join us in our mission to create lasting positive change through education.
            </p>
            <Link href="/donate">
              <motion.div {...scaleOnHover}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 bg-white text-[#084120] hover:bg-slate-100"
                >
                  Get Involved Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
