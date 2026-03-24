/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  AchievementType,
  /*TestimonialsType,*/
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  Facebook,
  FileText,
  Globe,
  Home,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  User,
  Trophy,
  Github,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {label: 'Achievements', link: '#achievements', icon: Trophy },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: 'Facebook',
    link: 'https://www.facebook.com/jorgeluis.arce.9400/',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: 'https://www.instagram.com/luis_arce_hu/',
  },
  {
    icon: Linkedin,
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/jorge-luis-arce-huerta-3b1a9830a/',
  },
  {
    icon: Github,
    label: 'Github',
    link: 'https://github.com/JoluDev05',
  }
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/project-ph-1.jpeg',
    title: 'Guitar store landing page',
    tags: ['API', 'React', 'Design', 'Redux'],
    projectLink: 'https://jazzy-centaur-be9970.netlify.app/',
  },
  {
    imgSrc: '/images/project-ph-2.jpeg',
    title: 'Calorie tracker',
    tags: ['API', 'React','Design'],
    projectLink: 'https://wonderful-daffodil-c4cdb4.netlify.app/',
  },
  {
    imgSrc: '/images/project-ph-3.jpeg',
    title: 'Restaurant service calculator',
    tags: ['API', 'React', 'Design', 'Redux'],
    projectLink: 'https://unique-raindrop-1c595a.netlify.app/',
  },
  {
    imgSrc: '/images/project-ph-4.jpeg',
    title: 'Personal portfolio',
    tags: ['API', 'React','Framer Motion'],
    projectLink: '',
  },
];

const education: ExperienceType[] = [
  {
    year: '2021 – 2025',
    title: 'Bachelor of Computer Systems Engineering',
    institute: 'Technological National Institute of Mexico (TecNM)',
    desc: 'Focused on front-end development, UI design, and web application architecture.',
  },

  {
    year: '2023',
    title: 'Python Programming Course',
    institute: 'Udemy',
    desc: 'Covered programming fundamentals, logic, data structures, and practical problem-solving using Python.',
  },
    {
    year: '2025 - 2026',
    title: 'Frontend Development Bootcamp',
    institute: 'Udemy / Online Course',
    desc: 'Currently learning modern frontend development with React, TypeScript, Next.js, state management, and best practices for scalable applications.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2025',
    title: 'Frontend / Mobile Developer Intern',
    institute: 'Nerito',
    desc: 'Worked on real-world mobile and web applications using React Native and React.  Implemented state management with Redux Toolkit, integrated REST APIs, and contributed to testing using Jest. Collaborated with cross-functional teams using Git, Jira, and Agile workflows, gaining experience with production codebases and AWS services.',
  },
   {
    year: '2026',
    title: 'Junior Web & Mobile Developer',
    institute: 'Inowu Development',
    desc: 'Built scalable web applications with Next.js and contributed to e-commerce and educational platforms. Focused on performance optimization, API integration, and improving user experience. Collaborated on a React Native mobile app, developing interfaces and integrating REST APIs within agile teams.',
  }
];

const tools: ToolsType[] = [
  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },
  {
    label: 'CSS',
    imgSrc: '/images/tools/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  
];

const services: ServiceType[] = [
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive, and user-centered interfaces with a strong focus on usability and visual clarity.',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Frontend Web Development',
    desc: 'Building responsive and scalable web interfaces using React, Next.js, and modern frontend best practices.',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Mobile App Development',
    desc: 'Developing cross-platform mobile applications with React Native, focused on performance and smooth user experience.',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Design to Code',
    desc: 'Transforming Figma designs into clean, maintainable, and production-ready code with pixel-perfect accuracy.',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Frontend Improvements',
    desc: 'Improving existing interfaces by fixing bugs, optimizing performance, and enhancing UI consistency.',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '02+',
    label: 'Years Of Experience',
  },
  {
    number: '10',
    label: 'Projects Done',
  },
  {
  number: '05+',
  label: 'Production Projects',
  }

];


/**
 * Testimonials off
 */
/**
 * const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    link: '#',
  },
];
*/

const achievementsData: AchievementType[] = [
  {
    title: 'Ford Innovation Challenge — Winner',
    place: 'Ford Motor Company, Hermosillo',
    desc: 'Won a competitive innovation challenge by developing a data analysis solution focused on production optimization. Worked in a multidisciplinary team to propose a Python-based dashboard that supported machinery usage analysis and production efficiency.',
  },
  {
    title: 'Head of Company Visits — PROXY Conference',
    place: 'Technological National Institute of Mexico, Hermosillo',
    desc: 'Led the company visits program for a university technology conference, building relationships between students and local tech companies such as Necodex, Intugo, and Aviada.',
  },
  {
    title: 'Conference Speaker & Volunteer',
    place: 'TecNM Hermosillo & IA Salon',
    desc: 'Served as a speaker and volunteer in academic and networking events, delivering talks on basic cybersecurity and presenting real-world software projects.',
  },
];


export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  /*testimonials,*/
  achievementsData,
};