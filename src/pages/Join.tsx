import React, { useState } from 'react';

const Join: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whyJoin: '',
    interests: [] as string[],
    otherInterest: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const roles = [
    'AI & Machine Learning',
    'CAD & Product Design',
    'Circuits & IoT',
    'Frontend Development',
    'Backend & Databases',
    'Project Management',
    'Social Media & Branding',
    'Sponsorship & Outreach',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((i) => i !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whyJoin) {
      setError('Please fill out all required fields.');
      return;
    }

    const allInterests = [
      ...formData.interests,
      ...(formData.otherInterest ? [formData.otherInterest] : []),
    ];

    const payload = {
      name: formData.name,
      email: formData.email,
      whyJoin: formData.whyJoin,
      interests: allInterests,
    };

    try {
      const response = await fetch('https://formspree.io/f/mwkdqjjg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setSubmitted(true);
        setError('');
        setFormData({
          name: '',
          email: '',
          whyJoin: '',
          interests: [],
          otherInterest: '',
        });
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } catch {
      setError('Network error. Please try again.');
    }
  };

  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-dark-400 text-white">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Join The Ingenium Project</h1>
        <p className="text-lg text-gray-400">
          We're a team of students solving real-world problems with engineering. If you’re passionate about sustainability, tech, or innovation — we want to work with you.
        </p>
      </section>

      <section className="max-w-3xl mx-auto bg-dark-300 p-8 rounded-xl shadow-md">
        {submitted ? (
          <div className="text-green-400 text-center text-xl font-semibold">
            Thank you for joining! We'll reach out to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <p className="text-red-500 font-semibold">{error}</p>}

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-dark-400 border border-gray-600 text-white"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-dark-400 border border-gray-600 text-white"
            />

            <textarea
              name="whyJoin"
              placeholder="Why do you want to join?"
              value={formData.whyJoin}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-dark-400 border border-gray-600 text-white"
            />

            <div>
              <h3 className="text-white text-lg font-semibold mb-2">Select Your Interests</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {roles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    className={`px-4 py-2 rounded-full border text-sm transition ${
                      formData.interests.includes(role)
                        ? 'bg-primary-500 text-dark-400 border-primary-500'
                        : 'bg-dark-400 text-gray-300 border-gray-600 hover:border-primary-500'
                    }`}
                    onClick={() => handleInterestToggle(role)}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <input
              name="otherInterest"
              type="text"
              placeholder="Other interest (optional)"
              value={formData.otherInterest}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-dark-400 border border-gray-600 text-white"
            />

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 font-bold rounded-lg hover:opacity-90"
            >
              Join Now
            </button>
          </form>
        )}
      </section>
    </main>
  );
};

export default Join;
