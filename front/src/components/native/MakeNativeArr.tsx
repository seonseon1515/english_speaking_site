import { courseValueSet } from "./NativeFilterTag";
import { nativeFilterData4 } from "../../data/native_filter_data";
import { useEffect, useState } from "react";


interface NativeFilterData4 {
  level: string;
  course: string;
  id: number;
  full_name: string;
  email: string;
  gender: string;
}

interface Props {
  courseValueStr:string[]
}

export default function MakeNativeArr ({courseValueStr}:Props) {  
  // const [courseFilter, setCourseFilter] = useState<NativeFilterData4[]>([])
     // 중복 값 해결
  
  // const courseValueStr = Array.from(courseValueSet).join(',');
  // 배열이 동적인지?
  // include에 넣을 수 있는 형식으로 변경
  const courseFilter = nativeFilterData4.filter((pushedValue)=>{
    return (pushedValue.course.includes(courseValueStr.join(',')))});
  
    useEffect(()=>{
      console.log('courseFilter: ', courseFilter);
    },[courseFilter])

    useEffect(()=>{
      console.log('courseValueStr: ', courseValueStr);
    },[courseValueStr])
    
// 배열엔 값이 들어오는데 배열이 변화되었을 때 필터가 제대로 동작하지 않음
// => 상태 관리가 필요할 듯
    return(
      <div>
        {
          courseFilter.map((value,idx)=>{
            return(
            <ul key={value.id}>
              <li>{value.course}</li>
            </ul>)
          })
        }
      </div>
    )
  }
  
// //  else if (btnCourseSelect===false)
//   export default function CourseArrFalse () {
//   // outCourseValueArray.push(btnCourseValue)
//   // const clickedOutCourseFilter = courseValueArray.filter((clickedOuttedValue)=>{
//   //   return (clickedOuttedValue.includes(clickedOuttedValue.join(',') !== outCourseValueArray.join(',')))})
//   const courseValueArr = Array.from(courseValueSet)
  
//   const clickedOutCourseFilter = courseValueArr.filter(trueArray=> trueArray !== outCourseValue)
//   console.log('clickedOutCourseFilter: ', clickedOutCourseFilter)
//   }