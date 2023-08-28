import { useEffect, useState } from 'react';
import './App.css'
import style from './app.module.css';
import { Todo } from './Components/TodoItem';
import { Todos } from './Components/Todos';
import { Addtodo } from './Components/Addtodo';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Palindrome from './Components/palindrome/add_palindrome';
import About from './Components/about';
import {
  BrowserRouter as Router,
  Routes,
  Route}
 from "react-router-dom";


function App() {

  let initToDo;
  if(localStorage.getItem("todos") === null){
    initToDo=[];
  }
  else{
    initToDo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (value) => {

    console.log("I am deleted", value);
    setTodos(todos.filter((e) => { return e !== value; }
    ))

    localStorage.getItem("todos",JSON.stringify(todos));

  }

  const addToDo = (text, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myToDo = {
      sno: sno,
      title: text,
      desc: desc
    }

    setTodos([...todos, myToDo]);
    console.log(myToDo);

    if(localStorage.getItem("todos") === undefined){
      localStorage.setItem("todos", JSON.stringify("todos"));
    }
  }




  const [todos, setTodos] = useState(initToDo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <>
    <Router>
    <Header searchBar={false}/>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Default addToDo={addToDo} todos={todos} onDelete={onDelete}/>}/>
          
          <Route path="/palcheck" element={<Palindrome />} />
        </Routes>
        
      </div>
      <Footer />
      </Router>
    </>
  );
}

export default App;


function Default(props){
  return(
    <>
    <div className='left'>
                <h3 style={{ marginTop: "30px" }}>Todo List</h3>
                <Addtodo addToDo={props.addToDo} />
              </div>
              <div className='right'>
                <Todos todos={props.todos} onDelete={props.onDelete} />
              </div>
    </>
  );
}
