"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

const apps = [
  {
    name: "WhatFlow",
    description: "Advanced workflow automation for Shopify stores. Streamline your operations with intelligent triggers and actions.",
    category: "Automation",
    rating: 4.5,
    installs: "10,000+",
    features: ["Workflow Automation", "Custom Triggers", "Advanced Analytics", "Multi-store Support"],
    link: "https://apps.shopify.com/whatflow?surface_intra_position=1&surface_type=partners&surface_version=simplified",
    icon: "https://cdn.shopify.com/app-store/listing_images/ce883cc914b4f4a4ff3a95f7/icon/CIi2pbSvqJADEAE=.png"
  },
  {
    name: "CheckoutFlow",
    description: "Optimize your checkout process and reduce cart abandonment with advanced checkout customization tools.",
    category: "Checkout",
    rating: 5.0,
    installs: "2,500+",
    features: ["Checkout Optimization", "Cart Recovery", "Custom Fields", "Analytics Dashboard"],
    link: "https://apps.shopify.com/checkoutflow?surface_intra_position=2&surface_type=partners&surface_version=simplified",
    icon: "https://cdn.shopify.com/app-store/listing_images/21da7738bf7cf12043d2dc23/icon/CMuhzJGqupADEAE=.png"
  }
];

export default function ShopifyAppsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <InView>
          <div className="text-center mb-16">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
            >
              Our Best Shopify Apps
            </TextEffect>
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.3}
              as="p"
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Discover our flagship Shopify applications that help thousands of merchants 
              streamline their operations and boost their sales.
            </TextEffect>
          </div>
        </InView>

        <InView>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.2,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="grid md:grid-cols-2 gap-8"
          >
            {apps.map((app, index) => (
              <div key={index} className="group">
                <Card className="h-full border hover:shadow-xl hover:shadow-foreground/5 transition-all duration-500 group-hover:scale-[1.02] bg-gradient-to-br from-background to-muted/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 rounded-2xl border flex items-center justify-center overflow-hidden bg-muted">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            className="w-6 h-6 fill-current"
                          >
                            <path d="M484.5 168.1C484.3 167 483.8 166 483 165.3C482.2 164.6 481.2 164.1 480.1 164.1C478.1 164.1 442.9 163.3 442.9 163.3C442.9 163.3 421.3 142.5 413.3 134.5L413.3 567.2L539 536C539 536 485 170.5 484.6 168.1zM384.9 134.5C383 128.4 380.6 122.6 377.7 116.9C367.3 96.9 351.7 86 333.3 86C332 86 330.6 86.1 329.3 86.4C328.9 85.6 328.1 85.2 327.7 84.4C319.7 75.6 309.3 71.6 296.9 72C272.9 72.8 248.9 90 229.7 120.8C216.1 142.4 205.7 169.6 202.9 190.9C175.3 199.3 156.1 205.3 155.7 205.7C141.7 210.1 141.3 210.5 139.7 223.7C138.5 233.7 101.7 515.5 101.7 515.5L404.3 568L404.3 129.7C402.8 129.8 401.4 129.9 399.9 130.1C399.9 130.1 394.3 131.7 385.1 134.5zM329.6 151.7C313.6 156.5 296 162.1 278.8 167.3C283.6 148.5 293.2 129.7 304.4 117.3C308.8 112.9 314.8 107.7 321.6 104.5C328.4 118.9 330 138.5 329.6 151.7zM296.8 88.4C301.8 88.2 306.8 89.5 311.2 92C304.8 95.2 298.4 100.4 292.4 106.4C277.2 122.8 265.6 148.4 260.8 172.9C246.4 177.3 232 181.7 218.8 185.7C227.6 147.3 260 89.3 296.8 88.5zM250.4 308.6C252 334.2 319.6 339.8 323.6 400.3C326.4 447.9 298.4 480.4 258 482.8C209.2 486 182.4 457.2 182.4 457.2L192.8 413.2C192.8 413.2 219.6 433.6 241.2 432C255.2 431.2 260.4 419.6 260 411.6C258 378 202.8 380 199.2 324.7C196 278.3 226.4 231.4 293.7 227C319.7 225.4 332.9 231.8 332.9 231.8L317.7 289.4C317.7 289.4 300.5 281.4 280.1 283C250.5 285 250.1 303.8 250.5 308.6zM345.6 146.9C345.6 134.9 344 117.7 338.4 103.3C356.8 106.9 365.6 127.3 369.6 139.7C362.4 141.7 354.4 144.1 345.6 146.9z" />
                          </svg>
                        </div>
                      </div>

                    </div>
                    
                    <CardTitle className="text-2xl font-semibold">
                      {app.name}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {app.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-foreground">{app.rating}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {app.category}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {app.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link 
                        href={app.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <span>View on Shopify App Store</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </AnimatedGroup>
        </InView>

        <InView>
          <div className="text-center mt-16">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.2}
              as="p"
              className="text-lg text-muted-foreground mb-8"
            >
              Ready to build your own Shopify app? Let&apos;s discuss your project.
            </TextEffect>
            <Button asChild size="lg">
              <Link href="#contact">
                Start Your Project
              </Link>
            </Button>
          </div>
        </InView>
      </div>
    </section>
  );
}