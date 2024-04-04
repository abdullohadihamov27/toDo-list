import './App.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoList() {
  const [todo, setTodo] = useState([])
  const [inputSubmit, setInputSubmit] = useState('')

  function handleDelete(id) {
    const newTodos = [...todo]
    newTodos.splice(id, 1)
    setTodo(newTodos)
  }

  function editItem(id) {
    const todos = [...todo];
    const editedTodo = prompt('Edit the todo:');
    if (editedTodo !== 0 && editedTodo.trim() !== '') {
      let updatedTodos = [...todos]
      updatedTodos[id] = editedTodo
      handleSubmit ({
        todos: updatedTodos,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTodo([...todo, inputSubmit])
    setInputSubmit('')
    console.log(e);
  }

  function handleChange(e) {
    setInputSubmit(e.target.value)
  }
  return (
    <div className='main-div'>
      <div class="seven">
        <h1>Welcome Todo List</h1>
      </div>
      <form className='form-class'>
        <input type='text' value={inputSubmit} className='input-class' onChange={handleChange} placeholder='Write your note:' />
        <button onClick={handleSubmit} className='add-class'>Add Todo</button>
      </form>

      <ul className='main-ul'>
        <li className='note'>Notes:</li>
        <li className='desc'>Ma'lumotni <br /> o'chirish:</li>
      </ul>

      {
        todo == 0 ? <h1 className='no-desc'>No information</h1> : <ol>
          {todo.map((todo, id) => (
            <li key={id} className='todo-class'>
              {todo}
              <button onClick={() => handleDelete(id)} className='delete-class'> <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} /> Delete</button>
              <button onClick={() => editItem(id)} >
                Edit
              </button>
            </li>
          ))}
        </ol>
      }
    </div>
  )
}

export default TodoList;
