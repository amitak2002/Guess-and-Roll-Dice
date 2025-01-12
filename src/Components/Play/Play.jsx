import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Total from '../Total/Total'
import Userselect from '../User/Userselect'
import Dicenumber from '../Dicenumber/Dicenumber'
import Rulesbutton from '../RulesButton/Rulesbutton.jsx'
import Rules from '../Rules/Rules.jsx'
import ContextGame from '../../Context/Context.js'


function Play() {

  const {rules} = useContext(ContextGame)
  
  return rules ? (
    <Rules />
  ) : (
    <>
    <Rulesbutton />
      <PlayContainer>
      <Total />
      <Userselect />
      <Dicenumber />
    </PlayContainer>
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
    transition: 0.5s ease-in-out;

`