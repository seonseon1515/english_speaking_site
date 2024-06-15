import { DataType,DataTypes,Model } from "sequelize";
import sequelize from "../config/dbConfig";

// User 모델 정의
class User extends Model {
  public id!:number;
  public username!: string;
  public password!:string;
}

// User 모델 초기화
User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED, // 양의 정수
    autoIncrement: true, // 자동 증가
    primaryKey:true,// 기본키
    },
  username: {
    type: DataTypes.STRING(128), // 최대 문자열,
    allowNull:false, 
    unique: true, // 중복 불가 고유값
  },
},{
  sequelize, // 연결된 Sequelize 인스턴스
  tableName:'users',
});

export default User;