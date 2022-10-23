import React from 'react';
import styled from 'styled-components';

import Day from './Day';

const StyledWeek = styled.div`
    height: 500px;
    display: flex;
`

const Week = () => {
    return (
        <StyledWeek>
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
        </StyledWeek>

    );
}

export default Week;
