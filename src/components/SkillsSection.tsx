import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Brain, Database, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioContent } from '@/content/portfolio-content';

const categoryIcons: Record<string, React.ComponentType<any>> = {
  'Data Science & ML': Brain,
  'Data Engineering': Database,
  'MLOps & Infrastructure': Wrench,
  'Development': Zap,
};

const SkillBar = ({
  name,
  level,
  delay,
  gradient,
}: {
  name: string;
  level: number;
  delay: number;
  gradient: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold">{name}</span>
        <span className={`text-sm font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {level}%
        </span>
      </div>

      <div className="relative h-2.5 bg-muted/50 rounded-full overflow-hidden">
        <motion.div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${gradient} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

/* ===================== MAIN ===================== */

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { language } = useLanguage();
  const content = portfolioContent[language];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            {content.skills.title} & <span className="gradient-text">{content.skills.subtitle}</span>
          </h2>
          <p className="section-subtitle">
            {content.skills.description}
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {content.skills.categories.map((category, i) => {
            const Icon = categoryIcons[category.title] || Brain;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.gradient}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>

            {category.skills.map((skill, j) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    gradient={category.gradient}
                    delay={0.2 + j * 0.1}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Infinite Technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <h3 className="text-xl font-bold text-center mb-8">
            All Technologies
          </h3>

          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />

            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: 'linear',
              }}
            >
              {[...content.skills.technologies, ...content.skills.technologies].map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="px-4 py-2 rounded-xl glass border border-border/50 flex items-center gap-2 text-sm font-medium whitespace-nowrap"
                >
                  <Zap className="w-4 h-4 text-primary" />
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
