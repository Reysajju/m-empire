import React from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { Shield, Zap, BarChart, Handshake, Download, Users, FileText, Building2 } from 'lucide-react';

const services = [
  {
    title: 'Starter Kit',
    subtitle: 'Freemium Tier',
    price: 'PKR 0',
    description: 'Perfect for aspiring entrepreneurs looking to start their journey',
    features: [
      'Access to WhatsApp community of Pakistani entrepreneurs',
      'Basic business plan template (Urdu/English)',
      'SECP registration checklist',
      'List of local suppliers',
      'Monthly webinar: "Start a Business with PKR 50,000"',
    ],
    icon: Shield,
    color: 'text-gray-600',
  },
  {
    title: 'Launch Pad',
    subtitle: 'Basic Plan',
    price: 'PKR 7,500',
    priceDetail: 'or PKR 2,500/month × 3 months',
    description: 'Ideal for early-stage entrepreneurs and SMEs',
    features: [
      'Customized 10-page business plan for Pakistani market',
      '2 mentorship sessions with industry experts',
      'Basic financial modeling template',
      'Access to supplier directory',
      '1 free workshop ticket',
      'Student discount: 30% off',
    ],
    icon: Zap,
    color: 'text-[#006D77]',
  },
  {
    title: 'Scale Up',
    subtitle: 'Advanced Plan',
    price: 'PKR 25,000',
    priceDetail: 'or PKR 6,000/month × 5 months',
    description: 'For startups ready to scale their operations',
    features: [
      'Full business plan + investor pitch deck (Urdu/English)',
      '5 mentorship sessions with tax/legal experts',
      'SECP/NTN registration support',
      '3 investor introductions',
      'Social media branding package',
      'Discounted co-working space access',
    ],
    icon: BarChart,
    color: 'text-[#FF6B6B]',
    featured: true,
  },
  {
    title: 'Equity Partnership',
    subtitle: 'Premium Plan',
    price: 'PKR 0 Upfront',
    priceDetail: '+ 10-20% equity',
    description: 'For high-potential startups seeking hands-on support',
    features: [
      'Dedicated project manager for 3 months',
      'Guaranteed pitch to 5+ investors',
      'Website development + SEO setup',
      'Free stall at Startup Expo Pakistan',
      'Revenue share: 5% of first-year profits',
      'Pay-After-Revenue option available',
    ],
    icon: Handshake,
    color: 'text-[#FFD700]',
  },
];

const addOns = [
  {
    title: 'Investor Pitch Review',
    price: 'PKR 3,000',
    icon: FileText,
  },
  {
    title: 'SECP Registration Support',
    price: 'PKR 5,000',
    icon: Building2,
  },
  {
    title: 'Expert Consultation',
    price: 'PKR 2,500',
    icon: Users,
  },
  {
    title: 'Urdu Translation',
    price: 'PKR 1,500',
    icon: Download,
  },
];

export function Services() {
  return (
    <>
      <SEO 
        title="Services" 
        description="Transform your business idea into reality with our comprehensive incubation services. Choose from Starter Kit, Launch Pad, Scale Up, or Equity Partnership plans."
        keywords={['business incubation', 'startup services', 'Pakistan startups', 'SECP registration', 'business mentorship']}
      />
      
      <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Choose Your Growth Path
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Affordable plans designed specifically for Pakistani entrepreneurs
            </p>
          </div>

          <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
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
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <Icon className={`h-12 w-12 ${service.color}`} />
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{service.subtitle}</p>
                    <p className="mt-4 text-3xl font-bold text-gray-900">{service.price}</p>
                    {service.priceDetail && (
                      <p className="mt-1 text-sm text-gray-500">{service.priceDetail}</p>
                    )}
                    <p className="mt-2 text-sm text-gray-500">{service.description}</p>
                    
                    <ul className="mt-6 space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <Shield className="h-5 w-5 text-[#006D77]" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">{feature}</p>
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

          {/* Add-On Services */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Add-On Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon) => {
                const Icon = addon.icon;
                return (
                  <div key={addon.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <Icon className="h-8 w-8 text-[#006D77] mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">{addon.title}</h3>
                    <p className="mt-2 text-2xl font-bold text-gray-900">{addon.price}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full"
                    >
                      Add Service
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Special Offers */}
          <div className="mt-24 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Special Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Student Discount</h3>
                <p className="text-gray-600">30% off for university students with valid ID</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Group Discount</h3>
                <p className="text-gray-600">15% off for 3+ entrepreneurs from the same city</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Pay-After-Revenue</h3>
                <p className="text-gray-600">Defer 50% payment until your first PKR 100,000 revenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}