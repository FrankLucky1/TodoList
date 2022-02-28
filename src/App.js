import React, {useState, useEffect} from "react";
import './App.css';
//importing components
import Form from "./component/form"
import TodoList from "./component/todoList";

function App() {
  //state declaration
  const [inputText, setInputText]= useState("");
  const [todos, setTodos]= useState([]);
  const [filteredTodos, setFilteredTodos] = useState("all");
  const [sortedItems, setSortedItems] = useState([]);

  //use Effect
  useEffect(()=>{
    itemSort()
    }, [todos, filteredTodos]);
  

//functions
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
   }
};
//saving to local storage
const saveTodos = ()=>{

}

  return (
    <div className="App">
      <header>
      
      <h1>Todo List </h1>
      </header >

      <Form 
      setFilteredTodos={setFilteredTodos} 
      setInputText = {setInputText} 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos}/>

      <TodoList sortedItems={sortedItems}  setTodos={setTodos} todos={todos}  />


      <h2 className="subtitle">FINALLY FINISHED MY 2nd REACT PROJECT AFTER 1 WEEK</h2>
    </div>
  );
}

export default App;
