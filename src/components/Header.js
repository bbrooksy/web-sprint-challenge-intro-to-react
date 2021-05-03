import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledHeader = styled.h1`
    color: red;
    font-weight: bold;
    &:hover {
        color: aqua;
        background; white;
    }
`

export default function Header() {


    return (
        <StyledHeader className="Header">Star Wars Characters</StyledHeader>
    )
}