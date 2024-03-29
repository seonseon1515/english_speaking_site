import React from 'react'
import { tutor_data } from '../data/tutor_data'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

interface Props {
  search: string;
}

export default function SearchTutor({search}:Props) {
  const filterTutor:any[] = tutor_data.filter((inputName)=>{
    return (inputName.full_name.toLowerCase().includes(search.toLowerCase()))
  })

  const {profile} = useParams();
  
  return (
    <div>
     { filterTutor.length === 0 ?
          <p>검색된 결과가 없습니다.</p>:
      filterTutor.map((filterTutor, idx)=>{
        return(
          <ul key={idx}>
            <li><Link to='/native:profile'>{filterTutor.full_name}</Link></li>
          </ul>
        )
      })
     }
    </div>
  )
}
