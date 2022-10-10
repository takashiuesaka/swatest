import { useEffect, useState } from "react";

const App = () => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      setCount(10)
   }, [])

   const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      setCount(prev => prev + 1)
   }

   return (
      <>
         <div>count: {count}</div>
         <button onClick={onClickHandler}>Click</button>
      </>
   );
}

export default App