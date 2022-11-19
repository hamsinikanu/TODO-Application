import {useState}  from 'react';


const Todo = () => {
 const [number,setNumber] =   useState("");
 const [allToDos,setAllToDos] = useState([]);
 const [editIndex,setEditIndex] = useState(undefined);
 const handleInput = (e) =>{
setNumber(e.target.value);
console.log("input")
 }
 const handleButton = () =>{
  if(editIndex!=undefined){
   const newTodos =   allToDos.map((todo,index)=>{
        if(index==editIndex)
          return number
          return todo;
        
        
      })
      setAllToDos(newTodos);
      setNumber("");
  }
  else{
  if(number.length>0){
  const newTodo = [...allToDos,number];
   setAllToDos(newTodo)
   setNumber("");
  }
}
 }
 const handleEdit = (eindex) =>{
     setNumber ( allToDos[eindex]);
     setEditIndex(eindex);
 }
 const handleDelete = (eindex) =>{
  const newElements= allToDos.filter((todo,index) => index!=eindex);
  setAllToDos(newElements);
  
 }
   return(
        <div style={{margin:'10px',width:500}}>
            <h1>TODO Application</h1>
            <input type ="text" className="form-control" value ={number} onChange={handleInput}></input>
            <button  onClick={handleButton}className="btn btn-primary" style ={{padding:'10px',margin:'10px'}}>Submit </button>
           {allToDos.length>0? 
   (<table className="table">
  <thead>
    <tr>
      <th scope="col">S.I</th>
      <th scope="col">TaskName</th>
      <th scope="col">Actions</th>
    
    </tr>
  </thead>
  <tbody>
    {allToDos.map((todo,index)=>{
      return(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{todo}</td>
          <td>
            <button className='btn btn-secondary' onClick={()=>{handleEdit(index)}}>Edit</button>
            <button className='btn btn-secondary' onClick= {() =>{handleDelete(index)}}>delete</button>
          </td>
        </tr>
      )
    })}
   
    
  </tbody>
</table>):(<p>No Todos available</p>) }
            
        </div>
    )
}
export default Todo;