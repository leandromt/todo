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
    this.deleteItem = this.deleteItem.bind(this);
    this.itemMarkAsDone = this.itemMarkAsDone.bind(this);
    this.itemMarkAsPending = this.itemMarkAsPending.bind(this);
    this.refresh = this.refresh.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);

    // Initialize
    this.refresh();
  }

  refresh(description = "") {
    const search = description ? `&description__regex=/${description}/` : "";
    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then(resp =>
        this.setState({ ...this.state, description, list: resp.data })
      );
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      description: e.target.value
    });
  }

  handleAdd() {
    const description = this.state.description;
    axios
      .post(URL, {
        description
      })
      .then(resp => this.refresh());
  }

  deleteItem(item) {
    axios
      .delete(`${URL}/${item._id}`)
      .then(res => this.refresh(this.state.description));
  }

  itemMarkAsDone(item) {
    axios
      .put(`${URL}/${item._id}`, { ...item, done: true })
      .then(res => this.refresh(this.state.description));
  }

  itemMarkAsPending(item) {
    axios
      .put(`${URL}/${item._id}`, { ...item, done: false })
      .then(res => this.refresh(this.state.description));
  }

  handleClear() {
    this.refresh();
  }

  render() {
    console.log("desc: " + this.state.description);
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" quantity={this.quantity} />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange !== "" ? this.handleChange : null}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          deleteItem={this.deleteItem}
          itemMarkAsDone={this.itemMarkAsDone}
          itemMarkAsPending={this.itemMarkAsPending}
        />
      </div>
    );
  }
}

export default Todo;
