import React, { useState } from 'react'
import '../../css/introduce_css/CourseMenu.scss'

interface Styles {
      border:string,
      borderRadius?: string,
}

export default function CourseMenu() {
  
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [discussMenu, setDiscussMenu] = useState<Styles>({ border: "none" });
  const [businessMenu, setBusinessMenu] = useState<Styles>({ border: "none" });
  const [opicMenu, setOpicMenu] = useState<Styles>({ border: "none" });
  const [toeicMenu, setToeicMenu] = useState<Styles>({ border: "none" });
  const [newsMenu, setNewsMenu] = useState<Styles>({ border: "none" });
  const [interviewMenu, setInterviewMenu] = useState<Styles>({ border: "none" });
  const [juniorMenu, setJuniorMenu] = useState<Styles>({ border: "none" });

  function clickedCourseMenu(menuSetter: React.Dispatch<React.SetStateAction<Styles>>) {
    setIsClicked(!isClicked);
    // 선택 요소에 대한 스타일 변경

      menuSetter(prevStyle => ({
      border: prevStyle.border === "none" ? "gray solid 2px" : "none",
      borderRadius: "20px"
    }));
  }

  return (
    <div className='courseMenu_wrap'>
      <div onClick={() => clickedCourseMenu(setDiscussMenu)} style={discussMenu}  className='courseMenu discuss'><img className='courseMenuImg' src={`${process.env.PUBLIC_URL}/img/discuss.png`} alt="discuss" /><p className='courseText'>토론</p></div>
      <div onClick={()=>clickedCourseMenu(setBusinessMenu)} style={businessMenu} className='courseMenu business'><img className='courseMenuImg' src={`${process.env.PUBLIC_URL}/img/business.png`} alt="business" /><p className='courseText'>비지니스</p></div>
      <div onClick={()=>clickedCourseMenu(setOpicMenu)} style={opicMenu} className='courseMenu opic'><img className='courseMenuImg' src={`${process.env.PUBLIC_URL}/img/opic.png`} alt="opic" /><p className='courseText'>오픽</p></div>
      <div onClick={()=>clickedCourseMenu(setToeicMenu)} style={toeicMenu} className='courseMenu toeic'><img className='courseMenuImg' src={`${process.env.PUBLIC_URL}/img/toeic.png`} alt="toeic" /><p className='courseText'>토익</p></div>
      <div onClick={()=>clickedCourseMenu(setNewsMenu)} style={newsMenu} className='courseMenu news'><img className='courseMenuImg news' src={`${process.env.PUBLIC_URL}/img/news.png`} alt="news" /><p className='courseText'>뉴스</p></div>
      <div onClick={()=>clickedCourseMenu(setInterviewMenu)} style={interviewMenu} className='courseMenu interview'><img className='courseMenuImg' src={`${process.env.PUBLIC_URL}/img/interview.png`} alt="interview" /><p className='courseText'>면접</p></div>
      <div onClick={()=>clickedCourseMenu(setJuniorMenu)} style={juniorMenu} className='courseMenu junior'><img className='courseMenuImg' src={`${process.env.PUBLIC_URL}/img/junior.png`} alt="junior" /> <p className='courseText'>주니어</p></div>
    </div>
  )
}
