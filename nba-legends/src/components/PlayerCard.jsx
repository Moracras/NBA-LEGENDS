

import React from 'react'

const PlayerCard = ({item}) => {
  return (
    <div className='card'>
      <div className="cardimage">
        <img src={item.img} alt={item.img} />
      </div>
    </div>
  )
}

export default PlayerCard