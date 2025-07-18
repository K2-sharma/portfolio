import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Graphic Designing',
    category: 'Graphic',
    image: 'graphic.gif',
    description: 'A collection of visually compelling works including posters, illustrations, and editorial designs each crafted with a focus on aesthetics, clarity, and message delivery. These projects reflect my ability to transform ideas into impactful visuals tailored to diverse client needs and brand tones.From minimal compositions to bold experimental layouts, each design is guided by a strong visual purpose and attention to detail ensuring the message always shines through.',
    fullDescription: 'A collection of visually compelling works including posters, illustrations, and editorial designs each crafted with a focus on aesthetics, clarity, and message delivery. These projects reflect my ability to transform ideas into impactful visuals tailored to diverse client needs and brand tones.From minimal compositions to bold experimental layouts, each design is guided by a strong visual purpose and attention to detail ensuring the message always shines through.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Canva', 'CorelDraw', 'Figma'],
    year: '2022-25'
  },
  {
    id: 2,
    title: 'Social Media Design',
    category: 'Marketing',
    image: 'social.gif',
    description: 'Strategically designed social media creatives optimized for engagement, clarity, and visual appeal. From Instagram carousels to story templates, this section highlights content crafted to boost digital presence, build community, and drive brand communication through consistent design language. I aim to create scroll-stopping visuals that reflect the brand essence while aligning with trends, formats, and audience psychology for maximum impact.',
    fullDescription: 'Strategically designed social media creatives optimized for engagement, clarity, and visual appeal. From Instagram carousels to story templates, this section highlights content crafted to boost digital presence, build community, and drive brand communication through consistent design language. I aim to create scroll-stopping visuals that reflect the brand essence while aligning with trends, formats, and audience psychology for maximum impact.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'],
    year: '2024-25'
  },
  {
  id: 3,
  title: 'Creative Direction',
  category: 'Management',
  image: 'quantum.gif',
  description: 'As the director and team lead of "The Quantum Breach" an AI-powered cinematic trailer built in After Effects. I brought together vision, team synergy, and precision execution to turn concept into impact. From directing visuals to managing workflows, I led every step with a narrative-first mindset, blending creativity and strategy to deliver a powerful, immersive story that reflects my strength in team leadership, direction, and goal-focused design.',
  fullDescription: (
    <>
      As the director and team lead of 'The Quantum Breach' an AI-powered cinematic trailer built in After Effects. I brought together vision, team synergy, and precision execution to turn concept into impact. From directing visuals to managing workflows, I led every step with a narrative-first mindset, blending creativity and strategy to deliver a powerful, immersive story that reflects my strength in team leadership, direction, and goal-focused design.
      <br /><br />
      <a 
        href="https://www.youtube.com/watch?v=GomgZROTv64" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-accent hover:text-accent-light transition-colors duration-300 inline-flex items-center"
      >
        Watch the trailer here
        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </>
  ),
  tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe After Effects', 'Discord'],
  year: '2024'
},
  {
    id: 4,
    title: 'Made for others',
    category: 'Designing',
    image: 'client.gif',
    description: 'Real-world work created for brands, individuals, and collaborators. This section reflects my adaptability, empathy, and problem-solving through design bringing someone else’s vision to life while balancing originality and client expectations. Each piece showcases collaborative understanding and personalized solutions that cater to unique briefs while retaining a distinct creative signature in the final output.',
    fullDescription: 'Real-world work created for brands, individuals, and collaborators. This section reflects my adaptability, empathy, and problem-solving through design bringing someone else’s vision to life while balancing originality and client expectations. Each piece showcases collaborative understanding and personalized solutions that cater to unique briefs while retaining a distinct creative signature in the final output.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'],
    year: '2023-25'
  },
  {
    id: 5,
    title: 'Brand Designing',
    category: 'Designing',
    image: 'brand.gif',
    description: 'Comprehensive branding solutions covering logo design, color theory, typography, and visual language. From fresh startups to evolving businesses, these case studies highlight identity systems built to last with consistency, memorability, and strategic market positioning. Every brand story begins with research, mood-boarding, and strong conceptual roots resulting in visual identities that are timeless, scalable, and instantly recognizable.',
    fullDescription: 'Comprehensive branding solutions covering logo design, color theory, typography, and visual language. From fresh startups to evolving businesses, these case studies highlight identity systems built to last with consistency, memorability, and strategic market positioning. Every brand story begins with research, mood-boarding, and strong conceptual roots resulting in visual identities that are timeless, scalable, and instantly recognizable.',
    tools: ['Adobe Photoshoot', 'Adobe Illustrator', 'Figma', 'Canva'],
    year: '2023-25'
  },
  {
    id: 6,
    title: 'Research',
    category: 'Research & Analysis',
    image: 'research.gif',
    description: 'Behind every strong design is thoughtful research. This section details the groundwork audience studies, competitor analysis, design trends, and brand audits that inform design decisions and ensure each solution is not only beautiful but functional and goal-oriented. Through analytical thinking and creative intuition, I uncover insights that drive visual clarity and elevate brand communication with purpose and precision.',
    fullDescription: 'Behind every strong design is thoughtful research. This section details the groundwork audience studies, competitor analysis, design trends, and brand audits that inform design decisions and ensure each solution is not only beautiful but functional and goal-oriented. Through analytical thinking and creative intuition, I uncover insights that drive visual clarity and elevate brand communication with purpose and precision.',
    tools: ['Notion', 'Pinterest', 'Google Analytics', 'Trello'],
    year: '2022-25'
  }
];

const WorkSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My <span className="gradient-text">Work</span></h2>
          <p className="text-text-muted max-w-2xl mx-auto">
           More than just visuals.... I design brands, stories, and standout experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-surface rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group card-zoom"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover card-zoom-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="px-2 py-1 bg-primary/80 text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary-light transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <button 
                  className="text-sm font-medium text-accent hover:text-accent-light transition-colors duration-300 flex items-center"
                >
                  View Details
                  <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="backdrop" onClick={() => setSelectedProject(null)}></div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-surface-light relative z-50 w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl"
          >
            <button 
              className="absolute top-4 right-4 p-2 bg-surface-light/80 backdrop-blur-sm rounded-full text-text-muted hover:text-text transition-colors duration-300"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="h-72 sm:h-80 md:h-96 relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-light to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="px-3 py-1 bg-primary-light text-white text-sm rounded-full mb-3 inline-block">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                  {selectedProject.title}
                </h2>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-surface px-4 py-2 rounded-lg">
                  <span className="text-xs text-text-muted">Year</span>
                  <p className="font-medium">{selectedProject.year}</p>
                </div>
                
                <div className="bg-surface px-4 py-2 rounded-lg flex-1">
                  <span className="text-xs text-text-muted">Tools</span>
                  <p className="font-medium">{selectedProject.tools.join(', ')}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Overview</h3>
                <p className="text-text-muted leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
