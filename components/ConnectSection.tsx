'use client';

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function ConnectSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    country: '',
    category: '',
    range: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="connect" className="py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#b17a2b] mb-3">
              CONNECT
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight leading-tight mb-5">
              Start a conversation about investing through GIFT City
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal mb-4">
              Understanding the structure, investment process and eligibility is the first step.
            </p>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed mb-6">
              Connect with our team to know more about Anand Rathi Wealth&apos;s investment platform at GIFT City.
            </p>

            <div className="p-5 bg-[#fbfaf7] border border-stone-200 space-y-2 text-xs text-stone-600">
              <p className="font-semibold text-stone-800 uppercase tracking-wider text-[11px]">
                Registered Office
              </p>
              <p>Anand Rathi FME (IFSC) Private Limited</p>
              <p>GIFT City, Gandhinagar, Gujarat 382355, India</p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#fbfaf7] border border-stone-200 p-6 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#b17a2b] mx-auto" />
                <h3 className="font-serif text-2xl text-stone-900 font-normal">
                  Thank you for reaching out
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  We have received your enquiry. An advisor from our Anand Rathi Wealth GIFT City team will get in touch with you shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        mobile: '',
                        country: '',
                        category: '',
                        range: '',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs font-medium text-stone-700">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-none focus:outline-none focus:border-[#b17a2b] text-stone-900 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-medium text-stone-700">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-none focus:outline-none focus:border-[#b17a2b] text-stone-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="mobile" className="block text-xs font-medium text-stone-700">
                      Mobile Number *
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-none focus:outline-none focus:border-[#b17a2b] text-stone-900 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="country" className="block text-xs font-medium text-stone-700">
                      Country of Residence *
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. United Arab Emirates"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-none focus:outline-none focus:border-[#b17a2b] text-stone-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="category" className="block text-xs font-medium text-stone-700">
                      Investor Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-none focus:outline-none focus:border-[#b17a2b] text-stone-900 transition-colors"
                    >
                      <option value="">Select investor category</option>
                      <option value="Individual">Individual (HNI / UHNI)</option>
                      <option value="NRI">Non-Resident Indian (NRI)</option>
                      <option value="Family Office">Family Office</option>
                      <option value="Corporate">Corporate / Institutional</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="range" className="block text-xs font-medium text-stone-700">
                      Indicative Investment Range *
                    </label>
                    <input
                      id="range"
                      name="range"
                      type="text"
                      required
                      value={formData.range}
                      onChange={handleChange}
                      placeholder="e.g. USD 150,000+"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-none focus:outline-none focus:border-[#b17a2b] text-stone-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-medium text-stone-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your investment objectives or requirements..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-none focus:outline-none focus:border-[#b17a2b] text-stone-900 transition-colors resize-y"
                  />
                </div>

                <p className="text-[11px] text-stone-500 leading-normal">
                  By submitting this form, you request information from Anand Rathi FME (IFSC) Private Limited regarding our GIFT City investment platform.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#b17a2b] text-white hover:bg-[#95631f] transition-all disabled:opacity-60"
                >
                  <span>{loading ? 'Submitting...' : 'Connect With Us'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;
