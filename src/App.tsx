import React, { useState } from 'react';
import { Bot, Terminal, Zap, MessageSquare, ArrowRight, ChevronRight } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', email);
  };

  return (
    <div className="min-h-screen bg-dark text-white font-mono">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-dark/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Terminal className="w-8 h-8 text-white" />
              <span className="text-xl font-bold tracking-tight">QYGrowth</span>
            </div>
            <button className="border border-white/10 hover:bg-white/5 px-4 py-2 transition-all hover-underline">
              Book a Call
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0">
          <spline-viewer url="https://prod.spline.design/PINyQDI-sWSBPr7O/scene.splinecode"></spline-viewer>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 typewriter tracking-tight">
              Automate Your Growth with AI
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 font-sans">
              Transform your business with AI-powered automation and seamless integrations.
            </p>
            <div className="glow-effect inline-block">
              <button className="bg-white text-dark px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all flex items-center space-x-2">
                <span>Initialize Growth</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-accent relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="w-8 h-8" />,
                title: 'AI Chat Agents',
                description: 'Custom AI agents that understand your business and engage with customers 24/7.'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Lead Generation',
                description: 'Automated systems that capture and qualify leads while you focus on growth.'
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: 'CRM Integration',
                description: 'Seamless connection with your existing tools for efficient lead management.'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 border border-white/5 hover:border-white/20 transition-all">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 font-sans">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 tracking-tight">Ready to Transform Your Business?</h2>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-white/10 focus:border-white/30 outline-none font-mono"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-dark font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <span>Book Now</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;