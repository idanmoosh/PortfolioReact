import {
  SiReact,
  SiReactrouter,
  SiRedux,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiCss3,
  SiPython,
  SiGit,
  SiExpress,
  SiPostgresql,
  SiExpo,
} from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import './skillContainer.css';
import React from 'react';

const skillList = {
  1: {
    name: 'JS',
    logo: <SiJavascript />,
  },
  2: {
    name: 'React',
    logo: <SiReact />,
  },
  3: {
    name: 'React-Router',
    logo: <SiReactrouter />,
  },
  4: {
    name: 'Redux',
    logo: <SiRedux />,
  },
  5: {
    name: 'GitHub',
    logo: <SiGithub />,
  },
  6: {
    name: 'HTML 5',
    logo: <SiHtml5 />,
  },
  7: {
    name: 'Node JS',
    logo: <SiNodedotjs />,
  },
  8: {
    name: 'CSS',
    logo: <SiCss3 />,
  },
  9: {
    name: 'Python',
    logo: <SiPython />,
  },
  10: {
    name: 'Git',
    logo: <SiGit />,
  },
  11: {
    name: 'React-Native',
    logo: <SiReact />,
  },
  12: {
    name: 'Express',
    logo: <SiExpress />,
  },
  13: {
    name: 'Postgres',
    logo: <SiPostgresql />,
  },
  14: {
    name: 'SQL',
    logo: <AiOutlineConsoleSql />,
  },
  15: {
    name: 'Expo',
    logo: <SiExpo />,
  },
};

export const SkillsContainer = () => {
  return (
    <div className='SkillsMain'>
      <h2 className='skillsHeader'>Skills</h2>
      <div className='SkillsContainer'>
        {Object.keys(skillList).map(key => {
          return (
            <div className='skill' key={key}>
              {skillList[key].logo}
              <p className='skillName'>{skillList[key].name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
