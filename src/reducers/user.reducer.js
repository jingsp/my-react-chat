import axios from 'axios'
// 定义type
const AUTH_SUCCESS=  'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
// 初始化state
const initState = {
  user: '',
  type: '',
  msg: ''
}

export function user(state=initState, action) {
  switch(action.type) {
    case AUTH_SUCCESS: 
      return {...state, msg: ''}
    case LOAD_DATA: 
      return {...state, ...action.payload}
    case ERROR_MSG: 
      return {...state, isAuth: false, msg: action.msg}
    default: 
      return state
  }
}

function authSuccess(obj) {
  const {password, ...data} = obj
  return {type: AUTH_SUCCESS, payload: data}
}


function errMsg(msg) {
  return {msg, type: ERROR_MSG}
}

// 登录
export function login({username, password}) {
   if (!username || !password) {
     return errMsg('用户名和密码不能为空')
   }
   return dispatch => {
     axios.post('/user/login', {username, password})
     .then(res => {
       if(res.status===200 && res.data.code === 0) {
         dispatch(authSuccess(res.data.data))
       }
     })
   }
}

