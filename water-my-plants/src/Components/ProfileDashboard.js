import React from 'react'
import Plant from './Plant'

const plants = [
    {
      id: 1,
      nickname: 'Bob',
      species: 'Acacia myrtifolia',
      h2oFrequency: 0,
    },
    {
        id: 2,
        nickname: 'Bob',
        species: 'Acacia myrtifolia',
        h2oFrequency: 0,
      },
      {
        id: 3,
        nickname: 'Bob',
        species: 'Acacia myrtifolia',
        h2oFrequency: 0,
      },
      {
        id: 4,
        nickname: 'Bob',
        species: 'Acacia myrtifolia',
        h2oFrequency: 0,
      },
      {
        id: 5,
        nickname: 'Bob',
        species: 'Acacia myrtifolia',
        h2oFrequency: 0,
      },
      {
        id: 6,
        nickname: 'Bob',
        species: 'Acacia myrtifolia',
        h2oFrequency: 0,
      },
      {
        id: 7,
        nickname: 'Bob',
        species: 'Acacia myrtifolia',
        h2oFrequency: 0,
      },
      {
        id: 8,
        nickname: 'Bob',
        species: 'Acacia myrtifolia',
        h2oFrequency: 0,
      },
  ];

const ProfileDashboard = () =>{

    return(
        <div className='profile'>
            <h1>My PLANTS</h1>
            <p>yeet</p>

            {
                plants.map(plant => (
                    <Plant key={plant.id} plant={plant} />
                ))
            }
        </div>
    )
}

export default ProfileDashboard