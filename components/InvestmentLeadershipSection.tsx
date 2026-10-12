import React from 'react';

export function InvestmentLeadershipSection() {
  const leaders = [
    {
      index: 'INVESTMENT LEADERSHIP',
      name: 'Dipal Patel',
      designation: '[Approved Designation]',
      desc: 'Leading investment structuring and client portfolio solutions within the GIFT City International Financial Services Centre.',
      bio: "Dipal's BIO",
    },
    {
      index: 'INVESTMENT LEADERSHIP',
      name: 'Sarfaraj Rathod',
      designation: '[Approved Designation]',
      desc: "Sarfaraj brings expertise across financial and regulatory disciplines, supporting the platform's investment, operating and governance framework.",
      bio: "Sarfaraj's BIO",
    },
  ];

  return (
    <section id="leadership" className="py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#b17a2b] mb-3">
            INVESTMENT LEADERSHIP
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight leading-tight">
            Investment thinking backed by experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {leaders.map((leader, idx) => (
            <article
              key={idx}
              className="p-8 border border-stone-200 bg-[#fbfaf7] hover:border-[#b17a2b]/60 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#b17a2b] block mb-4">
                  {leader.index}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal mb-1.5">
                  {leader.name}
                </h3>
                <p className="text-xs text-[#95631f] uppercase tracking-wider font-semibold mb-4">
                  {leader.designation}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                  {leader.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="italic text-[#b17a2b] font-medium">{leader.bio}</span>
                <span className="text-stone-300">·</span>
                <span className="text-stone-500">Anand Rathi Wealth IFSC</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InvestmentLeadershipSection;
