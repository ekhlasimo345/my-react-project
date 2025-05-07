import { useState } from "react"
function Counter ({title ="hooooo"}){
    
    const [count, setCount] = useState(0)

    return (
    <>
<h2>{title}
</h2>
<button onClick={e => setCount(count +1)}>+</button>
<span>{count}</span>
<button 
style={{cursor : count === 0 ? 'not-allowed' : 'pointer'}} 
className={count === 0 ? 'button-disabled':'button-active'}  disabled={count ===0}
onClick={e => setCount(count -1)}>-</button>
</>
)
}
export default Counter