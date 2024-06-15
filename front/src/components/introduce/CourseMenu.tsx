import React, { useEffect, useState, useCallback } from 'react'
import '../../css/introduce_css/CourseMenu.scss';
import { Link, useParams } from 'react-router-dom';


 interface Props {
  BusinessStyle?:{
  border:string };
  DiscussStyle?:{
    border:string};
    InterviewStyle?:{
      border:string};
      JuniorStyle?:{
        border:string};
        NewsStyle?:{
          border:string};
          OpicStyle?:{
            border:string};
            ToeicStyle?:{
              border:string};
}
interface Styles {
      border:string,
      borderRadius?: string,
}


export default function CourseMenu({BusinessStyle,DiscussStyle,InterviewStyle,JuniorStyle,NewsStyle,OpicStyle,ToeicStyle}:Props){

  return (
    <div className='courseMenuBar_wrap'>
      <div className="courseMenuIcon_wrap">
        <Link to='/introduce'>
      <button style={JuniorStyle} className='courseMenu junior'><img className='courseMenuImg' src={`${process.env.PUBLIC_URL}/img/introduce/junior.png`} alt="junior" /><p className='courseText'>초급/입문</p></button>
        </Link>
        <Link to='/introduce/discuss'>
        <button  style={DiscussStyle}  className='courseMenu discuss'><img className='courseMenuImg' src={`${process.env.PUBLIC_URL}/img/introduce/discuss.png`} alt="discuss" /><p className='courseText'>토론</p></button>
        </Link>
        <Link to='/introduce/business'>
        <button style={BusinessStyle} className='courseMenu business'><img className='courseMenuImg' src={`${process.env.PUBLIC_URL}/img/introduce/business.png`} alt="business" /><p className='courseText'>비지니스</p></button>
        </Link>
        <Link to='/introduce/opic'>
        <button   style={OpicStyle} className='courseMenu opic'><img className='courseMenuImg' src={`${process.env.PUBLIC_URL}/img/introduce/opic.png`} alt="opic" /><p className='courseText'>오픽</p></button>
        </Link>
        <Link to='/introduce/toeic'>
        <button   style={ToeicStyle}  className='courseMenu toeic'><img className='courseMenuImg' src={`${process.env.PUBLIC_URL}/img/introduce/toeic.png`} alt="toeic" /><p className='courseText speaking'>토익 스피킹</p></button>
        </Link>
        <Link to='/introduce/news'>
        <button   style={NewsStyle} className='courseMenu news'><img className='courseMenuImg news' src={`${process.env.PUBLIC_URL}/img/introduce/news.png`} alt="news" /><p className='courseText'>뉴스</p></button>
        </Link>
        <Link to='/introduce/interview'>
        <button style={InterviewStyle} className='courseMenu interview'><img className='courseMenuImg' src={`${process.env.PUBLIC_URL}/img/introduce/interview.png`} alt="interview" /><p className='courseText'>면접</p></button>
        </Link>
      </div>
    </div>
  )
}

