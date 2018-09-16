// Libs
import React, { Component } from "react";

// Components
import PageHeader from "../template/PageHeader";
import TodoForm from "../todo/TodoForm";
import TodoList from "../todo/TodoList";

class Todo extends Component {
  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default Todo;
