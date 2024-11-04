import React from 'react';

type ProjectActionButtonProps = {
  projectId: string;
};

function ProjectActionButton({ projectId }: ProjectActionButtonProps) {
  return (
    <a
      href={`/Project/${projectId}`}
      className='bg-primary-900 text-primary-300 inline-block py-4 px-16 w-fit rounded-full mx-auto'
    >
      View Project
    </a>
  );
}

export default ProjectActionButton;
