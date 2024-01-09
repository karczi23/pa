import React from 'react';
import { Container, TitleText, TopDownContainer } from '../structure/Container';
import './css/Timer.css';

const Timer = (props) => {
    return (
        <Container>
            <TopDownContainer height="100%">
                <TitleText>Symuluj następne 60 minut:</TitleText>
                <input className="timerSubmit" type="submit" value="Symuluj" />
            </TopDownContainer>
        </Container>
    );
};

export default Timer;
