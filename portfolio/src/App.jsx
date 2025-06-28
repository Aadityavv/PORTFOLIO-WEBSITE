import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaJava, FaNodeJs, FaPython, FaAws, FaDatabase } from 'react-icons/fa'
import { SiSpringboot, SiPostgresql, SiMongodb, SiDocker, SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si'
import './App.css'
import ProfilePic from './assets/ProfilePic.jpeg'
import { motion } from 'framer-motion'
import ResumePDF from './assets/AadityaVijayvargiya.pdf'

const skills = [
  { name: 'Java', icon: <FaJava className="text-orange-600" />, desc: 'Robust OOP language for backend systems' },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-700" />, desc: 'Enterprise Java backend framework' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, desc: 'JavaScript runtime for scalable servers' },
  { name: 'Express.js', icon: <FaNodeJs className="text-gray-700" />, desc: 'Minimal Node.js web framework' },
  { name: 'React', icon: <SiReact className="text-blue-400" />, desc: 'Modern frontend UI library' },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-700" />, desc: 'Typed superset of JavaScript' },
  { name: 'Python', icon: <FaPython className="text-yellow-400" />, desc: 'Versatile scripting and ML language' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800" />, desc: 'Advanced open-source SQL database' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, desc: 'NoSQL document database' },
  { name: 'Docker', icon: <SiDocker className="text-blue-500" />, desc: 'Containerization for deployment' },
  { name: 'AWS', icon: <FaAws className="text-yellow-500" />, desc: 'Cloud infrastructure & DevOps' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, desc: 'Utility-first CSS framework' },
]

const projects = [
  {
    title: 'UPES Health Services',
    stack: ['React.js', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    description: 'Full-stack healthcare management system serving 15,000+ users with role-based authentication, automated prescription tracking, and real-time analytics.',
    impact: 'Reduced medicine stockouts by 30%, improved clinic efficiency by 25%.'
  },
  {
    title: 'Litigate',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    description: 'Responsive legal case management frontend with ML-powered document visualization and advanced search/filter.',
    impact: 'Reduced user query time by 40%.'
  },
  {
    title: 'Optimized Inverted Indexing with PSO',
    stack: ['Java', 'Python'],
    description: 'Tag-based image retrieval system using PSO and hash maps on Flickr30K dataset.',
    impact: 'Efficient query ranking and data processing.'
  },
]

const experiences = [
  {
    company: 'Suratec Co., Ltd.',
    role: 'Mobile Application Developer Intern',
    period: 'May 2025 – Ongoing',
    location: 'Nakhon Ratchasima, Thailand',
    details: [
      'Developed cross-platform mobile app for smart shoe-sole technology, enabling real-time gait analysis for 5,000+ patients.',
      'Built dashboard for doctors and patients to visualize walking data and track rehabilitation.'
    ]
  },
  {
    company: 'Fab Critical Care',
    role: 'Software Developer Intern',
    period: 'June 2024 – July 2024',
    location: 'New Delhi, India',
    details: [
      'Enhanced site performance and implemented new features, launching 9 major updates.',
      'Collaborated in a remote team, strengthening technical and communication skills.'
    ]
  }
]

const publications = [
  {
    title: 'Development of a GI Cancer Diagnostic Chatbot Using RoBERTa large and the RAG Model',
    year: '2024',
    tech: 'Python, RoBERTa large, RAG model'
  },
  {
    title: 'Optimized Spoken Query Cross-Lingual Document Retrieval using BM25 and Neural Re-Ranking with AdamW',
    year: '2025',
    tech: 'BM25F, AdamW, neural re-ranking'
  }
]

const certifications = [
  'AWS Cloud Practitioner Essentials',
  'AWS Developing Machine Learning Solutions',
  'AWS Essentials Of Prompt Engineering'
]

const education = [
  {
    school: 'University of Petroleum and Energy Studies',
    degree: 'B.Tech in Computer Science (Full Stack AI)',
    year: 'Expected 2026',
    location: 'Dehradun, India',
    gpa: '8.12/10'
  },
  {
    school: 'Hansraj Modern Public School',
    degree: 'Class XII',
    year: '2022',
    location: 'Jhansi, India',
    gpa: '78%'
  },
  {
    school: 'Rani Laxmibai Public School',
    degree: 'Class X',
    year: '2020',
    location: 'Jhansi, India',
    gpa: '87%'
  }
]

function App() {
  // Custom cursor state
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  // Contact form state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  function handleFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    setFormSuccess(true);
    console.log('Contact Form Submission:', form);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setFormSuccess(false), 4000);
  }

  return (
    <>
      {/* Page Background */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 z-[-2]" aria-hidden="true" />
      {/* Indian Army Banner (no margin) */}
      <div className="w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-black text-center py-2 font-semibold shadow-md">
        Proud contributor to mission-critical software for the <span className="font-bold bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent" style={{textShadow: '0 1px 4px rgba(0,0,0,0.35), 0 0px 1px #000'}}>Indian Army</span> <span className="font-bold" style={{color:'#138808'}}>🇮🇳</span> during <span className="font-bold text-black">Operation Sindoor</span> — deployed in Sikkim, with a PAN-India rollout in progress.
      </div>
      {/* Navbar (no margin) */}
      <nav className="backdrop-blur-md bg-black/60 sticky top-0 z-50 w-full shadow-md">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-xl md:text-2xl font-bold tracking-tight text-cyan-400">Aaditya Vijayvargiya</div>
          <div className="flex gap-4 text-lg md:text-xl">
            <a href="mailto:aadityavv9@gmail.com" className="hover:text-cyan-400 transition-colors" title="Email"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/aadityavv9/" className="hover:text-cyan-400 transition-colors" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Aadityavv" className="hover:text-cyan-400 transition-colors" title="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </nav>
      {/* Main Content (with margin) */}
      <div className="relative z-[1] mx-4 md:mx-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col md:flex-row items-center justify-center py-16 px-4 text-center md:text-left min-h-[60vh] animate-fade-in gap-8 md:gap-16"
        >
          <div className="flex flex-col items-center md:items-start">
            <img src={ProfilePic} alt="Aaditya Vijayvargiya" className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-white object-cover mb-4 transition-transform duration-300 hover:scale-105" />
            <div className="bg-black/70 px-4 py-2 rounded-full shadow text-white font-bold text-lg md:text-xl mb-2 border border-white/10">Aaditya Vijayvargiya</div>
            <div className="text-cyan-300 font-semibold text-sm md:text-base">Backend Specialist & Full Stack Developer</div>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              Backend is my playground.<br className="hidden md:block" />
              <span className="text-cyan-400">Spring Boot</span> is my superpower.
            </h1>
            <p className="max-w-xl text-base md:text-xl text-gray-300 mb-6">
              I'm Aaditya, a backend-obsessed developer who crafts robust, scalable systems and APIs that power real-world products. I architect microservices, optimize databases, and automate deployments—turning complex business logic into elegant, maintainable code.<br/>
              <span className="font-semibold bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent">Proudly built and deployed mission-critical software for the Indian Army during Operation Sindoor</span>.<br/>
              <span className="text-cyan-300 font-semibold">But I'm not just a backend wizard:</span> I build beautiful, responsive UIs with React, and I love solving tough data structure and algorithm challenges. My code impacts 15,000+ users and supports AI-driven research.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-2 mb-4">
              <span className="bg-cyan-500/80 px-3 py-1 rounded-full font-semibold text-sm md:text-base shadow">Spring Boot Specialist</span>
              <span className="bg-cyan-500/80 px-3 py-1 rounded-full font-semibold text-sm md:text-base shadow">API & Microservices Architect</span>
              <span className="bg-cyan-500/80 px-3 py-1 rounded-full font-semibold text-sm md:text-base shadow">React Frontend Pro</span>
              <span className="bg-cyan-500/80 px-3 py-1 rounded-full font-semibold text-sm md:text-base shadow">DSA Enthusiast</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
              <a href={ResumePDF} download className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-full shadow transition-colors mb-4">Download Resume</a>
              {/* <a href="mailto:aadityavv9@gmail.com" className="text-cyan-300 underline hover:text-cyan-400 font-medium">aadityavv9@gmail.com</a>
              <a href="https://www.linkedin.com/in/aadityavv9/" className="text-cyan-300 underline hover:text-cyan-400 font-medium" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/Aadityavv" className="text-cyan-300 underline hover:text-cyan-400 font-medium" target="_blank" rel="noopener noreferrer">GitHub</a> */}
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="py-8 md:py-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-cyan-300">About Me</h2>
          <p className="text-base md:text-lg text-gray-200 mb-2">
            I thrive in the backend—designing scalable architectures, building secure REST APIs, and deploying microservices on the cloud. My expertise in <span className="text-cyan-300 font-semibold">Spring Boot</span>, <span className="text-cyan-300 font-semibold">Node.js</span>, and <span className="text-cyan-300 font-semibold">PostgreSQL</span> allows me to deliver high-performance solutions that scale.
          </p>
          <p className="text-base md:text-lg text-gray-200 mb-2">
            I'm also a strong advocate for clean code, test-driven development, and automation. My experience spans from healthcare platforms to AI-powered research tools, always focusing on reliability and user impact.
          </p>
          <p className="text-base md:text-lg text-gray-200 mb-2">
            On the frontend, I create seamless user experiences with <span className="text-cyan-300 font-semibold">React</span> and <span className="text-cyan-300 font-semibold">TypeScript</span>. I'm passionate about data structures, algorithms, and continuous learning—always pushing myself to solve harder problems and build better products.
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            If you're looking for a developer who can own the backend, collaborate on the frontend, and bring a problem-solving mindset to your team—I'm your guy.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="py-8 md:py-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-300">Technical Skills</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
            {skills.map((skill, idx) => (
              <div
                key={skill.name}
                className={`relative flex flex-col items-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-3 md:p-4 shadow transition-transform duration-200 ${hoveredSkill === idx ? 'scale-110 ring-2 ring-cyan-400/60' : 'hover:scale-105'}`}
                onMouseEnter={() => setHoveredSkill(idx)}
                onMouseLeave={() => setHoveredSkill(null)}
                tabIndex={0}
                onFocus={() => setHoveredSkill(idx)}
                onBlur={() => setHoveredSkill(null)}
                aria-label={skill.name + ': ' + skill.desc}
              >
                <div className={`text-2xl md:text-3xl mb-1 transition-all duration-200 ${hoveredSkill === idx ? 'drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]' : ''}`}>{skill.icon}</div>
                <span className="text-xs md:text-sm font-semibold text-gray-100">{skill.name}</span>
                {/* Tooltip */}
                {hoveredSkill === idx && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs rounded px-2 py-1 shadow-lg whitespace-nowrap z-10 animate-fade-in pointer-events-none">
                    {skill.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="py-8 md:py-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-300">Experience</h2>
          <ol className="relative border-l-2 border-cyan-700/40 ml-2">
            {experiences.map((exp, idx) => (
              <li key={exp.company} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-7 h-7 bg-cyan-700/80 rounded-full -left-4 ring-2 ring-cyan-900/60">
                  <FaDatabase className="text-white text-base" />
                </span>
                <h3 className="flex items-center mb-1 text-lg md:text-xl font-semibold text-cyan-200">{exp.role} <span className="ml-2 text-sm text-gray-400">@ {exp.company}</span></h3>
                <time className="block mb-2 text-xs md:text-sm font-normal leading-none text-gray-400">{exp.period} | {exp.location}</time>
                <ul className="mb-2 text-sm md:text-base font-normal text-gray-300 list-disc list-inside">
                  {exp.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="py-8 md:py-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-300">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {/* UHS Project */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-5 md:p-6 shadow-lg hover:scale-[1.03] transition-transform">
              <h3 className="text-lg md:text-xl font-bold text-cyan-200 mb-2 flex items-center gap-2">
                <span>UPES Health Services (UHS)</span>
                <a href="https://uhs.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline text-xs font-semibold hover:text-cyan-300">Live</a>
              </h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-cyan-900/80 text-cyan-200 px-2 py-1 rounded text-xs font-semibold">React.js</span>
                <span className="bg-cyan-900/80 text-cyan-200 px-2 py-1 rounded text-xs font-semibold">TypeScript</span>
                <span className="bg-cyan-900/80 text-cyan-200 px-2 py-1 rounded text-xs font-semibold">Spring Boot</span>
                <span className="bg-cyan-900/80 text-cyan-200 px-2 py-1 rounded text-xs font-semibold">PostgreSQL</span>
              </div>
              <p className="text-gray-200 text-sm md:text-base mb-1">
                Enterprise-level healthcare management platform, <span className="text-cyan-300 font-semibold">security certified</span> and <span className="text-cyan-300 font-semibold">deployed in my college</span> for 15,000+ users. Features role-based authentication, automated prescription tracking, and real-time analytics.
              </p>
              <p className="text-cyan-400 text-xs md:text-sm">Reduced medicine stockouts by 30%, improved clinic efficiency by 25%.</p>
            </div>
            {/* Litigate Project */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-5 md:p-6 shadow-lg hover:scale-[1.03] transition-transform">
              <h3 className="text-lg md:text-xl font-bold text-cyan-200 mb-2 flex items-center gap-2">
                <span>Litigate</span>
                <a href="https://frontend-litigate-without-db.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline text-xs font-semibold hover:text-cyan-300">Live</a>
              </h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-cyan-900/80 text-cyan-200 px-2 py-1 rounded text-xs font-semibold">Next.js</span>
                <span className="bg-cyan-900/80 text-cyan-200 px-2 py-1 rounded text-xs font-semibold">TypeScript</span>
                <span className="bg-cyan-900/80 text-cyan-200 px-2 py-1 rounded text-xs font-semibold">Tailwind CSS</span>
              </div>
              <p className="text-gray-200 text-sm md:text-base mb-1">
                Legal case management platform with ML-powered document visualization and advanced search/filter. Built for performance and usability.
              </p>
              <p className="text-cyan-400 text-xs md:text-sm">Reduced user query time by 40%.</p>
            </div>
          </div>
        </motion.section>

        {/* Publications & Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="py-8 md:py-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-300">Publications & Certifications</h2>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-cyan-200 mb-2">Recent Publications</h3>
            <ul className="list-disc list-inside text-gray-200 text-sm md:text-base">
              {publications.map((pub) => (
                <li key={pub.title}>
                  <span className="font-bold">{pub.title}</span> <span className="text-gray-400">({pub.year})</span> <span className="text-cyan-400 text-xs">[{pub.tech}]</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-cyan-200 mb-2">Certifications</h3>
            <ul className="flex flex-wrap gap-3 md:gap-4">
              {certifications.map((cert) => (
                <li key={cert} className="bg-cyan-900/80 text-cyan-200 px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow">{cert}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          className="py-8 md:py-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-300">Education</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {education.map((edu) => (
              <div key={edu.school} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-4 shadow">
                <h3 className="text-base md:text-lg font-bold text-cyan-200 mb-1">{edu.school}</h3>
                <p className="text-gray-300 text-xs md:text-sm mb-1">{edu.degree}</p>
                <p className="text-gray-400 text-xs mb-1">{edu.year} | {edu.location}</p>
                <p className="text-cyan-400 text-xs">GPA: {edu.gpa}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          className="max-w-lg mx-auto my-12 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-cyan-300 mb-4 text-center">Contact Me</h2>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleFormChange}
              placeholder="Your Name"
              required
              className="rounded px-4 py-2 bg-gray-900 text-white border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleFormChange}
              placeholder="Your Email"
              required
              className="rounded px-4 py-2 bg-gray-900 text-white border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleFormChange}
              placeholder="Your Message"
              required
              rows={4}
              className="rounded px-4 py-2 bg-gray-900 text-white border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors mt-2"
            >
              Send Message
            </button>
            {formSuccess && (
              <div className="text-green-400 text-center font-semibold mt-2 animate-fade-in">Thank you! Your message has been sent.</div>
            )}
          </form>
        </motion.section>
      </div>

      {/* Contact Section */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
        className="backdrop-blur-md bg-black/70 py-8 mt-10 text-center shadow-inner"
      >
        <h2 className="text-xl md:text-2xl font-bold text-cyan-300 mb-2">Let's Connect!</h2>
        <div className="flex justify-center gap-6 text-2xl md:text-3xl mb-4">
          <a href="mailto:aadityavv9@gmail.com" className="hover:text-cyan-400 transition-colors" title="Email"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/aadityavv9/" className="hover:text-cyan-400 transition-colors" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Aadityavv" className="hover:text-cyan-400 transition-colors" title="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mb-2">
          <a href="mailto:aadityavv9@gmail.com" className="text-cyan-300 underline hover:text-cyan-400 font-medium">aadityavv9@gmail.com</a>
          <a href="https://www.linkedin.com/in/aadityavv9/" className="text-cyan-300 underline hover:text-cyan-400 font-medium" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Aadityavv" className="text-cyan-300 underline hover:text-cyan-400 font-medium" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className="text-gray-500 text-xs md:text-sm">&copy; {new Date().getFullYear()} Aaditya Vijayvargiya. Built with React & Tailwind CSS.</p>
      </motion.footer>

      {/* Custom Cursor Blur Circle */}
      <div
        style={{
          left: cursor.x - 75,
          top: cursor.y - 75,
          pointerEvents: 'none',
          position: 'fixed',
          zIndex: 0,
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: 'rgba(56, 191, 248, 0.5)',
          filter: 'blur(20px)',
          transition: 'left 0.12s cubic-bezier(.4,2,.6,1), top 0.12s cubic-bezier(.4,2,.6,1)',
        }}
      />
    </>
  )
}

export default App
