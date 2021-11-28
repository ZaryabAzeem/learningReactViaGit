import React from 'react';
import ToDo from "./ToDo";

const ToDoList = ({toDoList, handleToggle, handleFilter}) =>{
    console.log(toDoList)
    return (
        <div>
            <button style={{margin: '20px'}} onClick ={handleFilter}  > Clear Completed
            </button>
            {toDoList.map(todo =>{
                return(
                    <ToDo todo={todo} handleToggle= {handleToggle}  />
                )
            })}
            
            
        </div>
    )
}
 export default ToDoList;