
import styled from 'styled-components'
import { useContext } from 'react'
import React from 'react'
import ContextGame from '../../Context/Context'

function Home() {

    const {toggle} = useContext(ContextGame)

    return (
    <>
        <Container>
            <div className='divImg'>
                <img src = '/Images/dice.jpg'></img>
                <button onClick={toggle}>Lets Play Game</button>
            </div>
        </Container>
    </>
    
  )
}

export default Home

const Container = styled.div`
    
    min-height: 100vh;
    min-width: 100vw;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    .divImg{
        min-width:40%;
        min-height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2em;

    }

    img{
        width: 50%;
        height: 100%;
        
        border-radius:2em;
    }
    button {
        padding: 1.5em 1.5em;
        border-radius: 2em;
        background:black;
        color:white;
        font-size: large;
        &:hover{
            background-color: #c13f3f;
            color: black;
            transition: 0.3s ease-in;
        }
    }

`