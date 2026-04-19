import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioContent } from '@/content/portfolio-content';

const HeroSection = () => {
  const { language } = useLanguage();
  const content = portfolioContent[language];

  const handleDownloadResume = () => {
    const fileName = language === 'fr' ? 'Cv_YassineFENDI_fr.pdf' : 'Cv_YassineFENDI_en.pdf';
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    link.click();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-glow-pulse delay-1000" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-mono mb-4"
        >
          {content.hero.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">{content.hero.name}</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
            <span className="text-foreground">{content.hero.title}</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
        >
          {content.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
            onClick={handleDownloadResume}
          >
            {language === 'fr' ? 'Mon CV' : 'My Resume'}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="glow-border hover:bg-primary/10 px-8 py-6 text-lg rounded-full"
            asChild
          >
            <a href="#projects">{content.hero.cta}</a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          {[
            { icon: Github, href: 'https://github.com/FendiYassine', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/yassine-fendi-25141a241/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:yassine.fendi@edu.dsti.institute', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:glow-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>


        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm">View My Work</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;