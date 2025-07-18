import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Star } from 'lucide-react';

const clients = [
  {
    id: 1,
    name: 'APEX',
    logo: 'apex.png',
    testimonial: 'We loved to work with Kannu Krishna Sharma for our designing society. From Developing commendable posters to stargazing AI Generations, it was amazing that our enormous projects got a chance to be executed well on the APEX page.',
    person: 'Lakshita Chawla',
    title: 'President',
    industry: 'Designing',
    project: 'Multiple Designs',
    rating: 5
  },
  {
    id: 2,
    name: 'Artlove',
    logo: 'artlove.png',
    testimonial: 'Working with Kannu Krishna Sharma for our frame designs was a seamless blend of creativity and professionalism. His frame designing captured our artistic essence perfectly and elevated our brand’s visual storytelling.',
    person: 'Vishal',
    title: 'Manager',
    industry: 'E-Commerce',
    project: 'Frames Designing',
    rating: 4
  },
  {
    id: 3,
    name: 'Jaitra Pharmaceuticals',
    logo: 'jaitra.png',
    testimonial: 'We were impressed by the clarity and precision in the branding work by his designs and Instagram algorithm analysis. Kannu Krishna Sharma’s approach reflected our values and gave our communication a fresh, modern edge',
    person: 'Sankalp Sharma',
    title: 'CEO',
    industry: 'Pharmaceuticals',
    project: 'Brand Presentation',
    rating: 5
  },
  {
    id: 4,
    name: 'Pixel Potion',
    logo: 'pixel.png',
    testimonial: 'Kannu Krishna Sharma brought a fresh, imaginative perspective to our digital brand by community management and strong analysis. His attention to detail and creative versatility helped us craft visuals that truly resonated with our target audience.',
    person: 'Akshit Maurya',
    title: 'CEO',
    industry: 'Designing Agency',
    project: 'Productivity & Community Management',
    rating: 5
  },
  {
    id: 5,
    name: 'Zen-Nest',
    logo: 'zen.png',
    testimonial: 'Kannu Krishna Sharma understood the soul of our wellness brand and translated it into calming, minimal visuals. His creative direction for health and care brought Zen Nest’s personality to life across platforms.',
    person: 'Adhyan Kandhari',
    title: 'CEO',
    industry: 'Psychology',
    project: 'Brand Designing',
    rating: 5
  },
  {
    id: 6,
    name: 'Swaad E Chips',
    logo: 'swaad.png',
    testimonial: 'Our brand gained a bold and fun identity, blissful for his vibrant and consumer-friendly design work. He knew exactly how to appeal to our snack-loving audience by his brand designing ability',
    person: 'Abhinav',
    title: 'Manager',
    industry: 'Food',
    project: 'Brand Identity',
    rating: 4
  },
  {
    id: 7,
    name: 'Vanika',
    logo: 'vanika.png',
    testimonial: 'Kannu Krishna Sharma delivered brand designing & packaging that felt both elegant and relatable. His research-backed approach ensured Vanika’s identity stood out while staying true to our core values.',
    person: 'Shivani Verma & Ishika Verma',
    title: 'CEO',
    industry: 'Decor',
    project: 'Brand Identity',
    rating: 5
  }
];

const ClientsSection = () => {
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);
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
    <section id="clients" className="py-20 bg-bg-darker relative">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Previous <span className="gradient-text">Clients</span></h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            I've had the pleasure of working with these amazing clients on a variety of projects.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={itemVariants}
              className="bg-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedClient(client)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-light flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent-light fill-accent-light" />
                  ))}
                  {[...Array(5 - client.rating)].map((_, i) => (
                    <Star key={i + client.rating} className="w-4 h-4 text-text-muted" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-text-muted text-sm mb-6 flex-grow">
                "{client.testimonial.length > 150 ? client.testimonial.substring(0, 150) + '...' : client.testimonial}"
              </blockquote>
              
              <div className="mt-auto">
                <p className="font-medium text-text">{client.person}</p>
                <p className="text-sm text-text-muted">{client.title} at {client.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Client Detail Modal */}
      {selectedClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="backdrop" onClick={() => setSelectedClient(null)}></div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-surface-light relative z-50 w-11/12 max-w-2xl rounded-xl shadow-2xl p-8"
          >
            <button 
              className="absolute top-4 right-4 p-2 bg-surface-light/80 backdrop-blur-sm rounded-full text-text-muted hover:text-text transition-colors duration-300"
              onClick={() => setSelectedClient(null)}
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-light flex items-center justify-center mr-4">
                <img
                  src={selectedClient.logo}
                  alt={selectedClient.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold">{selectedClient.name}</h2>
                <p className="text-text-muted">{selectedClient.industry}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex mb-3">
                {[...Array(selectedClient.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-light fill-accent-light" />
                ))}
                {[...Array(5 - selectedClient.rating)].map((_, i) => (
                  <Star key={i + selectedClient.rating} className="w-5 h-5 text-text-muted" />
                ))}
              </div>
              
              <blockquote className="text-text-muted text-lg italic border-l-4 border-primary-light pl-4 py-2">
                "{selectedClient.testimonial}"
              </blockquote>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-surface px-4 py-2 rounded-lg">
                <span className="text-xs text-text-muted">Project</span>
                <p className="font-medium">{selectedClient.project}</p>
              </div>
              
              <div className="bg-surface px-4 py-2 rounded-lg flex-1">
                <span className="text-xs text-text-muted">Person</span>
                <p className="font-medium">{selectedClient.person}, {selectedClient.title}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ClientsSection;