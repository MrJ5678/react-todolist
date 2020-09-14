import React, { Component } from 'react'

class TodoInput extends Component {
  state = {
    todoValue: ""
  }

  setTodoValue = (e) => {
    this.setState({
      todoValue: e.target.value
    })
  }

  addTodoItem = () => {
    const { addTodoItem } = this.props

    const _val = this.state.todoValue.trim()

    if(_val.length === 0) {return}

    addTodoItem({
      id: new Date().getTime(),
      completed: false,
      content: _val
    })

    this.setState({ todoValue: '' })
  }

  render() {
    const { todoValue } = this.state

    return (
      <div>
        <input 
          type="text"
          onChange={(e) => this.setTodoValue(e)}
          value={ todoValue }
        />
        <button onClick={() => this.addTodoItem()}>增加</button>
      </div>
    )
  }
}

export default TodoInput