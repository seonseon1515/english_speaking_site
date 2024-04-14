export interface NewPost {
  id:number,
  author:string,
title:string,
timeStamp:string,
content:string,
}

export interface Posts {
  id:number,
  author: string, 
  title:string,
  timestamp: string, 
  content: string, 
}

export interface AppState {
  posts: {postList: NewPost[]}
}
