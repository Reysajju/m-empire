import React from 'react';
import { Lightbulb, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  const handleLaunchClick = () => {
    navigate('/get-started');
  };

  const handleInvestClick = () => {
    navigate('/get-started');
  };

  return (
    <div className="relative isolate min-h-screen flex items-center">
      <HeroBackground />
      
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Turn Your Idea into a Local Market Success
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join Magnates Empire and transform your entrepreneurial vision into reality. 
            We provide the expertise, resources, and connections you need to succeed.
          </motion.p>

          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={handleLaunchClick}
              className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-[#FF6B6B] rounded-md group focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10" />
              <span className="relative">Launch Your Idea</span>
            </motion.button>

            <motion.button
              onClick={handleInvestClick}
              className="relative inline-flex items-center px-8 py-3 text-white border-2 border-[#006D77] rounded-md overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#006D77] focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute w-full h-0 transition-all duration-300 ease-out bg-[#006D77] group-hover:h-full" />
              <span className="relative">Invest in Innovation</span>
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-16">
            <motion.div 
              className="relative pl-9"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <dt className="inline font-semibold text-white">
                <Lightbulb className="absolute left-1 top-1 h-5 w-5 text-[#FFD700]" />
                Incubation Excellence
              </dt>
              <dd className="inline">Transform your idea with our proven incubation program.</dd>
            </motion.div>
            
            <motion.div 
              className="relative pl-9"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <dt className="inline font-semibold text-white">
                <Users className="absolute left-1 top-1 h-5 w-5 text-[#006D77]" />
                Expert Mentorship
              </dt>
              <dd className="inline">Learn from industry leaders and successful entrepreneurs.</dd>
            </motion.div>
            
            <motion.div 
              className="relative pl-9"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <dt className="inline font-semibold text-white">
                <TrendingUp className="absolute left-1 top-1 h-5 w-5 text-[#FF6B6B]" />
                Strategic Funding
              </dt>
              <dd className="inline">Connect with investors who believe in your vision.</dd>
            </motion.div>
          </dl>
        </motion.div>
      </div>
    </div>
  );
}