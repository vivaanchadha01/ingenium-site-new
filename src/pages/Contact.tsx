import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail, Zap, MapPin, Clock
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    collaborationType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        collaborationType: formData.collaborationType
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('Message sent!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        collaborationType: 'general'
      });
      setIsSubmitting(false);
    })
    .catch((err) => {
      console.error('FAILED TO SEND MESSAGE:', err);
      alert('Failed to send. Please try again.');
      setIsSubmitting(false);
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="pt-20">
      <section className="py-20 bg-dark-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="text-primary-500">Collaborate</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to tackle engineering challenges together? Whether you're a mentor, fellow innovator, or potential sponsor, I'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in <span className="text-primary-500">Touch</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                I'm always excited to discuss new projects, innovative ideas, and potential collaborations. Let's connect and explore how we can work together to create meaningful engineering solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-gray-400">theingeniumproject.general@gmail.com</p>
                  <p className="text-sm text-gray-500 mt-1">Best for detailed project discussions and collaborations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Response Time</h3>
                  <p className="text-gray-400">Usually within 24 hours</p>
                  <p className="text-sm text-gray-500 mt-1">Perfect for time-sensitive opportunities and questions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">Gurgaon, India</p>
                  <p className="text-sm text-gray-500 mt-1">Available for remote collaboration worldwide</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-200 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary-500" /> Looking for:
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>Technical mentors and advisors</li>
                <li>Fellow student innovators</li>
                <li>Sponsors and funding partners</li>
                <li>Industry collaborators</li>
                <li>Media and press inquiries</li>
              </ul>
            </div>
          </div>

          <div className="bg-dark-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white w-full" />
                <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white w-full" />
                <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} className="bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white w-full"
/>
              </div>
              <select name="collaborationType" value={formData.collaborationType} onChange={handleChange} className="bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white w-full">
                <option value="general">General Inquiry</option>
                <option value="mentor">Mentorship</option>
                <option value="collaboration">Project Collaboration</option>
                <option value="sponsorship">Sponsorship/Funding</option>
                <option value="media">Media/Press</option>
                <option value="student">Student Connection</option>
              </select>
              <textarea name="message" placeholder="Your Message" rows={6} required value={formData.message} onChange={handleChange} className="bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white w-full"></textarea>
              <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 py-4 rounded-lg font-semibold w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Frequently Asked <span className="text-primary-500">Questions</span>
            </h2>
            <p className="text-lg text-gray-400">Common questions about collaboration and The Ingenium Project</p>
          </div>

          <div className="space-y-6">
            <div className="bg-dark-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What types of projects are you working on?</h3>
              <p className="text-gray-400">I work on sustainable tech prototypes like real-time noise mapping with drones, air quality monitoring systems, and clean cooking solutions like TLUD stoves. Each project is designed to be low-cost, scalable, and impactful for communities.</p>
            </div>

            <div className="bg-dark-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">How can mentors help with The Ingenium Project?</h3>
              <p className="text-gray-400">Mentors can provide technical advice, feedback on engineering decisions, help refine project direction, and offer industry connections. Even short-term mentorship during a specific phase can make a huge difference.</p>
            </div>

            <div className="bg-dark-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Are you open to collaboration with other students?</h3>
              <p className="text-gray-400">Absolutely! The Ingenium Project thrives on student-led innovation. If you’re passionate about prototyping, coding, electronics, or sustainability, we’d love to work with you on solving real problems.</p>
            </div>

            <div className="bg-dark-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What kind of support are you looking for from sponsors?</h3>
              <p className="text-gray-400">Sponsors can help with funding, providing hardware or tools, lab/testing space, or even amplifying the initiative through networks. In return, we offer visibility, grassroots impact, and student innovation.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
