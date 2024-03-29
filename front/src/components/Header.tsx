import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.scss'

export default function Header() {
  return (
    <header id='link_header'>
      <div className='wrap left_link'><Link to='/' className='link_mian'>메인페이지 로고</Link></div>
      <div className='wrap middle_link'>
        <div><Link to='/native' className='link_tutor'>원어민 튜터 소개 및 검색 페이지</Link></div>
        <div><Link to='/speaking' className='link_speaking'>학습페이지</Link></div>
        <div><Link to='/study' className='link_study_group'>스터디 그룹 모집 페이지</Link></div>
        <div><Link to='/QnA' className='link_QnA'>질문 및 고민 페이지</Link></div>
      </div>
      <div className='wrap right_link'><Link to="/mypage">마이페이지 로고</Link><Link to='/login'>로그인</Link>
      </div>
    </header>
  )
}