import { createSlice } from '@reduxjs/toolkit';
import { NewPost } from '../commonInterface';
import { Posts } from '../commonInterface';
// 게시판에 해당하는 내용

const initialState: { postList: NewPost[] } = {
  postList: [],
};

// createSlice : (다른 방식) 리듀서와 액션을 함께 생성하는 함수
const postSlice = createSlice({
  // 제공되는 속성
  name: 'posts',
  initialState: initialState,
  reducers:{
    // 여러 액션 담을 수 있음, 같은 리듀서인데 스위치로 구분해서 쓰는 게 아니라 함수로 구분함
    addPostFunc: (state, action: {type: string, payload: NewPost}) => {
      console.log(action);
      // state는 initialState로 초기화
      // action객체? 에는 payload(넘겨준 데이터)와 type이 있음(둘다 createSlice 사용할 때 고정값)
      state.postList.push(action.payload)
    },
    deletePostFunc: (state, action: {type: string, payload: NewPost}) => {
      const postId = action.payload.id; // 내가 선택한 포스트
      state.postList = state.postList.filter(postList => postList.id !== postId);
    },
  }
})

// postSlice.actions : 액션 생성자들을 포함하는 객체
export const {addPostFunc ,deletePostFunc } = postSlice.actions
// postSlice.reducer: 상태를 업데이트하기 위한 것 
export default postSlice.reducer;
