import React from 'react'
import Step2 from '../../components/introduce/intro_step_detail_img/Step2'
import CourseMenu from '../../components/introduce/CourseMenu'
import '../../../src/css/common_css/Variables.scss'
import MainBusiness from '../../components/introduce/main_header/MainBusiness'



const BusinessStyle = {
  border:'yellow solid 2px',
}



export default function Intro_Business() {

  return (
    <div className='components_space'>
      <CourseMenu BusinessStyle={BusinessStyle} />
      <MainBusiness />
      <Step2 />
    </div>
  )
}
