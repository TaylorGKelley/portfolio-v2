import React from 'react';
import ProjectCardCarousel from './ProjectCard/ProjectCardCarousel';
import ProjectTitle from './ProjectCard/ProjectTitle';
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectDescription from './ProjectCard/ProjectDescription';
import ProjectTechnologies from './ProjectCard/ProjectTechnologies';
import {
  CSSLogo,
  NodeJSLogo,
  ReactLogo,
  TypeScriptLogo,
} from '../../../../components/icons';
import ProjectActionButton from './ProjectCard/ProjectActionButton';

type Project = {
  projectId: string;
  title: string;
  description: string;
  technologies: React.FC[];
};

const projectsData: Project[] = [
  {
    projectId: 'breadBaseDashboard',
    title: 'Admin Dashboard',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dignissimos vel, mollitia pariatur quos expedita inventore.',
    technologies: [
      () => <ReactLogo className='h-10 w-10' />,
      () => <TypeScriptLogo className='h-8 w-8' />,
      () => <NodeJSLogo className='h-10 w-10' />,
    ],
  },
  {
    projectId: 'breadBaseSite',
    title: 'Bread Base',
    description:
      'Lorem ipsum dolor tempora dignissimos vel, mollitia pariatur quos expedita inventore.',
    technologies: [
      () => <ReactLogo className='h-10 w-10' />,
      () => <TypeScriptLogo className='h-8 w-8' />,
      () => <CSSLogo className='h-8 w-8' />,
    ],
  },
  {
    projectId: 'breadBaseSite',
    title: 'Bread Base',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dignissimos vel, mollitia pariatur quos expedita inventore.',
    technologies: [
      () => <ReactLogo className='h-10 w-10' />,
      () => <TypeScriptLogo className='h-8 w-8' />,
      () => <CSSLogo className='h-8 w-8' />,
    ],
  },
];

function Projects() {
  return (
    <section className='py-12'>
      <h2 className='text-center font-serif'>My Work</h2>
      <ProjectCardCarousel>
        {projectsData.map((project) => (
          <ProjectCard>
            <div>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </div>
            <ProjectTechnologies>
              {project.technologies.map((Logo) => (
                <Logo />
              ))}
            </ProjectTechnologies>
            <ProjectActionButton projectId={project.projectId} />
          </ProjectCard>
        ))}
      </ProjectCardCarousel>
    </section>
  );
}

export default Projects;
