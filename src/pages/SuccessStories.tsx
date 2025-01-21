import React from 'react';
import { SEO } from '../components/SEO';
import { TrendingUp, Users, Award } from 'lucide-react';

const stories = [
  {
    name: 'TechGrow Solutions',
    founder: 'Sarah Chen',
    description: 'From a local IT service to a regional tech powerhouse, TechGrow Solutions revolutionized small business IT support.',
    metrics: {
      growth: '400% YoY',
      employees: '50+',
      raised: '$2M',
    },
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    name: 'GreenEats',
    founder: 'Michael Rodriguez',
    description: 'Transforming local food delivery with sustainable practices and zero-waste packaging.',
    metrics: {
      growth: '300% YoY',
      employees: '35+',
      raised: '$1.5M',
    },
    image: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    name: 'HealthBridge',
    founder: 'Dr. Emily Watson',
    description: 'Connecting patients with healthcare providers through an innovative telehealth platform.',
    metrics: {
      growth: '250% YoY',
      employees: '40+',
      raised: '$3M',
    },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

export function SuccessStories() {
  return (
    <>
      <SEO 
        title="Success Stories" 
        description="Discover how entrepreneurs transformed their ideas into successful businesses with Magnates Empire."
        keywords={['success stories', 'startup success', 'entrepreneur stories', 'business growth']}
      />
      
      <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Success Stories
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Real entrepreneurs, real success. Discover how we helped transform ideas into thriving businesses.
            </p>
          </div>

          <div className="mt-24 space-y-16">
            {stories.map((story, index) => (
              <div
                key={story.name}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
                
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">{story.name}</h2>
                  <p className="text-xl text-gray-600">Founded by {story.founder}</p>
                  <p className="text-gray-600 text-lg">{story.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 text-[#006D77] mx-auto" />
                      <p className="mt-2 text-2xl font-bold text-gray-900">{story.metrics.growth}</p>
                      <p className="text-gray-500">Growth</p>
                    </div>
                    <div className="text-center">
                      <Users className="h-8 w-8 text-[#FFD700] mx-auto" />
                      <p className="mt-2 text-2xl font-bold text-gray-900">{story.metrics.employees}</p>
                      <p className="text-gray-500">Team Size</p>
                    </div>
                    <div className="text-center">
                      <Award className="h-8 w-8 text-[#FF6B6B] mx-auto" />
                      <p className="mt-2 text-2xl font-bold text-gray-900">{story.metrics.raised}</p>
                      <p className="text-gray-500">Funding</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}