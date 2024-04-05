import React from 'react'
import '../../css/introduce_css/CourseMenuMain.scss'


export default function CourseMenuMain() {
  return (
    <div>
      <h1>메뉴 클릭 시 각 코스의 메인 사진 구역</h1>
      <div className="introMainBox">
        <img src={`${process.env.PUBLIC_URL}/img/introduce/introMainExample.png`} alt="" className="introMainImg">
        </img>
        {/* text 프롭스 전달해서 사용 */}
        <div className="textBox">
          <p className='text levelText'>프롭스 전달</p>
          <p className="text explain">구체적인 설명 프롭스 문장1</p>
          <p className="text explain">구체적인 설명 프롭스 문장2</p>
      </div>
      </div>
    </div>
  )
}
