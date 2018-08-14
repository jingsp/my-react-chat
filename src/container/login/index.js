import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { connect } from 'react-redux'
import autobind from 'autobind-decorator';
import logo from './logo.svg';
import './index.scss'

@connect(
  state => state.user
)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    // this.onChange = this.onChange.bind(this)
  }
  @autobind
  onChange(key, v) {
    console.log(222, v)
    this.setState({
      [key]: v
    })
  }
  login() {
    console.log(this)
  }
  render() {
    console.log(this.props)
    return (
      <div className="login-container">
        <div className="logo-wrapper">
           <img className="logo" src={logo} alt=""/>
        </div>
        <h2 className="logo-title">登录</h2>   
        <WingBlank>
          <List>
            <InputItem
              type="text"
              placeholder="input your phone"
              onChange={v => this.onChange('username', v)}
            >用户名</InputItem>
            <InputItem
              type="password"
              placeholder="input your password"
              onChange={v => this.onChange('password', v)}
            >密码</InputItem>
            <WhiteSpace />
            <WhiteSpace />          
          </List>
          <Button type="primary" onClick={this.login}>登录</Button><WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button><WhiteSpace />
        </WingBlank>   
        
      </div>
    )
  }
}

export default Login