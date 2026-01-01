import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getHello } from './api'
import { getHello2 } from './api2'
import UserForm from './UserForm'

function App() {
  const [count, setCount] = useState(0)
  const[message, setMessage]=useState("");
  const[message2, setMessage2]=useState("");


  useEffect(()=>{
    getHello().then((data)=>setMessage(data)).catch(()=>setMessage("Backend not reachable"));
  },[]);


 useEffect(()=>{
    getHello2().then((data)=>setMessage2(data)).catch(()=>setMessage2("Backend not reachable"));
  },[]);


  return (
    <>

    <div>
      <h3>{message}</h3>
    </div>
    <div>  
        <h3>{message2}</h3>
    </div>
 
<h1>User Registration</h1> 
<UserForm />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
