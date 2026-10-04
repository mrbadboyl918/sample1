import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  CheckCircle2, ArrowRight, ArrowLeft, Phone, Mail,
  Search, PenTool, Code2, Rocket, ShieldCheck, Headphones,
} from 'lucide-react';
import { getServiceBySlug, approachSteps, type ServiceData } from '@/data/services';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const iconMap: Record<string, typeof Search> = {
  Globe: Search, Smartphone: Search, Code2: Code2, Users: Search,
  Package: Search, BarChart3: Search, Brain: Search, Cloud: Search,
  Plug: Search, Palette: PenTool, TestTube: Search, Megaphone: Search,
  Lightbulb: Search, Wifi: Search, Network: Search, Cable: Search,
  FileText: Search, PenTool: PenTool, Map: Search, MapPin: Search,
  Route: Search, FileCheck: Search, AlertTriangle: Search, ClipboardCheck: Search,
  Gauge: Search, Headphones: Headphones,
};

const approachIcons = [Search, PenTool, Code2, ShieldCheck, Rocket, Headphones];

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center max-w-md px-4">
          <h1 className="font-poppins font-bold text-2xl text-gray-900 mb-3">Service Not Found</h1>
          <p className="text-gray-500 mb-6">The service you're looking for doesn't exist or has been moved.</p>
          <button onClick={() => navigate('/services')} className="btn-primary">
            View All Services
          </button>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] ?? Search;
  const categoryLabel = service.category === 'it' ? 'IT Solutions' : 'Telecom & Engineering';
  const categoryPath = service.category === 'it' ? '/services' : '/services/telecom-engineering';

  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();
  const ref4 = useScrollAnimation();
  const ref5 = useScrollAnimation();
  const ref6 = useScrollAnimation();
  const ref7 = useScrollAnimation();

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Link
                to={categoryPath}
                className="inline-flex items-center gap-1.5 text-violet-300 hover:text-white text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {categoryLabel}
              </Link>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-violet-200">
                <Icon className="w-4 h-4" />
                <span>{categoryLabel}</span>
              </div>
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15]">
                {service.title}
              </h1>
              <p className="text-violet-100/80 text-base lg:text-lg leading-relaxed max-w-xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:bg-violet-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Request a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto" ref={ref1}>
          <div className="animate-on-scroll">
            <p className="section-subtitle">Overview</p>
            <h2 className="section-title mb-6">
              What This Service <span className="gradient-text">Covers</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">{service.overview}</p>
            {service.message && (
              <div className="mt-8 bg-violet-50 border-l-4 border-violet-600 rounded-r-xl p-6">
                <p className="text-violet-900 font-medium leading-relaxed italic">"{service.message}"</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="bg-violet-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div ref={ref2} className="animate-on-scroll text-center mb-14">
            <p className="section-subtitle">Capabilities</p>
            <h2 className="section-title">What We Provide</h2>
          </div>
          <div ref={ref3} className="animate-on-scroll grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.whatWeProvide.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white border border-violet-100 rounded-xl px-5 py-4 shadow-sm hover:shadow-violet hover:border-violet-300 transition-all duration-200 group"
              >
                <div className="w-7 h-7 bg-violet-100 group-hover:bg-violet-700 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-violet-700 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div ref={ref4} className="animate-on-scroll text-center mb-14">
            <p className="section-subtitle">Our Process</p>
            <h2 className="section-title">Our <span className="gradient-text">Approach</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachSteps.map((step, i) => {
              const StepIcon = approachIcons[i] ?? Search;
              return (
                <div
                  key={step.title}
                  className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-violet-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 bg-violet-100 rounded-xl flex items-center justify-center shrink-0">
                      <StepIcon className="w-5 h-5 text-violet-700" />
                    </div>
                    <span className="font-poppins font-bold text-2xl text-violet-100">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-poppins font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-violet-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div ref={ref5} className="animate-on-scroll text-center mb-14">
            <p className="section-subtitle">Tools & Stack</p>
            <h2 className="section-title">Technologies / <span className="gradient-text">Tools</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {service.technologies.map(tech => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-white hover:bg-violet-700 hover:text-white text-violet-800 rounded-xl text-sm font-medium transition-colors duration-200 cursor-default border border-violet-100 hover:border-violet-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY QUANTIFIX */}
      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto">
          <div ref={ref6} className="animate-on-scroll text-center mb-14">
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="section-title">Why <span className="gradient-text">Quantifix</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {service.whyQuantifix.map((reason, i) => (
              <div
                key={reason}
                className="flex items-start gap-4 bg-gradient-to-br from-violet-50 to-white border border-violet-100 rounded-2xl p-6 hover:shadow-violet transition-all duration-300"
              >
                <div className="w-10 h-10 bg-violet-700 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-white font-poppins font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-gray-700 leading-relaxed pt-1.5">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-violet-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div ref={ref7} className="animate-on-scroll text-center mb-14">
            <p className="section-subtitle">Our Reach</p>
            <h2 className="section-title">Industries We <span className="gradient-text">Support</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {service.industries.map(ind => (
              <div
                key={ind}
                className="flex items-center justify-center text-center bg-white rounded-xl px-4 py-4 shadow-sm border border-violet-50 hover:border-violet-300 hover:shadow-violet transition-all duration-200"
              >
                <span className="text-sm font-medium text-gray-700">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-violet-700 to-violet-600 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-violet-100 text-lg mb-8">
            Let's discuss how Quantifix Technologies can help you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-violet-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              Talk to Our Team
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
