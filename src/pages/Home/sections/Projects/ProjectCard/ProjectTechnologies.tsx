import React, { PropsWithChildren } from 'react';

function ProjectTechnologies({ children }: PropsWithChildren) {
  return (
    <div className='flex gap-4 items-center justify-evenly'>{children}</div>
  );
}

export default ProjectTechnologies;
