import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todos, filteredTodos, setTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        key={todo.id}
                        text={todo.text}
                        filteredTodos={filteredTodos}
                        todo={todo}
                        todos={todos}
                    />
                ))}
            </ul>
        </div>
    );
};
