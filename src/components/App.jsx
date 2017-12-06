import React, { Component } from 'react';
import newimg from './newimg.svg';
import '../styles/App.css';
import Header from './Header'
import TodoItem from './TodoItem.jsx'
import Home from './Home.jsx'






class App extends Component {
  state = {
      newTodo: "",
      todos: [
        {title: "Learn React", completed: false},
        {title: "Learn jQuery", completed: true}
      ]
  }
  handleComplete = (index) => {
    const currentTodos = this.state.todos
    // console.log(currentTodos[index])
    currentTodos[index].completed = !currentTodos[index].completed
    this.setState({todos: currentTodos})
  }
  handleChange = (evt) => {
    const newTodo = evt.currentTarget.value
    this.setState({newTodo: newTodo})
  }
  handleSubmit = () => {
    const currentTodos = this.state.todos
    const newTodo = {title: this.state.newTodo, completed: false}
    this.setState({todos: currentTodos.concat(newTodo), newTodo: ""})
  }
  render() {
    // console.log(this.state)
    return (
      <div className="App">
          <Header name="brandon"/>
          {this.state.todos.map((item, index) => {
            return (
              <Home
                item={item}
                key={index}
                index={index}
                handleComplete={this.handleComplete}
              />
              )
          }) }
          <input onChange={this.handleChange} value={this.state.newTodo} placeholder="enter item"/>
          <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
