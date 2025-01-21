import React from 'react';
import { SEO } from '../components/SEO';
import { Calendar, Clock, User } from 'lucide-react';

const posts = [
  {
    title: 'How to Validate Your Business Idea',
    excerpt: 'Learn the essential steps to validate your business idea before investing time and money.',
    author: 'David Thompson',
    date: '2024-03-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Strategy',
  },
  {
    title: 'Securing Your First Investment',
    excerpt: 'A comprehensive guide to preparing for and securing your first round of investment.',
    author: 'Sarah Chen',
    date: '2024-03-10',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Funding',
  },
  {
    title: 'Building a Strong Team Culture',
    excerpt: 'Tips and strategies for creating a positive and productive startup culture.',
    author: 'Michael Rodriguez',
    date: '2024-03-05',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Team Building',
  },
  {
    title: 'Marketing on a Bootstrap Budget',
    excerpt: 'Creative marketing strategies for startups with limited resources.',
    author: 'Emily Watson',
    date: '2024-03-01',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Marketing',
  },
];

export function Blog() {
  return (
    <>
      <SEO 
        title="Blog" 
        description="Insights, tips, and strategies for entrepreneurs and startup founders."
        keywords={['startup blog', 'entrepreneur tips', 'business advice', 'startup insights']}
      />
      
      <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Latest Insights
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Expert advice and insights to help you build and grow your business
            </p>
          </div>

          <div className="mt-24 grid gap-12 lg:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#006D77] text-white">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    <a href="#" className="hover:text-[#006D77]">
                      {post.title}
                    </a>
                  </h2>
                  
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 space-x-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}