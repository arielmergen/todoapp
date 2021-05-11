import React from "react";

export const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = ({ target }) => {
        setInputText(target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { id: Math.random() * 1000, text: inputText, completed: false }]);
        setInputText("");
    };

    const statusHandler = ({ target }) => {
        setStatus(target.value);
    };
    return (
        <form>
            <input type="text" value={inputText} className="todo-input" onChange={inputTextHandler} />
            <button onClick={submitTodoHandler} className="todo-button">
                <i className="fas fa-plus-square" />
            </button>
            <div className="select">
                <select name="tools" onChange={statusHandler} className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};
