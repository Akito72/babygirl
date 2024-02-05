import React, { useState } from "react"
interface item{
    id:number;
    text:string;
    completed:boolean;
}

const Todolist : React.FC = () => {
    const[todos,setTodos] = useState<item[]>([
    ])
    const [input,setInput] = useState<string>("");

    const handleToggle=(id:number)=>{
        setTodos(
            todos.map((todo)=>{
                if(todo.id===id){
                    return{...todo,completed:!todo.completed};
                }
                return todo;
            }))
    };
    const handleClick=()=>{
        const newTodos:item ={id: Date.now(),text: input , completed: false};
        setTodos([...todos,newTodos]);
    }
  return (
<div className="maincontainer">
        <h1>Todo list</h1>
        <ul>
           {
            todos.map((todo)=>(
<li key={todo.id} onClick={()=>handleToggle(todo.id)} style={{"textDecoration":todo.completed?"line-through":"none"}} >
    {todo.text}
</li>
            ))}
        </ul>
        <input type="text" placeholder="Add your todo" onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}




export default Todolist