import request from '@/common/request'
export function fetchList(params) {
  return request({
    url:'/brand/pageBrandList',
    method:'get',
    params:params
  })
}
export function createBrand(data) {
  return request({
    url:'/brand/create',
    method:'post',
    data:data
  })
}
export function updateShowStatus(data) {
  return request({
    url:'/brand/updateShowStatus',
    method:'post',
    data:data
  })
}

export function updateFactoryStatus(data) {
  return request({
    url:'/brand/updateFactoryStatus',
    method:'post',
    data:data
  })
}

export function deleteBrand(id) {
  return request({
    url:'/brand/delete/'+id,
    method:'get',
  })
}

export function getBrand(id) {
  return request({
    url:'/brand/'+id,
    method:'get',
  })
}

export function updateBrand(id,data) {
  return request({
    url:'/brand/update/'+id,
    method:'post',
    data:data
  })
}

