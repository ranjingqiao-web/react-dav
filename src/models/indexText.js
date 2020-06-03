import * as apis from '../services/example'

export default {
  /***
   *@数据仓库的命名空间 namespace
   */
  namespace: 'indexText',
  state: {
    name: '我就是命名空间的数据',
    cnodeData: {}
  },

  reducers: {
    /** 
     * @state 
     * @payload 传入的参数 
     * @需要转换一下数据 let _state=JSON.parse(JSON.stringify(state));
     */
    setName(state, payload) {
      let _state = JSON.parse(JSON.stringify(state));
      _state.name = payload.data.name
      console.log('传入的参数payload', payload)
      return _state;
    },
    setcnodeData(state, payload) {
      let _state = JSON.parse(JSON.stringify(state));
      _state.cnodeData = payload.data;
      return _state;
    },
    testPath(state, payload){
      let _state = JSON.parse(JSON.stringify(state)); 
      return _state;
    }

  },
  effects: {
    /**
     * 
     * @put type对应reducers里面的方法，data是对应改变
     * reducers里面setName方法的数据，从而改变state里面的数据
     * @param {*} param1 
     */

    *setNameAsync({ payload }, { put, call }) {
      yield put({
        type: 'setName',
        data: {
          name: '曹超'
        }
      })
      // yield console.log('改变name的异步方法');
    },
    /**
     * 
     * @param 调用接口  textCnode
     * @接口地址 url
     * @请求参数 payload
     * @param call('url',payload)
     */
    *textCnode({ payload }, { put, call }) {
      let rel = yield call(apis.textCnode, {})
      if (rel.data) {
        yield put({
          type: 'setcnodeData',
          data: rel.data.data
        })
      }
      console.log("点击调用接口的数据", rel)
    }
  },
    subscriptions:{
      /**
       *@subscriptions 初始化就调用此函数，不需要点击调用执行
       *@只要匹配对应的路径就行
       *@dispatch 就是调用
       */
      getsubscriptions({dispatch,history}){
        history.listen(({pathname})=>{
          if(pathname==='/'){
            console.log("自动调用");
            dispatch(
               {
                type:'setcnodeData' 
               } 
            )
          }
        })
      
      }
    }
}