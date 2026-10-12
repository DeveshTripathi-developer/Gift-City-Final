'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface Leader {
  name: string;
  title: string;
  role: string;
  image: string;
  bio: string;
  fullBio: string;
}

export function ExperienceSection() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const metrics = [
    { value: '₹1,06,300 crore+', label: 'AUM as of 30 June 2026' },
    { value: '13,941+', label: 'Client families' },
    { value: '417', label: 'Relationship Managers' },
    { value: '18+', label: 'Cities in India' },
  ];

  const leaders: Leader[] = [
    {
      name: 'Anand Rathi',
      title: 'Founder & Group Chairman',
      role: '(Non-Executive Director)',
      image: '/anand-rathi.jpg',
      bio: 'Anand Rathi established the Anand Rathi Group in 1994. He is a gold medalist Chartered Accountant and has over 50 years of diverse experience.',
      fullBio: 'Anand Rathi established the Anand Rathi Group in 1994. He is a gold medalist Chartered Accountant and has over 50 years of diverse experience. Under his leadership, Anand Rathi Group has emerged as one of India’s premier financial services conglomerates with an extensive pan-India network and international footprint. He previously served as the President of the Bombay Stock Exchange (BSE) and has been a driving force in pioneering research-backed wealth management in India.',
    },
    {
      name: 'Pradeep Gupta',
      title: 'Co-Founder & Vice Chairman',
      role: '(Non-Executive Director)',
      image: '/pradeep-gupta.png',
      bio: "Pradeep Gupta has been instrumental in laying the foundation of the Group's Institutional Broking and Investment Services arm. He has over 20 years of experience in the financial markets.",
      fullBio: "Pradeep Gupta has been instrumental in laying the foundation of the Group's Institutional Broking and Investment Services arm. He has over 20 years of experience in the financial markets. His vision and deep understanding of capital markets and international financial flows have guided the firm's strategic expansion, establishing disciplined wealth management and advisory platforms serving ultra-high-net-worth families globally.",
    },
    {
      name: 'Rakesh Rawal',
      title: 'Chief Executive Officer',
      role: '(Whole-Time Director)',
      image: '/rakesh-rawal.png',
      bio: 'Rakesh Rawal is one of the longest standing CEOs in the private wealth industry, serving as the CEO of Anand Rathi Wealth since 2007.',
      fullBio: 'Rakesh Rawal is one of the longest standing CEOs in the private wealth industry, serving as the CEO of Anand Rathi Wealth since 2007. With more than three decades of experience spanning premier private banks and asset management, he has spearheaded the disciplined processes, unique client-centric framework, and sustained growth that established Anand Rathi Wealth as an NSE 500 listed leader managing over ₹1,00,000 Crore in AUM.',
    },
    {
      name: 'Feroze Azeez',
      title: 'Joint CEO',
      role: '',
      image: '/feroze-azeez.png',
      bio: 'Feroze Azeez drives the strategic direction of the company, shaping the evolving and dynamic business landscape to make Anand Rathi Wealth an NSE500 listed company.',
      fullBio: 'Feroze Azeez drives the strategic direction of the company, shaping the evolving and dynamic business landscape to make Anand Rathi Wealth an NSE500 listed company. Frequently ranked among India’s top wealth managers and widely respected for his quantitative approach to asset allocation, financial product structuring, and investor education, he has played an indispensable role in institutionalizing transparent, uncomplicated wealth management across India and GIFT City.',
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Foundation Head */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#b17a2b] mb-3">
            OUR FOUNDATION
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight leading-tight mb-4">
            Built on more than two decades of experience
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Anand Rathi Wealth Limited is an NSE 500 listed company serving HNIs and UHNIs in India and internationally.
          </p>
        </div>

        {/* 4 Quantitative Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-8 border-t border-b border-stone-200">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <strong className="block font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#b17a2b] tabular-nums tracking-tight">
                {m.value}
              </strong>
              <span className="text-xs sm:text-sm text-stone-500 font-medium">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-8 max-w-3xl">
          Alongside its international footprint, our growth has been shaped by a consistent philosophy: keep investing structured, measurable and uncomplicated.
        </p>

        {/* Leadership section header matching the Meet the Visionaries style */}
        <div className="mt-16 sm:mt-24 mb-10 sm:mb-12 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#b17a2b] mb-2">
            LEADERSHIP THAT SHAPED THE ORGANISATION
          </p>
          <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
            Meet the Visionaries
          </h3>
          <p className="text-sm sm:text-base text-stone-600 font-normal mt-2.5">
            Experience behind the philosophy — disciplined leaders with decades of market stewardship.
          </p>
          <div className="w-14 h-1 bg-[#b17a2b] mx-auto mt-4" />
        </div>

        {/* 4 Leadership Cards in 2x2 Overlapping Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="flex flex-col sm:flex-row items-center sm:items-stretch"
            >
              {/* Leader Photo */}
              <div className="relative w-full sm:w-[200px] md:w-[220px] aspect-[4/5] sm:aspect-auto sm:h-[280px] md:h-[300px] shrink-0 rounded-lg sm:rounded-xl overflow-hidden shadow-sm bg-stone-100 border border-stone-200">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 220px"
                />
              </div>

              {/* Overlapping White Information Card */}
              <div className="relative z-10 w-[92%] sm:w-auto -mt-10 sm:mt-0 sm:-ml-8 md:-ml-10 my-auto bg-white p-6 sm:p-7 shadow-md rounded-xl border border-stone-200/90 text-center flex-1">
                <h4 className="font-bold text-lg sm:text-xl text-stone-900 tracking-tight">
                  {leader.name}
                </h4>
                <p className="font-bold text-xs sm:text-sm text-stone-900 mt-1">
                  {leader.title}
                </p>
                {leader.role && (
                  <p className="text-[11px] sm:text-xs text-stone-500 italic mt-0.5">
                    {leader.role}
                  </p>
                )}
                <p className="text-xs text-stone-600 leading-relaxed mt-2.5 mb-3 italic sm:not-italic">
                  {leader.bio}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedLeader(leader)}
                  className="text-xs font-semibold text-[#b17a2b] hover:text-[#95631f] transition-colors cursor-pointer inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#b17a2b]"
                >
                  <span>View More</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedLeader && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="leader-modal-title"
          >
            <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl overflow-hidden border border-stone-200 relative">
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border border-stone-200">
                    <Image
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 id="leader-modal-title" className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
                      {selectedLeader.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#b17a2b] uppercase tracking-wider mt-0.5">
                      {selectedLeader.title}
                    </p>
                    {selectedLeader.role && (
                      <p className="text-xs text-stone-500 italic">
                        {selectedLeader.role}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full h-px bg-stone-200 my-4" />

                <p className="text-sm text-stone-700 leading-relaxed">
                  {selectedLeader.fullBio}
                </p>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>Anand Rathi Wealth IFSC</span>
                  <button
                    type="button"
                    onClick={() => setSelectedLeader(null)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#b17a2b] text-white hover:bg-[#95631f] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ExperienceSection;
