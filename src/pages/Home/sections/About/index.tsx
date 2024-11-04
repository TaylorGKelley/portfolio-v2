import React from 'react';
import SkillCarousel from './SkillCarousel';
import ExperienceContainer from './Experience/ExperienceContainer';
import ExperienceItem from './Experience/ExperienceItem';
import ExperienceTitle from './Experience/ExperienceTitle';
import ExperienceCompany from './Experience/ExperienceCompany';
import ExperienceTime from './Experience/ExperienceTime';

function About() {
  return (
    <section>
      <SkillCarousel />
      <div className="grid grid-cols-3 gap-4 max-w-5xl py-20 mx-auto">
        <div className="col-span-2">
          <h2 className="serif mb-4 font-serif">About</h2>
          <p>
            My name is Taylor. I am a Software Developer with a focus on web
            applications. I love doing Front-End work using React and CSS, while
            also being capable of backend development using technologies such as
            Node JS with Express. I currently work with ASP.Net C#, Blazor with
            server-side rendering, and SQL Server.
          </p>
        </div>
        <div>
          {/* Experience Section */}
          <h3 className="mb-2">Experience</h3>
          <ExperienceContainer>
            <ExperienceItem>
              <ExperienceTitle>Software Developer</ExperienceTitle>
              <ExperienceCompany>
                Alabama Law Enforcement Agency
              </ExperienceCompany>
              <ExperienceTime start={new Date(2023, 5, 16)} end={'Present'} />
            </ExperienceItem>
            <ExperienceItem>
              <ExperienceTitle>System Administrator</ExperienceTitle>
              <ExperienceCompany>Alabama Medicaid Agency</ExperienceCompany>
              <ExperienceTime
                start={new Date(2021, 7, 16)}
                end={new Date(2023, 5, 15)}
              />
            </ExperienceItem>
          </ExperienceContainer>
        </div>
      </div>
    </section>
  );
}

export default About;
