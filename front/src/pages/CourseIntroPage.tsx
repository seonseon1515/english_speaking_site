import React from 'react'
import '../css/common_css/Variables.scss'
import CourseMenu from '../components/introduce/CourseMenu'
import CourseMenuMain from '../components/introduce/CourseMenuMain'

export default function CourseIntroPage() {
  return (
    <div className='components_space'>
      <h1>CourseIntroPage</h1>
      <CourseMenu />
      <CourseMenuMain />
    </div>
  )
}
