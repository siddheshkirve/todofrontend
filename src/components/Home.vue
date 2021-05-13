<template>
    <div class="container">
        <h2>Enter your Username here</h2>
        <input type="text"  placeholder="eg:siddheshkirve" v-model="username" required>
                <h2>Enter todo</h2>
        <input type="text"  placeholder="enter todo" v-model="todo" required>
        <div class="btn">
            <span>
                <button @click="onSubmit">SUBMIT</button>
                <button @click="clearInput">CLEAR</button>
            </span>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: "",
            todo: ""
        };
    },
    methods: {
        onSubmit(){
            if(this.username === "") {
                alert("Username must not be empty.")
               return;

            }
            if(this.todo === "") {
                alert("Todo must not be empty.")
                return;
            }
            axios.post('http://localhost:8080/todos/' + this.username, {todo:this.todo})
            .then((res) => {
                console.log(res)
                this.clearInput();
            })
            

        },
        clearInput() {
            this.username = "";
            this.todo = ""
        },
    }
}
</script>

<style>
.container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-family: sans-serif;
    background-size: cover;
    background: rgba(243, 243, 241, 0.877);
    padding: 10px 20px; 
    border-radius: 10px;
    box-shadow: 3px  3px 6px #8b95a8;
}

.container h2{
    text-align: center;
    font-size: 24px;
    color: black;
    margin: 10px 0 10px 0 ;
}
#username{
    width: 300px;
    margin: 20px;
    border: none;
    border-bottom: 1.5px solid black;
    background: transparent;
    outline: none;
    
}
.btn input{
    padding: 3px 6px 3px 6px;
    margin: 0 180px 0 0 ;
    font-weight: bold;
    color: white;
    background: rgb(42, 134, 187);
    border: none;
    cursor: pointer;
    border-radius: 10%;
    
    
}
.btn button{
    
    padding: 3px 6px 3px 6px;
    font-weight: bold;
    color: white;
    background: rgb(42, 134, 187);
    border: none;
    cursor: pointer;
    border-radius: 10%;
    margin: 10px;
}
</style>