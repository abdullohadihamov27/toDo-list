import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoList from "./components/todoList/todo.jsx"
import ProtectedRouter from "./components/todoList/protectedRouter.jsx"
import Login from "./components/login/login.jsx";
import SingUp from "./components/singup/singUp.jsx"
import React from "react";
import './App.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/singup" element={<SingUp />} />
          <Route element={<ProtectedRouter />}>
            <Route path="/todolist" element={<ToDoList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
