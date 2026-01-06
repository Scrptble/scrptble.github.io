import React from "react";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { InView } from "@/components/motion-primitives/in-view";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, Clock, AlertCircle } from "lucide-react";
import FooterSection from "@/components/footer";

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

const sections = [
  {
    title: "Acceptance of Terms",
    icon: Shield,
    content: "By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access or use our services."
  },
  {
    title: "Use License",
    icon: FileText,
    content: "Permission is granted to temporarily download one copy of our materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
  },
  {
    title: "Service Availability",
    icon: Clock,
    content: "We strive to maintain 99.9% uptime for our services. However, we do not guarantee uninterrupted access and may perform maintenance that temporarily affects service availability."
  },
  {
    title: "Limitations",
    icon: AlertCircle,
    content: "In no event shall Scrptble or its suppliers be liable for any damages arising out of the use or inability to use our services, even if we have been notified orally or in writing of the possibility of such damage."
  }
];

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-foreground/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-foreground/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-4xl px-6">
          <InView>
            <div className="text-center mb-16">
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
                <Badge className="mb-6 px-4 py-2">
                  <FileText className="w-4 h-4 mr-2" />
                  Legal Information
                </Badge>
                
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="text-balance text-4xl md:text-6xl font-bold mb-6"
                >
                  Terms and Conditions
                </TextEffect>
                
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.4}
                  as="p"
                  className="text-lg text-muted-foreground max-w-2xl mx-auto"
                >
                  {`Please read these terms and conditions carefully before using our services. Last updated: ${new Date().toLocaleDateString()}`}
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
              className="grid gap-8 mb-16"
            >
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <Card key={index} className="group relative overflow-hidden border-2 border-dashed border-foreground/20 hover:border-foreground/40 transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-3 group-hover:text-foreground transition-colors">
                            {section.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </AnimatedGroup>
          </InView>

          <InView>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.5,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="space-y-8"
            >
              <Card className="border-2 border-dashed border-foreground/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-4">Additional Terms</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Modifications:</strong> We reserve the right to revise these terms at any time without notice. 
                      By using our services, you are agreeing to be bound by the current version of these terms.
                    </p>
                    <p>
                      <strong>Governing Law:</strong> These terms and conditions are governed by and construed in accordance 
                      with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts.
                    </p>
                    <p>
                      <strong>Contact Information:</strong> If you have any questions about these Terms and Conditions, 
                      please contact us through our official channels.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedGroup>
          </InView>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}