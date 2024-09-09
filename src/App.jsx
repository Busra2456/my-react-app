
import './App.css'
import Counter from '../counter'
import Team from './team'
import Users from './users'


function App() {

  function handelClick(){
    alert('button Click')
  }
 

  const handelClick2 = () =>{
    alert('btn click')
  }

  const fiveCount = (num) =>{
    alert(num + 5) 
  } 
  

  return (
    <>
      
      <h1> React and Vite Project</h1>
     <Users></Users>
      <Team></Team>
      <Counter></Counter>
      

      <button onClick={handelClick}>Click Now</button>
   <button onClick={handelClick2}>click2</button>
<button onClick={() => {alert('button onClick')}}>Now</button>
<button onClick={() =>{fiveCount(3)}}>akon</button>
    </>
  )
}

export default App
