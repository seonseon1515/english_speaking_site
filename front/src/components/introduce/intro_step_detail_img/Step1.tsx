import React from 'react'
import '../../../css/common_css/Component.scss'
import '../../../css/introduce_css/step/Step1.scss'

export default function Step1() {
  return (
    <div className='componentLayout'>
      <h1>Step1</h1>

      <div className="step1Wrap">
        <div className="stepTextWrap">
          <div className="mainTextWrap">
            <div className="stepTopText">step1:</div>
            <div className="stepTopText2">사전 학습</div>
          </div>
          <div className="stepSentenceWrap">
            <div className="stepSentence1">사전학습을 통해 완벽한 수업 준비로 자신감도 UP~~!!</div>
            <div className="stepSentence2">하나! 어휘 및 구문학습으로 주요표현 암기</div>
            <div className="stepSentence3">둘! 문장구성 학습을 통해 Key Expression</div>
            <div className="stepSentence4">한번 더 체득화</div>
          </div>
        </div>

        <div className="monitorShapeWrap">
          <div className="monitorWrap">
            <img className='monitorImg' src={`${process.env.PUBLIC_URL}/img/introduce/course_detail_step/monitor.png`} alt="monitor"></img>
          </div>
            <div className="screenWrap">
              <div className="screenTopBar">스피킹 구문 학습</div>
              <div className="monitorLine1">
                <img className='monitorImg1'src={`${process.env.PUBLIC_URL}/img/introduce/course_detail_step/monitor1.jpg`} alt="monitor1" />
                <img className='monitorImg1 marginBet'src={`${process.env.PUBLIC_URL}/img/introduce/course_detail_step/monitor2.jpg`} alt="monitor2" />
                <img className='monitorImg1'src={`${process.env.PUBLIC_URL}/img/introduce/course_detail_step/monitor3.jpg`} alt="monitor3" />
              </div>
              <div className="monitorLine2">
                <img className='monitorImg2'src={`${process.env.PUBLIC_URL}/img/introduce/course_detail_step/monitor4.jpg`} alt="monitor4" />
                <img className='monitorImg2 marginBet'src={`${process.env.PUBLIC_URL}/img/introduce/course_detail_step/monitor5.jpg`} alt="monitor5" />
                <img className='monitorImg2'src={`${process.env.PUBLIC_URL}/img/introduce/course_detail_step/monitor6.jpg`} alt="monitor6" />
              </div>  
          </div>
          

        </div>
      </div>

        <div className="lineColumn">
          <div className="verticalLine"></div>
        </div>
    </div>
  )
}
