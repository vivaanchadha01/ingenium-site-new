import React from 'react';
import { Award, Target, Users, Lightbulb, Globe, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet the <span className="text-primary-500">Founder</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about transforming challenges into innovative engineering solutions
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary-500/20 to-accent-400/20 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-dark-200 rounded-full flex items-center justify-center">
                    <div className="text-6xl text-primary-500 font-bold">VC</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent-400 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Vivaan Chadha</h2>
                <h3 className="text-xl text-primary-500 mb-6">Founder & Lead Engineer</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  I'm a passionate student engineer dedicated to transforming real-world challenges into 
                  innovative, sustainable solutions. The Ingenium Project represents my commitment to 
                  creating low-cost, high-impact engineering solutions that can make a meaningful difference 
                  in our communities and environment.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  From urban noise pollution to sustainable farming practices, I believe that with the right 
                  approach and determination, we can engineer solutions that address some of our most pressing challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Core <span className="text-primary-500">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that drive every project and innovation at The Ingenium Project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-dark-200 rounded-xl hover:bg-dark-100 transition-colors duration-300">
              <Target className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-400">
                Creative solutions to complex problems through cutting-edge engineering and design thinking
              </p>
            </div>
            <div className="text-center p-8 bg-dark-200 rounded-xl hover:bg-dark-100 transition-colors duration-300">
              <Award className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Impact</h3>
              <p className="text-gray-400">
                Meaningful change through engineering solutions that address real-world challenges
              </p>
            </div>
            <div className="text-center p-8 bg-dark-200 rounded-xl hover:bg-dark-100 transition-colors duration-300">
              <Users className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-gray-400">
                Building solutions together with mentors, peers, and industry partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-dark-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                To transform local and global challenges into low-cost, high-impact engineering solutions. 
                We bridge the gap between identifying problems and creating working prototypes that can 
                make a real difference in communities worldwide.
              </p>
            </div>

            <div className="bg-dark-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent-400/20 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                A world where student innovators are empowered to tackle humanity's greatest challenges 
                through accessible engineering solutions. We envision a future where every problem 
                becomes an opportunity for sustainable innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-primary-500">Approach</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From identifying problems to building working prototypes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-4 text-dark-400 font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Identify</h3>
              <p className="text-gray-400">Research and identify real-world challenges that need innovative solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-4 text-dark-400 font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Design</h3>
              <p className="text-gray-400">Create innovative, sustainable, and cost-effective engineering solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-4 text-dark-400 font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Build</h3>
              <p className="text-gray-400">Develop working prototypes using accessible materials and technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-4 text-dark-400 font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Impact</h3>
              <p className="text-gray-400">Deploy solutions to create meaningful change in communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-400/10 rounded-2xl p-12 border border-primary-500/20">
            <Globe className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you're a mentor, fellow innovator, or potential collaborator, 
              let's work together to create solutions that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/projects"
                className="bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                View Projects
              </Link>
              <Link 
                to="/contact"
                className="border border-primary-500 text-primary-500 px-8 py-3 rounded-full font-semibold hover:bg-primary-500/10 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;