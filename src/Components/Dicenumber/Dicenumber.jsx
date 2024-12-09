import React, { useState } from 'react'
import styled from 'styled-components'
import ContextGame from '../../Context/Context'
import { useContext } from 'react'

function Dicenumber() {

    const [diceNumber , setDiceNumber] = useState(1)

    const {setDiceNum , toggle , setTotal} = useContext(ContextGame)

    const cancel = () => {
        setTotal(0)
    }    

    const randomNumber = () => {
        let val = Math.floor(Math.random()*6)+1
        setDiceNumber(val)
        setDiceNum(val) 
    }

  return (
    <>
        <Dicecontainer>

            <img src = {`Images/Dice${diceNumber}.png`}></img>
            <div className='button'>
                <button onClick={randomNumber}>Click To Roll Dice</button>
                <button onClick={toggle}>Back</button>
                <button onClick={cancel}>Cancel</button>

                
            </div>
            
        </Dicecontainer>
        

    </>
  )
}

export default Dicenumber

const Dicecontainer = styled.div`
    
        width: 100%;
        min-height:70vh;
        border: 2px solid black;
        display:grid;
        justify-content: center;
        align-items: center;

        img{
            margin-top: 20%;
            min-width: 70%;
            min-height: 70%;
            border: 2px solid black;
            border-radius: 2em;
        }

        .button {
            margin-top: 2em;
            
            margin-bottom: 80%;
            font-size: x-large;
            gap:0.5em;
            display: grid;
            align-items: center;
            justify-content: center;
            
        }
        button{
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-size: large;
            padding: 0.5em 0.5em 0.5em 0.5em ;
            border-radius: 2em;
            &:hover{
                background-color: black;
                color: white;
                transition: 0.3s ease-out;
            }
        }
`
