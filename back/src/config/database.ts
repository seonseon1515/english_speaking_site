import mysql from 'mysql';

// MySQL 데이터베이스 연결설정 
const db = mysql.createConnection({
  host:'localhost',
  user:'root', // MySQL 사용자 이름
  password:'1234',
  database:'login_app'
});

// 데이터베이스 연결(오직 에러를 잡기 위한 과정인가?)
db.connect((err) => {
  if(err){
    console.log('throw err를 통해 예외를 명시적으로 발생')
    throw err;
  } else {
    console.log('MySqL Connected');
  }
});

export default db; // 왜 내보낼까?