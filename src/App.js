import React, {useState, useEffect} from "react";
import './App.css';
//importing components
import Instructions from "./component/instructions/Instructions"
import Form from "./component/Form/form"
import TodoList from "./component/Todolist/todoList";

function App() {
  //state declaration
  const [inputText, setInputText]= useState("");
  const [todos, setTodos]= useState([]);
  const [filteredTodos, setFilteredTodos] = useState("all");
  const [sortedItems, setSortedItems] = useState([]);

 
//functions

 //use Effect


 useEffect(()=>{
  const itemSort = ()=>{
    switch(filteredTodos) {
      case "Completed":
        setSortedItems(todos.filter(todo=> todo.completed === true));
        break;
      case 'unCompleted':
        setSortedItems(todos.filter(todo => todo.completed === false));
        break;
        default:
         setSortedItems(todos);
          break;
     };
  
  };
  itemSort();
  }, [todos, filteredTodos]);


  return (
    <div className="App">
      <header>
      <h1>Todo List </h1>
      </header >
      
      <Instructions/>

      <Form 
      setFilteredTodos={setFilteredTodos} 
      setInputText = {setInputText} 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos}/>

      <TodoList sortedItems={sortedItems}  setTodos={setTodos} todos={todos}  />


      <h2 className="subtitle">WELCOME</h2>
    </div>
  );
}

export default App;
