import SearchTutor from './SearchTutor'
import { tutor_data } from '../data/tutor_data'

interface Props {
  search: string;
  inputTutor:(e:React.ChangeEvent<HTMLInputElement>)=>void
  handleSearch:() => void
}

export default function SearchBar({search, inputTutor, handleSearch}:Props) {
 
  
  return (
    <div>
      <div>
        <img src="" alt="search_icon" />
        <input type="text" value={search} onChange={inputTutor} />
        <button className='btn search' onClick={()=>handleSearch}>검색</button>
      </div>

    </div>
  )
}
