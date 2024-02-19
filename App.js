import './App.css';
import ToDoList from './ToDoList';
import { useState } from 'react';

function App() {
  const [tasks,setTasks]=useState([{id:1,text:'Doctor Appointment',Completed:true},{id:2,text:'Go to School',Completed:false}])
  const [text,setText]=useState('');
  function addTask(text)
  {
    if(text==='')
    {
      return alert('PLEASE ENTER THE TASK')
    }
    const newtask={
      id:Date.now(),
      text:text,
      Completed:false
    };
    setTasks([...tasks,newtask]);
    setText('');
  }
  function toggleComplete(id)
  {
    setTasks(tasks.map((task)=>
    {
      if(task.id===id)
      {
        return {...task,Completed:!task.Completed}
      }
      else
      {
        return task;
      }
    }))

  }
  function deleteTask(id)
  {
    setTasks(tasks.filter(task=>task.id!==id));
  }
   
   return (
    <div className="todo-list">
      {
        tasks.map(
          task=>(<ToDoList key={task.id} task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}/>))}
      <input type="text" id="input"value={text} size="40" placeholder="Enter the text"onChange={e=>setText(e.target.value)}></input>
      <button  id='butt' onClick={()=>addTask(text)}>Add task</button>
    </div>
   )
}

export default App;
