// Dependencies
import React, { Component } from "react";
import axios from "axios";

// Components
import PageHeader from "../template/PageHeader";
import TodoForm from "../todo/TodoForm";
import TodoList from "../todo/TodoList";

// Constantes
const URL = "http://localhost:3003/api/todos";

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

    // Initialize
    this.refresh();
  }

  refresh() {
    axios.get(`${URL}?sort=-createdAt`).then(resp =>
      this.setState({
        ...this.state,
        description: "",
        list: resp.data
      })
    );
    console.log(this.state);
  }

  handleChange(e) {
    this.setState({
      //...this.state,
      description: e.target.value
    });
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then(resp => this.refresh());
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
