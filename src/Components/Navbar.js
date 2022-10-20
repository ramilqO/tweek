import React from 'react';
import styled from 'styled-components';

import {AiFillCaretLeft} from "react-icons/ai";
import {AiFillCaretRight} from "react-icons/ai";

const StyledNavbar = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
`

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`

const StyledDataHeader = styled.div`
    font-size: 36px;
    color: white;
    font-weight: 900;
    color: black;

    &:hover {
        cursor: pointer;
    }
`

// const StyledNavButton = styled.button`
//     width: 42px;
//     height: 42px;
//     background: black;
//     color: white;

//     border-radius: 50%;
//     border: 0;

//     margin: 10px;
// `

const StyledNavContainer = styled.div`
    display: flex;
`

const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledContainer>
                <StyledDataHeader>Месяц + Год</StyledDataHeader>

                <StyledNavContainer>

                {/* <StyledNavButton><AiFillCaretLeft /></StyledNavButton>
                <StyledNavButton>+</StyledNavButton> */}

                <AiFillCaretLeft />
                <AiFillCaretRight />
                

                </StyledNavContainer>
                
            </StyledContainer>
        </StyledNavbar>
    );
}

export default Navbar;
