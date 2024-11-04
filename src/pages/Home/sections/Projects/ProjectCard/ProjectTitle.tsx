import React, { PropsWithChildren } from 'react';

function ProjectTitle({ children }: PropsWithChildren) {
  return <h3 className='font-serif text-center mb-1'>{children}</h3>;
}

export default ProjectTitle;
