import './App.css';
import { useState } from 'react';

function App() {

  let [todolist,setTodolist] = useState([])

  let saveToDoList=(event)=>{

    let todoname = event.target.todoname.value;
    if(!todolist.includes(todoname)){
      let finalDolist=[...todolist,todoname]
      setTodolist(finalDolist)
    }
    else{
      alert("ToDo Name Already Exists....")
    }

    event.preventDefault();  //using this event.preventDefault form is submitted but do not refresh pages
  }

  let list=todolist.map((value,index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} todolist={todolist} setTodolist={setTodolist}/>
    )
  })
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="todoname"/> <button>Save</button> 
      </form>
    
    <div className='outerDiv'>
      <ul>
        {list}
      </ul>
    </div>
    </div>
  );
}

export default App;


function ToDoListItems({value,indexNumber,todolist,setTodolist}){

  let [status,setStatus]=useState(false)

  let deleterow=()=>{
    let finalData=todolist.filter((v,i)=>i!==indexNumber)
    setTodolist(finalData)
  }

  let checkStatus=()=>{
    setStatus(!status)
  }
  
  return(
    <li className={(status)? 'completetodo': ''} onClick={checkStatus}>{value} <span onClick={deleterow}>&times;</span></li>
  )
}