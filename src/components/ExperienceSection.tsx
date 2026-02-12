import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  // Education
  {
    type: 'education',
    title: 'Engineering Degree in Software Engineering',
    company: 'INSAT',
    period: '2023 - 2028',
    description: 'Software Engineering student passionate about cybersecurity, full-stack development, and AI.',
    technologies: ['Java', 'Python', 'C/C++', 'JavaScript', 'SQL/NoSQL'],
  },
  
  // Work / Leadership
  {
    type: 'work',
    title: 'President & Technical Lead',
    company: 'GDG on Campus INSAT',
    period: 'Sep 2024 - Present',
    description: 'Revived the club, coordinated 30+ technical teams, and organized 35+ workshops (AI, Cloud, DevOps, Cybersecurity, Web Development).',
    technologies: ['Event Organization', 'Leadership', 'AI', 'Cloud', 'DevOps', 'Web Development'],
  },
  {
    type: 'work',
    title: 'President',
    company: 'Chess Enthusiasts INSAT',
    period: 'Sep 2024 - Present',
    description: 'Increased member engagement by 200% through tournaments and workshops.',
    technologies: ['Leadership', 'Community Engagement', 'Event Organization'],
  },
  {
    type: 'work',
    title: 'Participation Lead',
    company: 'Orbit 1.0',
    period: 'Dec 2024 - May 2025',
    description: 'Co-organized Tunisia’s first national DevOps event with 300+ participants.',
    technologies: ['Event Coordination', 'DevOps', 'Leadership'],
  }
];


const TimelineItem = ({ 
  experience, 
  index, 
  isInView 
}: { 
  experience: typeof experiences[0]; 
  index: number; 
  isInView: boolean;
}) => {
  const isLeft = index % 2 === 0;
  const Icon = experience.type === 'work' ? Briefcase : GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content Card */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          className="glass rounded-2xl p-6 card-hover group"
          whileHover={{ scale: 1.02 }}
        >
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-mono">{experience.period}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
            {experience.title}
          </h3>
          <p className="text-muted-foreground mb-3">{experience.company}</p>
          <p className="text-sm text-muted-foreground mb-4">{experience.description}</p>
          
          <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="hidden md:flex w-2/12 justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
          className="relative z-10 w-12 h-12 rounded-full glass-strong flex items-center justify-center glow-primary"
        >
          <Icon className="w-5 h-5 text-primary" />
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={`${experience.title}-${experience.period}`}
                experience={experience}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
