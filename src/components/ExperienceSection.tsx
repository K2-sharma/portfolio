import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

const experiences = [
  {
    id: 0,
    title: 'Diploma',
    company: 'Developers Technologies',
    period: '2018 - 2019',
    description: 'Completed diploma in Photoshop, corel draw, web development (frontend), and other programming languages.',
    type: 'education',
    skills: ['Basic Designing', 'Logo Designing', 'Photo Manipulation', 'Web Development', 'Programming']
  },
  {
    id: 1,
    title: 'Higher Secondary (10+2)',
    company: 'Sachdeva Public School, Pitampura, Delhi',
    period: 'Completed 2023',
    description: 'Completed higher secondary education with strong foundation in academics and extracurricular activities.',
    type: 'education',
    skills: ['Academic Foundation', 'Critical Thinking', 'Communication']
  },
  {
    id: 2,
    title: 'Bachelor of Computer Applications (BCA)',
    company: 'Guru Gobind Singh Indraprastha University, Delhi',
    period: 'Ongoing - Expected 2026',
    description: 'Currently pursuing Bachelor of Computer Applications with focus on software development, design principles, and technology applications.',
    type: 'education',
    skills: ['Computer Applications', 'Software Development', 'Technology', 'Network Security', 'Management']
  },
  {
    id: 3,
    title: 'Graphic & AI Department Head',
    company: 'APEX - Designing Society, GGSIPU',
    period: 'May 2024 - May 2025',
    description: 'Introduced AI tools into creative workflows, enabling faster asset development. Directed all design deliverables for society events and external collaborations.',
    type: 'work',
    skills: ['Management', 'Designing', 'AI Tools', 'Creative Direction', 'Team Leadership']
  },
  {
    id: 4,
    title: 'Freelance Graphic Designer',
    company: 'ArtLove',
    period: 'July 2024 - Dec 2024',
    description: 'Created digital illustrations and visual assets for ArtLove\'s online campaigns. Delivered custom artwork that aligned with the client\'s vision and social media strategy.',
    type: 'work',
    skills: ['Digital Illustration', 'Social Media Design', 'Client Relations', 'Printables']
  },
  {
    id: 5,
    title: 'Event Planning & Management Lead',
    company: 'College Fests - GGSIPU',
    period: '2023-2025',
    description: 'I have planned, organized, and successfully executed events for the annual tech fest Tech Samaaroh as well as various other management and departmental events within the college.',
    type: 'work',
    skills: ['Event Management', 'Event Planning', 'Team Work', 'Leadership']
  },
  {
    id: 6,
    title: 'Quality Analyst & Community Manager',
    company: 'Pixel Potion',
    period: 'Aug 2024 - Jun 2025',
    description: 'Conducted team training sessions to enhance productivity and collaboration, while also creating and managing an active community on Discord.',
    type: 'work',
    skills: ['Quality Testing', 'Community Management', 'Productivity']
  },
  {
    id: 7,
    title: 'Secretary - APEX Society',
    company: 'APEX - Designing Society, GGSIPU',
    period: 'May 2025',
    description: 'Lead internal operations and team structure planning. Managed communications, approvals, and cross-society partnerships.',
    type: 'work',
    skills: ['Leadership', 'Operations Management', 'Partnership Development', 'Managing Departments']
  },
   {
    id: 8,
    title: 'Social media Designing',
    company: 'Jaitra Pharmaceuticals',
    period: 'May 2025',
    description: 'Lead internal operations and team structure planning. Managed communications, approvals, and cross-society partnerships.',
    type: 'work',
    skills: ['Leadership', 'Operations Management', 'Partnership Development', 'Managing Departments']
  },
  {
    id: 9,
    title: 'Job Simulations',
    company: 'Tata Consultancy Services',
    period: 'June 2025',
    description: 'Completed professional job simulations to gain industry experience and practical knowledge in technology and other processes.',
    type: 'certification',
    skills: ['Industry Experience', 'Business Processes', 'Professional Development']
  },
  {
    id: 10,
    title: 'Freelance Brand Designing',
    company: 'Vanika',
    period: 'July 2025',
    description: 'Designed brand visual assets and packaging. A design collaboration with Vanika that glows with organic charm.',
    type: 'work',
    skills: ['Client Management', 'Graphic Desiging', 'Brand Designing']
  }
];

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-5 h-5" />;
      case 'certification':
        return <Award className="w-5 h-5" />;
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My <span className="gradient-text">Experience</span></h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            A timeline of my professional journey and achievements in graphic design, community management, and creative leadership.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="relative border-l-2 border-surface-light pl-8 ml-4"
          >
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 w-8 h-8 rounded-full bg-surface flex items-center justify-center border-2 border-surface-light">
                  <span className="text-primary-light">
                    {getIcon(experience.type)}
                  </span>
                </div>
                
                <span className="block text-sm text-text-muted mb-1">{experience.period}</span>
                <h3 className="text-xl font-display font-semibold mb-1">{experience.title}</h3>
                <p className="text-primary-light font-medium mb-3">{experience.company}</p>
                
                <p className="text-text-muted mb-4">{experience.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-surface text-sm rounded-full text-text-muted">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;