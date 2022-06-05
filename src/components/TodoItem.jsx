import React, {Component} from "react";


class TodoItem extends Component{

    render(){
        return(
            <li> 
                <input 
                    type="checkbox"
                    checked={this.props.todoItem.completed}
                    onChange={() => this.props.handleChangeProps(this.props.todoItem.id)}
                />
                <button onClick={() => this.props.deleteTodoProps(this.props.todoItem.id)}>
                    Delete
                </button>
                {this.props.todoItem.title}
            </li>
        );
    }
}

export default TodoItem;



