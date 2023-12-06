import { useState} from 'react'
import PlayerCard from './PlayerCard'
import { data } from '../helper/data'

const CardContainer = () => {
  const [list, setlist] = useState(data)
  
  const filterList = (e) => {
    let search = e.target.value
    let filtered = list.filter((item) => item.name.includes(search))
    setlist(filtered.length > 0 ? filtered : data)
   
  }

  const defList = () => {
    setlist(data)
  }
  return (
    <>
      <input id="search" type="text" onChange={(e) =>  filterList(e) } />
      <button onClick={defList}>RESET</button>
      <div className='cardcontainer'>

        {list.map((item) => (
          <PlayerCard item={item} />
        ))}


      </div>
    </>
  )
}

export default CardContainer