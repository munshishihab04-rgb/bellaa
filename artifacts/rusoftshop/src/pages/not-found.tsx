import React from 'react';
import { Link, useLocation } from 'wouter';

export default function NotFound() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6f7fa] p-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8">The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => window.history.back()} className="inline-flex items-center justify-center gap-2 bg-[#1c64ff] text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
            Go Back
          </button>
          <Link href="/" className="inline-flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
