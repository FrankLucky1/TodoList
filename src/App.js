import React, {useState, useEffect} from "react";
import './App.css';
//importing components
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
   getLocalTodos();
 },[]);

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
     }
  };
   saveTodoLocal();
  itemSort();
  }, [todos, filteredTodos]);

  const saveTodoLocal= () => {
   
        localStorage.setItem("todos",JSON.stringify(todos));

  };

  const getLocalTodos=()=>{
    if( 
      localStorage.getItem("todo")=== null) {
        localStorage.setItem("todos",JSON.stringify([]));
      } else{
        let todoLocal= JSON.parse(localStorage.getItem("todos"))
        setTodos(todoLocal)
      }
  }; 


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


      <h2 className="subtitle">FINALLY FINISHED MY 2nd REACT PROJECT</h2>
    </div>
  );
}

export default App;
