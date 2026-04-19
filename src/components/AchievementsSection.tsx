import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Trophy, Star, Medal, Award, ChevronDown, ChevronUp, BookOpen, Briefcase, BadgeCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioContent, Achievement } from '@/content/portfolio-content';

const iconMap = {
  Trophy,
  Star,
  Medal,
  Award,
};

// Badge color per type
const typeMeta = {
  production: {
    label: { fr: 'Production', en: 'Production' },
    color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    Icon: Briefcase,
  },
  certification: {
    label: { fr: 'Certification', en: 'Certification' },
    color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Icon: BadgeCheck,
  },
  specialization: {
    label: { fr: 'Spécialisation', en: 'Specialization' },
    color: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    Icon: BookOpen,
  },
};

// Grade color helper
function gradeColor(grade: string): string {
  const num = parseFloat(grade);
  if (isNaN(num)) return 'text-muted-foreground';
  if (num === 100) return 'text-emerald-400';
  if (num >= 95) return 'text-green-400';
  if (num >= 90) return 'text-yellow-400';
  return 'text-orange-400';
}

const AchievementCard = ({
  achievement,
  index,
  isInView,
  language,
}: {
  achievement: Achievement;
  index: number;
  isInView: boolean;
  language: 'fr' | 'en';
}) => {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const isEven = index % 2 === 0;
  const Icon = iconMap[achievement.icon as keyof typeof iconMap] ?? Trophy;
  const meta = typeMeta[achievement.type];
  const TypeIcon = meta.Icon;
  const hasCourses = achievement.courses && achievement.courses.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-stretch`}
    >
      {/* Visual Side */}
      <motion.div
        className="w-full lg:w-1/2"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative group overflow-hidden rounded-2xl h-full min-h-[220px]">
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-45 transition duration-500" />

          <div className="relative h-full rounded-2xl overflow-hidden glass flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-accent/5 to-secondary">
            {achievement.image ? (
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-contain p-2 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 w-full h-full relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <div className="w-52 h-52 rounded-full border-2 border-primary" />
                  <div className="absolute w-36 h-36 rounded-full border border-accent" />
                </div>

                {/* Large Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  className="relative z-10 w-24 h-24 rounded-full glass-strong flex items-center justify-center glow-primary mb-4"
                >
                  <Icon className="w-12 h-12 text-primary" />
                </motion.div>

                {/* Issuer */}
                {achievement.issuer && (
                  <span className="relative z-10 text-sm font-mono text-muted-foreground text-center">
                    {achievement.issuer}
                  </span>
                )}
              </div>
            )}

            {/* Date badge */}
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full glass-strong text-sm font-mono text-primary z-20">
              {achievement.date}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div
        className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
      >
        <div className="glass rounded-2xl p-8 card-hover h-full flex flex-col">
          {/* Type badge + date */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${meta.color}`}>
              <TypeIcon className="w-3 h-3" />
              {meta.label[language]}
            </span>
            <span className="px-3 py-1 text-sm font-mono rounded-full bg-primary/20 text-primary">
              {achievement.date}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
            {achievement.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed text-base mb-4 flex-1">
            {achievement.description}
          </p>

          {/* Courses accordion — only for specializations */}
          {hasCourses && (
            <div className="mt-2">
              <button
                onClick={() => setCoursesOpen((v) => !v)}
                className="flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity mb-3"
              >
                <BookOpen className="w-4 h-4" />
                {language === 'fr'
                  ? `${achievement.courses!.length} cours inclus`
                  : `${achievement.courses!.length} courses included`}
                {coursesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <AnimatePresence>
                {coursesOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden space-y-2"
                  >
                    {achievement.courses!.map((course, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-start justify-between gap-3 px-3 py-2 rounded-lg bg-primary/5 border border-primary/10"
                      >
                        <span className="text-sm text-muted-foreground leading-snug flex-1">
                          {course.name}
                        </span>
                        <span className={`text-sm font-bold font-mono whitespace-nowrap ${gradeColor(course.grade)}`}>
                          {course.grade}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          )}

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
  const { language } = useLanguage();
  const content = portfolioContent[language];

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
            {language === 'fr' ? (
              <>Certifications & <span className="gradient-text">Réalisations</span></>
            ) : (
              <>Certifications & <span className="gradient-text">Achievements</span></>
            )}
          </h2>
          <p className="section-subtitle">
            {language === 'fr'
              ? 'Certifications, spécialisations et projets déployés en production'
              : 'Certifications, specializations and production-deployed projects'}
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="space-y-16 md:space-y-24">
          {content.achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
              isInView={isInView}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
