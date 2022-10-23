import React from 'react';
import styled from 'styled-components';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const StyledNavbar = styled.div`
    width: 100%;
    height: 100%;
`;

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

const StyledDataHeader = styled.div`
    font-size: 36px;
    color: white;
    font-weight: 900;
    color: black;
    cursor: pointer;
`;

const StyledNavContainer = styled.div`
    display: flex;
`;

const Navbar = ({ monthNames, date }) => {
    return (
        <StyledNavbar>
            <StyledContainer>
                <StyledDataHeader>
                    <p>
                        {monthNames[date.getMonth()]} {date.getFullYear()}
                    </p>
                </StyledDataHeader>

                <StyledNavContainer>
                    <AiFillCaretLeft />
                    <AiFillCaretRight />
                </StyledNavContainer>
            </StyledContainer>
        </StyledNavbar>
    );
};

export default Navbar;
