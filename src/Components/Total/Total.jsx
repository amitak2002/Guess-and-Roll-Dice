import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import ContextGame from '../../Context/Context'


function Total() {

    const {total , toggleRules} = useContext(ContextGame)

  return (
    <>
        <TotalContainer>
            

            <div className='div1'>
                <h1>{total}</h1>
                <p>Total Score</p>
            </div>

            
        </TotalContainer>
    </>
  )
}

export default Total

const TotalContainer = styled.div`
    height: 20%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 8em;

    
    h1{
        font-size: xx-large;
        font: bold;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    p{
        font-size: x-large;
        font: bold;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    button {
        
        padding: 1em 1em 1em 1em;
        width: 100%;
        font-size: large;
        border-radius: 0.5em;
        &:hover {
            background-color: yellow;
            color: black;
            transition: 0.2s ease-in;
        }

    }
`