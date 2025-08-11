'use client';

import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl mb-8"
            >
              🚀
            </motion.div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We're working on something awesome! Our project showcase is coming soon.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Tuned!
              </h2>
              <p className="text-gray-600 mb-6">
                We're putting the finishing touches on our project showcase. Soon you'll be able to explore our innovative solutions and success stories.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => window.location.href = '/contact'}
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage; 