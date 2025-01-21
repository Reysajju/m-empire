import React from 'react';
import { Building2 } from 'lucide-react';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export function Logo({ className = "", iconClassName = "", textClassName = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Building2 className={`h-8 w-8 text-[#0A2463] ${iconClassName}`} aria-hidden="true" />
      <span className={`ml-2 font-bold text-[#0A2463] ${textClassName}`}>
        Magnates Empire
      </span>
    </div>
  );
}