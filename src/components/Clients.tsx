import { useEffect, useRef, useState } from 'react';

const clients = [
  { name: 'Ziply Fiber', image: '/IMG_20261004_143346.jpg' },
  { name: 'Verizon, AT&T, Sprint and T-Mobile', image: '/IMG_20261004_143324.jpg' },
  { name: 'Comcast', image: '/IMG_20261004_143400.jpg' },
];

const marqueeItems = [...clients, ...clients, ...clients];

export default function Clients() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let offset = 0;
    let rafId: number;

    const animate = () => {
      if (!isIntersecting) {
        rafId = requestAnimationFrame(animate);
        return;
      }
      offset += speed;
      const el = trackRef.current;
      if (el) {
        const totalWidth = el.scrollWidth / 3;
        if (offset >= totalWidth) {
          offset = 0;
        }
        el.style.transform = `translateX(-${offset}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isIntersecting, speed]);

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-10">
        <p className="text-center text-violet-700 font-semibold text-sm uppercase tracking-widest mb-2">
          Trusted Partners
        </p>
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-gray-900 text-center">
          Our Valued Clients
        </h2>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setSpeed(0.3)}
        onMouseLeave={() => setSpeed(1)}
      >
        <div className="flex overflow-hidden">
          <div
            ref={trackRef}
            className="flex shrink-0 items-center gap-16 pr-16"
            style={{ willChange: 'transform' }}
          >
            {marqueeItems.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex items-center shrink-0 select-none"
              >
                <div className="flex h-28 w-[clamp(17rem,48vw,34rem)] items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:h-36 sm:p-4 md:h-44 md:w-[clamp(22rem,42vw,40rem)]">
                  <img
                    src={client.image}
                    alt={`${client.name} client logos`}
                    className="h-full w-full object-contain"
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
