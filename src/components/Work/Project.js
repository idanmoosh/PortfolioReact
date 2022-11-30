import './Work.css';
import { BsGithub } from 'react-icons/bs';

export const Project = props => {
  const project = props.project;
  return (
    <div className='projectContainer'>
      <h2>{project.title}</h2>
      <div className='projectDetails'>
        <img className='projectImage' src={project.img} alt={project.title} />
        <ul className='techList' key={Project.id + project.name + 'techlist'}>
          {project.technologies.map(tech => {
            return <li key={project.id + project.name + tech}>{tech}</li>;
          })}
        </ul>
      </div>
      <p className='projectParagraph'>{project.details}</p>
      <a href={project.gitLink} target='_blank' rel='noreferrer'>
        <BsGithub /> GitHub Repository
      </a>
    </div>
  );
};
