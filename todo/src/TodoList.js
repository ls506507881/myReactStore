import React, { Component,Fragment} from 'react';

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      list:['学习 React','学习 JavaScript','学习 English']
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} placeholder="请输入添加内容" />
          <button onClick={this.handleBtnClick}>添加</button>
        </div>
        <ul >
          {
            this.state.list.map((item,index)=>{
              return (
                <li onClick={this.handleItemDelete.bind(this,index)} key={index}>{item}</li>
              )
            })
          }
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e){
    console.log(e.target.value)
    this.setState({
      inputValue:e.target.value
    })
  }
  handleBtnClick(e){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
    
  }
  handleItemDelete(index){
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list,
    })
  }
}

export default TodoList;
