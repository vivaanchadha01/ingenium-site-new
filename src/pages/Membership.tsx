import React, { useState } from 'react';
import { Users, Shield, Lightbulb, CheckCircle, AlertCircle, Send, ArrowRight } from 'lucide-react';

interface MembershipFormData {
  name: string;
  email: string;
  phone: string;
  membershipType: 'administration' | 'rd' | '';
  selectedSkills: string[];
  experience: string;
  motivation: string;
  availability: string;
}

const Membership: React.FC = () => {
  const [formData, setFormData] = useState<MembershipFormData>({
    name: '',
    email: '',
    phone: '',
    membershipType: '',
    selectedSkills: [],
    experience: '',
    motivation: '',
    availability: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const administrationSkills = [
    'Project Management',
    'Team Leadership',
    'Strategic Planning',
    'Budget Management',
    'Communication & Coordination',
    'Event Planning',
    'Partnership Development',
    'Documentation & Reporting',
    'Quality Assurance',
    'Risk Management',
    'Stakeholder Management',
    'Process Optimization',
    'Resource Allocation',
    'Performance Monitoring',
    'Conflict Resolution',
    'Policy Development'
  ];

  const rdSkills = [
    'Research Methodology',
    'Data Analysis',
    'Technical Writing',
    'Prototype Development',
    'Laboratory Techniques',
    'Statistical Analysis',
    'Literature Review',
    'Experimental Design',
    'CAD/3D Modeling',
    'Programming (Python/R/MATLAB)',
    'Electronics & Hardware',
    'Materials Science',
    'Environmental Testing',
    'Patent Research',
    'Grant Writing',
    'Scientific Computing',
    'Machine Learning',
    'IoT Development',
    'Sensor Integration',
    'Sustainability Assessment'
  ];

  const getCurrentSkills = () => {
    return formData.membershipType === 'administration' ? administrationSkills : rdSkills;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset skills when membership type changes
      ...(name === 'membershipType' && { selectedSkills: [] })
    }));
    
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      selectedSkills: prev.selectedSkills.includes(skill)
        ? prev.selectedSkills.filter(s => s !== skill)
        : [...prev.selectedSkills, skill]
    }));
    
    // Clear validation errors when user selects skills
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }
  };

  const validateForm = (): boolean => {
    const errors: string[] = [];

    if (!formData.name.trim()) errors.push('Name is required');
    if (!formData.email.trim()) errors.push('Email is required');
    if (!formData.membershipType) errors.push('Please select a membership type');
    if (formData.selectedSkills.length === 0) errors.push('Please select at least one skill');
    if (!formData.motivation.trim()) errors.push('Motivation is required');
    if (!formData.availability) errors.push('Please select your availability');

    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('membershipType', formData.membershipType);
      formDataToSend.append('selectedSkills', formData.selectedSkills.join(', '));
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('motivation', formData.motivation);
      formDataToSend.append('availability', formData.availability);
      formDataToSend.append('_subject', `New ${formData.membershipType === 'administration' ? 'Administration' : 'R&D'} Membership Application`);

      const response = await fetch('https://formspree.io/f/xeokvvlw', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          membershipType: '',
          selectedSkills: [],
          experience: '',
          motivation: '',
          availability: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Membership <span className="text-primary-500">Registration</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join The Ingenium Project as a specialized member. Choose your path and contribute 
              your expertise to innovative engineering solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Types Overview */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Membership <span className="text-primary-500">Types</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Two specialized tracks designed to leverage your unique skills and interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-dark-200 rounded-xl p-8 border border-gray-600 hover:border-primary-500/50 transition-all duration-300">
              <div className="text-primary-500 mb-6">
                <div className="w-16 h-16 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Administration</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Lead organizational excellence, manage projects, coordinate teams, and ensure 
                smooth operations across all initiatives. Perfect for those with leadership 
                and management expertise.
              </p>
              <div className="space-y-2">
                <h4 className="text-white font-semibold">Key Responsibilities:</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Project planning and coordination</li>
                  <li>• Team management and leadership</li>
                  <li>• Resource allocation and budgeting</li>
                  <li>• Stakeholder communication</li>
                </ul>
              </div>
            </div>

            <div className="bg-dark-200 rounded-xl p-8 border border-gray-600 hover:border-primary-500/50 transition-all duration-300">
              <div className="text-primary-500 mb-6">
                <div className="w-16 h-16 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Research & Development</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Drive innovation through research, prototype development, technical analysis, 
                and solution design. Ideal for engineers, researchers, and technical specialists.
              </p>
              <div className="space-y-2">
                <h4 className="text-white font-semibold">Key Responsibilities:</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Research and development</li>
                  <li>• Prototype design and testing</li>
                  <li>• Technical documentation</li>
                  <li>• Innovation and problem-solving</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Registration <span className="text-primary-500">Form</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete your membership application and join our community of innovators
            </p>
          </div>

          <div className="bg-dark-200 rounded-2xl p-8">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <div>
                    <h3 className="text-green-400 font-semibold">Registration Submitted Successfully!</h3>
                    <p className="text-green-300 text-sm mt-1">
                      Thank you for your membership application! We'll review it and contact you soon.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <div>
                    <h3 className="text-red-400 font-semibold">Submission Failed</h3>
                    <p className="text-red-300 text-sm mt-1">
                      There was an error submitting your application. Please try again.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Validation Errors */}
            {validationErrors.length > 0 && (
              <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-400 mt-0.5" />
                  <div>
                    <h3 className="text-red-400 font-semibold mb-2">Please fix the following errors:</h3>
                    <ul className="text-red-300 text-sm space-y-1">
                      {validationErrors.map((error, index) => (
                        <li key={index}>• {error}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      required
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
              </div>

              {/* Membership Type Selection */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">
                  Membership Type *
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className={`cursor-pointer p-6 rounded-lg border-2 transition-all duration-200 ${
                    formData.membershipType === 'administration'
                      ? 'border-primary-500 bg-primary-500/10'
                      : 'border-gray-600 bg-dark-300 hover:border-primary-500/50'
                  }`}>
                    <input
                      type="radio"
                      name="membershipType"
                      value="administration"
                      checked={formData.membershipType === 'administration'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-primary-500" />
                      <div>
                        <h4 className="text-white font-semibold">Administration</h4>
                        <p className="text-gray-400 text-sm">Leadership & Management</p>
                      </div>
                    </div>
                  </label>

                  <label className={`cursor-pointer p-6 rounded-lg border-2 transition-all duration-200 ${
                    formData.membershipType === 'rd'
                      ? 'border-primary-500 bg-primary-500/10'
                      : 'border-gray-600 bg-dark-300 hover:border-primary-500/50'
                  }`}>
                    <input
                      type="radio"
                      name="membershipType"
                      value="rd"
                      checked={formData.membershipType === 'rd'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6 text-primary-500" />
                      <div>
                        <h4 className="text-white font-semibold">Research & Development</h4>
                        <p className="text-gray-400 text-sm">Technical & Innovation</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Skills Selection */}
              {formData.membershipType && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">
                    Skills & Expertise *
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Select all skills that apply to your experience and expertise:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {getCurrentSkills().map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => handleSkillToggle(skill)}
                        className={`p-3 rounded-lg border-2 text-sm transition-all duration-200 text-left ${
                          formData.selectedSkills.includes(skill)
                            ? 'border-primary-500 bg-primary-500/10 text-primary-500'
                            : 'border-gray-600 bg-dark-300 text-gray-300 hover:border-primary-500/50'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    Selected: {formData.selectedSkills.length} skill{formData.selectedSkills.length !== 1 ? 's' : ''}
                  </p>
                </div>
              )}

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">
                  Additional Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Relevant Experience
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200 resize-none"
                      placeholder="Describe your relevant experience, projects, or background..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Why do you want to join this membership track? *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark-400"></div>
                    Submitting Registration...
                  </>
                ) : (
                  <>
                    Submit Registration
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Membership <span className="text-primary-500">Benefits</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              What you'll gain as a specialized member of The Ingenium Project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-dark-200 rounded-xl">
              <CheckCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Specialized Training</h3>
              <p className="text-gray-400">
                Access to role-specific training and development programs
              </p>
            </div>
            <div className="text-center p-6 bg-dark-200 rounded-xl">
              <CheckCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Leadership Opportunities</h3>
              <p className="text-gray-400">
                Lead projects and initiatives within your area of expertise
              </p>
            </div>
            <div className="text-center p-6 bg-dark-200 rounded-xl">
              <CheckCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Professional Network</h3>
              <p className="text-gray-400">
                Connect with industry professionals and like-minded innovators
              </p>
            </div>
            <div className="text-center p-6 bg-dark-200 rounded-xl">
              <CheckCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Recognition & Certificates</h3>
              <p className="text-gray-400">
                Official recognition for your contributions and achievements
              </p>
            </div>
            <div className="text-center p-6 bg-dark-200 rounded-xl">
              <CheckCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Resource Access</h3>
              <p className="text-gray-400">
                Priority access to tools, equipment, and project resources
              </p>
            </div>
            <div className="text-center p-6 bg-dark-200 rounded-xl">
              <CheckCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Impact & Growth</h3>
              <p className="text-gray-400">
                Make meaningful contributions while developing your skills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-400/10 rounded-2xl p-12 border border-primary-500/20">
            <Users className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Make Your Mark?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our specialized membership program and contribute your expertise to 
              innovative engineering solutions that create real-world impact.
            </p>
            <button 
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 inline-flex items-center gap-2"
            >
              Register Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Membership;