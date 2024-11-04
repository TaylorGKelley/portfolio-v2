import React, { PropsWithChildren } from 'react';

function ProjectCardCarousel({ children }: PropsWithChildren) {
  return (
    <div className='grid grid-cols-3 gap-6 py-10 mx-auto max-w-6xl align-middle'>
      {children}
    </div>
  );
}

export default ProjectCardCarousel;
