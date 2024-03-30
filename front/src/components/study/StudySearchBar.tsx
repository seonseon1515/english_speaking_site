import React from 'react'

interface Props {
  studySearch: string;
  inputStudy:(value:any)=>void
  handleSearch:() => void
  handleEnter:(e: React.KeyboardEvent<HTMLInputElement>)=>void}

export default function StudySearchBar({studySearch,
  inputStudy,
  handleSearch,
  handleEnter}:Props) {
  return (
    <div>
      <input type="text" value={studySearch} onChange={(e)=>{inputStudy(e.target.value)}} onKeyDown={handleEnter} />
      <button className='btn search' onClick={handleSearch}>검색</button>
    </div>
  )
}
