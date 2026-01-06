import React from "react";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { InView } from "@/components/motion-primitives/in-view";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Eye, Database, UserCheck, Cookie, Shield } from "lucide-react";
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
    title: "Information We Collect",
    icon: Database,
    content: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include your name, email address, and payment information."
  },
  {
    title: "How We Use Your Information",
    icon: Eye,
    content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send communications, and comply with legal obligations."
  },
  {
    title: "Data Security",
    icon: Lock,
    content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
  },
  {
    title: "Your Rights",
    icon: UserCheck,
    content: "You have the right to access, update, or delete your personal information. You may also opt out of certain communications and request data portability where applicable."
  },
  {
    title: "Cookies & Tracking",
    icon: Cookie,
    content: "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver personalized content. You can control cookie preferences through your browser settings."
  },
  {
    title: "Data Protection",
    icon: Shield,
    content: "We are committed to protecting your privacy and comply with applicable data protection laws including GDPR and CCPA. We never sell your personal information to third parties."
  }
];

export default function PrivacyPage() {
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
                  <Lock className="w-4 h-4 mr-2" />
                  Privacy & Security
                </Badge>
                
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="text-balance text-4xl md:text-6xl font-bold mb-6"
                >
                  Privacy Policy
                </TextEffect>
                
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.4}
                  as="p"
                  className="text-lg text-muted-foreground max-w-2xl mx-auto"
                >
                  {`Your privacy is important to us. This policy explains how we collect, use, and protect your information. Last updated: ${new Date().toLocaleDateString()}`}
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
                  <h2 className="text-2xl font-semibold mb-4">Contact & Updates</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Policy Changes:</strong> We may update this privacy policy from time to time. 
                      We will notify you of any changes by posting the new policy on this page and updating the &ldquo;last updated&rdquo; date.
                    </p>
                    <p>
                      <strong>Questions:</strong> If you have any questions about this privacy policy or our data practices, 
                      please contact us through our official support channels.
                    </p>
                    <p>
                      <strong>Data Requests:</strong> To exercise your privacy rights or request information about your data, 
                      please reach out to our privacy team with your specific request.
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