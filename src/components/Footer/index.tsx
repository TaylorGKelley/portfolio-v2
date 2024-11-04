import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className='py-12'>
      <div className='max-w-5xl mx-auto flex items-center justify-between'>
        <div className='flex gap-4 items-center'>
          <img src='/Icons/light-logo.svg' className='h-10' />
          <div>
            <h4 className='font-semibold '>Taylor Kelley</h4>
            <h5 className='font-medium'>Software Developer</h5>
          </div>
        </div>
        <div className='flex justify-center flex-col items-end'>
          <p className='flex gap-2 items-center'>
            <FaLocationDot />
            <span>Alabama, USA</span>
          </p>
          <a className='underline' href='mailto:taylorgkelley@outlook.com'>
            taylorgkelley@outlook.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
