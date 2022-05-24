import React from "react";
import "./todo.css"

const Todo = ({text, todoContent,todos,setTodos})=>{

   

    const deleteHandler = () => {

        setTodos(todos.filter((el) => el.id !== todoContent.id));
        
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
        <div className='todo' >
            <li className={`todo-item ${todoContent.completed ? "completed" : ""}`}>{text}</li>
           <div>
            <button onClick={completedHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
            </div>
        </div>
    )
}
export default Todo;