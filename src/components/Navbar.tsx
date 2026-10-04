import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User, Shield, ChevronDown, Server, Wifi } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { itServices, telecomServices } from '@/data/services';

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/#careers' },
  { label: 'Contact Us', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const { user, isAdmin, signOut, openAuthModal } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsHome(window.location.pathname === '/');
  }, [navigate]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimer.current) clearTimeout(servicesTimer.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimer.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || user?.phone || 'User';
  const avatarUrl = user?.user_metadata?.avatar_url as string | undefined;
  const initials = displayName.slice(0, 2).toUpperCase();

  const showSolidNav = isScrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidNav ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNavClick('/')} className="flex items-center gap-2.5 group shrink-0">
          <div className="w-11 h-11 rounded-xl overflow-hidden group-hover:scale-105 transition-transform shrink-0">
            <img src="/file_0000000044e861fa873930d3fff21c26_20260413_072832_0000.png" alt="Quantifix Logo" className="w-full h-full object-contain" />
          </div>
          <div className="leading-tight">
            <div className={`font-poppins font-bold text-base tracking-tight transition-colors ${showSolidNav ? 'text-gray-900' : 'text-white'}`}>
              Quantifix <span className={`transition-colors ${showSolidNav ? 'text-violet-700' : 'text-violet-300'}`}>Technologies</span>
            </div>
            <div className={`text-[9px] italic leading-none mt-0.5 transition-colors ${showSolidNav ? 'text-gray-400' : 'text-violet-300/80'}`}>
              Transforming Ideas into Intelligent Solutions.
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Home */}
          <button
            onClick={() => handleNavClick('/')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              showSolidNav ? 'text-gray-700 hover:text-violet-700 hover:bg-violet-50' : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            Home
          </button>

          {/* About Us */}
          <button
            onClick={() => handleNavClick('/#about')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              showSolidNav ? 'text-gray-700 hover:text-violet-700 hover:bg-violet-50' : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            About Us
          </button>

          {/* Services Dropdown */}
          <div
            ref={servicesRef}
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
            className="relative"
          >
            <button
              onClick={() => handleNavClick('/services')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                showSolidNav ? 'text-gray-700 hover:text-violet-700 hover:bg-violet-50' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-[640px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-2 gap-4">
                {/* IT Solutions */}
                <div>
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 mb-1 text-xs font-semibold text-violet-700 uppercase tracking-wide hover:bg-violet-50 rounded-lg transition-colors"
                  >
                    <Server className="w-4 h-4" />
                    IT Solutions
                  </Link>
                  <div className="max-h-[320px] overflow-y-auto">
                    {itServices.map(s => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="block px-3 py-1.5 text-sm text-gray-600 hover:text-violet-700 hover:bg-violet-50 rounded-lg transition-colors"
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Telecom & Engineering */}
                <div>
                  <Link
                    to="/services/telecom-engineering"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 mb-1 text-xs font-semibold text-violet-700 uppercase tracking-wide hover:bg-violet-50 rounded-lg transition-colors"
                  >
                    <Wifi className="w-4 h-4" />
                    Telecom & Engineering
                  </Link>
                  <div className="max-h-[320px] overflow-y-auto">
                    {telecomServices.map(s => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="block px-3 py-1.5 text-sm text-gray-600 hover:text-violet-700 hover:bg-violet-50 rounded-lg transition-colors"
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries */}
          <button
            onClick={() => handleNavClick('/#industries')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              showSolidNav ? 'text-gray-700 hover:text-violet-700 hover:bg-violet-50' : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            Industries
          </button>

          {/* Projects */}
          <button
            onClick={() => handleNavClick('/projects')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              showSolidNav ? 'text-gray-700 hover:text-violet-700 hover:bg-violet-50' : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            Projects
          </button>

          {/* Careers */}
          <button
            onClick={() => handleNavClick('/#careers')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              showSolidNav ? 'text-gray-700 hover:text-violet-700 hover:bg-violet-50' : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            Careers
          </button>

          {/* Contact Us */}
          <button
            onClick={() => handleNavClick('/#contact')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              showSolidNav ? 'text-gray-700 hover:text-violet-700 hover:bg-violet-50' : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* CTA / Auth + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative hidden md:block" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(v => !v)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all ${
                  showSolidNav ? 'hover:bg-gray-100' : 'hover:bg-white/10'
                }`}
              >
                {avatarUrl ? (
                  <img src={avatarUrl} alt={displayName} className="w-7 h-7 rounded-full object-cover" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold">
                    {initials}
                  </div>
                )}
                <span className={`text-sm font-medium max-w-[100px] truncate transition-colors ${showSolidNav ? 'text-gray-800' : 'text-white'}`}>
                  {displayName}
                </span>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-xs text-gray-400">Signed in as</p>
                    <p className="text-sm font-medium text-gray-800 truncate">{user.email || user.phone}</p>
                  </div>
                  {isAdmin && (
                    <button
                      onClick={() => { setUserMenuOpen(false); navigate('/admin'); }}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-violet-700 hover:bg-violet-50 transition-colors"
                    >
                      <Shield className="w-4 h-4" />
                      Job Management
                    </button>
                  )}
                  <button
                    onClick={() => { setUserMenuOpen(false); signOut(); }}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={openAuthModal}
              className={`hidden md:flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl border-2 transition-all ${
                showSolidNav
                  ? 'border-violet-600 text-violet-700 hover:bg-violet-50'
                  : 'border-white/50 text-white hover:bg-white/10'
              }`}
            >
              <User className="w-4 h-4" />
              Sign In
            </button>
          )}

          <button
            onClick={() => handleNavClick('/#contact')}
            className="hidden md:block btn-primary text-sm py-2 px-5"
          >
            Get Started
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showSolidNav ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-y-auto ${mobileOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-gray-100 shadow-lg px-4 py-4 flex flex-col gap-1">
          <button
            onClick={() => handleNavClick('/')}
            className="text-left px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-all"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('/#about')}
            className="text-left px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-all"
          >
            About Us
          </button>

          {/* Services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-all"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link to="/services" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-violet-700">
                  <Server className="w-4 h-4" /> All IT Solutions
                </Link>
                {itServices.map(s => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-1.5 text-sm text-gray-600 hover:text-violet-700 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                ))}
                <Link to="/services/telecom-engineering" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-4 py-2 mt-2 text-sm font-semibold text-violet-700">
                  <Wifi className="w-4 h-4" /> Telecom & Engineering
                </Link>
                {telecomServices.map(s => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-1.5 text-sm text-gray-600 hover:text-violet-700 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('/#industries')}
            className="text-left px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-all"
          >
            Industries
          </button>
          <button
            onClick={() => handleNavClick('/projects')}
            className="text-left px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-all"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('/#careers')}
            className="text-left px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-all"
          >
            Careers
          </button>
          <button
            onClick={() => handleNavClick('/#contact')}
            className="text-left px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-all"
          >
            Contact Us
          </button>

          {user ? (
            <div className="mt-2 border-t border-gray-100 pt-3">
              <div className="flex items-center gap-2 px-4 py-2 mb-1">
                {avatarUrl ? (
                  <img src={avatarUrl} alt={displayName} className="w-7 h-7 rounded-full object-cover" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold">
                    {initials}
                  </div>
                )}
                <span className="text-sm font-medium text-gray-800 truncate">{displayName}</span>
              </div>
              {isAdmin && (
                <button
                  onClick={() => { setMobileOpen(false); navigate('/admin'); }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-violet-700 hover:bg-violet-50 transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  Job Management
                </button>
              )}
              <button
                onClick={() => { setMobileOpen(false); signOut(); }}
                className="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => { setMobileOpen(false); openAuthModal(); }}
              className="mt-2 flex items-center justify-center gap-2 border-2 border-violet-600 text-violet-700 rounded-xl py-2.5 text-sm font-medium hover:bg-violet-50 transition-colors"
            >
              <User className="w-4 h-4" />
              Sign In / Create Account
            </button>
          )}

          <button
            onClick={() => handleNavClick('/#contact')}
            className="btn-primary mt-1 text-sm text-center"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
