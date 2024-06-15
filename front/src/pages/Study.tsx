import React from 'react'
import '../css/common_css/Variables.scss';
import AllStudyGroup from '../components/study/AllStudyGroup';
import StudyPostList from '../components/study/StudyPostList';

export default function Study() {
  return (
    <div className='components_space'>
      {/* <AllStudyGroup /> */}
      <StudyPostList />
    </div>
  )
}
