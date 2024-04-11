import React from 'react'
import '../../../css/common_css/Component.scss'
import '../../../css/introduce_css/step/Step2.scss'

export default function Step2() {
  return (
    <div className='componentLayout'>
      <div className="verticalLine"></div>
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
          <div className="stepImgWrap">
            <img className='step1Monitor' src={`${process.env.PUBLIC_URL}/img/introduce/course_detail_step/step1_monitor.png`} alt="monitor" />
            <img className='step1Smartphone' src={`${process.env.PUBLIC_URL}/img/introduce/course_detail_step/step1_smartPhone.png`} alt="smartphone" />
          </div>
      </div>
    <div className="verticalLine"></div>

    <div className="step2Wrap">
          <div className="stepTextWrap">
            <div className="mainTextWrap">
              <div className="stepTopText">step2:</div>
              <div className="stepTopText2">정규 수업</div>
            </div>
            <div className="stepSentenceWrap">
              <div className="stepSentence1">화상영어 수업시간~~!!</div>
              <div className="stepSentence2">하나! 스마트폰으로 원어민 강사의 얼굴을 보며 수업</div>
              <div className="stepSentence3">둘! 발음, 제스처, 표정을 보며</div>
              <div className="stepSentence4">재미도 두배! 학습효과 두배!</div>
            </div>
          </div>
          <div className="stepImgWrap">
            <img className='step2Img' src={`${process.env.PUBLIC_URL}/img/introduce/course_detail_step/step2.png`} alt="step2" />
          </div>
      </div>

      <div className="verticalLine"></div>
      <div className="step3Wrap">
          <div className="stepTextWrap">
            <div className="mainTextWrap">
              <div className="stepTopText">step3:</div>
              <div className="stepTopText2">수업교정 피드백&복습</div>
            </div>
            <div className="stepSentenceWrap">
              <div className="stepSentence1">복습 알림톡 & 수업교정 피드백~~!!</div>
              <div className="stepSentence2">하나! 수업 후 부족한 부분은</div>
              <div className="stepSentence3">담임 강사님의 교정 피드백을 통한 꼼꼼한 학습</div>
              <div className="stepSentence4">둘! 복습 알림톡으로 한번 더 꼼꼼하게 체크!</div>
            </div>
          </div>
          <div className="stepImgWrap">
            <img className='step3Img' src={`${process.env.PUBLIC_URL}/img/introduce/course_detail_step/step3.png`} alt="step3" />
          </div>
      </div>

      <div className="verticalLine"></div>
      <div className="step4Wrap">
          <div className="stepTextWrap">
            <div className="mainTextWrap">
              <div className="stepTopText">step4 :</div>
              <div className="stepTopText2">맞춤 동영상 강의 초과학습</div>
            </div>
            <div className="stepSentenceWrap">
              <div className="stepSentence1">부족한 부분은 본 수업과 연계된 동영상 학습으로</div>
              <div className="stepSentence2">완벽하게 초과학습!</div>
              <div className="stepSentence3">수업 교재와 동일한 동영상으로 재미와</div>
              <div className="stepSentence4">효과는 더욱 알차게!</div>
            </div>
          </div>
          <div className="stepImgWrap">
            <img className='step4Img' src={`${process.env.PUBLIC_URL}/img/introduce/course_detail_step/step4.png`} alt="step4" />
          </div>
      </div>
      <div className="verticalLine"></div>
  </div>
  )
}
