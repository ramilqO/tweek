import React from 'react';
import styled from 'styled-components';

const StyledDay = styled.div`
    width: 14%;
    height: 100%;
    margin: 10px;
    
`
const StyledDayHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px;
`

const StyledHeaderDayOfWeek = styled.div`
    opacity: .2;
    font-weight: 500;
    font-size: 25px;
`

const StyledTask = styled.div`
    height: 50px;
    width: 100%;
    border: 1px solid black;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;

`

const Day = () => {
    return (
        <StyledDay>
            <StyledDayHeader>
                <h2>17.10</h2>
                    <StyledHeaderDayOfWeek>Пн</StyledHeaderDayOfWeek>
            </StyledDayHeader> 
            <hr/>

            <StyledTask />
            <StyledTask />
            <StyledTask />
            <StyledTask />
            <StyledTask />
            <StyledTask />
            <StyledTask />
            <StyledTask />

        </StyledDay>
    );
}

export default Day;
