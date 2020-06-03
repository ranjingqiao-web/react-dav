import request from '../utils/request';
/**
 * 映射自己配置的代理
 * POX='/api/'
 */
const POX='/api/';
export function query() {
  return request.get('/api/users');
}
/**
 * 主题接口
 */
export function textCnode() {
  return request.get(POX+'/api/v1/topics');
}
 /**
 * 自定义注册mock接口
 */
export function zhuceMock() {
  return request.get('/api/mockdta');
}
 
 