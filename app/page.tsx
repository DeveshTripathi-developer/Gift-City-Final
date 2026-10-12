import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GiftCitySection from '@/components/GiftCitySection';
import PhilosophySection from '@/components/PhilosophySection';
import ExperienceSection from '@/components/ExperienceSection';
import InvestmentLeadershipSection from '@/components/InvestmentLeadershipSection';
import QuoteBanner from '@/components/QuoteBanner';
import ConnectSection from '@/components/ConnectSection';
import RegulatorySection from '@/components/RegulatorySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfaf7] text-[#1a140e] font-sans antialiased selection:bg-[#b17a2b] selection:text-white">
      {/* Top Navigation Bar with Logo */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* GIFT City */}
        <GiftCitySection />

        {/* Our Philosophy */}
        <PhilosophySection />

        {/* Our Foundation & Experience */}
        <ExperienceSection />

        {/* Investment Leadership */}
        <InvestmentLeadershipSection />

        {/* Quote Break Banner */}
        <QuoteBanner />

        {/* Connect With Us Interactive Form */}
        <ConnectSection />

        {/* Regulatory & Investor Information */}
        <RegulatorySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
