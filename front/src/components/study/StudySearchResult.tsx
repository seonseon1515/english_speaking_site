import React from 'react'
import { useParams } from 'react-router-dom';
import { tutor_data } from '../../data/tutor_data';


interface Props {
  studySearch: string;
}

export default function StudySearchResult({studySearch}:Props) {
  const filterStudyGroup: any[] = tutor_data.filter((inputStudy)=>{
    return(inputStudy.full_name.toLowerCase().includes(studySearch.toLowerCase()))
  })

  const {studyId} = useParams();

  return (
    <div>
      {
        filterStudyGroup.length === 0 ?
        <p>검색된 결과가 없습니다.</p>: 
        filterStudyGroup.map((searchResult,idx)=>{
          return(
            <div className='box studyGroup' key={idx}>{searchResult.full_name}</div>
          )
        })
      }
    </div>
  )
}
