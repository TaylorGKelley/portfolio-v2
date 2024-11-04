import React, { PropsWithChildren } from 'react';

function ProjectDescription({ children }: PropsWithChildren) {
  return <p className='font-semibold'>{children}</p>;
}

export default ProjectDescription;
