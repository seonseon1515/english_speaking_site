import React from 'react'
import '../../../css/common_css/Component.scss'
import '../../../css/common_css/Variables.scss'
import '../../../css/introduce_css/CourseMenuMain.scss'

export default function MainBusiness() {
  return (
    <div className='componentLayout'>
      <div className="introMainBox">
        <img src={`${process.env.PUBLIC_URL}/img/introduce/course_main/main_business.png`} alt="intro" className="introMainImg">
        </img>
        {/* text 프롭스 전달해서 사용 */}
        <div className="textBox">
          <p className='text level'>LEVEL 3 - LEVEL 6</p>
          <p className='text levelText'>비즈니스 회화 코스</p>
          <p className="text explain">비즈니스 업무 환경에서 필요한 커뮤니케이션 능력을 향상 시키고,</p>
          <p className="text explain">다양한 상황을 통해 비즈니스 실무 능력을 마스터 합니다.</p>
        </div>
      </div>
     
        <div className='targetWrap'>
          <div className="verticalLine"></div>
          <div className='textTarget'>TARGET</div>
          <div className="target sentence1">비즈니스 회화 입문 ~ 중급레벨 학습자</div>
          <div className="target sentence2"></div>
          <div className="targetIconBox"><img className='targetIcon' src={`${process.env.PUBLIC_URL}/img/introduce/business.png`} alt="main_business" /></div>
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
