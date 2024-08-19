import { PreviousTitle, ProfessionalExperience, Project } from '@content';
import React from 'react';
import { sortedPreviousTitles } from 'src/helpers/utils';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';
import ProjectItem from './ProjectItem';

const ProfessionalItem: React.FC<ProfessionalExperience> = ({
  body,
  endDate,
  organization,
  startDate,
  title,
  previousTitles,
  projects,
}) => {
  const previousTitlesSorted = previousTitles
    ? sortedPreviousTitles(previousTitles)
    : [];

  return (
    <article className="border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0">
      <Heading className="text-balance" level={3}>
        <span className="rounded-md bg-neutral-12 px-2 text-neutral-1">
          {title}
        </span>
        <span> at {organization}</span>
      </Heading>

      <div className="mt-1 font-medium tracking-wide">
        {previousTitlesSorted.length === 0 ? (
          <>
            {startDate}–{!endDate ? 'Current' : endDate}
          </>
        ) : (
          <>
            <p>
              {startDate}–{!endDate ? 'Current' : endDate}
            </p>
            {previousTitlesSorted?.map((prevTitle: PreviousTitle, idx) => (
              <p key={idx}>
                {prevTitle.title} {prevTitle.startDate}–{prevTitle.endDate}
              </p>
            ))}
          </>
        )}
      </div>
      {projects &&
        projects.length > 0 &&
        projects.map((project: Project, index) => (
          <ProjectItem key={index} {...project}></ProjectItem>
        ))}
      <Prose html={body.html} />
    </article>
  );
};

export default ProfessionalItem;
