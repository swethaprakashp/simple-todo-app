import { useState } from 'react';
import moment from 'moment';
import {Alert, Button, Card} from 'react-bootstrap'
import './App.css';
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [show, setShow] = useState(false)
  let time = moment().format('LL');
  let addItem=()=>{
    if(todo)
   setTodoList([...todoList,
    {id: Date.now(),
    text: todo,
     status: false
     }
  ])
  else{
    setShow(true)
  }
  setTodo('');
  };
  
  let deleteItem=(id)=>{
   setTodoList(todoList.filter(item=>item.id!==id))
  }
  return (
    <div className="App">
      <div>
      <h1>Track it Crack it! </h1>
      <h3><b>Happy Day :)  </b></h3>
      <h6>{time}</h6>
      <input style={{ width: '15rem'}} className='input-text' type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="List your plans " /> &nbsp;
      <button className='button-add' variant="light" onClick={addItem}>
       Add
      </button>
      { show &&
      <Alert className='alert' variant="warning">
          Write your plans first!! <hr/>
          <Button size='sm' variant="outline-dark" onClick={()=>setShow(false)}>HaHa Cool<br/> Ok!</Button>
        </Alert>}
      <div className='todos-response'>
      { todoList.map((todos)=> {
        return (
          <div className='todo-check'>
         <ul>
         <li key={todos.id}>
          <Card className='card' style={{ width: '15rem', size:'lg' }}>
            <Card.Body>
         <input className='checkbox' type="checkbox" value={todos.status} 
         onChange={(e)=>setTodoList(
          todoList.filter(item=>{
            if(item.id === todos.id){
            item.status = e.target.checked
            }
            return item
         })
        )} /> {todos.status? ( <s>{todos.text}</s>)
          :(<b>{todos.text}</b>)}
         </Card.Body>
         <Card.Footer>
         <button className='button-delete' onClick={()=>deleteItem(todos.id)} > Delete</button >
         </Card.Footer>
         </Card>
        </li>
         </ul>
      </div>
        )
      })}
      </div>
      </div>
     </div>
  );
}

export default App;
