import React from 'react'
import { tutor_data } from '../data/tutor_data'
import SearchBar from './SearchBar'

interface Props {
  search: string;
}

export default function SearchTutor({search}:Props) {
  const filterTutor:any[] = tutor_data.filter((inputName)=>{
    return (inputName.full_name.toLowerCase().includes(search.toLowerCase()))
  })
  console.log(filterTutor);
  return (
    <div>
     {
      filterTutor.map((filterTutor, idx)=>{
        if (filterTutor.length === 0){
          return (<p>검색된 결과가 없습니다.</p>)
        }
        return(
          <ul key={idx}>
            <li>{filterTutor.full_name}</li>
          </ul>
        )
      })
     }
    </div>
  )
}
