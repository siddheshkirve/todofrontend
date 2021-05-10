<template>
	<div class="container_2">
		<h2>Todo</h2>
		<ul class="list">
			<li v-for="(todo,index) in todos " :key="index">
				<label>
					<input type="checkbox" v-model="todo.done" />
					<span v-bind:class="{'done': todo.done}">{{todo.text}}</span>
				</label>
			</li>
		</ul>
		<p>
			<input type="text" v-model="todoText" placeholder="add new todo here" />
			<button v-on:click="addTodo()" class="btn btn-primary btn-sm">ADD</button>
		</p>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	    data: {
		    todoText: '',
		    todos: [	
			
		    ]
	    },
	    methods: {
		    addTodo: function() {
			    var newTodo = this.todoText.trim();
                if (!newTodo) {return;}
                this.todos.push(
                    {text: newTodo, done: false}
                );
			    this.todoText = '';
		    }
	    },
		async created() {
    		const res = await axios.get("http://localhost:3000/all");
		}
	}
</script>

<style>
.done {
	text-decoration: line-through;
	color: grey;
}

</style>