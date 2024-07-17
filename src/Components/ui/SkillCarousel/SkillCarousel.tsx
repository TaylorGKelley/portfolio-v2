import React from 'react';
import './SkillCarousel.css';
import { SkillsCarouselLogos } from '../../../data/projectData';
import { IconType } from 'react-icons';

export default function SkillCarousel() {
  return (
    <div className="slider">
      <div className="slide-track">
        {SkillsCarouselLogos.map((Value: IconType) => (
          <div className="slide">
            <Value />
          </div>
        ))}
      </div>
    </div>
  );
}
