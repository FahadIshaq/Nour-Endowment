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
  CheckCircle,
  FileText,
  Mail,
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
      {/* Cream Hero Section with Application Button and Intro */}
      <section className="pb-16 px-4 bg-[#f9f7f1]">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold leading-tight mb-8 text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Apply for a Grant
            </motion.h1>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXuz3wc6c95iw2BDDR4_BZVMr85FyTtr5EdEBsWAUwdlHRww/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              <button className="mb-8 bg-[#116b36] hover:bg-[#0a5a2c] text-white font-semibold py-3 px-8 rounded-xl text-lg shadow transition-all duration-300">
                Grant Application
              </button>
            </a>
            <motion.p
              className="text-xl text-slate-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              At Nour Endowment we are dedicated to increasing access to education, empowering our communities, and unlocking pathways to opportunity to create a sustainable cycle of self-reliance. If you are a student from a marginalized community who shares our vision and is aligned with our mission, we encourage you to apply for a grant.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Nour Scholars Program Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Nour Scholars Program
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Empowering the Next Generation of Changemakers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="bg-white/90 border-0 shadow-xl border-l-4 border-[#116b36]">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  The Nour Scholars Program invests in driven students committed to education, leadership, and social impact. Through a combination of financial support and personalized mentorship, we aim to cultivate a community of scholars who will create meaningful change in their communities and beyond.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-4">What We Offer</h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      Nour Scholars receive financial assistance to help cover tuition, fees, and other educational expenses. Awards are tailored to each scholar's needs, enabling them to focus on academic and personal growth.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-6 bg-[#f9f7f1] border border-[#116b36]/20">
                      <div className="flex items-start gap-3">
                        <Users className="w-8 h-8 text-[#116b36] mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-xl font-bold text-black mb-3">1-on-1 Mentorship</h4>
                          <p className="text-slate-700 leading-relaxed">
                            Every Nour Scholar is paired with a dedicated mentor from our global network of professionals, academics, and community leaders. Mentorship includes career coaching, academic support, and guidance on personal and professional development.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-[#f9f7f1] border border-[#116b36]/20">
                      <div className="flex items-start gap-3">
                        <Award className="w-8 h-8 text-[#116b36] mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-xl font-bold text-black mb-3">Leadership & Impact</h4>
                          <p className="text-slate-700 leading-relaxed">
                            Scholars join a vibrant peer network committed to service, innovation, and justice. Scholars join a diverse, purpose-driven cohort of individuals from different backgrounds and lived experiences. Together, they engage in hands-on projects, immersive learning experiences, and deep collaboration to address real-world challenges and drive meaningful change.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-12 bg-[#f9f7f1]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center mb-6 gap-3">
            <Award className="w-8 h-8 text-[#116b36]" />
            <h2 className="text-4xl font-bold text-black">Eligibility Criteria</h2>
          </div>
          <Card className="bg-white/90 border-0 shadow-xl border-l-4 border-[#116b36]">
            <CardContent>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Eligibility for a Nour Scholarship requires applicants to meet the following criteria:
              </p>
              <div className="flex flex-col gap-6 mb-6">
                {[
                  "Eligible applicants must be high school students applying to or accepted by a U.S. university, or current undergraduate students actively enrolled at a U.S. university.",
                  "Applicants must either reside in the U.S. or hold valid documentation authorizing them to live and study in the U.S. for the duration of their academic program.",
                  "Applicants must demonstrate a commitment to the values and mission of the Nour Endowment.",
                  "Preference may be given to applicants who demonstrate financial need."
                ].map((item, idx) => (
                  <Card key={idx} className="flex items-start gap-3 p-5 bg-white border border-[#116b36]/20 rounded-2xl shadow-md h-full w-full">
                    <CheckCircle className="w-6 h-6 text-[#116b36] mt-1 flex-shrink-0" />
                    <span className="text-lg text-slate-700 leading-relaxed">{item}</span>
                  </Card>
                ))}
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mt-4">
                <span className="font-semibold text-[#116b36]">Note:</span> While this is not an official requirement, preference will be given to students who demonstrate financial need, as determined by a standardized financial aid assessment or documentation of family circumstances.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Selection Process Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center mb-6 gap-3">
            <CheckCircle className="w-8 h-8 text-[#116b36]" />
            <h2 className="text-4xl font-bold text-black">Selection Process</h2>
          </div>
          <Card className="bg-white/90 border-0 shadow-xl border-l-4 border-[#116b36]">
            <CardContent>
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Applications are reviewed by a <span className="font-semibold text-[#116b36]">Selection Committee</span>, which evaluates each application based on the published criteria including alignment with our mission, potential impact, and financial need.
                </p>
                <div className="flex flex-col gap-6">
                  {/* Step 1 */}
                  <Card className="flex items-start gap-3 p-5 bg-white border border-[#116b36]/20 rounded-2xl shadow-md h-full">
                    <FileText className="w-6 h-6 text-[#116b36] mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#116b36]">Application Materials:</span>
                      <p className="text-lg text-slate-700 leading-relaxed mt-1">
                        Along with the application form, applicants are required to submit their academic transcripts, recommendation letters from three references, standardized testing scores (if applicable), and university acceptance letter(s) (if applicable).
                      </p>
                    </div>
                  </Card>
                  {/* Step 2 */}
                  <Card className="flex items-start gap-3 p-5 bg-white border border-[#116b36]/20 rounded-2xl shadow-md h-full">
                    <Users className="w-6 h-6 text-[#116b36] mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#116b36]">Committee Review:</span>
                      <p className="text-lg text-slate-700 leading-relaxed mt-1">
                        The Selection Committee will make recommendations to the Board of Directors, which makes final funding decisions by majority vote.
                      </p>
                    </div>
                  </Card>
                  {/* Step 3 */}
                  <Card className="flex items-start gap-3 p-5 bg-white border border-[#116b36]/20 rounded-2xl shadow-md h-full">
                    <Mail className="w-6 h-6 text-[#116b36] mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#116b36]">Notification:</span>
                      <p className="text-lg text-slate-700 leading-relaxed mt-1">
                        All applicants will be notified of final decisions via email.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Investment Areas */}
      <section className="py-20 bg-[#f9f7f1]">
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
              
            ].map((area, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-[#116b36]/20 bg-white">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-[#116b36] flex items-center justify-center mb-4"
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
      <section className="py-20 bg-black">
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
                  className="text-lg px-8 py-6 bg-white text-[#116b36] hover:bg-slate-100"
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
      {/* <section className="py-20 bg-white">
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
                    className="flex items-start space-x-4 p-6 bg-[#f9f7f1] rounded-2xl border border-[#116b36]/20"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-[#116b36] rounded-xl flex items-center justify-center flex-shrink-0">
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
                  <div className="space-y-6">
                    <div className="text-center py-8">
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        We're excited to learn about your project and how it aligns with our mission to expand educational opportunities and create lasting impact in communities facing systemic barriers.
                      </p>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeXuz3wc6c95iw2BDDR4_BZVMr85FyTtr5EdEBsWAUwdlHRww/viewform?usp=sharing&ouid=109140520801171154952"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div {...scaleOnHover}>
                          <Button className="w-full bg-[#116b36] hover:bg-[#116b36]/90 text-white text-lg py-6">
                            Apply for Funding
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </motion.div>
                      </a>
                    </div>
                  </div>
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
                className="border-[#116b36] text-[#116b36] hover:bg-[#116b36]/10 bg-transparent"
              >
                Contact Us Here
              </Button>
            </Link>
          </motion.div>
        </div>
      </section> */}
    </div>
  )
}
