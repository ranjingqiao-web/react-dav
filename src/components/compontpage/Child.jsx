import React, { Component } from 'react';
import { withRouter } from 'dva/router';

class Child extends Component {
    /**
     *@第一步  import { withRouter } from 'dva/router';
     *@第二步  withRouter 引入就有了 history 方法
     *   
     * 
     */
    toIndexPage = () => {
     this.props.history.push('/')
    }
    render() {
        return (
            <div>
                我是通用组件
                <button onClick={this.toIndexPage}>我要去首页</button>
            </div>
        )
    }
}
export default   withRouter(Child); 