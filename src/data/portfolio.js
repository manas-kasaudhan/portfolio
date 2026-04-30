// Portfolio data for Manas Kasaudhan

export const personal = {
  name: 'Manas Kasaudhan',
  title: 'Full-Stack Developer',
  subtitle: 'Problem Solver',
  email: 'manaskasaudhan@gmail.com',
  github: 'https://github.com/manas-kasaudhan',
  linkedin: 'https://linkedin.com/in/manas-kasaudhan',
  location: 'India',
  bio: 'I build fast, clean, and scalable web applications. Passionate about crafting seamless user experiences backed by robust server-side logic.',
  longBio: `I'm a Full-Stack Developer with a strong foundation in both frontend and backend technologies. 
I enjoy building products that solve real problems — from intuitive user interfaces to efficient, 
scalable APIs. My experience spans the entire development lifecycle, from ideation and architecture 
to deployment and optimization.

When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
or sharpening my problem-solving skills on competitive programming platforms.

I believe great software is built at the intersection of clean code, thoughtful design, 
and genuine user empathy.`,
};

export const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'],
  Frontend: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Framer Motion'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT Auth', 'Socket.io'],
  Databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Mongoose'],
  Tools: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman', 'Figma', 'Vercel', 'Linux'],
};

export const projects = [
  {
    id: 1,
    title: 'AnatomyMaster',
    description:
      'An interactive learning platform for medical students to study human anatomy through 3D visualizations, quizzes, and structured study modules.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Three.js', 'Express.js'],
    features: [
      'Interactive 3D anatomy models',
      'Flashcard-based quiz engine',
      'Progress tracking dashboard',
      'Structured learning modules',
      'Mobile-responsive design',
    ],
    github: 'https://github.com/manas-kasaudhan/anatomy-master',
    live: '#',
    gradient: 'from-blue-500/10 to-purple-500/10',
    tag: 'EdTech',
  },
  {
    id: 2,
    title: 'SpendWise',
    description:
      'A personal finance tracker that helps users manage budgets, categorize expenses, and visualize spending patterns with insightful charts and analytics.',
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Chart.js', 'Tailwind CSS'],
    features: [
      'Expense categorization engine',
      'Budget goal setting & alerts',
      'Visual spending analytics',
      'Monthly & yearly reports',
      'Secure JWT authentication',
    ],
    github: 'https://github.com/manas-kasaudhan/spendwise',
    live: '#',
    gradient: 'from-green-500/10 to-teal-500/10',
    tag: 'FinTech',
  },
  {
    id: 3,
    title: 'Weather App',
    description:
      'A real-time weather application with location-based forecasting, 7-day predictions, and rich weather condition visualizations using OpenWeatherMap API.',
    techStack: ['React.js', 'OpenWeatherMap API', 'CSS3', 'Geolocation API'],
    features: [
      'Real-time location-based weather',
      '7-day forecast view',
      'Hourly temperature charts',
      'Dynamic weather condition backgrounds',
      'City search with autocomplete',
    ],
    github: 'https://github.com/manas-kasaudhan/weather-app',
    live: '#',
    gradient: 'from-sky-500/10 to-blue-500/10',
    tag: 'Utility',
  },
  {
    id: 4,
    title: 'Chat Application',
    description:
      'A full-stack real-time chat application with private messaging, group rooms, and live online status — built on WebSocket technology for instant communication.',
    techStack: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js'],
    features: [
      'Real-time messaging via WebSockets',
      'Private & group chat rooms',
      'User online/offline status',
      'Message read receipts',
      'File & image sharing',
    ],
    github: 'https://github.com/manas-kasaudhan/chat-app',
    live: '#',
    gradient: 'from-orange-500/10 to-red-500/10',
    tag: 'Communication',
  },
];

export const experience = [
  {
    id: 1,
    role: 'Web Developer',
    company: 'Zaalima Development Pvt. Ltd',
    duration: 'Mar 2026 – Present',
    type: 'Internship',
    location: 'Greater Noida · Remote',
    companyInitial: 'Z',
    description:
      'Working as a Web Developer intern at Zaalima Development Pvt. Ltd, contributing to the design and development of modern, responsive web applications for diverse client projects. Collaborating closely with senior developers to ship clean, performant code across the full stack.',
    achievements: [
      'Developed and maintained responsive web interfaces using React.js and Tailwind CSS, improving client engagement metrics by 20%',
      'Integrated RESTful APIs into frontend applications, reducing data-fetch latency through efficient state management with React Query',
      'Collaborated on the architecture and implementation of a multi-tenant SaaS dashboard used by 500+ active users',
      'Automated repetitive deployment workflows using custom shell scripts, saving the team ~3 hours per week',
      'Participated in daily standups and sprint planning, contributing to on-time delivery of 3 major feature releases',
      'Wrote unit and integration tests using Jest, increasing overall test coverage from 42% to 68%',
    ],
    tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Git', 'Figma'],
  },
  {
    id: 2,
    role: 'Full Stack Developer Intern',
    company: 'Codec Technologies',
    duration: 'Jan 2024 – Jul 2024',
    type: 'Internship',
    location: 'Remote',
    companyInitial: 'C',
    description:
      'Contributed to building and maintaining scalable full-stack web applications for enterprise clients, working across the entire development lifecycle.',
    achievements: [
      'Developed 5+ responsive React components reducing UI build time by 30%',
      'Built RESTful APIs with Node.js & Express.js serving 10,000+ daily requests',
      'Optimized MongoDB queries improving database response time by 40%',
      'Collaborated with a cross-functional team of 8 engineers using Agile methodology',
      'Implemented JWT-based authentication and RBAC for a client dashboard',
      'Reduced frontend bundle size by 25% through code splitting and lazy loading',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Git', 'REST APIs'],
  },
];

export const education = [
  {
    degree: 'Bachelor of Science',
    institution: 'RMLAU University, Sultanpur',
    duration: '2022 – 2025',
    grade: '',
  },
  {
    degree: 'Masters of Computer Applications',
    institution: 'Galgotias University',
    duration: '2025 – Present',
    grade: '',
  },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];
