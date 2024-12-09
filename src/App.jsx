import { useEffect, useState } from 'react'
import { ContextGameProvider } from './Context/Context'
import Play from './Components/Play/Play'
import Home from './Components/Home/Home'
import Rules from './Components/Rules/Rules.jsx'

function App() {

  const [play , setPlay] = useState(false)
  const [rules , setRules] = useState(false)

  const toggle = () => {
    setPlay((play) => !play)
  }

  const toggleRules = () => {
    setRules((rules) => !rules)
  }

  const [userNum , setUserNum] = useState(undefined)
  const [diceNum , setDiceNum] = useState(1)
  const [total , setTotal] = useState(0)
  
  useEffect(() => {
    if (userNum) {
      if(userNum == diceNum) {
        setTotal(total + diceNum)
      } else {
        setTotal(total - diceNum)
      }
      setUserNum(undefined)
    }
    
  } , [diceNum])

  
  return (
    <ContextGameProvider value = {{toggle , userNum , diceNum  , total , setUserNum , setDiceNum , setTotal , toggleRules}}>
    
      {/* {(play) ? <Play/> : <Home/>} */}
      {(play) ? <Play/> : (<Home/>)}
      {(rules) ? <Rules/> : null}
      

      
      
    </ContextGameProvider>
  )
}

export default App
