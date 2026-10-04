import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Wifi } from 'lucide-react';
import { itServices, telecomServices } from '@/data/services';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();

  const ServiceCard = ({ service }: { service: typeof itServices[0] }) => (
    <Link
      to={`/services/${service.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-violet-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
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
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {service.description}
        </p>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-violet-700 group-hover:text-violet-800 transition-colors">
          View Service
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 py-16 lg:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-violet-200 mb-6">
            <span>IT Solutions · Telecom Engineering · Intelligent Automation</span>
          </div>
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15] mb-5">
            Our <span className="bg-gradient-to-r from-violet-300 to-purple-200 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-violet-100/80 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            From custom software and AI automation to telecom engineering and GIS — Quantifix Technologies delivers end-to-end solutions that drive measurable business value.
          </p>
        </div>
      </section>

      {/* IT Solutions */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div ref={ref1} className="animate-on-scroll flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-violet-100 rounded-xl flex items-center justify-center">
              <Server className="w-6 h-6 text-violet-700" />
            </div>
            <div>
              <p className="section-subtitle mb-0">Category 01</p>
              <h2 className="section-title">IT Solutions</h2>
            </div>
          </div>
          <p className="text-gray-500 max-w-2xl mb-10 ml-14">
            Software development, AI automation, cloud, CRM, ERP, HRMS, and digital solutions for modern businesses.
          </p>
          <div ref={ref2} className="animate-on-scroll grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {itServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Telecom & Engineering */}
      <section className="bg-violet-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div ref={ref3} className="animate-on-scroll flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-violet-100 rounded-xl flex items-center justify-center">
              <Wifi className="w-6 h-6 text-violet-700" />
            </div>
            <div>
              <p className="section-subtitle mb-0">Category 02</p>
              <h2 className="section-title">Telecom & Engineering Solutions</h2>
            </div>
          </div>
          <p className="text-gray-500 max-w-2xl mb-6 ml-14">
            Fiber network planning, OSP engineering, GIS, CAD, and telecom documentation services.
          </p>
          <div className="ml-14 mb-10">
            <Link
              to="/services/telecom-engineering"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 hover:text-violet-800 transition-colors"
            >
              View Telecom & Engineering Overview
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {telecomServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
