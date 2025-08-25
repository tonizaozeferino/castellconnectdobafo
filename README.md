# CastellConnect - Digital Marketing Agency Website

A comprehensive digital marketing website for a Bavarian company targeting small and medium businesses. Built with modern React architecture and Express.js backend.

## 🚀 Features

- **Modern React Frontend**: Built with React 18, TypeScript, and Vite
- **Express.js Backend**: RESTful API with TypeScript
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Form Handling**: Contact forms and analysis requests with validation
- **Database Ready**: Drizzle ORM setup with PostgreSQL support
- **German Content**: Localized for the Bavarian market

## 🛠 Tech Stack

### Frontend
- React 18 + TypeScript
- Vite for build tooling
- TailwindCSS for styling
- Shadcn/ui components
- React Hook Form + Zod validation
- TanStack Query for API calls
- Wouter for routing

### Backend
- Express.js + TypeScript
- Drizzle ORM
- PostgreSQL (Neon Database)
- Session management
- Form validation

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/castellconnect-website.git
cd castellconnect-website
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Start development server
```bash
npm run dev
```

## 🌐 Deployment

### Vercel Deployment

This project is optimized for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on git push

### Environment Variables

Required environment variables for production:

```bash
DATABASE_URL=your_neon_database_url
SESSION_SECRET=your_session_secret
NODE_ENV=production
```

## 📱 Pages

- Homepage with hero section and service overview
- Service pages (Web Design, SEO, Social Media, Email Marketing, Voice/Chatbots, AI Visuals)
- Industry pages (Handwerk, Gastronomie, Local Services)
- Contact and Analysis request forms
- Resources and FAQ pages

## 🎨 Design

- **Colors**: Navy (#001f3f), Blue (#3a6d8c), Light Blue (#6a9ab0), Sand (#ead8b1)
- **Typography**: Inter font family
- **Components**: Consistent design system with reusable components
- **Mobile-first**: Responsive design for all devices

## 📄 License

MIT License - see LICENSE file for details.