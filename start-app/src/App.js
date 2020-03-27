import React, { Component } from 'react';
import SubComp from './component/subComp'
import './App.css';

// JSX
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _jumpNum: 0,
      number: 0
    }
  }

  componentWillMount() {
    // 组件生成之前执行
  }

  // 组件第一次生成完成的时候执行 这个会用的比较多
  componentDidMount() {
    console.log('didmount')
    // didmount 是做首次请求的时候，用的
    this.timer = setInterval(()=>{
      this.setState({
        _jumpNum: this.state._jumpNum+1
      })
    }, 1000)
  }

  // 这个第二多
  componentWillReceiveProps(newProps) {
    // props 有修改的时候，会有新的props传入
  }

  componentWillUnmount() {
    console.log('unmount')
    this.timer && clearInterval(this.timer)
    // && : 如果第一个为ture， 则执行&& 后的语句
    // || : 如果第一个为false，同上
  }

  reduce = () => {
    this.setState({
      number: this.state.number-1
    })
  }

  add = () => {
    // state: setState方法
    // 如果运行这个方法的时候
    // 会更新组件的state
    // 然后重新调用render方法
    this.setState({
      number: this.state.number+1
    })
  }

  render() {
    return (
      <div style={{ fontSize: '20px' }}>
        <span>number:</span>
        <button onClick={this.reduce}>
          -
        </button>
        { this.state.number }
        <button onClick={this.add}>
          +
        </button>
        <div>
          <SubComp
            sub_number={this.state.number}
          />
        </div>
        <div>jp:{this.state._jumpNum}</div>
      </div>
    )
  }
}

export default App;
