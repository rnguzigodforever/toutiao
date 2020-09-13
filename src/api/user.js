import request from '@/utils/request.js'

const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
const getCode = data => {
  return request({
    method: 'GET',
    url: '/app/v1_0/sms/codes/' + data
  })
}
const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
  })
}
const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}

export {
  login,
  getCode,
  getUserInfo,
  getUserChannels
}
