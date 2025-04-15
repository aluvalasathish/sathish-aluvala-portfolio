import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const TELEGRAM_BOT_TOKEN = '7757602273:AAEiqNTJko1TUJJlAGSoDDfrPfmnsUGKoyE';
const TELEGRAM_CHAT_ID = '1662209038';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const sendToTelegram = async (formData: typeof form) => {
    const message = `
New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send message to Telegram');
      }

      return true;
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const success = await sendToTelegram(form);
      
      if (success) {
        setStatus('success');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Get In Touch</h2>
          <p className="mb-12 max-w-2xl">
            I'm currently looking for new opportunities to learn and grow as a developer. 
            Whether you have questions, want to collaborate on a project, or just want to say hi, 
            feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <MdEmail className="text-3xl text-secondary" />
                  <p>aluvalasathish7@gmail.com</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-xl font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/aluvalasathish" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-3xl text-primary hover:text-secondary transition-colors duration-300"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href="https://linkedin.com/in/aluvalasathish" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-3xl text-primary hover:text-secondary transition-colors duration-300"
                    >
                      <FaLinkedin />
                    </a>
                    <a 
                      href="https://twitter.com/aluvalasathish" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-3xl text-primary hover:text-secondary transition-colors duration-300"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-navy-light mt-6">
                <h4 className="text-xl font-medium mb-4">Open to:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Entry-level positions</li>
                  <li>Internship opportunities</li>
                  <li>Freelance projects</li>
                  <li>Open-source collaboration</li>
                  <li>Mentorship connections</li>
                </ul>
              </div>
            </div>

            <div>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="w-full px-4 py-3 bg-navy-light rounded-lg outline-none border border-transparent focus:border-secondary transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    className="w-full px-4 py-3 bg-navy-light rounded-lg outline-none border border-transparent focus:border-secondary transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                  <textarea
                    name="message"
                    rows={7}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What would you like to say?"
                    className="w-full px-4 py-3 bg-navy-light rounded-lg outline-none border border-transparent focus:border-secondary transition-all duration-300"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-secondary text-white font-medium"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>

                {status === 'success' && (
                  <p className="text-green-500 mt-4">Message sent successfully! I'll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 mt-4">Failed to send message. Please try again or contact me directly via email.</p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 