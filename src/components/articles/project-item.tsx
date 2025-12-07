import { Project } from '@content';
import { ReactNode } from 'react';

export default function ProjectItem({
  title,
  description,
  toolsAndTechnologies,
  rolesAndResponsibilities,
}: Project): ReactNode {
  return (
    <div className="project mt-3 text-base text-neutral-12">
      <p>
        <strong>Project Name: </strong>
        <span>{title}</span>
      </p>
      <p>
        <strong>Description: </strong>
        <span>{description}</span>
      </p>
      <p>
        <strong>Tools & Technologies: </strong>
        <span>{toolsAndTechnologies}</span>
      </p>
      {rolesAndResponsibilities.length > 0 && (
        <>
          <p>
            <strong>Roles & Responsibilities:</strong>
          </p>
          <ul className="list-disc pl-8">
            {rolesAndResponsibilities.map((value: string, index) => (
              <li key={index} className="[&::marker]:text-neutral-9">{value}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
