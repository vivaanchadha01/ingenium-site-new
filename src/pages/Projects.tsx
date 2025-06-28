import React, { useState } from 'react';
import { Bone as Drone, Wind, Flame, Sprout, Zap, ArrowRight, Clock, CheckCircle, AlertCircle, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  status: 'completed' | 'in-progress' | 'concept';
  icon: React.ReactNode;
  tags: string[];
  impact: string;
  category: string;
  timeline: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 'noise-mapping',
      title: 'Urban Noise Mapping with UAVs',
      description: 'Drone-mounted sensors to map real-time urban noise and inform policy decisions.',
      longDescription: 'Advanced UAV system equipped with precision acoustic sensors to create comprehensive noise pollution maps of urban areas, providing actionable data for city planners and environmental agencies. The system features real-time data transmission, GPS tracking, and automated flight patterns for consistent monitoring.',
      status: 'concept',
      icon: <Drone className="w-8 h-8" />,
      tags: ['UAV', 'IoT', 'Environmental', 'Data Analytics'],
      impact: 'Target: Real-time urban noise monitoring for 10+ city blocks',
      category: 'Environmental',
      timeline: 'Planning phase',
      technologies: ['Arduino', 'GPS', 'Wireless Communication', 'Data Visualization']
    },
    {
      id: 'aqi-display',
      title: 'Smart AQI Display System',
      description: 'Solar-powered air quality monitors for schools and public spaces with live displays.',
      longDescription: 'Autonomous air quality monitoring stations featuring solar power systems, real-time displays, and wireless connectivity to provide communities with immediate access to air quality information. Each station monitors PM2.5, PM10, CO2, and other key pollutants with 24/7 operation.',
      status: 'in-progress',
      icon: <Wind className="w-8 h-8" />,
      tags: ['IoT', 'Solar', 'Public Health', 'Display Systems'],
      impact: 'Target: Deploy in 5 schools, monitoring air quality for 2000+ students',
      category: 'Environmental',
      timeline: '6 months (ongoing)',
      technologies: ['Solar Panels', 'Air Quality Sensors', 'LCD Displays', 'WiFi Modules']
    },
    {
      id: 'tlud-cookstove',
      title: 'TLUD Cookstove Solution',
      description: 'Clean-burning biomass stove that produces biochar instead of harmful smoke.',
      longDescription: 'Top-Lit Up-Draft cookstove design that eliminates stubble burning while producing valuable biochar, addressing both air pollution and agricultural waste management. The design optimizes combustion efficiency while creating a valuable soil amendment product.',
      status: 'in-progress',
      icon: <Flame className="w-8 h-8" />,
      tags: ['Biomass', 'Agriculture', 'Clean Energy', 'Sustainability'],
      impact: 'Target: Reduce smoke emissions by 90%, produce 2kg biochar daily',
      category: 'Clean Energy',
      timeline: '4 months (ongoing)',
      technologies: ['Thermal Engineering', 'Biomass Processing', 'Combustion Optimization']
    },
    {
      id: 'drone-farming',
      title: 'Drone-Assisted Sustainable Farming',
      description: 'Precision pesticide-free farming using advanced UAV technology in Punjab.',
      longDescription: 'Comprehensive drone-based farming system utilizing computer vision and precision agriculture techniques to optimize crop health without harmful pesticides. Features include crop health monitoring, targeted nutrient delivery, and automated pest detection using AI-powered image analysis.',
      status: 'concept',
      icon: <Sprout className="w-8 h-8" />,
      tags: ['Precision Agriculture', 'Computer Vision', 'Sustainability', 'UAV'],
      impact: 'Target: 100 acres pesticide-free farming coverage',
      category: 'Agriculture',
      timeline: 'Planning phase',
      technologies: ['Computer Vision', 'Machine Learning', 'Precision Spraying', 'Crop Analytics']
    },
    {
      id: 'pollution-streetlights',
      title: 'Pollution-Mitigating Streetlights',
      description: 'Streetlight-based mist systems to reduce dust and particulate matter exposure.',
      longDescription: 'Innovative integration of pollution mitigation technology into existing street lighting infrastructure, using fine mist systems to capture airborne particles and improve local air quality. The system activates based on real-time air quality readings and weather conditions.',
      status: 'concept',
      icon: <Zap className="w-8 h-8" />,
      tags: ['Smart Cities', 'Air Purification', 'Infrastructure', 'IoT'],
      impact: 'Potential: 30% reduction in local particulate matter',
      category: 'Smart Cities',
      timeline: 'Planning phase',
      technologies: ['Misting Systems', 'Air Quality Sensors', 'Smart Controls', 'LED Integration']
    }
  ];

  const categories = ['all', 'Environmental', 'Clean Energy', 'Agriculture', 'Smart Cities'];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-yellow-400';
      case 'concept': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in-progress': return <Clock className="w-4 h-4" />;
      case 'concept': return <AlertCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'concept': return 'Concept Phase';
      default: return '';
    }
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Engineering <span className="text-primary-500">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative solutions addressing real-world challenges through sustainable technology 
              and engineering excellence
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">5</div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">0</div>
              <div className="text-gray-400 text-sm">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">2</div>
              <div className="text-gray-400 text-sm">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">3</div>
              <div className="text-gray-400 text-sm">Concept Phase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-dark-300 border-b border-primary-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-gray-400">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by category:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedFilter === category
                      ? 'bg-primary-500 text-dark-400'
                      : 'bg-dark-200 text-gray-400 hover:bg-dark-100 hover:text-white'
                  }`}
                >
                  {category === 'all' ? 'All Projects' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-dark-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-dark-200 rounded-2xl p-8 hover:bg-dark-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/10 border border-transparent hover:border-primary-500/20"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-primary-500 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className={`flex items-center gap-2 ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    <span className="text-sm font-medium">{getStatusText(project.status)}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Meta Info */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-accent-400 text-sm font-medium">Impact: </span>
                    <span className="text-gray-300 text-sm">{project.impact}</span>
                  </div>
                  <div>
                    <span className="text-accent-400 text-sm font-medium">Timeline: </span>
                    <span className="text-gray-300 text-sm">{project.timeline}</span>
                  </div>
                  <div>
                    <span className="text-accent-400 text-sm font-medium">Category: </span>
                    <span className="text-gray-300 text-sm">{project.category}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <span className="text-accent-400 text-sm font-medium mb-2 block">Technologies:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-primary-500/10 text-primary-500 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-dark-300 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="group/btn flex items-center gap-2 text-primary-500 hover:text-white transition-colors duration-200 font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-400/10 rounded-2xl p-12 border border-primary-500/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Have an Engineering Challenge?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project. From concept to prototype, 
              we can work together to create innovative solutions that make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                Start a Project
              </Link>
              <Link 
                to="/about"
                className="border border-primary-500 text-primary-500 px-8 py-3 rounded-full font-semibold hover:bg-primary-500/10 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;