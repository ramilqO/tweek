import React from 'react';
import styled from 'styled-components';

import Week from './Week';

const StyledMain = styled.div`
    padding: 30px 5px;
    border: 1px solid black;
    height: 100vh;
`
const StyledWeeksContainer = styled.div`
    padding: 30px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const Main = () => {
    return (
        <StyledMain>
            <StyledWeeksContainer>
                <Week />
                <Week />
                <Week />
                <Week />
                <Week />
                
                <Week />
                <Week />


            </StyledWeeksContainer>
        </StyledMain>
    );
}

export default Main;
