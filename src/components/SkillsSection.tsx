import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Laptop,
  Server,
  Brain,
  Wrench,
  Code2,
  FileJson,
  Palette,
  Boxes,
  Leaf,
  Database,
  Share2,
  Container,
  Cloud,
  GitBranch,
  Terminal,
  Cpu,
  Zap,
  Box,
  Figma,
} from 'lucide-react';

/* ===================== DATA ===================== */

const skillCategories = [
  {
    title: 'Frontend',
    icon: Laptop,
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 80 },
    ],
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'GraphQL', level: 78 },
    ],
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10',
  },
  {
    title: 'AI / ML',
    icon: Brain,
    skills: [
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 75 },
      { name: 'OpenAI API', level: 90 },
      { name: 'LangChain', level: 85 },
    ],
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'AWS / GCP', level: 80 },
      { name: 'CI/CD', level: 82 },
    ],
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
  },
];

const technologies = [
  { name: 'JavaScript', icon: Code2 },
  { name: 'TypeScript', icon: FileJson },
  { name: 'React', icon: Boxes },
  { name: 'Next.js', icon: Zap },
  { name: 'Vue.js', icon: Leaf },
  { name: 'Node.js', icon: Server },
  { name: 'Python', icon: Terminal },
  { name: 'FastAPI', icon: Zap },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Redis', icon: Database },
  { name: 'GraphQL', icon: Share2 },
  { name: 'Docker', icon: Container },
  { name: 'Kubernetes', icon: Box },
  { name: 'AWS', icon: Cloud },
  { name: 'GCP', icon: Cloud },
  { name: 'TensorFlow', icon: Brain },
  { name: 'PyTorch', icon: Cpu },
  { name: 'OpenAI', icon: Brain },
  { name: 'LangChain', icon: Brain },
  { name: 'Tailwind', icon: Palette },
  { name: 'Figma', icon: Figma },
  { name: 'Git', icon: GitBranch },
  { name: 'Linux', icon: Terminal },
];

const infiniteTechs = [...technologies, ...technologies];

/* ===================== COMPONENTS ===================== */

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
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Technologies I've been working with recently
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
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
              {infiniteTechs.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={`${tech.name}-${index}`}
                    className="px-4 py-2 rounded-xl glass border border-border/50 flex items-center gap-2 text-sm font-medium whitespace-nowrap"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    {tech.name}
                  </span>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
