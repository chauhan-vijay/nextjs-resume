import { ProfessionalExperience, Project } from '@content';
import { ReactNode } from 'react';
import { Heading } from 'src/components/heading/heading';
import Prose from 'src/components/prose/prose';
import ProjectItem from './project-item';

export default function ProfessionalItem({
  body,
  endDate,
  organization,
  startDate,
  title,
  projects,
}: ProfessionalExperience): ReactNode {
  return (
    <article className="border-neutral-6 py-6 m-0 first-of-type:border-none last-of-type:pb-0">
      <Heading className="text-balance" level={3}>
        <span className="rounded-md bg-neutral-12 px-2 text-neutral-1">
          {title}
        </span>
        <span> at {organization}</span>
      </Heading>

      <div className="mt-1 font-medium tracking-wide">
        {startDate}-{endDate ?? 'Current'}
      </div>
      {projects &&
        projects.length > 0 &&
        projects.map((project: Project, index) => (
          <ProjectItem key={index} {...project}></ProjectItem>
        ))}
      <Prose html={body.html} />
    </article>
  );
}
