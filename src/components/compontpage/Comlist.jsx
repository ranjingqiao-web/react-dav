import React, { Component } from 'react'
 
export default class Comlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '我是子组件',
            msg: '子组件传值给父组件kkkkkkkkkkkkkkkkkkkkkkkkk'
        }
    }
    componentDidMount() {
      this.setState({
        msg:'MMMMMMMMMMMMMMMMMMMMMMMMMMM'
      })
    }
     
    render() {
        return (
            <div>
            <div onClick={this.props.IndexPage.getChildrenMsg.bind(this,this.state.msg)} >子组件像父组件传值</div>
            {/* <div onClick={this.props.getChildrenMsg }> */}
            <div onClick={this.props.IndexPage.propsdata}>
                {this.props.name}   {this.props.values}
            </div>
            </div>
            
        )
    }
}

