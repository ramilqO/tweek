import React from 'react';
import styled from 'styled-components';

import Day from './Day';

const StyledMain = styled.div`
    padding: 30px 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const StyledDay = styled.div`
    width: 23%;
    height: 100%;
`;
const StyledDayHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
`;
const StyledTask = styled.p`
    height: 50px;
    width: 100%;
    border: 1px solid black;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        background: aliceblue;
    }
`;

const Main = ({ date, monthNames, days }) => {
    return (
        <StyledMain>
            {days.map((day, index) => (
                <Day
                    monthNames={monthNames}
                    date={date}
                    day={day}
                    index={index}
                />
            ))}
            <StyledDay>
                <StyledDayHeader>
                    <h2>Другие задачи</h2>
                </StyledDayHeader>

                <input type='text' />
                <button>Создать задачу</button>
                <StyledTask />
                <StyledTask />
                <StyledTask />
            </StyledDay>
        </StyledMain>
    );
};

export default Main;
