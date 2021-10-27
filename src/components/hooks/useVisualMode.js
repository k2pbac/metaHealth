import { useState } from "react"

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);


  // Tranistion Between Modes Function

    function transition(newState, replace= false) {
      if (replace === true){
        setHistory(prev => [...prev.slice(0, prev.length - 1), newState]);
      }else{
        setHistory(prev => [...prev, newState]);
      }
      setMode(newState)
    }

    // Go To The Previous Mode Function (back)
    
    function back() {
      if (history.length - 1 >= 1){   
      setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
      }
      setMode(history[history.length - 2]);
      }
 
    
 return {mode, transition, back}
}

