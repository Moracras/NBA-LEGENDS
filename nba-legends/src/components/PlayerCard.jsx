import React from 'react'

const PlayerCard = ({item}) => {
  return (
    <div key={item.id} className='card'>
      <div className="cardimage">
        <img src={item.img} alt={item.img} />
      </div>
      <p>{item.name}</p>
    </div>
  )
}

export default PlayerCard