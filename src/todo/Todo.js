// Libs
import React, { Component } from "react";

// Components
import PageHeader from "../template/PageHeader";
import TodoForm from "../todo/TodoForm";
import TodoList from "../todo/TodoList";

class Todo extends Component {
  constructor(props) {
    super(props);

    // States
    this.state = {
      description: "",
      list: []
    };

    // Binds
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      //...this.state,
      description: e.target.value
    });
  }

  handleAdd() {
    console.log(this.state);
  }

  render() {
    console.log(this.state.description);
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm handleAdd={this.handleAdd} handleChange={this.handleChange} />
        <TodoList />
      </div>
    );
  }
}

export default Todo;
