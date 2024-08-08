
import React, { useState } from 'react';

const TodoApp = () => {
 
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Todo App', completed: false }
    ]);

    const [inputValue, setInputValue] = useState('');

  
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([
                ...todos,
                { id: Date.now(), text: inputValue, completed: false }
            ]);
            setInputValue('');
        }
    };

   
    const handleToggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    
    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <div>
                            <strong>ID:</strong> {todo.id}
                        </div>
                        <div>
                            <strong>Task:</strong> {todo.text}
                        </div>
                        <div>
                            <strong>Status:</strong> {todo.completed ? 'Completed' : 'Not Completed'}
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggleTodo(todo.id)}
                            />
                            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
