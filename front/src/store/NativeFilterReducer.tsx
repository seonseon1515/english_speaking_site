const DISCUSS:string = 'nativeFilter/courseDiscuss';
const BUSINESS = 'nativeFilter/courseBusiness';
const OPIC = 'nativeFilter/courseOpic';
const TOEIC = 'nativeFilter/courseToeic'
const NEWS = 'nativeFilter/courseNews'
const INTERVIEW = 'nativeFilter/courseInterview'
const JUNIOR ='nativeFilter/courseJunior'

export const Discuss = () => {
  return {type:DISCUSS}
}
export const Business = () => {
  return {type:BUSINESS}
}
export const Opic = () => {
  return {type:OPIC}
}
export const Toeic = () => {
  return {type:TOEIC}
}
export const News = () => {
  return {type:NEWS}
}
export const Interview = () => {
  return {type:INTERVIEW}
}
export const Junior = () => {
  return {type:JUNIOR}
}

const initialState = {
  btnDiscussSelect:false,
  btnBusinessSelect:false,
  btnOpicSelect:false,
  btnToeicSelect:false,
  btnNewsSelect:false,
  btnInterviewSelect:false,
  btnJuniorSelect:false,
  // btnCourseValue:['토론','비즈니스','오픽','토익 스피킹','뉴스/미디어','면접대비','주니어 영어']
  btnDisscussValue: '토론',
  btnBusinessValue: '비즈니스',
  btnOpicValue: '오픽',
  btnToeicValue: '토익 스피킹',
  btnNewsValue: '뉴스/미디어',
  btnInterviewValue: '면접대비',
  btnJuniorValue: '주니어 영어',
}

// 나중에 any 타입 다 정확하게 바꾸기
 const NativeFilterReducer = (state = initialState, action:any) => {
  switch(action.type){
    case DISCUSS: 
      return {...state, btnDiscussSelect:!(state.btnDiscussSelect),
        btnDisscussValue:state.btnDisscussValue
      };
  
  case BUSINESS: 
      return {...state, btnBusinessSelect:!(state.btnBusinessSelect),
        btnBusinessValue:state.btnBusinessValue
      };
  
  case OPIC: 
      return {...state, btnOpicSelect:!(state.btnOpicSelect),
        btnOpicValue:state.btnOpicValue
      };
  
  case TOEIC: 
      return {...state, btnToeicSelect:!(state.btnToeicSelect),
        btnToeicValue:state.btnToeicValue
      };
  
  case NEWS: 
      return {...state, btnNewsSelect:!(state.btnNewsSelect),
        btnNewsValue:state.btnNewsValue
      };
  
  case INTERVIEW: 
      return {...state, btnInterviewSelect:!(state.btnInterviewSelect),
        btnInterviewValue:state.btnInterviewValue
      };
  
  case JUNIOR: 
      return {...state, btnJuniorSelect:!(state.btnJuniorSelect),
        btnJuniorValue:state.btnJuniorValue
      };
  default:
    return state 
    }
}

export default NativeFilterReducer