import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-white/10 mt-10"
    >
      <div className="container mx-auto px-4 py-6 text-sm text-white/60 text-center">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          © {new Date().getFullYear()} Rahul Kumar Rajak. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}
