import React, { PropsWithChildren } from 'react';

function ProjectCard({ children }: PropsWithChildren) {
  return (
    <div className='w-80 h-96 border-[3px] border-primary-800 shadow-lg shadow-primary-900/50 rounded-3xl px-4 py-8 flex flex-col justify-between mx-auto'>
      {children}
    </div>
  );
}

export default ProjectCard;
