import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, TrendingUp, DollarSign } from "lucide-react";

interface InvestmentData {
  year: number;
  totalValue: number;
  returns: number;
  scholarshipAmount: number;
  remainingReturns: number;
  principal: number;
}

export default function InvestmentCalculator() {
  const [donationAmount, setDonationAmount] = useState([1000]);
  const scholarshipPercentage = 50; // 50% goes to scholarships
  const annualGrowthRate = 0.10; // 10% annual growth

  const investmentData: InvestmentData[] = useMemo(() => {
    const data: InvestmentData[] = [];
    const initialAmount = donationAmount[0];
    
    for (let year = 5; year <= 50; year += 5) {
      const totalValue = initialAmount * Math.pow(1 + annualGrowthRate, year);
      const returns = totalValue - initialAmount;
      const scholarshipAmount = returns * (scholarshipPercentage / 100);
      
      data.push({
        year,
        totalValue: Math.round(totalValue),
        returns: Math.round(returns),
        scholarshipAmount: Math.round(scholarshipAmount),
        remainingReturns: Math.round(returns - scholarshipAmount),
        principal: initialAmount
      });
    }
    
    return data;
  }, [donationAmount]);

  const finalYear = investmentData[investmentData.length - 1];
  // Total scholarships should be the cumulative amount from the final year, not sum of all years
  const totalScholarships = finalYear?.scholarshipAmount || 0;

  const chartConfig = {
    principal: {
      label: "Principal",
      color: "black", // Dark blue-gray
    },
    returns: {
      label: "Returns",
      color: "#116b36", // Modern green
    },
    scholarshipAmount: {
      label: "Scholarship Fund",
      color: "#116b36", // Vibrant amber/gold
    },
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-2 sm:p-4 border rounded-lg shadow-md max-w-xs">
          <p className="font-semibold mb-2 text-sm sm:text-base">{`Year ${label}`}</p>
          <div className="space-y-1">
            <p className="text-xs sm:text-sm">
              <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded mr-1 sm:mr-2" style={{ backgroundColor: 'black' }}></span>
              Principal: {payload[0].payload.principal.toLocaleString()}
            </p>
            <p className="text-xs sm:text-sm">
              <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded mr-1 sm:mr-2" style={{ backgroundColor: '#116b36' }}></span>
              Returns: {payload[0].payload.returns.toLocaleString()}
            </p>
            <p className="text-xs sm:text-sm">
              <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded mr-1 sm:mr-2" style={{ backgroundColor: '#116b36' }}></span>
              Total Used for Education: {payload[0].payload.scholarshipAmount.toLocaleString()}
            </p>
            <p className="text-xs sm:text-sm font-semibold border-t pt-1 mt-2">
              Total Value: {payload[0].payload.totalValue.toLocaleString()}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Investment Growth Calculator
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See how your donation grows over 50 years and the impact it creates for Education
          </motion.p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Investment Controls */}
          <motion.div 
            className="xl:col-span-1 order-2 xl:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  {/* <DollarSign className="h-4 w-4 sm:h-5 sm:w-5" /> */}
                  Your Investment
                </CardTitle>
                <CardDescription className="text-sm">
                  Adjust your donation amount to see projected growth
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <label className="text-sm font-medium">Donation Amount</label>
                    <Badge variant="outline" className="text-base sm:text-lg font-bold px-2 py-1">
                      ${donationAmount[0].toLocaleString()}
                    </Badge>
                  </div>
                  <Slider
                    value={donationAmount}
                    onValueChange={setDonationAmount}
                    max={50000}
                    min={100}
                    step={100}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>100</span>
                    <span>50,000</span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Growth Rate</span>
                    <span className="text-sm font-semibold">10% annually</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Time Period</span>
                    <span className="text-sm font-semibold">50 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Scholarship Allocation</span>
                    <span className="text-sm font-semibold">{scholarshipPercentage}% of returns</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Summary */}
            <Card className="mt-4 sm:mt-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                  Education Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#116b36' }}>
                      {totalScholarships.toLocaleString()}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Scholarship Fund Available (Year 50)
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold" style={{ color: '#116b36' }}>
                      {finalYear?.returns.toLocaleString()}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Total Returns Generated
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-black">
                      {finalYear?.totalValue.toLocaleString()}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Final Investment Value
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Chart */}
          <motion.div 
            className="xl:col-span-2 order-1 xl:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
                  50-Year Growth Projection
                </CardTitle>
                <CardDescription className="text-sm">
                  Investment growth with scholarship allocation highlighted (every 5 years)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 sm:h-80 md:h-96">
                  <ChartContainer config={chartConfig} className="w-full h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={investmentData} 
                        margin={{ 
                          top: 20, 
                          right: 10, 
                          left: 10, 
                          bottom: 5 
                        }}
                      >
                        <defs>
                          <pattern id="scholarshipPattern" patternUnits="userSpaceOnUse" width="12" height="12">
                            <rect width="12" height="12" fill="#116b36"/>
                            <path d="M-6,6 l12,-12 M-3,9 l12,-12 M0,12 l12,-12 M3,15 l12,-12 M6,18 l12,-12" stroke="black" strokeWidth="1.5" fill="none"/>
                          </pattern>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="year" 
                          tick={{ fontSize: 10 }}
                          tickFormatter={(value) => `Y${value}`}
                          interval={0}
                        />
                        <YAxis 
                          tick={{ fontSize: 10 }}
                          tickFormatter={(value) => {
                            if (value >= 1000000) {
                              return `${(value / 1000000).toFixed(1)}M`;
                            } else if (value >= 1000) {
                              return `${(value / 1000).toFixed(0)}k`;
                            }
                            return `${value}`;
                          }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        
                        {/* Principal amount (base) */}
                        <Bar 
                          dataKey="principal" 
                          stackId="investment"
                          fill="var(--color-principal)"
                          radius={[0, 0, 4, 4]}
                        />
                        
                        {/* Returns minus scholarship amount (stacked on principal) */}
                        <Bar 
                          dataKey="remainingReturns"
                          stackId="investment"
                          fill="var(--color-returns)"
                        />
                        
                        {/* Scholarship amount (top portion) */}
                        <Bar 
                          dataKey="scholarshipAmount" 
                          stackId="investment"
                          fill="url(#scholarshipPattern)"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                
                {/* Legend */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mt-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded" style={{ backgroundColor: 'black' }}></div>
                    <span>Principal Investment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded" style={{ backgroundColor: '#116b36' }}></div>
                    <span>Investment Returns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded" style={{ 
                      backgroundImage: 'repeating-linear-gradient(45deg, black, black 2px, #116b36 2px, #116b36 6px)',
                      backgroundColor: '#116b36'
                    }}></div>
                    <span className="whitespace-nowrap">Scholarship Fund ({scholarshipPercentage}%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}