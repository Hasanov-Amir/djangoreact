import React, {useContext}from 'react'
import {Context} from "./context";
export default function TodoItem(props) {
    const {removeTodo, toggleTodo} = useContext(Context)

    const cls = ['todo']
    if (props.item.completed) {
        cls.push('completed')
    }

    return (
        <li className={cls.join(' ') }>
            <label id={props.id} >
                <input
                    type="checkbox"
                    defaultChecked={props.item.completed}
                    onClick={() => toggleTodo(props.id)}
                />
                <span>{props.item.title}</span>
               <div className={'person-and-trash'}>
                   <strong>{props.item.person}</strong>
                   <i className="material-icons red-text"
                      onClick={()=> removeTodo(props.id)}
                   >
                       delete

                   </i>
               </div>

            </label>
        </li>
    )
}