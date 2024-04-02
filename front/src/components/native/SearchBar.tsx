import SearchTutor from './SearchTutor'
import { tutor_data } from '../../data/tutor_data'


interface Props {
  search: string;
  inputTutor:(value:any)=>void
  handleSearch:() => void
  handleEnter:(e: React.KeyboardEvent<HTMLInputElement>)=>void}

export default function SearchBar({search, inputTutor, handleSearch,handleEnter}:Props) {
  
  return (
    <div>
      <div>
        <img src="" alt="search_icon" />
        <input type="text" value={search} onChange={(e)=>{inputTutor(e.target.value)}} onKeyDown={handleEnter} />
        <button className='btn search' onClick={handleSearch}>검색</button>
      </div>

    </div>
  )
}
