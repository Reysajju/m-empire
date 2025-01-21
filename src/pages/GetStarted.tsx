import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Briefcase, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries } from '../data/industries';
import { SEO } from '../components/SEO';

type UserType = 'ideaOwner' | 'investor' | null;

interface FormData {
  name: string;
  email: string;
  industry: string;
  investmentRange?: string;
  description: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export function GetStarted() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    industry: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Add form-name field for Netlify forms
      formData.append('form-name', 'contact');
      
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      // Show success message and redirect
      alert('Thank you for your submission!');
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Get Started" 
        description="Begin your entrepreneurial journey with Magnates Empire. Whether you're an idea owner or investor, we're here to help you succeed."
        keywords={['start business', 'entrepreneurship', 'business investment', 'startup funding']}
      />
      
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Start Your Journey
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Whether you have an idea or want to invest in the next big thing,
              we're here to help you succeed.
            </p>
          </div>

          {!userType ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-8 rounded-xl shadow-lg cursor-pointer"
                onClick={() => handleUserTypeSelect('ideaOwner')}
              >
                <Lightbulb className="h-12 w-12 text-[#FF6B6B] mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">I Have an Idea</h2>
                <p className="text-gray-600">
                  Turn your innovative idea into a successful business with our support and resources.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-8 rounded-xl shadow-lg cursor-pointer"
                onClick={() => handleUserTypeSelect('investor')}
              >
                <Briefcase className="h-12 w-12 text-[#006D77] mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">I Want to Invest</h2>
                <p className="text-gray-600">
                  Connect with promising startups and be part of the next success story.
                </p>
              </motion.div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white p-8 rounded-xl shadow-lg space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="user-type" value={userType} />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
                  />
                </div>

                {userType === 'investor' && (
                  <div>
                    <label htmlFor="investmentRange" className="block text-sm font-medium text-gray-700">
                      Investment Range
                    </label>
                    <select
                      id="investmentRange"
                      name="investmentRange"
                      required
                      value={formData.investmentRange}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
                    >
                      <option value="">Select a range</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k+">$500,000+</option>
                    </select>
                  </div>
                )}

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                    {userType === 'investor' ? 'Industries of Interest' : 'Industry'}
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
                  >
                    <option value="">Select an industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    {userType === 'investor' 
                      ? 'What types of startups are you interested in?'
                      : 'Tell us about your idea'}
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
                  />
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setUserType(null)}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    loading={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </div>
              </motion.form>
            </AnimatePresence>
          )}
        </div>
      </div>
    </>
  );
}