import { tutor_data } from '../../data/tutor_data'
import SearchBar from './SearchBar'
import React, { useState } from 'react'
import SearchTutor from './SearchTutor'

export default function AllTutor() {
  const [search,setSearch] = useState<string>('')
  const inputTutor = (value: any) => {
    setSearch(value);
  };
  const [searchResult, setSearchResult] = useState<boolean>(false)

  // 검색 결과 띄우기
  const handleSearch = () => {
    search.length > 0 ? setSearchResult(true) : alert('검색어를 입력하여 주세요.')
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key==='Enter'){
      handleSearch()
    }
  }
  
  return (
    <div>
      <SearchBar search={search} inputTutor={inputTutor} handleSearch={handleSearch} handleEnter={handleEnter}></SearchBar>
       
      {searchResult || <div className='tutor_list'>
        { tutor_data.map((tutor,idx)=>{
          return(
            <ul key={idx}>
              <li>{tutor.full_name}</li>
              <li>{tutor.id}</li>
            </ul>
          )
        })}
        </div>}
        
        {searchResult && <SearchTutor search={search} />}
    </div>
  )
      }      
