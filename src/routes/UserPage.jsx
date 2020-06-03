import React, { Component, Fragment } from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import Child from '../components/compontpage/Child';
/** 
 *@通配符  *as
 *@把所有方法都暴露出来 
*/
import * as apis from '../services/example'
/**
 * Link 页面跳转
 * 
 */
class userPage extends Component {

 componentDidMount(){
  apis.textCnode().then((res)=>{
    console.log("代理请求返回的数据",res)
  }),
  apis.zhuceMock().then((res)=>{
    let gety=JSON.parse(JSON.stringify(res))
    console.log("Mock请求返回的数据",gety)

  })


 }
/**
 *调用接口请求 textCnode
 *
 */
textCnode=()=>{
  this.props.dispatch({
    type:'indexText/textCnode',
    data: {
      name:'猪猪侠'
    }
  })
}
 /**
     * 跳转页面的方法
     * @路由 this.props.history.push('/')
     * 
     */
  toindexhandel = () => {
    
    this.props.history.push('/')
    console.log(this.props)
  }
  /**
   * @handelStateName 就可以改变models里面的值
   * @第一步 先拿到命名空间indexText
   * @第二步 跟上方法名setName
   *  console.log(this.props.dispatch)
   */
  handelStateName = () =>{
    this.props.dispatch({
      type:'indexText/setName',
      data: {
        name:'猪猪侠'
      }
    })
     
  }
  /**
   * @异步回调方法 setNameAsync
   *@异步改变moudel中的name值 handelStateNameAsync
   *
   */
  handelStateNameAsync=()=>{
    this.props.dispatch({
      type:'indexText/setNameAsync',
      data: {
        name:'猪猪侠'
      }
    })
  }
  render() {
    /**
     * @获取接口返回的数据值
     * let getRelData=this.props.cnodeData;
     */
    let getRelData=this.props.cnodeData;
    console.log('msg',this.props.cnodeData)
    return (
      <Fragment>
        <div>
          <div>这是改变了moudel里面的数据 <span style={{color:'red'}}> {this.props.name}</span> </div> 
          <button onClick={this.handelStateName}> 获取moudel 中的数据 </button>
          <button onClick={this.handelStateNameAsync}> 异步获取moudel 中的数据 </button>
          <button onClick={this.textCnode}> 获取接口数据 </button>

          我是用户页面  {this.props.msg}
         <Link to='/'>用户跳转到首页</Link>
          <Child />
          <button onClick={this.toindexhandel}> 跳转到首页</button>
       
        </div>
     
      </Fragment>
    )
  }
}
const   mapStateToProps = (state, ownProps) => {
  /**
   * @state就是models里面的state
   * @把models里面的数据获取到页面 name:state.indexText.name
   */

   console.log('models==>',state)
  return {
    msg:'我喜欢dva',
    name:state.indexText.name,
    cnodeData:state.indexText.cnodeData
  }
}
 /**
  * @connect()方法
  * 
  */
export default connect(mapStateToProps)(userPage);