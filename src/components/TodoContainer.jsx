import React, { Component } from "react"
import TodosList from "./TodosList";
import Header from "./Header";


class TodoContainer extends Component {
  
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
    };

    // prefered method to update checkbox state, This enables us to keep strict mode in our index.js and yet allow the checkbox to toggle when clicked, also a 'return{}' statement can be used for the setState callback instead of wrapping it around a 'parenthesis()'
    handleChange = (id) => {
      this.setState(prevState => ({
        todos: prevState.todos.map(todo => {
          if(todo.id === id){
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        }),
      }))
    };

     //update checkbox state (method 2)
    // handleChange = (id) => {
    //   this.setState(prevState => ({
    //     todos: prevState.todos.map(todo => {
    //       if(todo.id === id){
    //         todo.completed = !todo.completed
    //       }
    //       return todo
    //     }),
    //   }))
    // };

    //update checkbox state (method 1)
    // handleChange = (id) => {
    //   this.setState({
    //     todos: this.state.todos.map(todo => {
    //       if(todo.id === id){
    //         todo.completed = !todo.completed;
    //       }
    //       return todo;
    //     })
    //   })
    // };
    
    deleteTodo = id => {
      this.setState({
        todos: [
          ...this.state.todos.filter(todo => {
            return todo.id !== id
          })
        ]
      })
    };

  render() {
    return (
      <div>
        <Header />
        <TodosList 
          todos={this.state.todos} 
          handleChangeProps={this.handleChange} 
          deleteTodoProps={this.deleteTodo} 
        />
      </div>
    )
  }
}

export default TodoContainer;