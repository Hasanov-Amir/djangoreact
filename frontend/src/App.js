import React, { useEffect, useState} from 'react'
import {Context} from "./context";
import TodoList from './TodoList'
import ReactDOM from 'react-dom'


export default function App() {
  let [todos, setTodos] = useState([])
    let [title, setTitle] = useState('')
    let [person, setPerson] = useState('Amir&Vaga')

    function handlerEnter(e) {
      if (e.keyCode === 13) {
          if (title !== '') {
              let newTodo = {
                  id: new Date().getTime(),
                  title: title,
                  completed: false,
                  person: person
              }
              setTodos([...todos, newTodo])
              setTitle('')
              console.log(newTodo)
          }
      }
    }

    useEffect(()=>{
        let row = localStorage.getItem('todos')
        if (row) {
            setTodos(JSON.parse(row))
        }
    }, [])

    useEffect(()=> {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    useEffect(()=>{
        let row = localStorage.getItem('person')
        if (row) {
            setPerson(JSON.parse(row))
        }
    }, [])

    useEffect(()=> {
        localStorage.setItem('person', JSON.stringify(person))
    },[person])




    const removeTodo = (id) => {
      setTodos(todos.filter(todo=>{
            return todo.id !== id
          }
      ))
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo=> {
          if (todo.id === id) {
              todo.completed = !todo.completed

          }
            return todo
        }))
        console.log(todos)
    }

    function handlerPerson(e) {
        setPerson(e.target.value)
    }


    return (
        <Context.Provider value={{
            removeTodo, toggleTodo
        }}>
          <div className="container">
            <h1>Todo app</h1>

              <div className="input-field">
                <input type="text" value={title} onChange={e=> setTitle(e.target.value)} onKeyDown={handlerEnter} />
                <label>Todo name</label>
                  <select name='raiden' value={person} onChange={handlerPerson}>
                      <option value="Amir">Amir</option>
                      <option value="Vaga">Vaga</option>
                      <option value="Amir&Vaga">Amir&Vaga</option>
                  </select>
              </div>

              <TodoList todos={todos}/>
          </div>
        </Context.Provider>
    );

}

ReactDOM.render(<App/>, document.getElementById('root'))