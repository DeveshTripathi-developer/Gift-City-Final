import React from 'react';
import Image from 'next/image';
import { Cog, Database, Search } from 'lucide-react';

export function PhilosophySection() {
  const values = [
    {
      title: 'FEARLESS APPROACH',
      desc: 'Showing information that you need to see, without fear',
      icon: (
        <svg
          className="w-10 h-10 text-[#b17a2b]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Head */}
          <circle cx="12" cy="4" r="2.2" fill="currentColor" stroke="none" />
          {/* Outstretched arms */}
          <path d="M5 8l7 4 7-4" />
          {/* Torso */}
          <path d="M12 12v5" />
          {/* Outstretched legs in star-jump pose */}
          <path d="M7 21l5-4 5 4" />
        </svg>
      ),
    },
    {
      title: 'UNCOMPLICATED',
      desc: 'Uncomplicating financial concepts to enable full understanding before your decision making',
      icon: <Cog className="w-10 h-10 text-[#b17a2b]" strokeWidth={2.2} aria-hidden="true" />,
    },
    {
      title: 'BACKED BY DATA',
      desc: 'Data at scale will help you take a considered decision',
      icon: <Database className="w-10 h-10 text-[#b17a2b]" strokeWidth={2.2} aria-hidden="true" />,
    },
    {
      title: 'TRANSPARENCY',
      desc: 'Transparency = Trust = Implementation. Trust created with transparency. Value created by Implementation',
      icon: <Search className="w-10 h-10 text-[#b17a2b]" strokeWidth={2.2} aria-hidden="true" />,
    },
  ];

  return (
    <section id="philosophy" className="py-20 lg:py-24 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Philosophy Intro Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 pb-12 border-b border-stone-200/80">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#b17a2b] mb-3">
              OUR PHILOSOPHY
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight leading-tight">
              Our philosophy.<br />
              In a new financial ecosystem.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-3">
            <p className="font-serif text-xl sm:text-2xl text-stone-800 leading-relaxed font-normal">
              For more than two decades, Anand Rathi Wealth has built its investment approach around a fundamental principle:
            </p>
            <p className="font-serif text-xl sm:text-2xl text-[#b17a2b] italic leading-relaxed font-normal">
              Investment outcomes should be driven by process, not prediction.
            </p>
          </div>
        </div>

        {/* Header matching the Anand Rathi pattern */}
        <div className="mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 uppercase">
            VALUES THAT CREATE TRUST
          </h3>
          {/* Gold Underline Bar */}
          <div className="w-14 h-1 bg-[#b17a2b] mt-3" />
        </div>

        {/* Core Layout: 2x2 Cards Grid + Teamwork Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left: 4 Rounded Cards in 2x2 Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {values.map((v) => (
              <article
                key={v.title}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-7 sm:p-8 flex flex-col items-center text-center justify-center border border-stone-100"
              >
                <div className="mb-4 flex items-center justify-center">
                  {v.icon}
                </div>
                <h4 className="text-sm sm:text-base font-bold tracking-wider uppercase text-stone-900 mb-2.5">
                  {v.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal max-w-xs">
                  {v.desc}
                </p>
              </article>
            ))}
          </div>

          {/* Right: Teamwork Image Card */}
          <div className="lg:col-span-4 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-stone-100 min-h-[340px] sm:min-h-[400px] lg:min-h-full">
            <Image
              src="/values-teamwork.png"
              alt="Anand Rathi Wealth team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Objective at GIFT City Summary */}
        <div className="mt-12 p-6 sm:p-7 bg-white rounded-xl border border-stone-200/80 max-w-4xl border-l-4 border-l-[#b17a2b]">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            The objective at GIFT City is to bring this thinking together within a unified investment platform, enabling investors to experience the Anand Rathi Wealth proposition through the IFSC ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PhilosophySection;
