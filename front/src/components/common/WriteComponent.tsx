
import React, { Component } from 'react';
import TextEditor from '../TextEditor';
import { useState } from 'react';
import '../../css/common_css/Variables.scss';
import '../../css/study_css/WriteComponent.scss';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NewPost } from '../../commonInterface';
import { addPostFunc } from '../../store/PostSlice';
import { Link } from 'react-router-dom';

export default function WriteComponent() {
  const [data, setData] = useState("");
  const [inputTitle, setInputTitle] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state: {posts: {postList: NewPost[]}})=>state.posts.postList);


  const addPost = useCallback(()=>{
    console.log('someFunciton 실행!')
    console.log(`input: ${inputTitle}`)
    console.log(`txtarea:${data}`)
    const newPost = {
          // 프로필 이미지 추가
          author: '작성자', 
          title:inputTitle,
          timeStamp: new Date().toLocaleString(), // 그냥 작동되는지?
          content: data.replace(/<(?:.|\n)*?>/gm, '')
        };
        dispatch(addPostFunc(newPost));
        navigate('/study');
    // 값이 담기지 않음
  },[inputTitle,data])

  return(
  <div className='components_space'>
      <div className='writeWrap'>
        <div className="writeSpace">
          <input placeholder='제목을 작성해주세요.' className='inputTitle' type="text" onChange={(e)=>setInputTitle(e.target.value)} />
          <div className="txtArea">
            <TextEditor setData={setData} />
          </div>
        </div>
        <div className="leftBtn">
          <Link to='/study'><button className="cancelBtn">취소</button></Link>
          <button onClick={addPost} className="submitBtn">제출</button>
        </div>
      </div>
    </div>
)
  }
