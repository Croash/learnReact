import React,{ Component, Fragment } from 'react'

class SubComponent extends Component {
  // 父组件传递的属性，都会赋到props上

  componentWillReceiveProps(newProps) {
    // props 有修改的时候，会有新的props传入
    console.log('newProps', newProps, this.props)
    if(newProps.sub_number !== this.props.sub_number) {
      console.log('changed')
    }
    // fob 变成了 des ！怎么办？
    // 当然是调用des的接口啦
  }

  render() {
    const { sub_number } = this.props
    return (
      <Fragment>
        <div>{sub_number}</div>
      </Fragment>
    )
  }
}

export default SubComponent
