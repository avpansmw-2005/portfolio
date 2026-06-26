import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import { EmailClient } from '@azure/communication-email';
import { send, sendHover } from '../assets';

const emailClient = new EmailClient(
  window.env?.VITE_AZURE_COMMUNICATION_KEY ??
  (import.meta.env.DEV ? import.meta.env.VITE_AZURE_COMMUNICATION_KEY : "")
);

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const emailBody = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;

    const clientEmail = {
      senderAddress: 'DoNotReply@daa7cc9a-7400-4647-a08f-bf18fed95e35.azurecomm.net',
      content: {
        subject: "Message Received - Avneet's Portfolio",
        plainText: `Hi ${form.name},\n\nThank you for reaching out! I have received your message and will get back to you as soon as possible.\n\nBest regards,\nAvneet`,
      },
      recipients: { to: [{ address: form.email }] },
    };

    const ownerEmail = {
      senderAddress: 'DoNotReply@daa7cc9a-7400-4647-a08f-bf18fed95e35.azurecomm.net',
      content: {
        subject: `New Contact Form Message from ${form.name}`,
        plainText: emailBody,
      },
      recipients: { to: [{ address: 'avneetpandey82@gmail.com' }] },
    };

    try {
      const clientPoller = await emailClient.beginSend(clientEmail);
      await clientPoller.pollUntilDone();

      setLoading(false);
      toast.success('Thank you! I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
      setIsOpen(false);

      emailClient.beginSend(ownerEmail)
        .then(poller => poller.pollUntilDone())
        .catch(err => console.error('Owner email error:', err));
    } catch (error) {
      setLoading(false);
      console.error('Error sending email:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Contact Panel - Opens from LEFT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-full sm:w-[380px] bg-jet/95 backdrop-blur-md z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-taupe/20 shrink-0">
              <div>
                <p className="text-taupe text-xs uppercase tracking-wider font-semibold">Get in touch</p>
                <h3 className="text-timberWolf text-xl font-bold font-poppins">Contact.</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-eerieBlack hover:bg-taupe transition-colors text-white text-xl"
              >
                &times;
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 px-5 py-2 border-b border-taupe/10 shrink-0">
              <a href="https://github.com/avpansmw-2005" target="_blank" rel="noopener动态               " title="GitHub" className="w-9 h-9 rounded-full bg-eerieBlack/60 flex items-center justify-center border border-taupe/20 hover:border-[#915EFF] transition-all duration-200">
                <svg className="w-4 h-4 text-timberWolf" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/avneet-pandey-1365b8184" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-9 h-9 rounded-full bg-eerieBlack/60 flex items-center justify-center border border-taupe/20 hover:border-[#0077B5] transition-all duration-200">
                <svg className="w-4 h-4 text-timberWolf" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://avneetpandey.azurewebsites.net/" target="_blank" rel="noopener noreferrer" title="Portfolio" className="w-9 h-9 rounded-full bg-eerieBlack/60 flex items-center justify-center border border-taupe/20 hover:border-[#915EFF] transition-all duration-200">
                <svg className="w-4 h-4 text-timberWolf" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c0-.866-1.172-1.667-2.927-2.246M3 12a9 9 0 019-9m9 1.5c0 .866-1.172 1.667-2.927 2.246M3 12c0 .866 1.172 1.667 2.927 2.246M12 3c0 .866 1.172 1.667 2.927 2.246M12 21c0-.866 1.172-1.667 2.927-2.246M12 3c0 .866-1.172 1.667-2.927 2.246M21 12c0-.866-1.172-1.667-2.927-2.246M3 12c0-.866 1.172-1.667 2.927-2.246" />
                </svg>
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-5 pt-3 flex flex-col gap-3 overflow-y-auto flex-1">
              <label className="flex flex-col gap-1">
                <span className="text-white/80 text-xs font-medium ml-1">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-eerieBlack/80 py-2.5 px-3 placeholder:text-taupe/50 text-white text-sm rounded-lg outline-none border border-transparent focus:border-[#915EFF]/30 transition-colors"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-white/80 text-xs font-medium ml-1">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-eerieBlack/80 py-2.5 px-3 placeholder:text-taupe/50 text-white text-sm rounded-lg outline-none border border-transparent focus:border-[#915EFF]/30 transition-colors"
                />
              </label>
              <label className="flex flex-col gap-1 flex-1">
                <span className="text-white/80 text-xs font-medium ml-1">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  rows="5"
                  required
                  className="bg-eerieBlack/80 py-2.5 px-3 placeholder:text-taupe/50 text-white text-sm rounded-lg outline-none border border-transparent focus:border-[#915EFF]/30 transition-colors resize-none"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="flex justify-center items-center gap-2 text-sm text-white font-bold font-beckman py-3 px-6 rounded-lg bg-gradient-to-r from-[#915EFF] to-[#7c4dff] hover:from-[#7b4fff] hover:to-[#5b3dff] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-auto shrink-0"
                onMouseOver={() => {
                  const btn = document.querySelector('.widget-send-btn');
                  if (btn) btn.setAttribute('src', sendHover);
                }}
                onMouseOut={() => {
                  const btn = document.querySelector('.widget-send-btn');
                  if (btn) btn.setAttribute('src', send);
                }}
              >
                {loading ? 'Sending..' : 'Send'}
                <img
                  src={send}
                  alt="send"
                  className="widget-send-btn w-4 h-4 object-contain"
                />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LEFT Vertical Strip - Always visible */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden sm:flex"
      >
        {/* The vertical tab */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative group flex flex-col items-center justify-center"
          style={{ writingMode: 'vertical-rl' }}
        >
          {/* Main tab body */}
          <div className="relative px-3 py-8 bg-gradient-to-b from-[#915EFF] via-[#7c4dff] to-[#5b3dff] text-white font-black text-[13px] tracking-[3px] uppercase shadow-lg shadow-purple-500/30 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/50 group-hover:from-[#a060ff] group-hover:via-[#8a60ff] group-hover:to-[#6a4dff]">
            <span className="block transform group-hover:scale-105 transition-transform duration-300">
              CONTACT ME
            </span>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </button>

        {/* Edge glow line */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-[2px] h-full bg-gradient-to-b from-transparent via-[#915EFF] to-transparent opacity-60" />
      </motion.div>

      {/* Mobile: Show a floating button at bottom since vertical strip doesn't fit */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed left-4 bottom-4 z-30 sm:hidden w-14 h-14 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7c4dff] shadow-lg shadow-purple-500/30 flex items-center justify-center text-white hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(145, 94, 255, 0.4)',
            '0 0 0 10px rgba(145, 94, 255, 0)',
            '0 0 0 0 rgba(145, 94, 255, 0)'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </motion.button>
    </>
  );
};

export default ContactWidget;
