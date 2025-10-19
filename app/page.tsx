'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon, CodeBracketIcon, CubeIcon, RocketLaunchIcon, StarIcon, UserGroupIcon, ClockIcon, ShieldCheckIcon, GlobeAltIcon, DevicePhoneMobileIcon, ComputerDesktopIcon, ChartBarIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, SparklesIcon, BuildingStorefrontIcon, PuzzlePieceIcon, CloudIcon, CogIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-[#4a417e] to-[#287471] rounded-xl flex items-center justify-center">
                <CubeIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#4a417e] to-[#287471] bg-clip-text text-transparent">Scrptble</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a href="#about" className="text-gray-700 hover:text-[#4a417e] transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-[#4a417e] transition-colors font-medium">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-[#4a417e] transition-colors font-medium">Projects</a>
              <a href="#reviews" className="text-gray-700 hover:text-[#4a417e] transition-colors font-medium">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-[#4a417e] transition-colors font-medium">Contact</a>
              <button className="bg-gradient-to-r from-[#4a417e] to-[#287471] hover:from-[#3a3366] hover:to-[#1f5f5c] text-white px-6 py-3 rounded-md font-medium transition-all duration-200 shadow-sm hover:shadow-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#4a417e] focus:ring-offset-2">
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Banner - Large & Eye-catching */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-24 pb-16 px-1">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="w-[95%] h-[80vh] rounded-3xl border-4 border-gray-300 shadow-2xl flex items-center justify-center relative z-10 overflow-hidden" style={{ background: 'linear-gradient(to bottom left, #4a417e, #000000, #287471)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold border border-white/30 shadow-lg">
                <SparklesIcon className="w-5 h-5 mr-2 text-[#287471]" />
                #1 Shopify App Development Agency
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Build Shopify Apps
              <span className="bg-gradient-to-r from-[#287471] to-white bg-clip-text text-transparent block">
                That Merchants Love
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              From Remix-powered public apps to Gadget-based enterprise solutions - we build with modern tech stacks.
              Specializing in Shopify CLI, Functions, Extensions, and cutting-edge development frameworks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            >
              <button className="bg-white text-[#4a417e] px-8 py-4 rounded-md text-lg font-medium hover:bg-[#f6f6f7] transition-all duration-200 flex items-center justify-center group shadow-md border border-[#4a417e]/30 focus:outline-none focus:ring-2 focus:ring-[#4a417e] focus:ring-offset-2">
                Start Your Project
                <ArrowRightIcon className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4a417e]">
                View Portfolio
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#287471] mb-2">{stat.number}</div>
                  <div className="text-gray-200 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shopify App Development Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Public apps, custom solutions, and seamless integrations - we build for the entire Shopify ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Public Shopify Apps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Public Shopify Apps</h3>
              {publicShopifyApps.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#4a417e]/10 to-[#287471]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#4a417e]/20 group-hover:to-[#287471]/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-[#4a417e] transition-colors">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Custom Shopify Apps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Custom Shopify Apps</h3>
              {customShopifyApps.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#4a417e]/10 to-[#287471]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#4a417e]/20 group-hover:to-[#287471]/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-[#287471] transition-colors">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Built for Shopify */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Built for Shopify</h3>
              {builtForShopify.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#4a417e]/10 to-[#287471]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#4a417e]/20 group-hover:to-[#287471]/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-[#4a417e] transition-colors">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* App Integrations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">App Integrations</h3>
              {appIntegrations.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#4a417e]/10 to-[#287471]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#4a417e]/20 group-hover:to-[#287471]/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-[#287471] transition-colors">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="pt-4">
                <button className="text-sm text-[#4a417e] hover:text-[#287471] font-medium flex items-center bg-gradient-to-r from-[#4a417e]/5 to-[#287471]/5 hover:from-[#4a417e]/10 hover:to-[#287471]/10 px-3 py-2 rounded-md transition-colors">
                  View All Integrations
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Templates Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Modern Development Stack</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We use the latest Shopify development tools and frameworks to build high-performance, scalable applications
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Shopify CLI & Templates */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#4a417e]/5 to-[#287471]/5 p-8 rounded-2xl border border-[#4a417e]/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4a417e] to-[#287471] rounded-xl flex items-center justify-center mr-4">
                  <CodeBracketIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Shopify CLI & Templates</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Leverage official Shopify CLI tools and app templates for rapid development with best practices built-in.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {shopifyTemplates.map((template, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-[#4a417e]/10">
                    <h4 className="font-semibold text-gray-900 mb-2">{template.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {template.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gradient-to-r from-[#4a417e]/10 to-[#287471]/10 text-[#4a417e] rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gadget Platform */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#4a417e]/5 to-[#287471]/5 p-8 rounded-2xl border border-[#287471]/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4a417e] to-[#287471] rounded-xl flex items-center justify-center mr-4">
                  <CloudIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Gadget Platform</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Full-stack Shopify app development platform with built-in database, APIs, and auto-scaling infrastructure.
              </p>
              <div className="space-y-4">
                {gadgetFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-[#4a417e] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Shopify Functions & Extensions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#4a417e]/5 to-[#287471]/5 p-8 rounded-2xl border border-[#4a417e]/20"
          >
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4a417e] to-[#287471] rounded-xl flex items-center justify-center mr-4">
                  <CogIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Shopify Functions & Extensions</h3>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Build custom checkout experiences, delivery logic, and storefront integrations with Shopify's extensibility platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shopifyExtensions.map((extension, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-[#4a417e]/10 text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#4a417e]/10 to-[#287471]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {extension.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{extension.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{extension.description}</p>
                  <span className="px-3 py-1 bg-gradient-to-r from-[#4a417e]/10 to-[#287471]/10 text-[#4a417e] rounded-full text-xs font-medium">
                    {extension.type}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Banner Section */}
      <section className="py-24 bg-gradient-to-r from-[#4a417e] via-black to-[#287471] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Expert Shopify App Development for Every Business Need
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you need a public app for the Shopify App Store, a custom private solution, or seamless integrations -
            we deliver Shopify apps that merchants trust and love to use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-[#4a417e] px-8 py-4 rounded-md text-lg font-medium hover:bg-[#f6f6f7] transition-all duration-200 shadow-md border border-[#4a417e]/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4a417e]">
              Explore Apps
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-[#4a417e] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4a417e]">
              Get Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">About Scrptble</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are a team of passionate Shopify experts dedicated to building world-class applications
                that empower merchants to grow their businesses. With deep expertise in the Shopify ecosystem
                and modern web technologies, we deliver solutions that scale.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {aboutStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-emerald-50 rounded-xl">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <CubeIcon className="w-24 h-24 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Shopify Certified</h3>
                  <p className="text-gray-600 mt-2">Expert Partners</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shopify Polaris Highlight Section */}
      <section className="py-32 bg-gradient-to-br from-[#4a417e] via-black to-[#287471] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold mb-8">
              <SparklesIcon className="w-5 h-5 mr-2" />
              Shopify Polaris Certified
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Every Type of
              <span className="block text-white">
                Shopify App
              </span>
            </h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Public apps for the App Store, custom private solutions, and Built for Shopify integrations.
              We master every aspect of the Shopify ecosystem with Polaris-perfect design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Polaris UI Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Shopify App Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From App Store publishing to custom integrations - we deliver quality across all Shopify app types
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {polarisComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {component.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{component.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{component.description}</p>
                <div className="flex flex-wrap gap-1">
                  {component.features.map((feature, i) => (
                    <span key={i} className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Shopify app development solutions from ideation to success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckIcon className="w-5 h-5 text-emerald-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Successful Shopify apps we've built that are making a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                  {project.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-600 font-semibold">{project.metric}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-gradient-to-br from-[#4a417e] via-black to-[#287471]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Client Reviews</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              What our clients say about working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#287471]/20 hover:scale-105 transition-all duration-300"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#287471] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">{review.author[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.author}</div>
                    <div className="text-gray-600 text-sm">{review.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your Shopify app project? Get in touch with our experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#4a417e] via-black to-[#287471] p-8 rounded-2xl shadow-lg border border-[#4a417e]/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                    <option>Public Shopify App</option>
                    <option>Custom Shopify App</option>
                    <option>Built for Shopify Solution</option>
                    <option>App Integration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-[#4a417e] px-8 py-4 rounded-md font-medium hover:bg-[#f6f6f7] transition-all duration-200 shadow-md border border-[#4a417e]/30 focus:outline-none focus:ring-2 focus:ring-[#4a417e] focus:ring-offset-2">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in touch</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We'd love to hear about your Shopify app idea. Our team of modern development experts is ready to help you build something amazing.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-2xl border border-emerald-100">
                <h4 className="font-semibold text-gray-900 mb-3">Why choose us?</h4>
                <ul className="space-y-2">
                  {whyChooseUsContact.map((reason, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckIcon className="w-4 h-4 text-emerald-600 mr-2" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-24 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Ready to Launch Your Shopify App?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 mb-8"
          >
            Whether it's a public app, custom solution, or integration - let's build something merchants will love
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white text-[#4a417e] px-10 py-5 rounded-md text-xl font-medium hover:bg-[#f6f6f7] transition-all duration-200 inline-flex items-center shadow-md border border-[#4a417e]/30 focus:outline-none focus:ring-2 focus:ring-[#4a417e] focus:ring-offset-2"
          >
            Start Your Project Today
            <RocketLaunchIcon className="w-6 h-6 ml-3" />
          </motion.button>
        </div>
      </section>

      {/* Comprehensive Footer */}
      <footer className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4a417e] to-[#287471] rounded-xl flex items-center justify-center">
                  <CubeIcon className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold">Scrptble</span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Leading Shopify app development agency specializing in Polaris-powered,
                scalable applications. We transform ideas into successful App Store products
                that merchants love and trust.
              </p>
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-[#4a417e]">Shopify Certifications</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#4a417e]/20 text-[#4a417e] rounded-full text-sm font-medium">Polaris Expert</span>
                  <span className="px-4 py-2 bg-[#287471]/20 text-[#287471] rounded-full text-sm font-medium">Plus Partner</span>
                  <span className="px-4 py-2 bg-black/20 text-gray-300 rounded-full text-sm font-medium">App Store Verified</span>
                </div>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#4a417e] transition-all duration-300 hover:scale-110">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Shopify Services */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-[#4a417e]">Shopify Services</h3>
              <ul className="space-y-4">
                {footerServices.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-[#4a417e] transition-colors text-base leading-relaxed">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* App Categories */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-[#287471]">App Categories</h3>
              <ul className="space-y-4">
                {appCategories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-[#287471] transition-colors text-base leading-relaxed">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Support */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-black">Contact & Support</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <EnvelopeIcon className="w-6 h-6 text-[#4a417e] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium">Email Us</p>
                    <p className="text-gray-400">hello@scrptble.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-[#4a417e] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium">Call Us</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 text-[#4a417e] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium">Support Hours</p>
                    <p className="text-gray-400">24/7 Available</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-[#4a417e] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium">Location</p>
                    <p className="text-gray-400">Global Remote Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Polaris Highlight Section */}
          <div className="border-t border-gray-800 pt-16 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#4a417e] to-[#287471] bg-clip-text text-transparent">
                Shopify Polaris Ecosystem Experts
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                We don't just use Polaris - we master it. Every component, every pattern, every interaction designed to feel native to Shopify.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {polarisExpertise.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4a417e] to-[#287471] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-400 text-lg">
                  © 2024 Scrptble. All rights reserved. Building modern Shopify apps with Remix, Gadget, and cutting-edge development tools.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 md:justify-end">
                <a href="#" className="text-gray-400 hover:text-[#4a417e] transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-[#4a417e] transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-[#4a417e] transition-colors">Cookie Policy</a>
                <a href="#" className="text-gray-400 hover:text-[#4a417e] transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

const heroStats = [
  { number: "150+", label: "Shopify Apps Built" },
  { number: "25M+", label: "Merchant Installs" },
  { number: "12", label: "App Store Features" }
];

const publicShopifyApps = [
  {
    title: "Shopify CLI & Templates",
    description: "Remix, Node.js, PHP app templates",
    icon: <CodeBracketIcon className="w-5 h-5 text-[#4a417e]" />
  },
  {
    title: "Gadget Framework",
    description: "Full-stack Shopify app platform",
    icon: <CubeIcon className="w-5 h-5 text-[#4a417e]" />
  },
  {
    title: "App Store Publishing",
    description: "Launch to 2M+ merchants globally",
    icon: <BuildingStorefrontIcon className="w-5 h-5 text-[#4a417e]" />
  },
  {
    title: "Partner Dashboard",
    description: "Manage apps & revenue analytics",
    icon: <ChartBarIcon className="w-5 h-5 text-[#4a417e]" />
  }
];

const customShopifyApps = [
  {
    title: "Remix App Development",
    description: "Modern full-stack with React Router",
    icon: <CodeBracketIcon className="w-5 h-5 text-[#287471]" />
  },
  {
    title: "Shopify Functions",
    description: "Custom checkout & delivery logic",
    icon: <CogIcon className="w-5 h-5 text-[#287471]" />
  },
  {
    title: "Hydrogen Storefronts",
    description: "Custom React-based storefronts",
    icon: <ComputerDesktopIcon className="w-5 h-5 text-[#287471]" />
  },
  {
    title: "GraphQL Admin API",
    description: "Advanced store management",
    icon: <CloudIcon className="w-5 h-5 text-[#287471]" />
  }
];

const builtForShopify = [
  {
    title: "Shopify Flow Integration",
    description: "Automation & workflow triggers",
    icon: <CogIcon className="w-5 h-5 text-[#4a417e]" />
  },
  {
    title: "Checkout Extensions",
    description: "Custom checkout UI components",
    icon: <PuzzlePieceIcon className="w-5 h-5 text-[#4a417e]" />
  },
  {
    title: "App Blocks & Themes",
    description: "Storefront app integrations",
    icon: <ComputerDesktopIcon className="w-5 h-5 text-[#4a417e]" />
  },
  {
    title: "Shopify Plus Certified",
    description: "Enterprise partner status",
    icon: <ShieldCheckIcon className="w-5 h-5 text-[#4a417e]" />
  }
];

const appIntegrations = [
  {
    title: "Shopify CLI Tools",
    description: "Generate, test & deploy apps",
    icon: <CodeBracketIcon className="w-5 h-5 text-[#287471]" />
  },
  {
    title: "Gadget Platform",
    description: "Backend-as-a-Service for Shopify",
    icon: <CloudIcon className="w-5 h-5 text-[#287471]" />
  },
  {
    title: "Shopify Partners API",
    description: "Manage multiple stores & apps",
    icon: <CubeIcon className="w-5 h-5 text-[#287471]" />
  },
  {
    title: "Webhook Subscriptions",
    description: "Real-time event notifications",
    icon: <RocketLaunchIcon className="w-5 h-5 text-[#287471]" />
  }
];

const shopifyTemplates = [
  {
    name: "Remix App Template",
    description: "Full-stack with React Router v6",
    tech: ["Remix", "TypeScript", "Polaris"]
  },
  {
    name: "Node.js Template",
    description: "Express.js backend with React",
    tech: ["Node.js", "Express", "React"]
  },
  {
    name: "PHP Template",
    description: "Laravel-based Shopify app",
    tech: ["PHP", "Laravel", "MySQL"]
  },
  {
    name: "Ruby Template",
    description: "Rails framework integration",
    tech: ["Ruby", "Rails", "PostgreSQL"]
  }
];

const gadgetFeatures = [
  {
    title: "Built-in Database",
    description: "PostgreSQL with automatic migrations and real-time sync"
  },
  {
    title: "Auto-scaling Infrastructure",
    description: "Serverless functions that scale automatically with demand"
  },
  {
    title: "Real-time Webhooks",
    description: "Automatic Shopify webhook handling and data synchronization"
  },
  {
    title: "GraphQL API",
    description: "Type-safe API generation with automatic documentation"
  }
];

const shopifyExtensions = [
  {
    name: "Checkout UI Extensions",
    description: "Custom checkout components",
    type: "UI Extension",
    icon: <ComputerDesktopIcon className="w-5 h-5 text-[#4a417e]" />
  },
  {
    name: "Delivery Functions",
    description: "Custom shipping calculations",
    type: "Function",
    icon: <RocketLaunchIcon className="w-5 h-5 text-[#4a417e]" />
  },
  {
    name: "Payment Functions",
    description: "Custom payment methods",
    type: "Function",
    icon: <CubeIcon className="w-5 h-5 text-[#4a417e]" />
  },
  {
    name: "Theme App Extensions",
    description: "Storefront app blocks",
    type: "Theme Extension",
    icon: <PuzzlePieceIcon className="w-5 h-5 text-[#4a417e]" />
  }
];

const aboutStats = [
  { number: "8+", label: "Years Experience" },
  { number: "25+", label: "Team Members" },
  { number: "15+", label: "Countries Served" },
  { number: "100%", label: "Success Rate" }
];

const polarisComponents = [
  {
    name: "Remix + Shopify CLI",
    description: "Modern full-stack development",
    icon: <CodeBracketIcon className="w-6 h-6 text-white" />,
    features: ["Remix", "TypeScript", "React Router"]
  },
  {
    name: "Gadget Platform",
    description: "Backend-as-a-Service solution",
    icon: <CloudIcon className="w-6 h-6 text-white" />,
    features: ["Full-stack", "Auto-scale", "Real-time"]
  },
  {
    name: "Shopify Functions",
    description: "Serverless customizations",
    icon: <CogIcon className="w-6 h-6 text-white" />,
    features: ["Checkout", "Delivery", "Payments"]
  },
  {
    name: "App Extensions",
    description: "Native storefront integration",
    icon: <PuzzlePieceIcon className="w-6 h-6 text-white" />,
    features: ["UI Blocks", "Themes", "Native"]
  }
];

const services = [
  {
    title: "Modern Shopify Apps",
    description: "Built with Remix, React Router, and Shopify CLI templates. Full-stack TypeScript applications with Polaris UI components.",
    icon: <CodeBracketIcon className="w-8 h-8 text-white" />,
    features: ["Remix Framework", "React Router v6", "TypeScript", "Shopify CLI"]
  },
  {
    title: "Gadget-Powered Apps",
    description: "Leverage Gadget's full-stack platform for rapid Shopify app development with built-in database, APIs, and hosting.",
    icon: <CloudIcon className="w-8 h-8 text-white" />,
    features: ["Gadget Framework", "Built-in Database", "Auto-scaling", "Real-time Sync"]
  },
  {
    title: "Shopify Functions",
    description: "Custom checkout experiences, delivery customizations, and payment methods using Shopify's serverless platform.",
    icon: <CogIcon className="w-8 h-8 text-white" />,
    features: ["Checkout Extensions", "Delivery Functions", "Payment Functions", "Discount Functions"]
  }
];

const projects = [
  {
    title: "FlexiFlow (Remix App)",
    description: "Advanced workflow automation built with Remix, React Router, and Shopify Functions for checkout customization",
    icon: <CodeBracketIcon className="w-16 h-16 text-[#008060]" />,
    techStack: ["Remix", "React Router", "TypeScript", "Shopify Functions"],
    metric: "15K+ Active Stores"
  },
  {
    title: "InventoryIQ (Gadget Platform)",
    description: "Real-time inventory management system built on Gadget with auto-scaling and multi-location sync",
    icon: <CloudIcon className="w-16 h-16 text-[#6371c7]" />,
    techStack: ["Gadget", "GraphQL", "Real-time DB", "Auto-scaling"],
    metric: "500K+ Products Managed"
  },
  {
    title: "CheckoutPro Extensions",
    description: "Custom checkout UI extensions and delivery functions for enhanced customer experience",
    icon: <PuzzlePieceIcon className="w-16 h-16 text-[#f59e0b]" />,
    techStack: ["Checkout Extensions", "Shopify Functions", "UI Extensions", "Delivery API"],
    metric: "25% Conversion Boost"
  }
];

const reviews = [
  {
    content: "ShopifyPro delivered an exceptional app that exceeded our expectations. The Polaris integration made it feel native to Shopify.",
    author: "Sarah Johnson",
    position: "CEO, TechCommerce"
  },
  {
    content: "Outstanding development team with deep Shopify expertise. Our app is now generating 6-figure revenue monthly.",
    author: "Michael Chen",
    position: "Founder, AppSuccess"
  },
  {
    content: "Professional, reliable, and delivered on time. The app quality and performance are top-notch. Highly recommended!",
    author: "Emily Rodriguez",
    position: "CTO, RetailTech"
  }
];

const socialLinks = [
  { href: "#", icon: <GlobeAltIcon className="w-5 h-5" /> },
  { href: "#", icon: <UserGroupIcon className="w-5 h-5" /> },
  { href: "#", icon: <CodeBracketIcon className="w-5 h-5" /> }
];

const footerServices = [
  "Public Shopify Apps",
  "Custom Shopify Apps",
  "Built for Shopify Solutions",
  "App Store Publishing",
  "Shopify Plus Development",
  "API Integrations",
  "Polaris UI Development",
  "App Maintenance & Support"
];

const appCategories = [
  "Public App Store Apps",
  "Custom Private Apps",
  "Shopify Plus Apps",
  "Payment Integrations",
  "Shipping Solutions",
  "Marketing Automation",
  "Inventory Management",
  "Analytics & Reporting"
];

const contactInfo = [
  {
    title: "Email Us",
    details: "hello@shopifypro.com",
    icon: <EnvelopeIcon className="w-6 h-6 text-white" />
  },
  {
    title: "Call Us",
    details: "+1 (555) 123-4567",
    icon: <PhoneIcon className="w-6 h-6 text-white" />
  },
  {
    title: "Visit Us",
    details: "Global Remote Team",
    icon: <MapPinIcon className="w-6 h-6 text-white" />
  }
];

const whyChooseUsContact = [
  "Shopify App Store Experts",
  "Built for Shopify Certified",
  "Public & Custom App Specialists",
  "Integration Specialists"
];

const polarisExpertise = [
  {
    title: "Components",
    description: "Master all Polaris components",
    icon: <CubeIcon className="w-8 h-8 text-white" />
  },
  {
    title: "Patterns",
    description: "Follow Shopify design patterns",
    icon: <SparklesIcon className="w-8 h-8 text-white" />
  },
  {
    title: "Tokens",
    description: "Use proper design tokens",
    icon: <CodeBracketIcon className="w-8 h-8 text-white" />
  },
  {
    title: "Guidelines",
    description: "Adhere to Shopify standards",
    icon: <CheckIcon className="w-8 h-8 text-white" />
  }
];
