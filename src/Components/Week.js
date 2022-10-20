import React from 'react';
import styled from 'styled-components';

const StyledWeek = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid black;

`
const StyledDayTop = styled.div`
    display: flex;
`

const StyledWeekDay = styled.h2`
    color: black;
`

const StyledBoldHr = styled.hr`
    font-weight: bold;
`

const StyledCol = styled.div`
    height: 30px;
`

const Week = (props) => {
    return (
        <StyledWeek>

            <StyledDayTop>
            <h1>XX.XX</h1>
            <StyledWeekDay>ДеньНедели</StyledWeekDay>

            <StyledBoldHr />
            </StyledDayTop>
            <StyledCol>
                <hr />
            </StyledCol>
            <StyledCol>
                <hr />
            </StyledCol>
            <StyledCol>
                <hr />
            </StyledCol>
            <StyledCol>
                <hr />
            </StyledCol>
            <StyledCol>
                <hr />
            </StyledCol>
            <StyledCol>
                <hr />
            </StyledCol>
            <StyledCol>
                <hr />
            </StyledCol>
            <StyledCol>
                <hr />
            </StyledCol>
            <StyledCol>
                <hr />
            </StyledCol>
            <StyledCol>
                <hr />
            </StyledCol>


        </StyledWeek>
    );
}

export default Week;
