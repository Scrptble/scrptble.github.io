'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const initialFormState = { name: '', email: '', message: '', role: '' };

const roles = [
  {
    title: "Software Engineering Intern",
    description: "Join our engineering team to build scalable, innovative solutions. Learn from industry experts and work on real projects.",
    positions: [
      "Frontend Development Intern",
      "Backend Development Intern",
      "Full Stack Development Intern"
    ],
    requirements: [
      "Basic programming knowledge",
      "Eagerness to learn",
      "Problem-solving mindset",
      "Team collaboration skills"
    ]
  },
  {
    title: "QA Engineering Intern",
    description: "Learn how to maintain the highest quality standards in our products. Get hands-on experience with testing methodologies.",
    positions: [
      "QA Testing Intern",
      "Test Automation Intern",
      "Quality Assurance Intern"
    ],
    requirements: [
      "Basic understanding of software testing",
      "Attention to detail",
      "Analytical thinking",
      "Willingness to learn"
    ]
  },
  {
    title: "DevOps Engineering Intern",
    description: "Learn about infrastructure and deployment pipelines. Get exposure to cloud platforms and CI/CD tools.",
    positions: [
      "DevOps Intern",
      "Cloud Infrastructure Intern",
      "Site Reliability Intern"
    ],
    requirements: [
      "Basic Linux knowledge",
      "Interest in cloud technologies",
      "Basic scripting skills",
      "Eagerness to learn"
    ]
  },
  {
    title: "UI/UX Design Intern",
    description: "Create beautiful, intuitive user experiences. Learn from experienced designers and work on real projects.",
    positions: [
      "UI Design Intern",
      "UX Design Intern",
      "Product Design Intern"
    ],
    requirements: [
      "Basic design knowledge",
      "Portfolio of work",
      "User-centered mindset",
      "Creativity and attention to detail"
    ]
  },
  {
    title: "Marketing & Content Intern",
    description: "Help us tell our story and reach the right audience. Learn about digital marketing and content creation.",
    positions: [
      "Content Writing Intern",
      "Digital Marketing Intern",
      "Social Media Intern"
    ],
    requirements: [
      "Good writing skills",
      "Social media knowledge",
      "Creativity",
      "Basic analytics understanding"
    ]
  },
  {
    title: "Sales & Business Development Intern",
    description: "Learn about business development and client relationships. Get hands-on experience in sales processes.",
    positions: [
      "Sales Intern",
      "Business Development Intern",
      "Client Relations Intern"
    ],
    requirements: [
      "Good communication skills",
      "Interest in sales",
      "Basic business understanding",
      "Team player mindset"
    ]
  },
  {
    title: "Client Success Intern",
    description: "Learn how to ensure client satisfaction and success. Get experience in client relationship management.",
    positions: [
      "Client Success Intern",
      "Customer Support Intern",
      "Account Management Intern"
    ],
    requirements: [
      "Good communication skills",
      "Problem-solving abilities",
      "Customer service mindset",
      "Technical aptitude"
    ]
  },
  {
    title: "Finance & HR Intern",
    description: "Learn about business operations and team development. Get exposure to finance and HR processes.",
    positions: [
      "HR Intern",
      "Finance Intern",
      "Operations Intern"
    ],
    requirements: [
      "Basic business knowledge",
      "Analytical skills",
      "Good communication",
      "Team player mindset"
    ]
  }
];

const CareersPage = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleApply = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setFormData((prev) => ({ ...prev, role: roleTitle }));
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call backend API
    const res = await fetch('/api/careers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setSubmitted(true);
      setFormData(initialFormState);
      setSelectedRole('');
    }
  };

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
              Internship Opportunities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your career journey with us. We offer hands-on experience, mentorship, and the opportunity to work on real projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internship Roles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Available Internships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take the first step in your career with us. We offer competitive stipends, learning opportunities, and a great work environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{role.title}</h3>
                <p className="text-gray-600 mb-6">{role.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Available Positions:</h4>
                  <ul className="space-y-2">
                    {role.positions.map((position, posIndex) => (
                      <li key={posIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        {position}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {role.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => handleRoleApply(role.title)}
                >
                  Apply Now
                </button>
                {selectedRole === role.title && (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-gray-50 p-4 rounded-lg shadow">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded border"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded border"
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Why are you interested in this role?"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded border"
                      required
                    />
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Submit Application
                    </button>
                    {submitted && <p className="text-green-600 mt-2">Application submitted!</p>}
                  </form>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Intern With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to providing a valuable learning experience for our interns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          >
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Real-world project experience
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Flexible work arrangements
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Potential for full-time opportunities
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage; 