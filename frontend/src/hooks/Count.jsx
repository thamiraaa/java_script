import React from "react";
import {Button} from "@/components/ui/button";
import {useEffect,useState} from "react";
const Count = () => { 
  const [count,setCount] = useState(0);
  const [isVisible,setIsVisible] = useState(true);
  useEffect(() => {
    console.log("From useEffect");
  }, [])
return(
  <div>
    <h3>Count: {count}</h3>
    <Button onClick={() => setCount(count + 1)}>Increase</Button>
    <Button variant="destructive" onClick={() => setCount(0)}>reset</Button>
  <br />
  <Button onClick={() => setIsVisible(!isVisible)}>Toggle</Button>  
    { isVisible && (
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Vel ducimus quaerat, adipisci dolore nulla cum nam exercitationem 
        quisquam accusantium neque totam quam harum corporis incidunt distinctio obcaecati,
         fuga ut consectetur!</p>
    )}
  
  </div>
)
}
export default Count


//import React from 'react'
// import {Button} from '@/components/ui/button'
// const Count = () => {
//     let count=0;
//     const increase = () => 
//       {
//       count++;
//       console.log(count);
//     }
    
//   return (
//     <div>
//         <h2>Count: {count}</h2>
//         <button onclick={increase}>Increase</button>

//     </div>
//   )
// }

// export default Count