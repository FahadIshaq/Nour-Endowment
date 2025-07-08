"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react"

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-teal-600/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Get in{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Have questions about our programs? Want to partner with us? Ready to apply for funding?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
            >
              <Clock className="w-5 h-5 text-emerald-600" />
              <span className="text-slate-700 font-medium">We respond within 24 hours</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: Mail,
                title: "Email Us",
                description: "Send us a detailed message",
                contact: "info@nourendowment.org",
                color: "from-emerald-500 to-emerald-600",
                action: "mailto:info@nourendowment.org"
              },
              {
                icon: Phone,
                title: "Call Us",
                description: "Speak with our team directly",
                contact: "+1 (555) 123-4567",
                color: "from-teal-500 to-teal-600",
                action: "tel:+15551234567"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                description: "Our main office location",
                contact: "123 Main Street, City, State",
                color: "from-blue-500 to-blue-600",
                action: "#"
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/80 backdrop-blur-lg border border-slate-200/60 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-slate-800">{item.title}</CardTitle>
                    <CardDescription className="text-slate-600">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <a 
                      href={item.action}
                      className="text-lg font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      {item.contact}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Let's Start a{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Conversation
                  </span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Whether you have questions about our programs, want to explore partnership opportunities, or are ready to apply for funding, we're here to help.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-slate-700">General inquiries and questions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <span className="text-slate-700">Partnership opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700">Funding applications</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-3xl transform rotate-3"></div>
                <img
                  src="/contact.jpg"
                  alt="Contact Us"
                  className="relative rounded-3xl shadow-2xl max-w-full transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-lg border border-slate-200/60 rounded-3xl shadow-2xl">
                <CardHeader className="px-0 pt-0 pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-800">Send us a Message</CardTitle>
                      <CardDescription className="text-slate-600">We'll get back to you within 24 hours</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                        <Input 
                          placeholder="John" 
                          className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl h-12" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                        <Input 
                          placeholder="Doe" 
                          className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl h-12" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                      <Input 
                        type="email" 
                        placeholder="john.doe@example.com" 
                        className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl h-12" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                      <Input 
                        placeholder="How can we help you?" 
                        className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl h-12" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell us about your inquiry, partnership interest, or funding needs..." 
                        rows={6} 
                        className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl resize-none" 
                      />
                    </div>
                    <motion.div {...scaleOnHover}>
                      <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        Send Message
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
