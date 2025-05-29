import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <React.Fragment key={i}>
            <div
              className="neural-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
            <div
              className="neural-line"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">We're here to help you succeed in your educational journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#3D5AFE] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#3D5AFE] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#3D5AFE] focus:border-transparent"
                    placeholder="Your message"
                  />
                </div>
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#3D5AFE]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">contact@soutienai.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#3D5AFE]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#3D5AFE]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Address</h4>
                    <p className="text-gray-600">123 Education Street<br />75001 Paris, France</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;