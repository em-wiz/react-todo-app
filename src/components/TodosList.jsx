import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodosList extends Component {

    render(){
        return(
            <ul>
                {this.props.todos.map(todo => (
                   <TodoItem 
                    key={todo.id}
                    todoItem={todo}
                    handleChangeProps={this.props.handleChangeProps}
                    deleteTodoProps={this.props.deleteTodoProps}
                   />
                ))}
            </ul>
        );
    }
}

export default TodosList;