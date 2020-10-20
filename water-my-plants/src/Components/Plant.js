import React from 'react'

const Plant = (props) =>{
    const { plant } = props

    return(
        <div className='plant'>
            <p>{plant.nickname}</p>
        </div>
    )
}

export default Plant