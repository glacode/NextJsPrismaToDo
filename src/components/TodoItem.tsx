'use client'
import { FaTrashAlt } from 'react-icons/fa';

type TodoItemProps = {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void;
    deleteTodo: (id: string) => void;
}
export default function TodoItem({id, title, complete, toggleTodo, deleteTodo}: TodoItemProps ) {
  return (
    <li className='flex items-center gap-1'>
        <input id={id} type='checkbox' className='cursor-pointer peer'
        defaultChecked={complete} onChange={e=>toggleTodo(e.target.id, e.target.checked)}/>
        <label htmlFor={id} className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'>{title}</label>
        <button onClick={() => deleteTodo(id)} className='text-red-500 hover:text-red-700 cursor-pointer'>
        <FaTrashAlt />
        <span className='sr-only'>Delete</span> {/* For accessibility */}
      </button>
    </li>
  )
}
