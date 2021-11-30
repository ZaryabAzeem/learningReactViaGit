import React, { useState, useEffect } from 'react';

import Header from './Header';
// import data from './data.json';
import ToDoList from './ToDoList';
import ToDoForms from './ToDoForms';


import './App.css';

function App() {
  console.log('hg')
 
  const [ toDoList, setToDoList]= useState([]);
  useEffect(() => {
    // let mounted = true;
      
    
      fetch('http://localhost:3333/saif')
      .then(async (data) => {
        // const file=await data.json()
        // if(mounted) {
        // setToDoList(await data.json())
        // // console.log(data.json());
        // }
        data=await data.json()
        if(data){
        setToDoList(data)}
        // data.json().then(list => {
        // if(mounted) {
        // setToDoList(list)
        // console.log(data);      
        // }
      // })
      })
      .catch((error)=>{
        console.log({error}) 

      })  
     
    // return () => mounted = false;
  }, [])


  const handleToggle=(id)=>{
    let mapped =toDoList.map(task => {
      return task.id === Number (id) ? {...task, complete: !task.complete}:{...task}
    })
    setToDoList(mapped);
  }

  const handleFilter = ()=>{
    let filtered=toDoList.filter(task=>{
      return !task.complete;
    })
    setToDoList(filtered)
  }

  const addtask = (userInput) => {
    let copy =  [...toDoList];
    copy = [...copy,{id: toDoList.length +1, task: userInput,complete: false}];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoForms addtask={addtask}/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      
    </div>
  );
}

export default App;
