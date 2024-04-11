import React from 'react'
import '../../../css/common_css/Component.scss'
import '../../../css/common_css/Variables.scss'
import '../../../css/introduce_css/CourseMenuMain.scss'

export default function MainOpic() {
  return (
    <div className='componentLayout'>
      <div className="introMainBox">
        <img src={`${process.env.PUBLIC_URL}/img/introduce/course_main/main_toeicSpeaking.png`} alt="intro" className="introMainImg">
        </img>
        {/* text 프롭스 전달해서 사용 */}
        <div className="textBox">
          <p className='text level'>LEVEL 2 - LEVEL 5</p>
          <p className='text levelText'>토익 스피킹 코스</p>
          <p className="text explain">토익 스피킹 파트 별 전략 및 템플릿, 핵심 표현 체득으로</p>
          <p className="text explain">단기간 목표 달성을 준비해봐요!</p>
        </div>
      </div>
     
        <div className='targetWrap'>
          <div className="verticalLine"></div>
          <div className='textTarget'>TARGET</div>
          <div className="target sentence1">스피킹 실력 초, 중, 고급 레벨의</div>
          <div className="target sentence2">학습자를 위한 필수 과정</div>
          <div className="targetIconBox"><img className='targetIcon' src={`${process.env.PUBLIC_URL}/img/introduce/toeic.png`} alt="main_business" /></div>
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
