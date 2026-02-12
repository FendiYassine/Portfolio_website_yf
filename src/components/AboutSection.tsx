import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, Rocket, Sparkles } from 'lucide-react';

const highlights = [
  { icon: Code2, label: '3+ Years Experience', color: 'text-primary' },
  { icon: Cpu, label: 'Software Engineer', color: 'text-accent' },
  { icon: Rocket, label: '25+ Projects', color: 'text-primary' },
  { icon: Sparkles, label: 'Competitive Programmer', color: 'text-accent' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate Software Engineer crafting digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden glow-border">
              {/* Your Profile Image - Replace the src with your image path */}
              <img 
                src="/omar.png" 
                alt="Omar Chiboub" 
                className="w-full h-full object-cover"
              />
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl group-hover:border-primary/60 transition-colors duration-500" />
            </div>
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Building the future, <span className="text-primary">one line at a time</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm a passionate Full-Stack Developer with a deep love for DevOps, AI and ML.
                With over 3 years of experience, I specialize in building scalable web applications
                and intelligent systems that solve real-world problems.
              </p>
              <p>
                My journey in tech started with curiosity about how things work, which evolved into
                a career dedicated to creating innovative solutions. I thrive on challenges and
                constantly push myself to learn new technologies and methodologies.
              </p>
              <p>
                When I'm not busy, you'll find me creating my next project,
                solving competitive programming challenges, or participating in the latest tech events.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass rounded-lg p-4 flex items-center gap-3 card-hover"
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;