import React from 'react'
import '../../css/introduce_css/CourseMenuMain.scss'
import '../../css/common_css/Component.scss'


export default function CourseMenuMain() {
  return (
    <div className='componentLayout'>
      <h1>메뉴 클릭 시 각 코스의 메인 사진 구역</h1>
      <div className="introMainBox">
        <img src={`${process.env.PUBLIC_URL}/img/introduce/introMainExample.png`} alt="intro" className="introMainImg">
        </img>
        {/* text 프롭스 전달해서 사용 */}
        <div className="textBox">
          <p className='text levelText'>프롭스 전달</p>
          <p className="text explain">구체적인 설명 프롭스 문장1</p>
          <p className="text explain">구체적인 설명 프롭스 문장2</p>
        </div>
      </div>
     
        <div className='targetWrap'>
          <div className="verticalLine"></div>
          <div className='textTarget'>TARGET</div>
          <div className="target sentence1">프롭스1</div>
          <div className="target sentence2">프롭스2</div>
          <div className="targetIconBox"><img className='targetIcon' src={`${process.env.PUBLIC_URL}/img/introduce/course_detail_step/target.png`} alt="target" /></div>
          <div className="textBoxWrap">
            <div className="verticalLine"></div>
            <div className="sentence3">ㅣㅏ</div>
            <div className="sentence4">ㅏㅣㅏ</div>
            <div className="sentence5">ㅣㅏㅣㅏ</div>
          </div>
        </div>

        
    </div>
  )
}
