import React from 'react';
import styled from 'styled-components/macro';

import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';

const StyledDay = styled.div`
    position: relative;
    width: 24%;
    border-radius: 10px;
    height: min-content;
    max-height: 48%;
    background-color: #fff;
    padding: 10px;
    overflow-y: auto;
`;

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
`;

const StyledHeaderDay = styled.p`
    font-weight: 500;
    font-size: 18px;
`;
const StyledHeaderDayOfWeek = styled(StyledHeaderDay)`
    opacity: 0.5;
`;
const StyledTaskList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const StyledTask = styled.li`
    padding: 5px;
    width: 100%;
    transition: 0.3s;
    cursor: pointer;
    border-bottom: 1px solid darkcyan;
    margin-bottom: 5px;
    &:hover {
        background-color: darkcyan;
    }
`;

const StyledForm = styled.form`
    display: flex;
`;

const Day = ({ date, monthNames, days, allTasks, indexItem }) => {
    let isCurrentDay = (task) => {
        return (
            task.dateObj.year === date.getFullYear() &&
            task.dateObj.day === date.getDate()
        );
    };
    return (
        <StyledDay>
            <StyledHeader>
                {date ? (
                    <>
                        <StyledHeaderDay>
                            {monthNames[date.getMonth()]} {date.getDate()}
                        </StyledHeaderDay>

                        <StyledHeaderDayOfWeek>
                            {/* Альтернативный вариант */}
                            {/* {new Intl.DateTimeFormat('ru-RU', {
                        weekday: 'long',
                    }).format(date)} */}
                            {days[date.getDay()]}
                        </StyledHeaderDayOfWeek>
                    </>
                ) : (
                    <StyledHeaderDay>Другие задачи</StyledHeaderDay>
                )}
            </StyledHeader>

            <StyledForm>
                <input type='text' placeholder='' />
                <AiFillCaretDown />
                <AiFillCheckCircle />
            </StyledForm>

            <StyledTaskList>
                {allTasks &&
                    allTasks.map((task, index) => {
                        if (isCurrentDay(task)) {
                            return task.tasks.map((taskItem) => {
                                return (
                                    <StyledTask key={taskItem.text}>
                                        {taskItem.text}
                                    </StyledTask>
                                );
                            });
                        }
                    })}
            </StyledTaskList>
        </StyledDay>
    );
};

export default Day;
