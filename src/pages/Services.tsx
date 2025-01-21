import React from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { Shield, Zap, Users, BarChart } from 'lucide-react';

const services = [
  {
    title: 'Basic Incubation',
    price: '$499/month',
    features: [
      'Business Plan Development',
      'Market Research',
      'Basic Mentorship',
      'Monthly Strategy Session',
    ],
    icon: Shield,
    color: 'text-[#006D77]',
  },
  {
    title: 'Growth Accelerator',
    price: '$999/month',
    features: [
      'Everything in Basic',
      'Investor Network Access',
      'Weekly Mentorship',
      'Financial Modeling',
      'Marketing Strategy',
    ],
    icon: Zap,
    color: 'text-[#FF6B6B]',
    featured: true,
  },
  {
    title: 'Enterprise Scale',
    price: '$1,999/month',
    features: [
      'Everything in Growth',
      'Dedicated Mentor',
      'Investor Matching',
      'Legal Support',
      'Office Space Access',
      'International Market Entry',
    ],
    icon: BarChart,
    color: 'text-[#FFD700]',
  },
];

export function Services() {
  return (
    <>
      <SEO 
        title="Services" 
        description="Transform your business idea into reality with our comprehensive incubation services. Choose from Basic, Growth, or Enterprise plans."
        keywords={['business incubation', 'startup services', 'mentorship', 'investor matching']}
      />
      
      <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Choose Your Growth Path
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Select the perfect plan to transform your idea into a thriving business
            </p>
          </div>

          <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col ${
                    service.featured ? 'ring-2 ring-[#FF6B6B]' : ''
                  }`}
                >
                  {service.featured && (
                    <div className="absolute top-0 right-6 -mt-4">
                      <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-[#FF6B6B] text-white">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <Icon className={`h-12 w-12 ${service.color}`} />
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="mt-2 text-3xl font-bold text-gray-900">{service.price}</p>
                    
                    <ul className="mt-6 space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <Users className="h-6 w-6 text-[#006D77]" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="mt-8 w-full"
                    variant={service.featured ? 'primary' : 'outline'}
                  >
                    Get Started
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}