<template>
  <div class="container_2">
    <h2>Todo</h2>
    <ul class="list">
      <li v-for="(todo, index) in todos" :key="index">
        <label>
          <input type="checkbox" />
          <span
            >{{ todo }}
            <button v-on:click="deleteTodo()" class="btn btn-danger btn-sm">
              delete
            </button>
            <button v-on:click="updateTodo()" class="btn btn-danger btn-sm">
              update
            </button>
          </span>
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
      todo: "",
      todos: [],
      username: ""
    };
  },
  methods: {
    // async deleteTodo() {
    //   this.todos.delete({ todoText });
    // },

    // async updateTodo() {
    //   this.todos.update({ text: newTodo });
    // },
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
          let todos = response.data.userTodo[0].todos;
          // this.todos = todos.todo;
          this.todos = todos.map(todo => todo.todo);
          console.log(todos);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  async delete() {}
};
</script>

<style>
.done {
  text-decoration: line-through;
  color: grey;
}
</style>