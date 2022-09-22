import React,{useState,useEffect} from "react";
import Todo from "./Todo";
import {db} from './firebase'
import { query,collection, onSnapshot, QuerySnapshot, doc, updateDoc, addDoc, deleteDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#17171F]`,
  container: `bg-slate-100 max-w-[800px] w-full mx-auto my-16 rounded-md shadow-xl p-4`,
  heading: `text-center text-gray-700 p-2 mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl `,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl rounded-md`,
  button: `p-4 ml-2 `,
  count: `text-center p-2`
}

function App() {
  const[todos,settodos] = useState([])
  const[input,setInput] = useState('')
  
  //CREATE
  const createTodo = async (e) => {
    e.preventDefault(e)
    if(input === ''){
      alert('Please enter a valid Todo !')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    })
    setInput('')
  }

  //READ
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      settodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //UPDATE
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  //DELETE
  const deleteTodo = async (id) =>{
    await deleteDoc(doc(db, 'todos' , id))
  }

  return (
    <div className='my-auto h-screen w-screen p-4'>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={(e) =>setInput(e.target.value)} type="text" className={style.input} placeholder='Add Todo'/>
          <button className={style.button}><img height='50' width='50' src="https://cdn-icons-png.flaticon.com/128/1665/1665731.png" alt="" /></button>
        </form>
        <ul>
          {todos.map((todo,index)=> (
            <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
          ))}
        </ul>
        {todos.length<1 ? null : <p className={style.count}>{`You have ${todos.length} todos`}</p>
}
      </div>
    </div>
  );
}

export default App;
