"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  GraduationCap,
  Users,
  BookOpen,
  Building,
  Award,
  ArrowRight,
  Heart,
  Globe,
  Target,
  Lightbulb,
} from "lucide-react"
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

export default function ProjectsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="inline-block px-4 py-2 bg-[#084120] text-white rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Nour Endowment 2025
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold leading-tight mb-8 text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our Vision
            </motion.h1>

            <motion.p
              className="text-2xl text-slate-600 leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Empowering Futures through Education and Enduring Investment
            </motion.p>
          </div>
        </div>
      </section>

      {/* What We Fund Section */}
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
              What We Fund
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              At Nour Endowment, we are dedicated to investing in individuals, organizations, and initiatives that
              expand access to education, foster professional growth, and strengthen pathways to opportunity. Our goal
              is to create lasting, transformative impact where systemic barriers have limited opportunities the most.
              Explore below to learn more about the types of transformative projects we aspire to support.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/5.jpg"
                alt="What We Fund"
                className="rounded-2xl shadow-xl w-full h-full"
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
                <h3 className="text-3xl font-bold mb-6 text-black">Our Vision for Investments</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We are inspired by initiatives that expand access to education, nurture professional growth, and
                  create pathways to opportunity for individuals facing systemic barriers. As we build a sustainable
                  endowment, we envision supporting efforts that:
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Areas */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: GraduationCap,
                title: "Education",
                description:
                  "Promote international educational exchange, scholarships, and fellowships that empower students, scholars, and professionals from underrepresented backgrounds.",
              },
              {
                icon: Award,
                title: "Scholarships",
                description:
                  "Provide accessible, tuition-free, or low-cost higher education opportunities for refugees, displaced populations, and low-income communities around the world.",
              },
              {
                icon: BookOpen,
                title: "Learning Stability",
                description:
                  "Ensure continuity of education for children and youth affected by crisis, displacement, and systemic instability through infrastructure support, vocational training, and learning resources.",
              },
              {
                icon: Users,
                title: "Community Empowerment",
                description:
                  "Strengthen educational infrastructure, enhance teacher development, and deliver job-skills training through community-driven programs that foster long-term resilience and economic opportunity.",
              },
              {
                icon: Building,
                title: "Higher Education Access",
                description:
                  "Support students pursuing higher education through investments in scholarships, fellowships, and opportunities that foster academic and professional growth for individuals from diverse and underserved backgrounds.",
              },
              {
                icon: Globe,
                title: "Global Impact",
                description:
                  "Create worldwide networks of opportunity that connect communities, share resources, and build sustainable pathways to educational and professional success.",
              },
            ].map((area, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-[#084120]/20 bg-white">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-[#084120] flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <area.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-black">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">{area.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-[#084120]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h3 className="text-4xl font-bold mb-6">Transform Lives Through Education</h3>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Your support fuels the potential of individuals in communities impacted by systemic barriers and
              inequality. Donate now to help build a brighter future through education and opportunity.
            </p>
            <Link href="/donate">
              <motion.div {...scaleOnHover}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 bg-white text-[#084120] hover:bg-slate-100"
                >
                  Support Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Get Funded Section */}
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
              Get Funded
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              If you are an individual or organization pursuing opportunities that align with our mission, we'd love to
              connect. We support initiatives and individuals that expand education, opportunity, and infrastructure for
              communities facing systemic barriers.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Educational Initiatives",
                    content: "Programs that expand access to quality education and learning opportunities.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Innovation Projects",
                    content: "Creative solutions that address systemic barriers to education and opportunity.",
                  },
                  {
                    icon: Heart,
                    title: "Community Impact",
                    content: "Initiatives that create lasting positive change in underserved communities.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-[#084120] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-bold">Apply for Funding</CardTitle>
                  <CardDescription>Tell us about your initiative and how it aligns with our mission.</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                      <Input placeholder="Your full name" className="border-slate-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" className="border-slate-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                      <Textarea
                        placeholder="Describe your project, its goals, and how it aligns with our mission..."
                        rows={6}
                        className="border-slate-200"
                      />
                    </div>
                    <motion.div {...scaleOnHover}>
                      <Button className="w-full bg-[#084120] hover:bg-[#084120]/90 text-white text-lg py-6">
                        Submit Application
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-slate-600 mb-4">More Questions?</p>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-[#084120] text-[#084120] hover:bg-[#084120]/10 bg-transparent"
              >
                Contact Us Here
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
