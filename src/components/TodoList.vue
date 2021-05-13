<template>
  <div class="container_2">
    <h2>Todo</h2>
    <ul class="list">
      <li v-for="(todo, index) in todos" :key="index">
        <label>
          <input type="checkbox" />
          <span>{{ todo }}</span>
        </label>
      </li>
    </ul>
    <p>
      <!-- <input type="text" v-model="todoText" placeholder="add new todo here" />
			<button v-on:click="addTodo()" class="btn btn-primary btn-sm">ADD</button> -->
      <input type="text" v-model="username" placeholder="Enter username" />
      <button v-on:click="getTodo()" class="btn btn-primary btn-sm">
        get Todo
      </button>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todoText: "",
      todos: [],
      username: ""
    };
  },
  methods: {
    addTodo: function() {
      var newTodo = this.todoText.trim();
      if (!newTodo) {
        return;
      }
      this.todos.push({ text: newTodo, done: false });
      this.todoText = "";
    },
    async getTodo() {
      try {
        if (this.username === "") {
          alert("Username must not be empty.");
          return;
        }
        let response = await axios.get(
          `http://localhost:8080/todos/${this.username}`
        );
        console.log(response);
        if (response.status == 200 && response.data.ok) {
          let todos = response.data.userTodo.map(todo => todo.todos);
          let todo = todos.map(todo => todo.todo);
          this.todo = todo.map(todo => todo.todo);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  async created() {
    // await axios.get("http://localhost:3000/all");
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
  color: grey;
}
</style>