'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: "Custom Software Development",
    description: "We build tailor-made software solutions that perfectly fit your business needs. No cookie-cutter solutions here - just pure, custom awesomeness.",
    features: [
      "Scalable architecture",
      "Modern tech stack",
      "Clean, maintainable code",
      "Regular updates & maintenance"
    ],
    icon: "💻"
  },
  {
    title: "Web & Mobile Apps",
    description: "From sleek websites to powerful mobile apps, we create digital experiences that users love. Think beautiful design meets powerful functionality.",
    features: [
      "Responsive web design",
      "iOS & Android apps",
      "Progressive Web Apps",
      "Cross-platform solutions"
    ],
    icon: "📱"
  },
  {
    title: "Product Design & UI/UX",
    description: "We don't just make things look pretty - we create intuitive, user-friendly experiences that people actually want to use.",
    features: [
      "User research",
      "Wireframing & prototyping",
      "Visual design",
      "Usability testing"
    ],
    icon: "🎨"
  },
  {
    title: "CTO as a Service",
    description: "Need tech leadership but not ready for a full-time CTO? We've got you covered with our flexible CTO-as-a-Service offering.",
    features: [
      "Tech strategy",
      "Team building",
      "Architecture planning",
      "Technical consulting"
    ],
    icon: "👨‍💻"
  }
];

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not your average tech company. We build solutions that actually make sense and deliver real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our process is simple, transparent, and focused on delivering results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into your needs and goals to understand exactly what you want to achieve."
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a detailed roadmap and timeline for your project, keeping you in the loop every step of the way."
              },
              {
                step: "03",
                title: "Development",
                description: "Our team builds your solution with clean code and best practices, ensuring scalability and maintainability."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We launch your project and provide ongoing support to ensure everything runs smoothly."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Something Awesome?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's turn your ideas into reality. No complicated process, just straight-up results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => window.location.href = '/contact'}
            >
              Let's Talk
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage; 