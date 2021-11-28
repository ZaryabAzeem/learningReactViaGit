import React, {useState} from 'react';

const ToDoForms = ({addtask}) => {
    const [ userInput , setUserInput] = useState('');

    const handleChange=(e) => {
        setUserInput(e.currentTarget.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addtask(userInput);
        setUserInput('');        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            value= {userInput} 
            type='text' 
            onChange={handleChange} 
            placeholder='Enter text...' 
            />
            <button>
                Submit
            </button>
        </form>
    )
}

export default ToDoForms;