import React from 'react'
import { useState } from 'react';
import StudySearchBar from './StudySearchBar';
import StudySearchResult from './StudySearchResult';

import { tutor_data } from '../../data/tutor_data';

export default function AllStudyGroup() {
  const [studySearch, setStudysearch] = useState<string>('');
  const inputStudy = (value: any) => {
    setStudysearch(value);
  };
  const [searchStudyResult, setSearchStudyResult] = useState<boolean>(false)

  // 검색 결과 띄우기
  const handleSearch = () => {
    studySearch.length > 0 ? setSearchStudyResult(true) : alert('검색어를 입력하여 주세요.')
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key==='Enter'){
      handleSearch()
    }
  }
  return (
    <div>
      <StudySearchBar studySearch={studySearch} inputStudy={inputStudy} handleSearch={handleSearch} handleEnter={handleEnter}></StudySearchBar>
       
       {searchStudyResult || <div className='study_list'>
         { tutor_data.map((tutor,idx)=>{
           return(
             <ul key={idx}>
               <li>{tutor.full_name}</li>
               <li>{tutor.id}</li>
             </ul>
           )
         })}
         </div>}
         
         {searchStudyResult && <StudySearchResult studySearch={studySearch} />}
    </div>
  )
}
