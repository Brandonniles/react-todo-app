import React from 'react'

class TodoItem extends React.Component {
  render () {
    return (
      <div>
        <span>{this.props.item.title}</span>
        <span onClick={() => {this.props.handleComplete(this.props.index)}}>{this.props.item.completed === true ? " - X" : " - O"}</span>

      </div>
    );
  }
}

export default TodoItem
