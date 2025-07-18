import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const skills = [
  { 
    category: 'Core Design Skills', 
    items: [
      'Graphic Design (Adobe Photoshop, Illustrator)', 
      'Visual Hierarchy & Layout Design', 
      'Typography & Color Theory', 
      'Branding & Identity Design', 
      'Social Media Content Creation', 
      'Iconography & Digital Illustrations'
    ] 
  },
  { 
    category: 'Creative Process', 
    items: [
      'Design Thinking', 
      'Concept Development', 
      'Moodboarding & Visual Storytelling', 
      'Creative Problem Solving',
      'Product Mindset & UX Analysis',
      'AI Tools for Design & Content Creation'
    ] 
  },
  { 
    category: 'Tools & Technology', 
    items: [
      'Figma', 
      'Adobe Photoshop / Illustrator', 
      'Canva', 
      'Midjourney / AI Image Tools', 
      'Notion / Trello', 
      'HTML/CSS (Basic)'
    ] 
  },
  { 
    category: 'Professional Skills', 
    items: [
      'Team Leadership in Creative Projects', 
      'Client Communication & Feedback Handling', 
      'Community & Team Management', 
      'Event Planning & Execution',
      'Quality Assurance Testing',
      'Social Media Strategy'
    ] 
  }
];

const AboutSection = () => {
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
    <section id="about" className="py-20 bg-bg-darker relative">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Learn more about my background, skills, and approach to graphic design and creative leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants} 
              className="text-2xl font-display font-bold mb-6"
            >
              My Story
            </motion.h3>
            
            <motion.div variants={itemVariants} className="space-y-4 text-text-muted">
              <p>
                With over years of design experience and a diploma in Photoshop, CorelDRAW, frontend web development, and programming languages, I bring a unique blend of creativity, technical expertise, and strategic thinking. My work is driven by a passion for purposeful storytelling, designing not just for aesthetics but for clarity, emotion, and measurable impact.
              </p>
              <p>
                As a freelance designer with Artlove and Vanika Organic Candles, I translated brand values into compelling visuals. At Pixel Potion, I contributed to branding, quality assurance, and actively managed a creative Discord community, ensuring engagement and alignment across teams. As the Head and later Secretary of APEX, the university’s design society, I led initiatives that introduced AI assisted workflows and fostered a culture of innovation and collaboration.
              </p>
              <p>
                I thrive in team oriented environments and bring proven leadership, project management, and analytical skills to every challenge. Through TCS led job simulations, I developed hands on experience in customer strategy, product analysis, and problem solving, further sharpening my ability to drive results across creative and business goals. I am not just a designer, I am a creative thinker who leads with intent and delivers with impact.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <a href="mailto:kannukrishnasharma@gmail.com" className="flex items-center text-text-muted hover:text-text transition-colors duration-300">
                <Mail className="w-5 h-5 mr-2" />
                kannukrishnasharma@gmail.com
              </a>
              <a href="tel:+918510017521" className="flex items-center text-text-muted hover:text-text transition-colors duration-300">
                <Phone className="w-5 h-5 mr-2" />
                +91 85100 17521
              </a>
              <div className="flex items-center text-text-muted">
                <MapPin className="w-5 h-5 mr-2" />
                Delhi, India
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://www.linkedin.com/in/kannu-krishna-sharma-6146b0293/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary-light transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/_kannu_k_sharma_" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary-light transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants} 
              className="text-2xl font-display font-bold mb-6"
            >
              Skills & Expertise
            </motion.h3>
            
            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <h4 className="text-lg font-semibold mb-3 text-primary-light">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-surface rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={itemVariants} className="mt-8">
              <h4 className="text-lg font-semibold mb-3 text-primary-light">My Approach</h4>
              <ul className="space-y-2 text-text-muted">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-light mt-2 mr-2"></span>
                  <span>User-centered design with strong product mindset</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-light mt-2 mr-2"></span>
                  <span>Integration of AI tools for enhanced creative workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-light mt-2 mr-2"></span>
                  <span>Collaborative leadership with focus on team growth</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-light mt-2 mr-2"></span>
                  <span>Data-driven design decisions and community engagement</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;