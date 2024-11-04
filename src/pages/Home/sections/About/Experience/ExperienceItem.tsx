import React, { PropsWithChildren } from 'react';

function ExperienceItem({ children }: PropsWithChildren) {
  return (
    <div
      className='pl-8 relative w-fit pb-4
                before:w-4 before:aspect-square before:rounded-full before:bg-primary-900 before:absolute before:left-4 before:top-2
                after:w-0.5 after:bg-primary-900 after:absolute after:top-4 after:-bottom-3 after:rounded-full after:left-4 after:-translate-x-1/2 before:-translate-x-1/2'
    >
      {children}
    </div>
  );
}

export default ExperienceItem;
