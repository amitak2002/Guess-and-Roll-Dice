import React, { useContext } from 'react'
import styled from 'styled-components'
import ContextGame from '../../Context/Context'

function Rules() {

  const {toggleRules} = useContext(ContextGame)

  return (
    <>
        <RulesContainer>
            <div class='div1'>
                <div class='div1-h'>
                  <h2 class='heading'>Step-1 : first Select a Random Number</h2>
                  <h2 class='heading'>Step-2 : Roled dice after rolling a number comes</h2>
                  <h2 class='heading'>Step-3 : If Your Selected Number and Dice Number is Same You Got Plus Point Equal to Selected Number if Number is Not Same Then you got negative Point</h2>
                </div>

            </div>
            <div class='div2'>
              <button onClick={() => toggleRules()}>
                Back
              </button>
            </div>
        </RulesContainer>
    </>
  )
}

export default Rules

const RulesContainer = styled.div`
    top:10%;
    left:10%;
    
    position: fixed;
    width: 80%;
    height: 60%;
    
    border: 2px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 1s ease-in;

    .div1 {
      width: 60%;
      height: 100%;
     
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 2em;
    }

    .div1 .div1-h .heading {
      font-size: xx-large;
      margin-bottom: 1em;
      font-style: italic;
      line-height: 1.5em;
      text-transform: capitalize;
    }

    .div2{
      width: 20%;
      
      margin-right: 5em;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .div2 button {
      padding: 0.5em 1.5em;
      font-size: xx-large;
      font: bolder;
      border-radius:1em;
      cursor: pointer;
      transition: 0.5s ease-in-out;
    }

    .div2 button:hover {
      background-color: red;
      color: white;
      border: 1px solid white;
    }

`