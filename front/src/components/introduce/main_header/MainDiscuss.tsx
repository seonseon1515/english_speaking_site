import React from 'react'
import '../../../css/common_css/Component.scss'
import '../../../css/common_css/Variables.scss'
import '../../../css/introduce_css/CourseMenuMain.scss'

export default function MainDiscuss() {
  return (
    <div className='componentLayout'>
      <div className="introMainBox">
        <img src={`${process.env.PUBLIC_URL}/img/introduce/course_main/main_discuss.png`} alt="intro" className="introMainImg">
        </img>
        {/* text 프롭스 전달해서 사용 */}
        <div className="textBox">
          <p className='text level'>LEVEL 3 - LEVEL 6</p>
          <p className='text levelText'>토론 회화 코스</p>
          <p className="text explain">토론 수업을 통한 논리력 강화 및 실전 스피치 훈련이 진행 됩니다.</p>
          <p className="text explain">고급 표현 및 정치, 경제, 사회 부문 별 주요 이슈를 함께 학습합니다.</p>
        </div>
      </div>
     
        <div className='targetWrap'>
          <div className="verticalLine"></div>
          <div className='textTarget'>TARGET</div>
          <div className="target sentence1">스피킹 실력 초, 중, 고급 레벨의</div>
          <div className="target sentence2">학습자를 위한 필수 과정</div>
          <div className="targetIconBox"><img className='targetIcon' src={`${process.env.PUBLIC_URL}/img/introduce/discuss.png`} alt="main_business" /></div>
          <div className="textBoxWrap">
            <div className="verticalLine"></div>
            <div className="sentence3">화상영어</div>
            <div className="sentence4">스피킹 훈련 4단계 완전학습</div>
            <div className="sentence5">놀라운 효과를 직접 확인하세요</div>
          </div>
        </div>
    </div>
  )
}
