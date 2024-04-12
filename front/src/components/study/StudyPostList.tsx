import React from 'react'
import '../../css/common_css/Component.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addPostFunc } from '../../store/PostSlice';
import { NewPost } from '../../commonInterface';
import { Link } from 'react-router-dom';

interface Posts {
      author: string, 
      title:string,
      timestamp: string, 
      content: string, 
}


export default function StudyPostList() {
  // const [posts, setPosts] = useState<Posts[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state: {posts: {postList: NewPost[]}})=>state.posts.postList);



  return (
    <div className='componentLayout'>
      {/* 게시판 작성 페이지 */}
      <Link to='/study/write'>게시글 작성</Link>
      <div className='boardWrap'>
        {posts.map((post: NewPost, index) => (
          <div className='boardComponent' key={index}>
            <div className='componentTopWrap'>
              <p className='post studyWriter'>작성자: {post.author}</p>
              <p className='post studyTime'>작성 시간: {post.timeStamp}</p>
            </div>
            <div className='post studyTitle'>제목: {post.title}</div>
            <div className='post studyContents'>내용: {post.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
