# Gladys Lee - Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI** - Clean and professional design with smooth animations
- **Fast Performance** - Optimized with Vite for lightning-fast loading
- **SEO Friendly** - Proper meta tags and structured content
- **Accessible** - Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── CVHeader.tsx    # Header section
│   ├── ExperienceSection.tsx
│   ├── SkillsSection.tsx
│   ├── EducationSection.tsx
│   └── ContactSection.tsx
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/grlspace/cv.git
cd cv
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🌐 Deployment

This project is automatically deployed to GitHub Pages. The live site is available at:

**https://grlspace.github.io/cv/**

### Manual Deployment

```bash
npm run deploy
```

## 📝 Customization

### Personal Information

Update your personal information in the following files:
- `src/components/CVHeader.tsx` - Name, title, contact info
- `src/components/ExperienceSection.tsx` - Work experience
- `src/components/SkillsSection.tsx` - Skills and technologies
- `src/components/EducationSection.tsx` - Education background
- `src/components/ContactSection.tsx` - Contact information

### Styling

The project uses Tailwind CSS for styling. You can customize:
- Colors in `src/index.css` (CSS variables)
- Components in `src/components/ui/`
- Global styles in `tailwind.config.ts`

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **LinkedIn**: [Gladys Lee](https://www.linkedin.com/in/gladyssl/)
- **Email**: glworkshop8@gmail.com
