import React from 'react';
import {
  BookOpen,
  Home,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  HeartHandshake,
  Heart
} from 'lucide-react';

export default function ProjectIcon({ iconType, className = "w-7 h-7" }) {
  switch (iconType) {
    case 'orphan':
      // Bespoke orphan / child sponsorship icon
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
          <path d="M12 11c1.5 1 2.5 2.5 2.5 4.5" />
          <path d="M17 12l2 2 4-4" />
        </svg>
      );
    case 'quran':
      return <BookOpen className={className} />;
    case 'home':
    case 'relief':
      return <Home className={className} />;
    case 'medical':
      return <Stethoscope className={className} />;
    case 'food':
      return <ShoppingBag className={className} />;
    case 'education':
      return <GraduationCap className={className} />;
    default:
      return <HeartHandshake className={className} />;
  }
}
