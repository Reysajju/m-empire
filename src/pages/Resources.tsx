import React from 'react';
import { SEO } from '../components/SEO';
import { FileText, Video, Download, BookOpen } from 'lucide-react';
import { Button } from '../components/Button';

const resources = [
  {
    category: 'Guides',
    icon: FileText,
    items: [
      {
        title: 'Business Plan Template',
        description: 'A comprehensive guide to creating a winning business plan',
        link: '#',
      },
      {
        title: 'Market Research Guide',
        description: 'Learn how to conduct effective market research',
        link: '#',
      },
      {
        title: 'Pitch Deck Template',
        description: 'Create compelling investor presentations',
        link: '#',
      },
    ],
  },
  {
    category: 'Webinars',
    icon: Video,
    items: [
      {
        title: 'Startup Funding 101',
        description: 'Understanding different funding options',
        link: '#',
      },
      {
        title: 'Marketing for Startups',
        description: 'Cost-effective marketing strategies',
        link: '#',
      },
      {
        title: 'Legal Essentials',
        description: 'Legal considerations for new businesses',
        link: '#',
      },
    ],
  },
  {
    category: 'Templates',
    icon: Download,
    items: [
      {
        title: 'Financial Model',
        description: 'Excel template for financial projections',
        link: '#',
      },
      {
        title: 'Marketing Plan',
        description: 'Comprehensive marketing plan template',
        link: '#',
      },
      {
        title: 'Operations Manual',
        description: 'Standard operating procedures template',
        link: '#',
      },
    ],
  },
  {
    category: 'E-Books',
    icon: BookOpen,
    items: [
      {
        title: 'Startup Success Guide',
        description: 'Complete guide to launching your business',
        link: '#',
      },
      {
        title: 'Growth Strategies',
        description: 'Scaling your business effectively',
        link: '#',
      },
      {
        title: 'Innovation Handbook',
        description: 'Creating innovative products and services',
        link: '#',
      },
    ],
  },
];

export function Resources() {
  return (
    <>
      <SEO 
        title="Resources" 
        description="Access our comprehensive collection of business resources, guides, templates, and webinars."
        keywords={['business resources', 'startup guides', 'templates', 'webinars', 'e-books']}
      />
      
      <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Resource Center
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Everything you need to build and grow your business
            </p>
          </div>

          <div className="mt-24 grid gap-12 lg:grid-cols-2">
            {resources.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.category} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <Icon className="h-8 w-8 text-[#006D77]" />
                    <h2 className="ml-3 text-2xl font-bold text-gray-900">{category.category}</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {category.items.map((item) => (
                      <div key={item.title} className="group">
                        <a
                          href={item.link}
                          className="block p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#006D77]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-gray-600">{item.description}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4"
                          >
                            Access Resource
                          </Button>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}