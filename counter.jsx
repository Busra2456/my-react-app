import { useState } from "react"

export default function counter(){
      const [count,setCount] = useState(0);

      const handelAdd = () =>{
const newCount = count + 1;
setCount(newCount)
      }

      const handelReduce = () =>{
            const newCount = count - 1;
            setCount(newCount)
      }
      
      return(
            <div style={{border:'2px solid yellow'}}>
                  <h1>
                        counter: {count}
                  </h1>
                  <button onClick={handelAdd}>Add</button>

                  <button onClick={handelReduce}>Reduce</button>
            </div>
      )
}