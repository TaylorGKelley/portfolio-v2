import React from 'react';
import {
  CSSLogo,
  FigmaLogo,
  NodeJSLogo,
  ReactLogo,
  TypeScriptLogo,
} from '../../../../components/icons';

function SkillCarousel() {
  return (
    <div
      className='flex relative justify-between py-8 max-w-4xl mx-auto w-full before:bg-primary-300 before:w-5/6 before:h-0.5 before:absolute before:rounded-full
    after:bg-primary-300 after:w-5/6 after:h-0.5 after:absolute before:-translate-x-1/2 before:left-1/2 after:-translate-x-1/2 after:left-1/2 after:bottom-0 after:-translate-y-full before:top-0 after:rounded-full'
    >
      <ReactLogo />
      <TypeScriptLogo />
      <FigmaLogo />
      <CSSLogo />
      <NodeJSLogo />
    </div>
  );
}

export default SkillCarousel;
