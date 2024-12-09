import React, { useState } from 'react'
import styled from 'styled-components'
import ContextGame from '../../Context/Context'
import { useContext } from 'react'
function Userselect() {

    let arr = [1,2,3,4,5,6]
    
    const {userNum , setUserNum} = useContext(ContextGame)

    return (
    <>
        <SelectNumber>
            {
                arr.map((items , i) =>
                    <Box key={i}
                    onClick = {() => setUserNum(items)} 
                    isSelected = {(items === userNum)}
                    >{items}</Box>
                )               
            }
        </SelectNumber>
        
    </>
    )
}

export default Userselect

const SelectNumber = styled.div`
    width: 50%;
    height: 20%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
`
const Box = styled.div`
    text-align: center;
    width: 10%;
    padding: 1.5em 1.5em 1.5em 1.5em;
    font-size: 1.5em;
    font: bold;
    border: 2px solid black;
    border-radius: 1em;
    background-color: ${(props) => (props.isSelected) ? "black" : "white"};
    color: ${(props) => (props.isSelected) ? "white" : "black"};
`

