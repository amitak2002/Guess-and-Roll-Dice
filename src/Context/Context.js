import React, { useState } from 'react'
import { createContext } from 'react'

export const ContextGame = createContext(
    {
        toggle : () => {},
        toggleRules : () => {},
        userNum : undefined,
        diceNum : 1,
        total : 0,
        rules : false
    }
)

export default ContextGame

export const ContextGameProvider = ContextGame.Provider

