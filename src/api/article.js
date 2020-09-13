import request from '@/utils/request.js'
const artList = params => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params
  })
}
export {
  artList
}
