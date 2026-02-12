# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a dark theme, smooth animations, and interactive UI components powered by shadcn/ui.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite for lightning-fast performance
- **Beautiful UI**: Leverages shadcn/ui components with Radix UI primitives and Tailwind CSS
- **Dark Theme**: Eye-friendly dark mode with theme persistence
- **Responsive Design**: Fully responsive across all devices
- **Interactive Elements**: Custom cursor, particle backgrounds, and smooth animations
- **Contact Form**: Integrated email service using EmailJS
- **Performance Optimized**: Fast load times and optimized builds
- **Type Safe**: Full TypeScript support for better development experience

## 📋 Sections

- **Hero Section**: Eye-catching introduction with custom animations
- **About**: Personal introduction and background
- **Skills**: Technical skills and competencies
- **Projects**: Portfolio of work and projects
- **Experience**: Professional experience timeline
- **Achievements**: Notable accomplishments and certifications
- **Contact**: Get in touch form with email integration

## 🛠️ Tech Stack 

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Package Manager**: Bun
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Routing**: React Router v6
- **State Management**: TanStack Query (React Query)
- **Email Service**: EmailJS
- **Form Validation**: React Hook Form with Zod
- **Testing**: Vitest
- **Deployment**: GitHub Pages

## 📦 Installation

### Prerequisites

- Node.js 18+ or Bun
- Git

### Setup

1. Clone the repository:
```bash
git clone https://github.com/R4M-0/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Start the development server:
```bash
bun dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun build:dev` - Build for development
- `bun preview` - Preview production build
- `bun test` - Run tests once
- `bun test:watch` - Run tests in watch mode
- `bun lint` - Lint code with ESLint
- `bun deploy` - Deploy to GitHub Pages

## 📁 Project Structure

```
portfolio-website/
├── public/               # Static assets
│   ├── images/          # Images for projects and achievements
│   └── Omar_CHIBOUB.pdf # Resume
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   └── ...         # Feature components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and services
│   ├── pages/          # Page components
│   └── test/           # Test files
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🎨 Customization

### Theme

The theme can be customized in `tailwind.config.ts`. The project uses CSS variables for easy theming:

```typescript
// Modify colors, fonts, and other design tokens
export default {
  theme: {
    extend: {
      // Your customizations
    }
  }
}
```

### Components

All UI components are in `src/components/`. Main sections:
- `HeroSection.tsx` - Landing section
- `AboutSection.tsx` - About me
- `SkillsSection.tsx` - Technical skills
- `ProjectsSection.tsx` - Project showcase
- `ExperienceSection.tsx` - Work experience
- `AchievementsSection.tsx` - Achievements
- `ContactSection.tsx` - Contact form

### Content

Update the content in each component file to reflect your own information, projects, and achievements.

## 🌐 Deployment

This project is configured for deployment to GitHub Pages.

1. Update the `CNAME` file with your custom domain (if applicable)
2. Run the deploy script:
```bash
bun deploy
# or
npm run deploy
```

The site will be built and deployed to the `gh-pages` branch.

## 🧪 Testing

The project uses Vitest for testing:

```bash
# Run tests once
bun test

# Run tests in watch mode
bun test:watch
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Omar CHIBOUB**

- GitHub: [@R4M-0](https://github.com/R4M-0)
- Portfolio: [omarchiboub.me]

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing UI components
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Vite](https://vitejs.dev/) for blazing fast build tool

---

⭐ Star this repository if you find it helpful!
