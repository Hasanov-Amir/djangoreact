import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
    let does = []
    let done = []

    return (
      <div>
          {props.todos.map((item, index) => {
              if (item.completed === false) {
                  does.push(item)
              } else {
                  done.push(item)
              }
          })}
        <ul className={'do'}>
            <h2>Do</h2>
            {does.map((item, index) => <TodoItem
                key={item.id}
                id={item.id}
                item={item}
                index={index}
                delTodo={props.delTodo}
                doneHandler={props.doneHandler}
                completed={props.todos.completed}
            />)}
        </ul>
        <ul className={'done'}>
            <h2>Done</h2>
            {done.map((item, index) => <TodoItem
                key={item.id}
                id={item.id}
                item={item}
                index={index}
                delTodo={props.delTodo}
                doneHandler={props.doneHandler}
                completed={props.todos.completed}
            />)}
        </ul>
      </div>

    )
}