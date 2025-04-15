'use client'

type TodoItemProps = {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void;
}
export default function TodoItem({id, title, complete, toggleTodo}: TodoItemProps ) {
  return (
    <li className='flex items-center gap-1'>
        <input id={id} type='checkbox' className='cursor-pointer peer'
        defaultChecked={complete} onChange={e=>toggleTodo(e.target.id, e.target.checked)}/>
        <label htmlFor={id} className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'>{title}</label>
    </li>
  )
}
