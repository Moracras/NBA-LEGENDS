import { useState } from 'react'
import PlayerCard from './PlayerCard'
import { data } from '../helper/data'

const CardContainer = () => {
  const [list, setlist] = useState(data)

  const filterList = (e) =>{
    let search= e.target.value
    setlist(list.filter((item)=> item.name.includes(search)))
  }
 
  return (
    <div className='cardcontainer'>
      <input type="text" onChange={(e) =>filterList(e)}
      {list.map((item)=>(
        <PlayerCard item={item}/>
      ))}
      

    </div>
  )
}

export default CardContainer