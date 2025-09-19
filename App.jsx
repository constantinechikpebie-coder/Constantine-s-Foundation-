import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4">
          Constantine Sage Foundation
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl">
          Empowering youth. Inspiring service. Transforming communities.
        </motion.p>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-center">
          About Us
        </motion.h2>
        <p className="text-lg leading-relaxed">
          Founded by <strong>Ukonu Constantine Chikpebie</strong> in Enugu, Nigeria, 
          the Constantine Sage Foundation is dedicated to empowering young people 
          through education, service, and leadership. Inspired by the belief that 
          volunteering builds character and strengthens society, we gather and 
          mobilize volunteers to create meaningful change in hospitals and local 
          communities.
        </p>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-center">
          Our Mission
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Youth Empowerment</h3>
            <p>We provide young people with tools and opportunities to become leaders who serve.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Volunteering</h3>
            <p>We teach peers the importance of volunteering and foster a culture of compassion.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Hospital Outreach</h3>
            <p>Our volunteers bring hope and assistance to patients and healthcare workers.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6">
          Contact Us
        </motion.h2>
        <p><strong>Location:</strong> Enugu, Nigeria</p>
        <p><strong>Phone:</strong> +2349163282263</p>
        <p><strong>Founder:</strong> Ukonu Constantine Chikpebie</p>
      </section>
    </div>
  );
}