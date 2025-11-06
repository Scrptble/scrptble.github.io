"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield, Award, CheckCircle, Star, ArrowRight } from "lucide-react";
import gadgetImage from "@/assets/gadget.png";
import gadgetPartnerImage from "@/assets/gadget partner.png";
import gadgetExpertsImage from "@/assets/gadget expert.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { InView } from "@/components/motion-primitives/in-view";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const certifications = [
  {
    title: "Official Gadget Partners",
    description: "Certified partners in the Gadget ecosystem, delivering cutting-edge solutions with official recognition and support.",
    icon: Shield,
    badge: "Official Partner",
    features: ["Certified Expertise", "Priority Support", "Advanced Tools", "Exclusive Access"]
  },
  {
    title: "ABD Certified Experts",
    description: "Advanced Business Development certified professionals with proven expertise in scaling digital solutions.",
    icon: Award,
    badge: "ABD Certified",
    features: ["Expert Validation", "Proven Track Record", "Industry Standards", "Quality Assurance"]
  }
];

export default function PartnersSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-foreground/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-foreground/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <InView>
          <div className="text-center mb-20">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-muted/50 mb-6">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Certified Excellence</span>
              </div>
              
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h2"
                className="text-balance text-5xl md:text-7xl lg:text-6xl xl:text-[5.25rem] font-bold mb-6"
              >
                Official Gadget Partners & ABD Certified Experts
              </TextEffect>
              
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.4}
                as="p"
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
              >
                Recognized for our exceptional expertise and commitment to delivering 
                world-class solutions. Our certifications validate our technical excellence 
                and dedication to innovation.
              </TextEffect>
            </AnimatedGroup>
          </div>
        </InView>

        <InView>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.3,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="group relative">
                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 z-20">
                    <div className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {cert.badge}
                    </div>
                  </div>

                  {/* Main Container */}
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-background via-muted/20 to-background border-2 border-dashed border-foreground/20 group-hover:border-foreground/40 transition-all duration-500 overflow-hidden">
                    
                    {/* Hexagonal Icon Container */}
                    <div className="relative mb-8">
                      <div className="w-20 h-20 mx-auto relative">
                        {/* Hexagon Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-foreground/5 transform rotate-45 rounded-xl group-hover:rotate-[50deg] transition-transform duration-700"></div>
                        <div className="absolute inset-2 bg-background rounded-lg transform rotate-45 group-hover:rotate-[40deg] transition-transform duration-700"></div>
                        
                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <IconComponent className="w-8 h-8 z-10 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      {/* Floating Particles */}
                      <div className="absolute -top-2 -left-2 w-2 h-2 bg-foreground/30 rounded-full group-hover:animate-bounce"></div>
                      <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-foreground/20 rounded-full group-hover:animate-pulse"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-foreground transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {cert.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="group/feature">
                          <div className="p-3 rounded-xl bg-muted/50 border border-foreground/10 group-hover/feature:border-foreground/30 transition-all duration-300 text-center">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto mb-2 group-hover/feature:scale-125 transition-transform"></div>
                            <span className="text-xs font-medium">{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Animated Border Effect */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    
                    {/* Corner Decorations */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-foreground/20 rounded-tl-lg group-hover:border-foreground/40 transition-colors"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-foreground/20 rounded-br-lg group-hover:border-foreground/40 transition-colors"></div>
                  </div>
                </div>
              );
            })}
          </AnimatedGroup>
        </InView>

        {/* Gadget Images Section */}
        <InView>
          <div className="text-center mb-12">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h3"
              className="text-2xl md:text-3xl font-semibold mb-4"
            >
              Our Certifications
            </TextEffect>
          </div>
          
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.4,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="relative mb-8"
          >
            {/* Floating Background Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { image: gadgetImage, alt: "Gadget", delay: 0 },
                { image: gadgetPartnerImage, alt: "Gadget Partner", delay: 200 },
                { image: gadgetExpertsImage, alt: "Gadget Experts", delay: 400 }
              ].map((item, index) => (
                <div key={index} className="group relative" style={{ animationDelay: `${item.delay}ms` }}>
                  {/* Floating Ring */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-transparent via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:rotate-180"></div>
                  
                  {/* Main Card */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-foreground/10 p-8 group-hover:border-foreground/30 transition-all duration-700 shadow-lg group-hover:shadow-2xl group-hover:shadow-foreground/10 transform group-hover:-translate-y-2">
                    
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Sparkle Effects */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700 delay-200"></div>
                    
                    {/* Image Container */}
                    <div className="relative z-10 flex items-center justify-center h-36 group-hover:scale-110 transition-all duration-700 ease-out">
                      <div className="relative">
                        {/* Image Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        <Image
                          src={item.image}
                          alt={item.alt}
                          className="relative max-h-full w-auto object-contain filter group-hover:brightness-110 group-hover:contrast-110 transition-all duration-700 drop-shadow-lg"
                        />
                      </div>
                    </div>
                    
                    {/* Floating Particles */}
                    <div className="absolute top-8 left-8 w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-100"></div>
                    <div className="absolute bottom-8 right-8 w-1 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-300"></div>
                    
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"></div>
                  </div>
                  
                  {/* Bottom Glow */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-transparent via-foreground/10 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              ))}
            </div>
          </AnimatedGroup>
        </InView>

        {/* Stats Section */}
        <div className="relative mb-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-30">
              <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-foreground/20 to-transparent"></div>
              <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-foreground/20 to-transparent"></div>
              <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-foreground/20 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "100%", label: "Certified Team", color: "from-green-400 to-emerald-500" },
                { number: "50+", label: "Projects Delivered", color: "from-blue-400 to-cyan-500" },
                { number: "99%", label: "Client Satisfaction", color: "from-purple-400 to-pink-500" },
                { number: "24/7", label: "Expert Support", color: "from-orange-400 to-red-500" }
              ].map((stat, index) => (
                <div key={index} className="text-center group relative">
                  {/* Floating Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-700 scale-75 group-hover:scale-100`}></div>
                  
                  {/* Main Content */}
                  <div className="relative p-6 rounded-2xl border border-transparent group-hover:border-foreground/20 transition-all duration-500 group-hover:bg-muted/20">
                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:rotate-180"></div>
                    
                    {/* Number */}
                    <div className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-125 transition-all duration-500 ease-out`}>
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                      {stat.label}
                    </div>
                    
                    {/* Sparkle Effect */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-200"></div>
                  </div>
                  
                  {/* Bottom Reflection */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-4 bg-gradient-to-r from-transparent via-foreground/5 to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="p"
                className="text-lg text-muted-foreground mb-8"
              >
                Ready to work with certified experts? Let&apos;s build something amazing together.
              </TextEffect>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link href="#contact" className="flex items-center gap-2">
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <Link href="#portfolio">
                    View Our Work
                  </Link>
                </Button>
              </div>
        </div>
      </div>
    </section>
  );
}