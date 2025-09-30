"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image'; // Import Next.js Image component

export default function ThiqafAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Web Design',
      description: 'Beautiful, responsive websites that convert visitors into customers. We focus on user experience and modern design principles.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
    },
    {
      title: 'Social Media Management',
      description: 'Strategic social media presence that builds communities and drives engagement. From content creation to analytics.',
      features: ['Content Strategy', 'Community Building', 'Analytics &amp; Insights', 'Brand Consistency'],
    },
    {
      title: 'Brand Development',
      description: 'Create a memorable brand identity that resonates with your audience and stands out in the market.',
      features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Market Research'],
    },
  ];

  const stats = [
    { label: 'Web Design', value: '95%' },
    { label: 'Social Media Strategy', value: '90%' },
    { label: 'Brand Development', value: '88%' },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description: "We'll discuss your project goals and requirements",
    },
    {
      step: '02',
      title: 'Proposal',
      description: 'Detailed project timeline and pricing',
    },
    {
      step: '03',
      title: 'Project Start',
      description: 'Begin bringing your vision to life',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl">
                T
              </div>
              <div>
                <div className="text-xl font-bold">thiqaf</div>
                <div className="text-xs text-gray-400">Crafting digital experiences</div>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-lg border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Design that
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text">
                speaks volumes
              </span>
            </h1>
            <p className="text-lg text-gray-400">
              We craft exceptional digital experiences through thoughtful web design and strategic social media management that elevates your brand.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                Start Your Project
              </button>
              <button className="px-6 py-3 border border-gray-600 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                View Our Work
              </button>
            </div>
          </div>
          <div className="relative">
            <Image src="https://via.placeholder.com/400x300?text=Hero+Image" alt="Hero" width={400} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            We specialize in creating digital solutions that help your business thrive in the modern landscape.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg">
                <Image src={`https://via.placeholder.com/300x200?text=${service.title}`} alt={service.title} width={300} height={200} className="rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Crafting digital experiences
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text">
                with purpose
              </span>
            </h2>
            <p className="text-lg text-gray-400">
              At thiqaf, we believe that great design is more than just aesthetics—it&apos;s about creating meaningful connections between brands and their audiences. Our team combines creative vision with strategic thinking to deliver solutions that not only look exceptional but also drive real business results.
            </p>
          </div>
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>{stat.label}</span>
                  <span className="text-purple-400">{stat.value}</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: stat.value }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What to Expect</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Our streamlined process ensures your project runs smoothly from start to finish.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s Work Together</h2>
            <p className="text-lg text-gray-400">
              Ready to elevate your digital presence? Get in touch and let&apos;s discuss how we can bring your vision to life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-400">hello@thiqaf.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-semibold">Response Time</div>
                  <div className="text-gray-400">We typically respond within 24 hours</div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
              <input type="email" placeholder="your@email.com" className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
              <input type="text" placeholder="Subject" className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
              <textarea placeholder="Tell us about your project..." rows={4} className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
              <button className="w-full py-2 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl">
              T
            </div>
            <div>
              <div className="text-lg font-bold">thiqaf</div>
              <div className="text-xs text-gray-400">Crafting digital experiences with purpose</div>
            </div>
          </div>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-500 text-sm">
          &copy; 2024 thiqaf. All rights reserved.
        </div>
      </footer>
    </div>
  );
}