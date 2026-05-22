import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const blogPosts = [
  { title: 'How to set up passwordless login in Windows 11', date: 'May 12, 2026', category: 'Blog', views: 2, image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', imageAlt: 'Windows 11 passwordless login', href: '/blog/passwordless-windows-11', excerpt: 'Learn how to configure Windows Hello and other passwordless authentication methods in Windows 11 for enhanced security and convenience.' },
  { title: 'Automatic deletion of temporary files in Windows 11', date: 'May 11, 2026', category: 'Blog', views: 1, image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', imageAlt: 'Temp files', href: '/blog/auto-delete-temp-files', excerpt: 'Discover how to use Storage Sense and other built-in tools to automatically clean up temporary files and free up disk space in Windows 11.' },
  { title: 'How to activate Microsoft Office 2021', date: 'April 28, 2026', category: 'Blog', views: 45, image: 'https://rusoft.shop/wp-content/uploads/2024/01/microsoft-office-logo.png', imageAlt: 'Office 2021 activation', href: '/blog/activate-office-2021', excerpt: 'Step-by-step guide on how to activate Microsoft Office 2021 using a product key purchased from our store.' },
  { title: "Autodesk 3ds Max 2026: What's New", date: 'April 15, 2026', category: 'Blog', views: 32, image: 'https://rusoft.shop/wp-content/uploads/2024/02/3ds-max_22.jpg', imageAlt: '3ds Max 2026', href: '/blog/3ds-max-2026-new-features', excerpt: 'Explore the new features and improvements in Autodesk 3ds Max 2026.' },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">Blog</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Articles &amp; Instructions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.title} href={post.href} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src={post.image} alt={post.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">{post.date} &bull; {post.category} &bull; {post.views} views</p>
                <h2 className="font-bold text-gray-900 mb-2 group-hover:text-[#1c64ff] transition-colors">{post.title}</h2>
                <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
