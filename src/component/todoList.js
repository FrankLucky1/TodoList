import React from "react";
import Todo from "./todo";

const TodoList = ({todos,setTodos, sortedItems}) => {

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {sortedItems.map(todoContent => (
                    <Todo 
                    setTodos ={setTodos}
                    todos={todos}
                    text={todoContent.text} 
                    todoContent={todoContent}
                    key={todoContent.id}/>
                    ))}
            </ul>
        </div>
    );
};
export default TodoList;