import { useState} from 'react'
import PlayerCard from './PlayerCard'
import { data } from '../helper/data'

const CardContainer = () => {
  const [list, setlist] = useState(data)
  
  const filterList = (e) => {
   
    let backupList = data
    let search = e.target.value.toLocaleLowerCase()
    let filtered = backupList.filter((item) => item.name.toLocaleLowerCase().includes(search))
    setlist(filtered)
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
          <PlayerCard key={item.id} item={item} />
        ))}


      </div>
    </>
  )
}

export default CardContainer