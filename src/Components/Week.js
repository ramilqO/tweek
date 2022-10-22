import React from 'react';
import styled from 'styled-components';

import Day from './Day';

const StyledWeek = styled.div`
    height: 500px;
`

const StyledWeekContainer = styled.div`
    display: flex;
`

const Week = () => {
    return (
        <StyledWeek>

            <StyledWeekContainer>
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            </StyledWeekContainer>

        </StyledWeek>

    );
}

export default Week;
