import React from 'react';
import styled from 'styled-components';

import { AiFillCaretDown } from 'react-icons/ai';

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

const StyledHeaderDayOfWeek = styled.div`
    opacity: 0.2;
    font-weight: 500;
    font-size: 25px;
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

const StyledForm = styled.form`
    display: flex;
`

const Day = ({ date, monthNames, days, index }) => {
    const tasks = [
        'побрить голову',
        'посмотреть вокруг',
        'написать цикл задач',
    ];

    return (
        <StyledDay>
            <StyledDayHeader>
                
                    <h3>{monthNames[date.getMonth()]} {date.getDate()}</h3>

                <StyledHeaderDayOfWeek>
                    {/* Альтернативный вариант */}
                    {/* {new Intl.DateTimeFormat('ru-RU', {
                        weekday: 'long',
                    }).format(date)} */}
                    {days[date.getDay()]}
                </StyledHeaderDayOfWeek>

            </StyledDayHeader>
            <hr />

            <StyledForm>
                <input type='text' placeholder='' />
                <button>Создать задачу</button>
                <div><AiFillCaretDown /></div>
            </StyledForm>

            {tasks.map((task, index) => {
                return <StyledTask key={index}>{task}</StyledTask>;
            })}
        </StyledDay>
    );
};

export default Day;
