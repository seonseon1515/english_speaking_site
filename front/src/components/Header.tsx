import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.scss'

export default function Header() {
  return (
    <header id='link_header'>
      <div className='wrap left_link'><Link to='/' className='link_mian'>메인페이지 로고</Link></div>
      <div className='wrap right_link'><Link to="/mypage">마이페이지 로고</Link><Link to='/login'>로그인</Link>
      </div>
    </header>
  )
}