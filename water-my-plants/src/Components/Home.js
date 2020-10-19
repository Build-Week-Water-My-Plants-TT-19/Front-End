import React from 'react';


const Home = (props) => {
    return (
        <div className='home'>
            <h1>Water My Plants</h1>
            <p>Create a plant and it will remind you when it's time to feed that foliage and quench your plants' thirst!</p>
            <a href='/new-plant'>Create a Plant!</a>
        </div>
    )
};

export default Home;