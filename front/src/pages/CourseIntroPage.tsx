import React from 'react'
import '../css/common_css/Variables.scss'
import CourseMenu from '../components/introduce/CourseMenu'
import CourseMenuMain from '../components/introduce/CourseMenuMain'
import Step2 from '../components/introduce/intro_step_detail_img/Step2'

export default function CourseIntroPage() {
  return (
    <div className='components_space'>
      <h1>CourseIntroPage</h1>
        <CourseMenu />
        <CourseMenuMain />
        <Step2 />
    </div>
  )
}
