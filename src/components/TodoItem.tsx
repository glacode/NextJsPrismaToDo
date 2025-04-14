type TodoItemProps = {
    id: string;
    title: string;
}
export default function TodoItem({id, title}: TodoItemProps ) {
  return (
    <li className='flex items-center gap-1'>
        <input id={id} type='checkbox' className='cursor-pointer peer'/>
        <label htmlFor={id} className='peer-checked:line-through'>{title}</label>
    </li>
  )
}
