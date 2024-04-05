import React from 'react'
import Slide from '../components/Slide';
import '../css/Variables.scss'
import '../css/mainpage_css/MainPage.scss';


export default function MainPage() {
  return (
  <div className='slidePage_space'>
    {/* swiper ResizeObserver 오류 해결 위해 직속 부모인, flex의 영향을 대신 받는 div 추가 - 해결 불가 (쨌든 요소 배치의 영향을 받으니까) */}
      <Slide />
  </div>
  );
}
