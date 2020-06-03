import React, { Component } from 'react'; 
import styles from '../assets/css/style.common.css';
import Comlist from '../components/compontpage/Comlist'
import { connect } from 'dva';

// function IndexPage() {
//   const msg='我教大家react'
//   return (
// <div className={styles.normal}>
//   <h1 className={styles.title}>Yay! Welcome to dva!</h1>
//   <div className={styles.welcome} />
//   <ul className={styles.list}>
//     <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
//     <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
//   </ul>
// </div>
//   );
// }

// IndexPage.propTypes = { };
// export default connect()(IndexPage);




  class IndexPage extends Component {


  constructor(props) {
    super(props)
    this.state = {
      msg1: '7899999980909',
      count: 0,
      countInput: '',
      showcontent: true,
      goods: [
        { title: '河南1', price: 122 },
        { title: '河南2', price: 222 },
        { title: '河南3', price: 322 },
        { title: '河南4', price: 422 },
        { title: '河南5', price: 522 },
      ],
    }

  }
  /**
   * componentDidMount ==mouted  挂完成
   *  */
  componentDidMount() {
    // this.setState((prevState, prevProps) => {
    //   return {
    //     count: prevState.count + 1
    //   }
    //   })

  }
  buttongetdata = () => {
    console.log("this指向问题", this);

    this.setState({
      count: 9
    }, () => {
      console.log("999999999999999", this.state.count);
    })

  }

  /**
   * 
   * 
   * 
   * 
   */
  // onInputChange=(e)=>{
  //     this.setState({
  //       countInput:e.target.countInput
  //     },()=>{
  //       console.log("input改变了",this.state.countInput)
  //     })
  //   }

  onInputChange = (e) => {
    console.log("input改变了", e)

    this.setState({
      countInput: e.target.value
    }, () => {
      console.log("input改变了", this.state.countInput)
    })


  }


  getChildrenMsg = (e) => {

    console.log('这是获取子组件的数据', e);
  }
  propsdata() {
    console.log("这是父组件")
    return '999999999999999999';

  }
  /**
   *  父组件调用子组件里面的数据
   * getchild()
   *  */
  getchild = () => {
    console.log(this.refs.zizujiandata.state.name)
  }
  render() {


    /**
     * 条件渲染第二种写法
     * let showcontent=this.state.showcontent?<h1>1111111</h1>:null;
     * 条件渲染第三种写法
     *  */

    let showcontent;
    if (this.state.showcontent) {
      showcontent = <div onClick={this.buttongetdata} className={styles.rowcontainer}  >
        <span >1111111</span>
        <span>1111111</span>
        <span>1111111</span>
      </div>
    } else {
      showcontent = <h1>222222222</h1>

    }


    return (
      <div>
        {this.props.name} 

        
        <button onClick={this.getchild}>获取子组件里面的数据</button>


        {
          this.state.goods.map((good, index) => {
            return (
              <Comlist key={index} getChildrenMsg={this.getChildrenMsg} ref='zizujiandata' values={good.title} name={index} IndexPage={this} />
            )
          })
        }

        <input placeholder="" value={this.state.countInput} onChange={e => this.onInputChange(e)} />

        {this.state.countInput}
        {showcontent}
        {
          this.state.goods.map((good, index) => {
            return <div key={good.title}>{good.title} {index}</div>
          })
        }

        <div>{this.state.count}</div>
        {this.state.msg1}
      </div>
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
export default connect(mapStateToProps)(IndexPage);