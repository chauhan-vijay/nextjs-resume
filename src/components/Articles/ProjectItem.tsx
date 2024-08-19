import { Project } from '@content';

const ProjectItem: React.FC<Project> = ({
  title,
  description,
  toolsAndTechnologies,
  rolesAndResponsibilities,
}) => {
  return (
    <div className="project mt-2 text-base text-neutral-12">
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
          <ul>
            {rolesAndResponsibilities.map((value: string, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ProjectItem;
