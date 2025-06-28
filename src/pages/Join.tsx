import React, { useState } from 'react';
import { Users, Zap, Target, Code, Wrench, Lightbulb, Send, CheckCircle, ArrowRight, Star } from 'lucide-react';

const Join: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    skills: '',
    experience: '',
    motivation: '',
    availability: '',
    portfolio: '',
    interests: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestAreas = [
    'Environmental Engineering',
    'Sustainable Agriculture',
    'Clean Energy Systems',
    'IoT & Sensors',
    'Drone Technology',
    'Data Analytics',
    'Mechanical Design',
    'Electronics & Hardware',
    'Software Development',
    'Project Management',
    'Research & Development',
    'Community Outreach'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create email with form data
    const subject = encodeURIComponent('Application to Join The Ingenium Project');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Age: ${formData.age}\n` +
      `Education: ${formData.education}\n` +
      `Skills: ${formData.skills}\n` +
      `Experience: ${formData.experience}\n` +
      `Motivation: ${formData.motivation}\n` +
      `Availability: ${formData.availability}\n` +
      `Portfolio/Links: ${formData.portfolio}\n` +
      `Interest Areas: ${formData.interests.join(', ')}\n`
    );
    
    const mailtoLink = `mailto:chadhavivaan007@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your application! We will review it and get back to you soon.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        education: '',
        skills: '',
        experience: '',
        motivation: '',
        availability: '',
        portfolio: '',
        interests: []
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter(i => i !== interest)
        : [...formData.interests, interest]
    });
  };

  const teamRoles = [
    {
      title: 'Engineering & Design',
      description: 'Hardware design, mechanical engineering, electronics, and prototype development',
      icon: <Wrench className="w-8 h-8" />,
      skills: ['CAD Design', 'Electronics', 'Mechanical Engineering', 'Prototyping']
    },
    {
      title: 'Software & Data',
      description: 'Programming, data analysis, IoT development, and system integration',
      icon: <Code className="w-8 h-8" />,
      skills: ['Programming', 'Data Analysis', 'IoT Development', 'Web Development']
    },
    {
      title: 'Research & Innovation',
      description: 'Problem identification, solution research, testing, and validation',
      icon: <Lightbulb className="w-8 h-8" />,
      skills: ['Research', 'Problem Solving', 'Testing', 'Documentation']
    },
    {
      title: 'Project Management',
      description: 'Planning, coordination, outreach, and community engagement',
      icon: <Target className="w-8 h-8" />,
      skills: ['Project Planning', 'Communication', 'Leadership', 'Outreach']
    }
  ];

  const benefits = [
    'Hands-on experience with real engineering projects',
    'Mentorship from industry professionals',
    'Portfolio development and skill building',
    'Networking with like-minded innovators',
    'Recognition and certificates for contributions',
    'Opportunity to present at conferences and competitions',
    'Access to resources and equipment',
    'Flexible, remote-friendly collaboration'
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join <span className="text-primary-500">The Team</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Become part of a passionate community of student innovators working to solve 
              real-world challenges through engineering excellence and sustainable technology.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">10+</div>
              <div className="text-gray-400 text-sm">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">5</div>
              <div className="text-gray-400 text-sm">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">100%</div>
              <div className="text-gray-400 text-sm">Remote Friendly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">2024</div>
              <div className="text-gray-400 text-sm">Founded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Roles */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Team <span className="text-primary-500">Roles</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're looking for passionate individuals across various disciplines to join our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamRoles.map((role, index) => (
              <div key={role.title} className="bg-dark-200 rounded-xl p-8 hover:bg-dark-100 transition-all duration-300">
                <div className="text-primary-500 mb-4">
                  {role.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{role.title}</h3>
                <p className="text-gray-400 mb-6">{role.description}</p>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span key={skill} className="bg-primary-500/10 text-primary-500 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Application <span className="text-primary-500">Form</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tell us about yourself and how you'd like to contribute to The Ingenium Project
            </p>
          </div>

          <div className="bg-dark-200 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-500" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="16"
                      max="30"
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                      placeholder="18"
                    />
                  </div>
                </div>
              </div>

              {/* Education & Background */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary-500" />
                  Education & Background
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Current Education Status *
                    </label>
                    <input
                      type="text"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                      placeholder="e.g., B.Tech Computer Science, 2nd Year at XYZ University"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Skills & Expertise *
                    </label>
                    <textarea
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200 resize-none"
                      placeholder="List your technical skills, programming languages, tools, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Relevant Experience
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200 resize-none"
                      placeholder="Previous projects, internships, competitions, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Interest Areas */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary-500" />
                  Areas of Interest
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interestAreas.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-3 rounded-lg border-2 text-sm transition-all duration-200 ${
                        formData.interests.includes(interest)
                          ? 'border-primary-500 bg-primary-500/10 text-primary-500'
                          : 'border-gray-600 bg-dark-300 text-gray-300 hover:border-primary-500/50'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Motivation & Availability */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary-500" />
                  Motivation & Availability
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Why do you want to join The Ingenium Project? *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200 resize-none"
                      placeholder="Share your motivation and what you hope to contribute..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Time Availability *
                    </label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                    >
                      <option value="">Select your availability</option>
                      <option value="5-10 hours/week">5-10 hours per week</option>
                      <option value="10-15 hours/week">10-15 hours per week</option>
                      <option value="15-20 hours/week">15-20 hours per week</option>
                      <option value="20+ hours/week">20+ hours per week</option>
                      <option value="flexible">Flexible based on project needs</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Portfolio/Links (Optional)
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                      placeholder="GitHub, LinkedIn, personal website, etc."
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.motivation}
                className="w-full bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark-400"></div>
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why <span className="text-primary-500">Join</span> Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Benefits and opportunities you'll gain as a team member
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-dark-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-400/10 rounded-2xl p-12 border border-primary-500/20">
            <Zap className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join a community of passionate innovators working to solve real-world challenges 
              through engineering excellence and sustainable technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 inline-flex items-center gap-2"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="mailto:chadhavivaan007@gmail.com?subject=Questions about Joining The Ingenium Project"
                className="border border-primary-500 text-primary-500 px-8 py-3 rounded-full font-semibold hover:bg-primary-500/10 transition-all duration-300"
              >
                Ask Questions
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Join;