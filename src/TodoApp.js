import React, { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import "./TodoApp.css";
const TodoApp = () => {
    //State Stuff
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    //RUN ONCE when the app start
    useEffect(() => {
        getLocalTodos();
    }, []);

    //USE EFFECT
    useEffect(() => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos, status]);

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    };

    return (
        <>
            <header>
                <h1>TODO App</h1>
            </header>
            <Form
                todos={todos}
                inputText={inputText}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus}
            />
            <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
        </>
    );
};

export default TodoApp;
