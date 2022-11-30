import oilEssence from './media/Oil_Essence.png';
import syntronic from './media/React_Synth.png';
import tournamentGenerator from './media/tournament generator.jpg';
import { Project } from './Project';
import './Work.css';

const projects = [
  {
    id: 1,
    name: 'oilEssence',
    title: 'Oil Essence - Ecommerce',
    technologies: ['React', 'Redux', 'Node.js'],
    img: oilEssence,
    details:
      'Oil Essence - E-commerce for House and Businesses perfuming solutions',
    gitLink: 'https://github.com/idanmoosh/oil-essence',
  },
  {
    id: 2,
    name: 'synTronic',
    title: 'React Synthesizer - SynTronic',
    technologies: ['React', 'Redux'],
    img: syntronic,
    details: 'SynTronica - Web Synth for Synth lovers',
    gitLink: 'https://github.com/idanmoosh/React-Synth',
  },
  {
    id: 3,
    name: 'tournamentGenerator',
    title: 'Tournament Generator - Mobile App',
    technologies: ['React', 'React Native', 'Redux'],
    img: tournamentGenerator,
    details: 'Tournament Generator - Play custom tournaments with friends',
    gitLink: 'https://github.com/idanmoosh/LeagueGenerator',
  },
];

export const Work = () => {
  return (
    <>
      {projects.map(project => {
        return <Project key={project.id + project.name} project={project} />;
      })}
    </>
  );
};
