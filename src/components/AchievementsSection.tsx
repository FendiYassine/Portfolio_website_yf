import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Star, Medal, Award } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: '1st Place – Vectors in Orbit Hackathon',
    description: 'QDesign project: Collaborative biological design platform integrating multimodal data, 3D visualization, and an AI co-scientist. Awarded 1st place in the Multimodal Biological Design & Discovery category.',
    image: '/images/achievements/supcom.jpeg',
    icon: Trophy,
    date: '2026',
  },
  {
    id: 2,
    title: '3rd Place – IHEC Codelab 2.0 Hackathon',
    description: 'FAIN project: An intelligent trading platform developed for BVMT, utilizing AI to analyze market trends and execute trades.',
    image: '/images/achievements/ihec.jpeg',
    icon: Star,
    date: '2026',
  },
  {
    id: 3,
    title: 'Top 5 – Junior Enterprise INSAT Forum Hackathon',
    description: 'SmartDrive project: Mobile application analyzing driving behavior using smartphone sensors and AI-powered voice coaching. Recognized in the Top 5 for Road and Driver Safety category.',
    image: '/images/achievements/forum.jpeg',
    icon: Star,
    date: '2025',
  },
  {
    id: 4,
    title: 'TryHackMe – Junior Penetration Tester Certification',
    description: 'Earned the Junior Penetration Tester certification and ranked in the top 7% globally, demonstrating expertise in cybersecurity fundamentals.',
    image: '/images/achievements/jpp.jpeg',
    icon: Medal,
    date: '2024',
  },
  
];

const AchievementCard = ({ 
  achievement, 
  index, 
  isInView 
}: { 
  achievement: typeof achievements[0]; 
  index: number; 
  isInView: boolean;
}) => {
  const isEven = index % 2 === 0;
  const Icon = achievement.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
    >
      {/* Image Side */}
      <motion.div
        className="w-full lg:w-1/2"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative group overflow-hidden rounded-2xl">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
          
          <div className="relative aspect-video rounded-2xl overflow-hidden glass">
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Icon Badge */}
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full glass-strong flex items-center justify-center glow-primary">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Description Side */}
      <motion.div
        className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
      >
        <div className="glass rounded-2xl p-8 card-hover h-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-sm font-mono rounded-full bg-primary/20 text-primary">
              {achievement.date}
            </span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
            {achievement.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed text-lg">
            {achievement.description}
          </p>
          
          {/* Decorative line */}
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-20 md:py-32 relative">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Events</span>
          </h2>
          <p className="section-subtitle">
            Highlights from my journey in tech - competitions, conferences, and milestones
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="space-y-16 md:space-y-24">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
