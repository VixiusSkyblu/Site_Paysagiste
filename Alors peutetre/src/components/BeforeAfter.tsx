import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { WaveSeparator } from './WaveSeparator';
import beforeImage1 from 'figma:asset/3934844a80aaee3f31a329e3c24d5c45d1686910.png';
import afterImage1 from 'figma:asset/3baacbb76ab977de15359f028d7566466e31da1c.png';
import beforeImage2 from 'figma:asset/5067eed2708aebb1ec2ca6dddc0af2181a09babc.png';
import afterImage2 from 'figma:asset/2ebcf1df62d5642bd24b86aec8c4bbfe9625bcc0.png';
import beforeImage3 from 'figma:asset/cd92d5e4af3c4e997328b74b1c9373eb5b69da75.png';
import afterImage3 from 'figma:asset/4ebd212c8565447ff0e9dfb4091c0eb069454821.png';

const transformations = [
  {
    before: beforeImage1,
    after: afterImage1,
    title: 'Entretien complet du jardin',
    description: 'Nettoyage et entretien régulier pour un jardin impeccable'
  },
  {
    before: beforeImage2,
    after: afterImage2,
    title: 'Taille de haies et tonte',
    description: 'Transformation complète d\'un jardin avec haies restructurées et pelouse parfaitement entretenue'
  },
  {
    before: beforeImage3,
    after: afterImage3,
    title: 'Rabattage et nettoyage',
    description: 'Taille professionnelle des haies avec évacuation des déchets verts'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export function BeforeAfter() {
  return (
    <section id="realisations" className="py-20 bg-white relative overflow-hidden">
      <WaveSeparator variant="top" color="#f9fafb" />
      
      {/* Éléments décoratifs - feuilles subtiles */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-[0.02] pointer-events-none">
        <svg viewBox="0 0 100 100" className="text-green-600" fill="currentColor">
          <ellipse cx="50" cy="35" rx="20" ry="30" transform="rotate(-15 50 35)" />
          <line x1="50" y1="65" x2="50" y2="95" stroke="currentColor" strokeWidth="3" />
        </svg>
      </div>
      <div className="absolute bottom-32 left-16 w-40 h-40 opacity-[0.02] pointer-events-none rotate-45">
        <svg viewBox="0 0 100 100" className="text-green-600" fill="currentColor">
          <ellipse cx="50" cy="35" rx="20" ry="30" transform="rotate(-15 50 35)" />
          <line x1="50" y1="65" x2="50" y2="95" stroke="currentColor" strokeWidth="3" />
        </svg>
      </div>
      

    </section>
  );
}
