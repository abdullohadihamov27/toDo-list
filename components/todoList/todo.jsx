import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import "./todo.css";
import navigate from "navigate";

export default function todo() {

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });

    const [todo, setTodo] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function handleInput(e) {
        setTodo(e.target.value);
    }

    function handleEditInput(e) {
        setCurrentTodo({ ...currentTodo, text: e.target.value });
        console.log(currentTodo);
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        if (todo !== "") {
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    text: todo.trim(),
                    time: new Date().toLocaleTimeString()
                }
            ]);
        }

        setTodo("");
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleUpdateTodo(currentTodo.id, currentTodo);
    }

    function handleDelete(id) {
        const removeItem = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(removeItem);
    }

    function handleUpdateTodo(id, updatedTodo) {
        const updatedItem = todos.map((todo) => {
            return todo.id === id ? updatedTodo : todo;
        });
        setIsEditing(false);
        setTodos(updatedItem);
    }

    function handleEdit(todo) {
        setIsEditing(true);
        setCurrentTodo({ ...todo });
    }
    const user = JSON.parse(localStorage.getItem('user'))
    function navigateFunc() {
        navigate('/')
    }

    return (
        <>
             <div className="container">
                    <div className="App">
                        {isEditing ? (
                            <form onSubmit={handleSubmit}>
                                <div className="seven"><h1> Edit Todo</h1></div>
                                <input
                                    className="input-class"
                                    name="editTodo"
                                    type="text"
                                    placeholder="Edit todo"
                                    value={currentTodo.text}
                                    onChange={handleEditInput}
                                />
                                <button type="submit" className="update-class">Update</button>
                                <button onClick={() => setIsEditing(false)} className="cancel-class">Cancel</button>
                            </form> 
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <div className="seven"><h1>Welcome Add Todo </h1></div>
                                <input
                                    className="input-class"
                                    name="todo"
                                    type="text"
                                    placeholder="Create a new todo"
                                    value={todo}
                                    onChange={handleInput}
                                />
                                <button type="submit" className="add-class">Add</button>

                                <button onClick={navigateFunc} className="log-class" >Log out</button>
                                <hr />
                                <p className="note">Your Note:</p>
                                <p className="p-class">Delete | Edit</p>
                            </form>
                        )}

                        <ul className="todo-list">
                            {todos.length === 0 ? <li style={{ textAlign: "center", marginTop: "4pc" }}>No todos</li> : null}
                            {todos.map((todo) => (
                                <li key={todo.id}>
                                    <label htmlFor="">{todo.text}</label> <br />
                                    <span style={{ fontSize: "20px" }}>{todo.time}</span>
                                    <button onClick={() => handleEdit(todo)} className="edit-class"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <a href="/"><button  className="delete-class"><FontAwesomeIcon icon={faTrash} /></button></a>
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>

        </>
    );
}
