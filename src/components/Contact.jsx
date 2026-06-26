import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { github } from '../assets';

const ConnectCard = () => {
  return (
    <motion.div
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className="flex flex-col items-center justify-center text-center py-10"
    >
      <p className={styles.sectionSubText}>Let's build something together</p>
      <h3 className={styles.sectionHeadTextLight}>Connect With Me.</h3>

      <div className="mt-8 max-w-xl">
        <p className="text-taupe text-lg leading-relaxed mb-8">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Click the floating button
          to reach out!
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {/* GitHub */}
          <motion.a
            href="https://github.com/avpansmw-2005"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, borderColor: '#915EFF' }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-eerieBlack/80 flex items-center justify-center border border-taupe/20 hover:border-[#915EFF] transition-colors"
            title="GitHub"
          >
            <img src={github} alt="GitHub" className="w-6 h-6 object-contain invert" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/avneet-pandey-1365b8184"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, borderColor: '#0077B5' }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-eerieBlack/80 flex items-center justify-center border border-taupe/20 hover:border-[#0077B5] transition-colors"
            title="LinkedIn"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>

          {/* Portfolio / Website */}
          <motion.a
            href="https://avneetpandey.azurewebsites.net/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, borderColor: '#915EFF' }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-eerieBlack/80 flex items-center justify-center border border-taupe/20 hover:border-[#915EFF] transition-colors"
            title="Portfolio"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 1.5c0-.866-1.172-1.667-2.927-2.246M3 12a9 9 0 019-9m9 1.5c0 .866-1.172 1.667-2.927 2.246M3 12c0 .866 1.172 1.667 2.927 2.246M12 3c0 .866 1.172 1.667 2.927 2.246M12 21c0-.866 1.172-1.667 2.927-2.246M12 3c0 .866-1.172 1.667-2.927 2.246M21 12c0-.866-1.172-1.667-2.927-2.246M3 12c0-.866 1.172-1.667 2.927-2.246" />
            </svg>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:avneetpandey82@gmail.com"
            whileHover={{ scale: 1.1, borderColor: '#EA4335' }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-eerieBlack/80 flex items-center justify-center border border-taupe/20 hover:border-[#EA4335] transition-colors"
            title="Email"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
        </div>

        {/* 3D floating decoration */}
        <div className="relative w-32 h-32 mx-auto mt-4">
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-20 h-20 mx-auto bg-gradient-to-br from-[#915EFF] to-[#7c4dff] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30"
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <ConnectCard />
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
