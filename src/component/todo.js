import React from "react";

const Todo = ({text, todoContent,todos,setTodos})=>{
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todoContent.id));
        console.log(todoContent);
        };
    
    const completedHandler = ()=>{
        setTodos(todos.map((item) =>{ 
            if(item.id === todoContent.id){
                return {
                    ...item, 
                    completed: !item.completed,
                };
            }
            return item;
        })
        );
    };

    return(
        <div className= "todo">
            <li className={`todo-item ${todoContent.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completedHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
export default Todo;