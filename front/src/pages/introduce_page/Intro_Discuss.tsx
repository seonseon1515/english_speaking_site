import React from 'react'
import Step2 from '../../components/introduce/intro_step_detail_img/Step2'
import CourseMenu from '../../components/introduce/CourseMenu'
import MainDiscuss from '../../components/introduce/main_header/MainDiscuss'

const DiscussStyle = {
  border:'yellow solid 2px',
}



export default function Intro_Discuss() {
  return (
    <div className='components_space'>
      <CourseMenu DiscussStyle={DiscussStyle} />
      <MainDiscuss />
      <Step2 />
    </div>
  )
}
