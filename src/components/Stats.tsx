import React from 'react';

const stats = [
  { label: 'Startups Launched', value: '100+' },
  { label: 'Total Funding Raised', value: '$5M+' },
  { label: 'Success Rate', value: '85%' },
  { label: 'Active Mentors', value: '50+' },
];

export function Stats() {
  return (
    <div className="bg-[#0A2463] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-8 gap-x-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="mx-auto flex flex-col">
              <dt className="text-base leading-7 text-gray-300">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}