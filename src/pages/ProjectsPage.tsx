import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Wifi, Cloud, Brain, Globe, Smartphone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'Enterprise CRM Platform',
    category: 'IT Solutions',
    icon: Code2,
    desc: 'A comprehensive CRM system with lead management, sales pipeline, analytics, and workflow automation for a growing business.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'FTTH Network Design Project',
    category: 'Telecom Engineering',
    icon: Wifi,
    desc: 'Complete FTTH planning and design for a fiber network deployment including HLD, LLD, GIS mapping, and CAD deliverables.',
    tags: ['AutoCAD', 'QGIS', 'IQGeo', 'GIS'],
  },
  {
    title: 'AI-Powered Business Automation',
    category: 'IT Solutions',
    icon: Brain,
    desc: 'Intelligent automation solution that reduced manual data entry by 80% through AI agents and workflow automation.',
    tags: ['OpenAI', 'Python', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Cloud Migration & Integration',
    category: 'IT Solutions',
    icon: Cloud,
    desc: 'Migrated a legacy on-premise system to a scalable cloud architecture with zero downtime and improved performance.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'OSP Engineering & Documentation',
    category: 'Telecom Engineering',
    icon: Wifi,
    desc: 'Outside plant engineering for aerial and underground fiber routes with complete construction documentation.',
    tags: ['AutoCAD', 'QGIS', 'KMZ', 'GIS'],
  },
  {
    title: 'HRMS & Payroll System',
    category: 'IT Solutions',
    icon: Code2,
    desc: 'Complete HR management platform with attendance, payroll, leave management, and employee self-service portal.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'E-Commerce Web Platform',
    category: 'IT Solutions',
    icon: Globe,
    desc: 'A responsive e-commerce platform with product catalog, cart, payment integration, and admin dashboard.',
    tags: ['React', 'Stripe', 'Node.js', 'REST APIs'],
  },
  {
    title: 'GIS Mapping & Landbase',
    category: 'Telecom Engineering',
    icon: Wifi,
    desc: 'Landbase mapping and GIS data preparation for a large-scale fiber network planning project.',
    tags: ['QGIS', 'PyQGIS', 'PostGIS', 'GIS'],
  },
  {
    title: 'Cross-Platform Mobile App',
    category: 'IT Solutions',
    icon: Smartphone,
    desc: 'A mobile application for iOS and Android with authentication, payment integration, and real-time notifications.',
    tags: ['React Native', 'Firebase', 'REST APIs'],
  },
];

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 py-16 lg:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15] mb-5">
            Our <span className="bg-gradient-to-r from-violet-300 to-purple-200 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-violet-100/80 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of the solutions we've delivered across IT, software development, AI automation, and telecom engineering.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: '200+', label: 'Projects Delivered' },
            { value: '50+', label: 'Happy Clients' },
            { value: '15+', label: 'Technologies' },
            { value: '24/7', label: 'Support' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="font-poppins font-bold text-3xl text-violet-700">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div ref={ref1} className="animate-on-scroll text-center mb-14">
            <p className="section-subtitle">Portfolio</p>
            <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          </div>
          <div ref={ref2} className="animate-on-scroll grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-violet-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-violet-100 group-hover:bg-violet-700 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <project.icon className="w-6 h-6 text-violet-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-medium text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-3 group-hover:text-violet-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-violet-700 to-violet-600 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Want to Be Our Next Success Story?
          </h2>
          <p className="text-violet-100 text-lg mb-8">
            Let's discuss how we can help transform your ideas into intelligent solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-violet-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
