import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqItems = [
  { question: 'Are there any guarantees for the products?', answer: 'All purchases on our website are made in accordance with Federal Law No. 54-FZ. Lifetime technical support is provided for all products purchased on our website.' },
  { question: 'How quickly will I receive my order?', answer: 'Digital products are delivered instantly — within 1 minute of payment confirmation to your email address. The store operates 24/7 automatically.' },
  { question: 'What payment methods are accepted?', answer: 'We accept all major payment methods including bank cards (Visa, MasterCard, Mir), online banking, electronic wallets, and other popular payment systems.' },
  { question: 'What if I cannot activate the product?', answer: 'Our technical support team is available 9:00–21:00 MSK and will help you with installation and activation. If the product cannot be activated, we will provide a replacement or full refund.' },
  { question: 'Can I get a refund?', answer: 'Yes, we offer a replacement or refund if the product does not work as described. Please contact our support team within 30 days of purchase.' },
  { question: 'Where can I find instructions for a product?', answer: 'Instructions are sent to your email along with the product key/account details. You can also find guides in our Blog section.' },
  { question: 'Do you work with legal entities?', answer: 'Yes! We work with legal entities and provide all necessary documents: invoice, act of completion, UPD. Contact us at support@rusoft.shop for corporate purchases.' },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-gray-900">{question}</span>
        <span className="text-gray-400 text-xl ml-4 flex-shrink-0">{open ? '×' : '+'}</span>
      </button>
      {open && <div className="px-6 pb-4"><p className="text-gray-600 text-sm leading-relaxed">{answer}</p></div>}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">FAQ</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
        <div className="space-y-3">
          {faqItems.map((item, idx) => <FAQItem key={idx} question={item.question} answer={item.answer} />)}
        </div>
        <div className="mt-10 bg-white rounded-2xl shadow-sm p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Still have questions?</h2>
          <p className="text-gray-500 mb-6">Our support team is ready to help you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:88003501032" className="bg-[#111827] text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors">8 (800) 350-10-32</a>
            <a href="mailto:support@rusoft.shop" className="border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">support@rusoft.shop</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
