import React from 'react';
import { ArrowRight, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Mock progress data - in a real app, this would come from a backend
  const currentFunding = 0; // Current amount raised
  const fundingGoal = 50000; // Goal amount
  const progressPercentage = (currentFunding / fundingGoal) * 100;
  const backers = 0;

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen bg-dark-400 relative overflow-hidden flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Logo/Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-400 rounded-full flex items-center justify-center animate-pulse-glow">
                <Zap className="w-10 h-10 text-dark-400" />
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in-up">
              From Problem to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-400">
                Prototype
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Student-led engineering solutions tackling real-world challenges through innovative design and sustainable technology.
            </p>

            {/* Funding Progress */}
            <div className="max-w-md mx-auto mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-dark-200 rounded-lg p-4 border border-primary-500/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Project Funding</span>
                  <span className="text-sm text-primary-500 font-semibold">
                    ₹{currentFunding.toLocaleString()} / ₹{fundingGoal.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-dark-300 rounded-full h-3 mb-2">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-accent-400 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${Math.max(progressPercentage, 2)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 text-center">
                  {progressPercentage === 0 ? 'Just getting started!' : `${progressPercentage.toFixed(1)}% funded`}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link 
                to="/projects"
                className="group bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link 
                to="/membership"
                className="group border border-primary-500 text-primary-500 px-8 py-4 rounded-full font-semibold hover:bg-primary-500/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Join the Team
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">5</div>
                <div className="text-gray-400 text-sm">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">2</div>
                <div className="text-gray-400 text-sm">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">100%</div>
                <div className="text-gray-400 text-sm">Open Source</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">2024</div>
                <div className="text-gray-400 text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Engineering Solutions for a <span className="text-primary-500">Better Tomorrow</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            The Ingenium Project transforms real-world challenges into innovative, sustainable solutions. 
            From urban noise pollution to sustainable farming practices, we believe that with the right 
            approach and determination, we can engineer solutions that address some of our most pressing challenges.
          </p>
        </div>
      </section>

      {/* Quick Project Preview */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured <span className="text-primary-500">Innovation</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our latest engineering breakthroughs and ongoing projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-200 rounded-xl p-6 hover:bg-dark-100 transition-all duration-300 hover:scale-105">
              <div className="text-primary-500 mb-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Urban Noise Mapping</h3>
              <p className="text-gray-400 mb-4">
                Drone-mounted sensors creating real-time noise pollution maps for urban planning.
              </p>
              <span className="text-blue-400 text-sm font-medium">⚡ Concept Phase</span>
            </div>

            <div className="bg-dark-200 rounded-xl p-6 hover:bg-dark-100 transition-all duration-300 hover:scale-105">
              <div className="text-primary-500 mb-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart AQI Display</h3>
              <p className="text-gray-400 mb-4">
                Solar-powered air quality monitors for schools with live displays.
              </p>
              <span className="text-yellow-400 text-sm font-medium">⏳ In Progress</span>
            </div>

            <div className="bg-dark-200 rounded-xl p-6 hover:bg-dark-100 transition-all duration-300 hover:scale-105">
              <div className="text-primary-500 mb-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">TLUD Cookstove</h3>
              <p className="text-gray-400 mb-4">
                Clean-burning biomass stove that produces biochar instead of harmful smoke.
              </p>
              <span className="text-yellow-400 text-sm font-medium">⏳ In Progress</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/projects"
              className="bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 inline-flex items-center gap-2"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;