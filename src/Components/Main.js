import React from 'react';
import styled from 'styled-components';

import Week from './Week';

const StyledMain = styled.div`
    padding: 30px 5px;
`


const Main = () => {
    return (
        <StyledMain>
            <Week />
        </StyledMain>
    );
}

export default Main;
