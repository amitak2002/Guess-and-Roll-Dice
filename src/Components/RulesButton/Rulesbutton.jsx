import React, { useContext } from 'react'
import styled from 'styled-components'
import ContextGame from '../../Context/Context'

function Rulesbutton() {

    const {toggleRules} = useContext(ContextGame)

  return (
    <RulesButtonMain1 onClick={toggleRules}>
        Rules
    </RulesButtonMain1> 
)
}

export default Rulesbutton

const RulesButtonMain1 = styled.button`
    width: 10%;
    min-height:8vh ;
    background-color:black;
    font-size: x-large;
    border-radius: 0.5em;
    color: white;

    &:hover{
        background-color:orange;
        transition: 3ms ease-in-out;
        color: black;
    }

`