import React from 'react'
import PlantCard from './PlantCard'

const plants = [
    {
      id: 1,
      nickname: 'Bob',
      species: 'Acacia myrtifolia',
      h2oFrequency: 0,
    },
    {
        id: 2,
        nickname: 'Billy',
        species: 'Acacia myrtifolia',
        h2oFrequency: 0,
      },
      {
        id: 3,
        nickname: 'Bub',
        species: 'Acacia myrtifolia',
        h2oFrequency: 0,
      },
      {
        id: 4,
        nickname: 'Bobby',
        species: 'Acacia myrtifolia',
        h2oFrequency: 0,
      },
      {
        id: 5,
        nickname: 'Brian',
        species: 'Acacia myrtifolia',
        h2oFrequency: 0,
      },
      {
        id: 6,
        nickname: 'Brandon',
        species: 'Acacia myrtifolia',
        h2oFrequency: 0,
      },
      {
        id: 7,
        nickname: 'Bromin',
        species: 'Acacia myrtifolia',
        h2oFrequency: 0,
      },
      {
        id: 8,
        nickname: 'Bob Jr.',
        species: 'Acacia myrtifolia',
        h2oFrequency: 0,
      },
  ];

const ProfileDashboard = () =>{

    return(
        <div className='profile'>
            <h1>My PLANTS</h1>
            {
              plants.map(plant => (
                  <PlantCard key={plant.id} plant={plant} />
              ))
            }
        </div>
    )
}

export default ProfileDashboard