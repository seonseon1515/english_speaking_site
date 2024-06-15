// 인증 관련 비즈니즈 로직을 처리하는 파일
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/database';
import { User } from '../models/authModel';