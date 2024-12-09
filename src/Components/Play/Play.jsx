import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Total from '../Total/Total'
import Userselect from '../User/Userselect'
import Dicenumber from '../Dicenumber/Dicenumber'
import Rulesbutton from '../RulesButton/Rulesbutton.jsx'

function Play() {
  
  return (
    <>
        <PlayContainer>
            <Rulesbutton />
            <Total />
            <Userselect/>
        </PlayContainer>
        <Dicenumber/>
    </>
  )
}

export default Play

const PlayContainer = styled.div`
    min-height: 20vh;
    min-width: 50vw;
    
    display: flex;
    justify-content: center;
    align-items: center;

`