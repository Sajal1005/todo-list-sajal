import React from 'react'

const style ={
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex `,
  text: `ml-4 font-medium text-xl cursor-pointer break-words text-ellipsis max-w-[140px] sm:max-w-[550px] md:max-w-[600px]`,
  textComplete: ` line-through ml-2 cursor-pointer break-words text-ellipsis max-w-[140px] sm:max-w-[550px] md:max-w-[600px]`,
  newb: `cursor-pointer flex items-center `

}

function Todo({todo, toggleComplete, deleteTodo}) {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <input onChange={() => toggleComplete(todo)} className='mb-6' type="checkbox" checked={todo.completed ? 'checked' : ''} />
            <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
        </div>
        <button onClick={() => deleteTodo(todo.id)} className={style.newb}><img src="https://cdn-icons-png.flaticon.com/512/2603/2603105.png" width='50'height='50' alt="" /></button>
    </li>
  )
}

export default Todo
