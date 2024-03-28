import React from 'react'
import { tutor_data } from '../data/tutor_data'
import SearchBar from './SearchBar'

interface Props {
  search: string;
}

export default function SearchTutor({search}:Props) {
  const filterTutor = tutor_data.filter((name)=>{
    name.full_name.replace(" ",'').toLocaleLowerCase().includes(search.toLocaleLowerCase())
  })
  
  return (
    <div>
     {
      filterTutor.map((filterTutor, idx)=>{
        if (filterTutor.full_name.length === 0){
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
