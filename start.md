## 安装
npm install -g create-react-app 
// create-react-app 用于构建项目
mkdir learn-react
cd learn-react & create-react-app start-app

cd start-app
npm run start

浏览器直接访问 localhost:3000

## hello world
``` jsx
class App extends Component {
  render() {
    return (
      <div style={{ fontSize: '50px' }}>
        hello world
      </div>
    )
  }
}
```

## state 与 setState

```jsx
add = () => {
  // state: setState方法
  // 如果运行这个方法的时候
  // 会更新组件的state
  // 然后重新调用render方法
  this.setState({
    number: this.state.number+1
  })
}
```

## 子组件

### 如何引入
import 过来
<SubComp />

### 组件传值

#### 注意
1. 引入的组件一定要首字母大写！！！！
