"use client";

import React, { useState } from 'react';
import { Mail, ExternalLink, Menu, Contact, X } from 'lucide-react'; // Keep general icons here
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Use Fa for Brands
import { FaX } from 'react-icons/fa6';
//import { SiGithub, SiX } from '@icons-pack/react-simple-icons'; // Get brand icons here

const projects = [
  {
    title: "Multi-Post Stories",
    subtitle: "Gain+ Programme",
    tags: ["Html", "Tailwinds CSS", "Django"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard dummy text ever since the 1500s."
  },
  {
    title: "Professional Art Printing Data",
    subtitle: "Data Visualization",
    tags: ["Html", "Tailwinds CSS", "Python"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard."
  }
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-orange-100 selection:text-[#ff4500]">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-[#172b4d] tracking-tighter">
            Allan <span className="text-[#ff4500]">K.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {['Portfolio', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[#344563] font-semibold hover:text-[#ff4500] transition-colors">
                {item}
              </a>
            ))}
            <a href={`#contact`}><Mail className="w-5 h-5 text-[#607d8b] cursor-pointer hover:text-[#ff4500]" /></a>
            
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-[#172b4d] mb-6 leading-[1.1]">
              Hey There. <br /> I'm <span className="text-[#ff4500]">Allan.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#ff4500] mb-6">
              I'm a Software Developer
            </h2>
            <p className="text-lg text-[#505f79] leading-relaxed mb-10">
              I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.
            </p>
            
            <div className="flex gap-5">
              {/* We manually list them now instead of a loop to handle different libraries */}
              <a href="https://www.github.com/allenkays" target="_blank" className="text-[#505f79] hover:text-[#ff4500] hover:-translate-y-1 transition-all">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/allan-sang" target="_blank" className="text-[#505f79] hover:text-[#ff4500] hover:-translate-y-1 transition-all">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.x.com/allenkays" target="_blank" className="text-[#505f79] hover:text-[#ff4500] hover:-translate-y-1 transition-all">
                <FaX size={24} />
              </a>
              <a href={`#contact`} className="text-[#505f79] hover:text-[#ff4500] hover:-translate-y-1 transition-all">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="portfolio" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-bold text-[#172b4d]">My Recent Works</h2>
            <div className="h-[2px] flex-grow bg-slate-100 mt-2"></div>
          </div>

          <div className="grid gap-12">
            {projects.map((p, i) => (
              <div key={i} className="group flex flex-col md:flex-row gap-8 items-center bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-orange-900/5 transition-all p-4 md:p-8">
                <div className="w-full md:w-1/2 overflow-hidden rounded-xl border border-slate-50">
                  <img src={p.image} alt={p.title} className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold text-[#172b4d] mb-4">{p.title}</h3>
                  <p className="text-[#505f79] mb-6 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded text-sm font-medium text-[#344563]">{tag}</span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#ff4500] text-white font-bold rounded-lg hover:bg-[#e63e00] transition-all active:scale-95">
                    See Project <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold text-[#172b4d] mb-8">About me</h2>
            <p className="text-[#505f79] text-lg leading-relaxed mb-8">
              Hello I’m a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.
            </p>
            <button className="px-8 py-4 bg-[#ff4500] text-white font-bold rounded hover:shadow-lg hover:shadow-orange-500/30 transition-all">
              Get my resume
            </button>
          </div>
          
          <div className="md:w-1/2 grid gap-6">
            {[
              { title: "Languages", skills: "JavaScript, Python, HTML, CSS", color: "bg-[#ff4500]" },
              { title: "Frameworks", skills: "Next.js, Django, React", color: "bg-[#172b4d]" },
              { title: "Skills", skills: "Database Management, Version Control, CLI", color: "bg-[#607d8b]" }
            ].map((cat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 flex items-start gap-4">
                <div className={`w-3 h-3 rounded-full mt-2 ${cat.color}`} />
                <div>
                  <h4 className="text-xl font-bold text-[#172b4d] mb-1">{cat.title}</h4>
                  <p className="text-[#505f79]">{cat.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-[#172b4d] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">I'm always interested in hearing about new projects.</h2>
          <p className="text-slate-300 mb-12 text-lg">If you'd like to chat please get in touch.</p>
          <form className="grid gap-4 text-left">
            <input type="text" placeholder="Full Name" className="p-4 rounded bg-white text-slate-900 outline-none" />
            <input type="email" placeholder="Email address" className="p-4 rounded bg-white text-slate-900 outline-none" />
            <textarea placeholder="Enter your message here..." rows={4} className="p-4 rounded bg-white text-slate-900 outline-none"></textarea>
            <button className="bg-[#ff4500] text-white font-extrabold py-4 rounded-lg hover:bg-[#e63e00] transition-colors uppercase tracking-widest text-sm">
              Get in touch
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}