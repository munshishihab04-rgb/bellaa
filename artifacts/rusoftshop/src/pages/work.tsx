import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const vacancies = [
  { title: 'Customer Support Specialist', type: 'Remote', salary: '40,000 – 60,000 rub/month', description: 'We are looking for a friendly and knowledgeable customer support specialist to help our customers with software activation and technical questions.', requirements: ['Experience in customer support', 'Knowledge of Microsoft products', 'Good communication skills', 'Availability 9:00–21:00 MSK'] },
  { title: 'Content Manager', type: 'Remote', salary: '35,000 – 50,000 rub/month', description: 'We need a content manager to create articles, instructions, and product descriptions for our website.', requirements: ['Experience in content creation', 'Knowledge of software products', 'SEO basics', 'Attention to detail'] },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <svg width="5" height="9" viewBox="0 0 5 9" fill="none" className="flex-shrink-0"><path d="M1 1l3 3.5L1 8" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-gray-700">Lavora con noi</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Vacancies</h1>
        <div className="space-y-4">
          {vacancies.map((vacancy) => (
            <div key={vacancy.title} className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{vacancy.title}</h2>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs bg-blue-50 text-[#1c64ff] px-2 py-0.5 rounded-full">{vacancy.type}</span>
                    <span className="text-sm text-gray-500">{vacancy.salary}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{vacancy.description}</p>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">Requirements:</h3>
                <ul className="space-y-1">
                  {vacancy.requirements.map((req) => (
                    <li key={req} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#1c64ff] rounded-full flex-shrink-0"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="mailto:support@rusoft.shop?subject=Vacancy Application" className="inline-block bg-[#111827] text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">Apply Now</a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
