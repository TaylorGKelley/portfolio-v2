import React from 'react';
import { FaFileArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa6';

function Hero() {
  return (
    <section className='h-screen flex justify-center items-center'>
      <div className='px-4 relative flex flex-col items-center justify-center'>
        <div className='h-max flex mb-6 gap-16'>
          <div className='flex flex-col items-center justify-center gap-4 height-full w-32 font-semibold cursor-pointer text-3xl text-primary-800'>
            <a href='https://github.com/taylorgkelley' target='_blank'>
              <FaGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/taylor-g-kelley'
              target='_blank'
            >
              <FaLinkedin />
            </a>
            <a href='/Files/Resume.pdf' target='_blank'>
              <FaFileArrowDown />
            </a>
          </div>
          <img
            src='/Images/PhotoOfTaylor.png'
            alt='Image of Taylor Kelley'
            className='aspect-square object-cover shadow-lg shadow-primary-900/50 rounded-full h-96'
          />
          <nav className='relative w-32 font-semibold cursor-pointer text-xl text-center text-primary-800 flex justify-center'>
            <ul className='list-none height-full flex flex-col items-center justify-center gap-4'>
              <li>
                <a href='#About'>About</a>
              </li>
              <li>
                <a href='#Projects'>My Work</a>
              </li>
              <li>
                <a href='#Contact'>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <h1 className='text-7xl font-serif'>Taylor Kelley</h1>
        <h3 className='text-3xl text-primary-800'>
          {'<Software Developer />'}
        </h3>
      </div>
    </section>
  );
}

export default Hero;
