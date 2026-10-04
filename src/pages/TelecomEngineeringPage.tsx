import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Map, PenTool, FileText, CheckCircle2 } from 'lucide-react';
import { telecomServices, telecomProjectExperience } from '@/data/services';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projectTypes = [
  'FTTH', 'FTTP', 'OSP Engineering', 'Fiber Network Design',
  'GIS Mapping', 'CAD Drafting', 'Network Documentation',
  'As-Built Engineering', 'Network Optimization',
];

const tools = ['AutoCAD', 'QGIS', 'PyQGIS', 'IQGeo', 'VETRO', 'KMZ', 'GIS', 'CAD'];

export default function TelecomEngineeringPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();
  const ref4 = useScrollAnimation();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 py-16 lg:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-violet-200 mb-6">
              <Wifi className="w-4 h-4" />
              <span>Telecom & Engineering Solutions</span>
            </div>
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15] mb-5">
              Telecom & <span className="bg-gradient-to-r from-violet-300 to-purple-200 bg-clip-text text-transparent">Engineering Solutions</span>
            </h1>
            <p className="text-violet-100/80 text-base lg:text-lg leading-relaxed mb-4">
              Engineering the infrastructure that keeps businesses and communities connected.
            </p>
            <p className="text-violet-100/70 text-sm lg:text-base leading-relaxed max-w-2xl">
              Quantifix Technologies provides telecom and engineering solutions supporting fiber network planning, OSP engineering, GIS, CAD, documentation, and network optimization. We combine telecom engineering knowledge with GIS, CAD, automation, and technology expertise to deliver accurate and scalable network engineering solutions.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold px-6 py-3 rounded-xl hover:bg-violet-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Request a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div ref={ref1} className="animate-on-scroll text-center mb-14">
            <p className="section-subtitle">Experience</p>
            <h2 className="section-title mb-4">Project <span className="gradient-text">Types</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We support a wide range of telecom and engineering project types.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {projectTypes.map(pt => (
              <span
                key={pt}
                className="px-5 py-2.5 bg-violet-50 hover:bg-violet-700 hover:text-white text-violet-800 rounded-xl text-sm font-medium transition-colors duration-200 cursor-default border border-violet-100 hover:border-violet-700"
              >
                {pt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="bg-violet-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div ref={ref2} className="animate-on-scroll text-center mb-14">
            <p className="section-subtitle">Our Stack</p>
            <h2 className="section-title">Tools & <span className="gradient-text">Technologies</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {tools.map(tool => (
              <span
                key={tool}
                className="px-6 py-3 bg-white hover:bg-violet-700 hover:text-white text-violet-800 rounded-xl text-base font-medium transition-colors duration-200 cursor-default border border-violet-100 hover:border-violet-700 shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Experience */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div ref={ref3} className="animate-on-scroll text-center mb-14">
            <p className="section-subtitle">Domain Experience</p>
            <h2 className="section-title">Project <span className="gradient-text">Experience</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg mt-4">
              Our team has worked on projects across major telecom network operators and domains.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {telecomProjectExperience.map(proj => (
              <div
                key={proj.name}
                className="bg-gradient-to-br from-violet-50 to-white border border-violet-100 rounded-2xl p-6 text-center hover:shadow-violet-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-poppins font-bold text-xl text-violet-700 mb-2">{proj.name}</h3>
                <p className="text-gray-500 text-sm">{proj.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6 max-w-2xl mx-auto">
            These represent project and domain experience. Quantifix Technologies does not claim direct representation of these companies as current clients.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-violet-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div ref={ref4} className="animate-on-scroll text-center mb-14">
            <p className="section-subtitle">Explore Services</p>
            <h2 className="section-title">Telecom & Engineering <span className="gradient-text">Services</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {telecomServices.map(service => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-violet-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-poppins font-semibold text-white text-base leading-snug">
                      {service.shortTitle}
                    </h3>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-violet-700 group-hover:text-violet-800 transition-colors">
                    View Service
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-violet-700 to-violet-600 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Have a Telecom Project in Mind?
          </h2>
          <p className="text-violet-100 text-lg mb-8">
            Let's discuss how our telecom engineering team can support your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-violet-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Talk to Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
