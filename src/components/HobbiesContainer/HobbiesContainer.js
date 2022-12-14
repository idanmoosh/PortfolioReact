import './HobbiesContainer.css';
import React from 'react';
import {
  IoAirplaneOutline,
  IoFootstepsOutline,
  IoGameControllerOutline,
  IoHammerOutline,
  IoPeopleOutline,
  IoPawOutline,
  IoMusicalNotesOutline,
  IoLeafOutline,
} from 'react-icons/io5';

const HobbiesList = {
  1: { name: 'Travelling', logo: <IoAirplaneOutline /> },
  2: { name: 'Hiking', logo: <IoFootstepsOutline /> },
  3: { name: 'Gaming', logo: <IoGameControllerOutline /> },
  4: { name: 'Arts and Crafts', logo: <IoHammerOutline /> },
  5: { name: 'Socializing', logo: <IoPeopleOutline /> },
  6: { name: 'Pets', logo: <IoPawOutline /> },
  7: { name: 'Music', logo: <IoMusicalNotesOutline /> },
  8: { name: 'Gardening and Foraging ', logo: <IoLeafOutline /> },
};

export const HobbiesContainer = () => {
  return (
    <div className='HobbiesMain'>
      <h2 className='HobbiesHeader'>Hobbies</h2>
      <div className='HobbiesContainer'>
        {Object.keys(HobbiesList).map(key => {
          return (
            <div
              className='Hobbie'
              key={HobbiesList[key] + HobbiesList[key].name}>
              {HobbiesList[key].logo}
              <p className='HobbieName'>{HobbiesList[key].name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
