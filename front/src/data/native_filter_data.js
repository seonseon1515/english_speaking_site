export const nativeFilterData = [
  {
  "full_name": "Vince Hentzer",
  "email": "vhentzer0@uol.com.br",
  "gender": "Non-binary"
}, {
  "full_name": "Lissi Dillicate",
  "email": "ldillicate1@domainmarket.com",
  "gender": "Female"
}, {
  "full_name": "Marchall Gall",
  "email": "mgall2@uol.com.br",
  "gender": "Male"
}, {
  "full_name": "Gratiana Winslade",
  "email": "gwinslade3@nifty.com",
  "gender": "Female"
}, {
  "full_name": "Renie Josham",
  "email": "rjosham4@about.me",
  "gender": "Female"
}, {
  "full_name": "Elnar Gauge",
  "email": "egauge5@businessinsider.com",
  "gender": "Male"
}, {
  "full_name": "Robyn Stratiff",
  "email": "rstratiff6@hc360.com",
  "gender": "Female"
}, {
  "full_name": "Douglass Wasylkiewicz",
  "email": "dwasylkiewicz7@scientificamerican.com",
  "gender": "Male"
}, {
  "full_name": "Lorena Matysik",
  "email": "lmatysik8@un.org",
  "gender": "Female"
}, {
  "full_name": "Tasha Cornbill",
  "email": "tcornbill9@ibm.com",
  "gender": "Female"
}, {
  "full_name": "Aldrich Glassford",
  "email": "aglassforda@craigslist.org",
  "gender": "Male"
}, {
  "full_name": "Allayne Tutill",
  "email": "atutillb@dion.ne.jp",
  "gender": "Polygender"
}, {
  "full_name": "Chloris Malpas",
  "email": "cmalpasc@nasa.gov",
  "gender": "Female"
}, {
  "full_name": "Maury Issac",
  "email": "missacd@hao123.com",
  "gender": "Male"
}, {
  "full_name": "Jackson Horsefield",
  "email": "jhorsefielde@linkedin.com",
  "gender": "Male"
}, {
  "full_name": "Aleen Trehearn",
  "email": "atrehearnf@google.it",
  "gender": "Female"
}, {
  "full_name": "Estevan Trimble",
  "email": "etrimbleg@sohu.com",
  "gender": "Male"
}, {
  "full_name": "Letizia MacLese",
  "email": "lmacleseh@amazonaws.com",
  "gender": "Female"
}, {
  "full_name": "Thekla Tackett",
  "email": "ttacketti@furl.net",
  "gender": "Female"
}, {
  "full_name": "Daisi Brecknell",
  "email": "dbrecknellj@accuweather.com",
  "gender": "Female"
}, {
  "full_name": "Jackquelin Norris",
  "email": "jnorrisk@blog.com",
  "gender": "Genderfluid"
}, {
  "full_name": "Erinn Le Floch",
  "email": "elel@blinklist.com",
  "gender": "Female"
}, {
  "full_name": "Lavina Skakunas",
  "email": "lskakunasm@wired.com",
  "gender": "Bigender"
}, {
  "full_name": "Hilda Crepel",
  "email": "hcrepeln@comcast.net",
  "gender": "Female"
}, {
  "full_name": "Loralyn Pimlock",
  "email": "lpimlocko@oaic.gov.au",
  "gender": "Female"
}, {
  "full_name": "Celestine Arnholtz",
  "email": "carnholtzp@deliciousdays.com",
  "gender": "Female"
}, {
  "full_name": "Kipp Zute",
  "email": "kzuteq@dell.com",
  "gender": "Male"
}, {
  "full_name": "Allyce Thys",
  "email": "athysr@imageshack.us",
  "gender": "Female"
}, {
  "full_name": "Gifford Hobben",
  "email": "ghobbens@merriam-webster.com",
  "gender": "Male"
}, {
  "full_name": "Benedetto Eakley",
  "email": "beakleyt@canalblog.com",
  "gender": "Male"
}]

// export const nativeFilterData2 = nativeFilterData.map((data,idx)=>({
//   ...nativeFilterData,id:idx+1
// }))


// const courseArr = ['토론',
//   '비즈니스',
//   '비즈니스 스킬',
//   '시험준비',
//   '뉴스/미디어',
//   '면접대비',
//   '주니어영어']

//   for(let j=0; j<Math.floor(nativeFilterData2.length/courseArr.length); j++){
//   for(let i=0; i<courseArr.length; i++){
//     courseArr.push(courseArr[i])
//   }
// }

// export const nativeFilterData3 = nativeFilterData2.map((data2,idx)=>({
//   ...nativeFilterData2,course:courseArr[idx]
// }))

//   const levelArr=['초급','중급','고급'];


// for(let j=0; j<Math.floor(nativeFilterData2.length/levelArr.length); j++){
//   for(let i=0; i<levelArr.length; i++){
//     levelArr.push(levelArr[i])
//   }
// }

// // 최종 데이터
// export const nativeFilterData4 = nativeFilterData3.map((data3,idx)=>({
//   ...nativeFilterData2,level:courseArr[idx]
// }))

// nativeFilterData2 생성
export const nativeFilterData2 = nativeFilterData.map((data, idx) => ({
  ...data,
  id: idx + 1
}));

// courseArr 복제
const courseArr = [
  '토론',
  '비즈니스',
  '토익 스피킹',
  '오픽',
  '뉴스/미디어',
  '면접대비',
  '주니어영어'
];
const courseArrCopy = Array.from(courseArr);

// courseArr 확장
while (courseArr.length < nativeFilterData2.length) {
  courseArr.push(...courseArrCopy);
}

// nativeFilterData3 생성
export const nativeFilterData3 = nativeFilterData2.map((data, idx) => ({
  ...data,
  course: courseArr[idx]
}));

// levelArr 복제
const levelArr = ['누구나','초급', '중급', '고급'];
const levelArrCopy = Array.from(levelArr);

// levelArr 확장
while (levelArr.length < nativeFilterData2.length) {
  levelArr.push(...levelArrCopy);
}

// nativeFilterData4 생성
export const nativeFilterData4 = nativeFilterData3.map((data, idx) => ({
  ...data,
  level: levelArr[idx]
}));
