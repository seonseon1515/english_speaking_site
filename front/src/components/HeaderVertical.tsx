import React from 'react'
import { Link } from 'react-router-dom'
import '../css/HeaderVertical.scss'

// 세로 헤더

export default function HeaderVerical() {
  return (
    <header id='vertical'>
      <div className='wrap top_link'>
        <div><Link to='/native' className='link_tutor'>원어민 튜터 소개 및 검색 페이지</Link></div>
        <div><Link to='/speaking' className='link_speaking'>학습페이지</Link></div>
        <div><Link to='/study' className='link_study_group'>스터디 그룹 모집 페이지</Link></div>
        <div><Link to='/QnA' className='link_QnA'>질문 및 고민 페이지</Link></div>
      </div>
    </header>
  )
}


