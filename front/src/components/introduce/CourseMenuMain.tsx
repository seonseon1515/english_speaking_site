import React from 'react'
import '../../css/introduce_css/CourseMenuMain.scss'


export default function CourseMenuMain() {
  return (
    <div>
      <h1>메뉴 클릭 시 각 코스의 메인 사진 구역</h1>
      <div className="IntroMainBox">
        <img src={`${process.env.PUBLIC_URL}/img/introduce/introMainExample.png`} alt="" className="introMainImg">
          {/* <p className='IntroMainText'>각 메뉴 소개 문구 작성 CSS</p> */}
        </img>
      </div>
    </div>
  )
}
