import { useState ,useRef,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Navbar from './components/navbar'
import './App.css'

function App() {


  // // event handling in react
  // const [count, setCount] = useState(0)
  // const [form,setform] =useState({email:"",phone:""})
  // const handlechange = (e)=>{
  //  setform({...form,[e.target.name]:e.target.value})
  //  console.log(form)
  // }







//   useeffect
//   const [count, setCount] = useState(0)
//   const [color, setColor] = useState(0)

// useEffect(() => {
//   alert("count was changed")
//   setColor(color+1)
// }, [count])






//useref

// const [count, setCount] = useState(0)
// const btnRef =useRef();

// useEffect(() => {
//   console.log("first rendering")
//   btnRef.current.style.backgroundColor = "red"
// }, [])


// const a = useRef(0)

//   useEffect(() => {
//     a.current = a.current + 1
//     console.log(`rerendering and the value of a is ${a.current}..`) 
//   });







// conditional rendering & rendering lists such as maping & prop drilling
// const [count, setCount] = useState(0)
//   const [showbtn, setshowbtn] = useState(false)
//   const [todos, setTodos] = useState([
//     {
//       title: "Hey",
//       desc: "I am a good todo"
//     },
//     {
//       title: "Hey Another todo",
//       desc: "I am a good todo too"
//     },
//     {
//       title: "Hey I am grocery todo",
//       desc: "I am a good todo but I am grocery todo"
//     },

//   ])

  // const Todo = ({todo}) => {
  //   return (<>
  //   <div className="m-4 border border-1 border-purple-400">

  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>
  //   </div>
  //     </>)
  // }




  return (
    <>
      
      {/* // event handling in react
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       <input type='text' name="email" value={form.email?form.email:""} onChange={handlechange} />
       <input type='text' name="phone" value={form.phone?form.phone:""} onChange={handlechange} />
      </div> */}




{/* 
       useeffect
     <Navbar  color={"navy" + "blue" + color }        />
     <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

      



{/* useref
<button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
     








 {/* //conditional rendering & rendering lists such as maping & prop drilling

     {todos.map(todo => {
  // return <Todo key={todo.title} todo={todo}/>
  return <div key={todo.title} >

    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.desc}</div>
  </div>
})}

{showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}
<div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn
        </button>
        
      </div>
 */}






    </>
  )
}

export default App
