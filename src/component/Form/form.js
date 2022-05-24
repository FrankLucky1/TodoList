import React from"react";
import "./form.css"

const Form = ({ setFilteredTodos, setInputText, inputText, todos, setTodos }) => {
    const inputHandler = (e)=>{
       
            console.log(e.target.value);
            setInputText(e.target.value);
      
    };
    const Submit = (e) => {
        e.preventDefault();

        setTodos([...todos, 
            {text: inputText, completed: false, id: Math.random()*1000}]);

        setInputText('')
    };
     const filter=(e)=>{
         //console.log(e.target.value)
         setFilteredTodos(e.target.value)
     }


    return (

        <form className="formGroup">
            <div className="formSection">
                <input 
                
                onChange={inputHandler}
                value={inputText}
                type="text" 
                placeholder="Insert a todo..." 
                className = "todo-input" 
                
                />
                    
                    <button 
                    onClick={Submit}
                    className="todo-button" 
                    type="submit">
                        <i className="fas fa-plus-square">
                        </i>
                    </button>

                <div className="select">
                    <select onChange={filter} name="todos" className="filter-todo">
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="unCompleted">Uncompleted</option>
                    </select>

                </div>
            </div>
        </form>

    );
}
export default Form;