import React, { useState } from 'react';
import { Heart, Target, Users, Zap, CreditCard, Shield, Award, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sponsor: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [sponsorInfo, setSponsorInfo] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Mock current funding data
  const currentFunding = 0; // Current amount raised
  const fundingGoal = 50000; // Goal amount
  const progressPercentage = (currentFunding / fundingGoal) * 100;
  const backers = 0;

  const predefinedAmounts = [1000, 2500, 5000, 10000, 25000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setIsCustom(true);
    setSelectedAmount(0);
  };

  const getFinalAmount = () => {
    return isCustom ? parseInt(customAmount) || 0 : selectedAmount;
  };

  const handleSponsorshipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = getFinalAmount();
    
    // Create UPI payment link
    const upiId = 'chadhavivaan007@paytm'; // Replace with actual UPI ID
    const payeeName = 'The Ingenium Project';
    const transactionNote = `Sponsorship for The Ingenium Project - ${sponsorInfo.name}`;
    
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
    
    // Try to open UPI app, fallback to showing payment details
    window.location.href = upiLink;
    
    // Also show payment confirmation
    alert(`Thank you for your sponsorship of ₹${amount.toLocaleString()}! Please complete the payment through your UPI app.`);
  };

  const sponsorshipTiers = [
    {
      name: 'Supporter',
      amount: '₹1,000 - ₹4,999',
      benefits: ['Project updates', 'Thank you mention', 'Digital certificate'],
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: 'Contributor',
      amount: '₹5,000 - ₹14,999',
      benefits: ['All Supporter benefits', 'Quarterly progress reports', 'Early access to prototypes'],
      icon: <Target className="w-6 h-6" />
    },
    {
      name: 'Partner',
      amount: '₹15,000 - ₹29,999',
      benefits: ['All Contributor benefits', 'Logo on website', 'Direct project consultation'],
      icon: <Users className="w-6 h-6" />
    },
    {
      name: 'Champion',
      amount: '₹30,000+',
      benefits: ['All Partner benefits', 'Co-branding opportunities', 'Priority collaboration access'],
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Become a <span className="text-primary-500">Sponsor</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Support innovative engineering solutions that tackle real-world challenges. 
              Your contribution helps transform ideas into impactful prototypes.
            </p>
          </div>

          {/* Funding Progress */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-dark-200 rounded-2xl p-8 border border-primary-500/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Current Funding Progress</h3>
                <p className="text-gray-400">Help us reach our goal to accelerate innovation</p>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-primary-500">
                    ₹{currentFunding.toLocaleString()}
                  </span>
                  <span className="text-lg font-semibold text-gray-300">
                    ₹{fundingGoal.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-dark-300 rounded-full h-4 mb-3">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-accent-400 h-4 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${Math.max(progressPercentage, 2)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{progressPercentage === 0 ? 'Just getting started!' : `${progressPercentage.toFixed(1)}% funded`}</span>
                  <span>{backers} {backers === 1 ? 'backer' : 'backers'}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-500">₹{(fundingGoal - currentFunding).toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Needed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-400">{backers}</div>
                  <div className="text-xs text-gray-400">Supporters</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-500">5</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Form */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Amount Selection */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Choose Your Contribution</h2>
              
              {/* Predefined Amounts */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedAmount === amount && !isCustom
                        ? 'border-primary-500 bg-primary-500/10 text-primary-500'
                        : 'border-gray-600 bg-dark-200 text-gray-300 hover:border-primary-500/50'
                    }`}
                  >
                    <div className="text-xl font-bold">₹{amount.toLocaleString()}</div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">₹</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    placeholder="Enter custom amount"
                    className="w-full bg-dark-200 border border-gray-600 rounded-lg py-3 px-8 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Selected Amount Display */}
              <div className="bg-dark-200 rounded-lg p-4 border border-primary-500/20 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Your Contribution:</span>
                  <span className="text-2xl font-bold text-primary-500">
                    ₹{getFinalAmount().toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Sponsor Information Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Sponsor Information</h2>
              
              <form onSubmit={handleSponsorshipSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={sponsorInfo.name}
                    onChange={(e) => setSponsorInfo({...sponsorInfo, name: e.target.value})}
                    className="w-full bg-dark-200 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={sponsorInfo.email}
                    onChange={(e) => setSponsorInfo({...sponsorInfo, email: e.target.value})}
                    className="w-full bg-dark-200 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization (Optional)
                  </label>
                  <input
                    type="text"
                    value={sponsorInfo.company}
                    onChange={(e) => setSponsorInfo({...sponsorInfo, company: e.target.value})}
                    className="w-full bg-dark-200 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={sponsorInfo.message}
                    onChange={(e) => setSponsorInfo({...sponsorInfo, message: e.target.value})}
                    className="w-full bg-dark-200 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200 resize-none"
                    placeholder="Any message or specific project you'd like to support..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={getFinalAmount() === 0 || !sponsorInfo.name || !sponsorInfo.email}
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CreditCard className="w-5 h-5" />
                  Proceed to Payment
                </button>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>Secure payment via UPI. Your information is protected.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sponsorship <span className="text-primary-500">Tiers</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Different levels of support with unique benefits and recognition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <div key={tier.name} className="bg-dark-200 rounded-xl p-6 border border-gray-600 hover:border-primary-500/50 transition-all duration-300">
                <div className="text-primary-500 mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    {tier.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-primary-500 font-semibold mb-4">{tier.amount}</p>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why <span className="text-primary-500">Sponsor</span> Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your support directly enables innovative engineering solutions that create real-world impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-dark-200 rounded-xl">
              <Target className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Direct Impact</h3>
              <p className="text-gray-400">
                Your funding directly supports prototype development, testing, and deployment of solutions that address real challenges.
              </p>
            </div>
            <div className="text-center p-8 bg-dark-200 rounded-xl">
              <Star className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Innovation Support</h3>
              <p className="text-gray-400">
                Be part of cutting-edge student innovation that bridges the gap between academic learning and practical solutions.
              </p>
            </div>
            <div className="text-center p-8 bg-dark-200 rounded-xl">
              <Users className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Community Building</h3>
              <p className="text-gray-400">
                Join a community of forward-thinking supporters who believe in the power of engineering to solve global challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-400/10 rounded-2xl p-12 border border-primary-500/20">
            <Zap className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Every contribution, no matter the size, helps us turn innovative ideas into 
              working solutions that can change the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 inline-flex items-center gap-2"
              >
                Sponsor Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link 
                to="/contact"
                className="border border-primary-500 text-primary-500 px-8 py-3 rounded-full font-semibold hover:bg-primary-500/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sponsor;