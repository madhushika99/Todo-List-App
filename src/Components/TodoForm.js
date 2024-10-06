import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) { // Make sure the input is not just whitespace
      addTodo(value);  // Use the addTodo function passed as a prop
      setValue('');    // Clear the input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
      <input type='text' value={value}
        onChange={(e) => setValue(e.target.value)}
        className='todo-input'
        placeholder='What is the task today?'
      />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  );
};
