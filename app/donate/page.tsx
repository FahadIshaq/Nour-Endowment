"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle, Heart, TrendingUp, ArrowRight } from "lucide-react"

// Declare custom element for GiveButter widget
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'givebutter-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id: string;
      };
    }
  }
}

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

export default function DonatePage() {
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
              Donate
            </motion.h1>

            <motion.p
              className="text-xl text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Make your mark - contribute today and become a Founding Member shaping the future.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Information Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {[
                {
                  icon: Shield,
                  title: "How Gifts are Managed?",
                  content:
                    "All donations are professionally invested by a certified outsourced Chief Investment Officer (OCIO). This ensures long-term growth, transparency, and stewardship of every dollar.",
                },
                {
                  icon: CheckCircle,
                  title: "Is the Donation Zakat Eligible?",
                  content:
                    "This endowment is structured to be Zakat-eligible in accordance with Islamic principles. Please consult your scholar or reach out to us for details.",
                },
                {
                  icon: Heart,
                  title: "Is this Sadaqah Jariyah?",
                  content:
                    "This endowment qualifies as Sadaqah Jariyah. A continuous charity that benefits others for generations. Halal Certified investments.",
                },
                {
                  icon: TrendingUp,
                  title: "Use of Funds?",
                  content:
                    "Only the investment returns are used to fund initiatives. Your principal gift remains untouched allowing it to grow and create an impact forever.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-sm"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-[#5B6A3F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Giving Tiers */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-bold">Giving Tiers</CardTitle>
                  <CardDescription>Make your donation monthly or annual to help grow the endowment.</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-6">
                    {[
                      { tier: "Founding Member", amount: "$1,000/year" },
                      { tier: "Impact Partner", amount: "$10,000+" },
                      { tier: "Legacy Builder", amount: "$50,000+" },
                    ].map((tier, index) => (
                      <motion.div
                        key={index}
                        className="p-6 rounded-2xl bg-[#5B6A3F] text-white cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-lg">{tier.tier}</h4>
                            <p className="text-white/90">{tier.amount}</p>
                          </div>
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-slate-50 rounded-2xl">
                    <h4 className="font-bold text-slate-800 mb-4">Tax and Transparency</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      We'll share quarterly updates on how the fund is growing and what your support is making possible.
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      All donations to Nour Endowment are tax-deductible and processed through our fiscal sponsor, Wasla
                      Connect Tax ID: 99-3778982. Your bank statement will show "Nour Endowment," and 100% of your gift
                      supports our work. We're currently awaiting our own 501(c)(3) status.
                    </p>
                  </div>

                  <motion.div className="mt-8">
                    <div className="w-full">
                      <givebutter-widget id="jw83eL"></givebutter-widget>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {[
              {
                question: "How is my donation used and is the principal ever touched?",
                answer:
                  "Your contribution is never spent. It's invested, and only the returns are used to fund initiatives. This ensures your gift creates a permanent, growing source of support every year.",
              },
              {
                question: "Who manages the endowment and ensures transparency?",
                answer:
                  "The endowment is managed by a team committed to ethical (halal) investing, financial transparency, and long-term sustainability. We provide regular updates and clear reporting so you know exactly how funds are being used and invested.",
              },
              {
                question: "What kind of impact will my contribution have?",
                answer:
                  "Your gift helps fund projects that support education, infrastructure, and opportunity for marginalized communities. These are long-term investments that build stability and dignity creating a ripple effect across generations.",
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-left">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Student Application Section */}
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
              Apply for Funding
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Are you a student seeking educational support? Apply for funding through our endowment.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="max-w-2xl mx-auto p-8 bg-white border border-[#5B6A3F]/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800 mb-4">Student Application Form</CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  Complete the application form to be considered for educational funding from the Nour Endowment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div {...scaleOnHover}>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeXuz3wc6c95iw2BDDR4_BZVMr85FyTtr5EdEBsWAUwdlHRww/viewform?usp=sharing&ouid=109140520801171154952"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-[#5B6A3F] hover:bg-[#5B6A3F]/90 text-white text-lg py-6">
                      Apply for Funding
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </a>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
