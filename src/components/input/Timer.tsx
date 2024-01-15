import React from 'react';
import { Container, TitleText, TopDownContainer } from '../structure/Container';
import './css/Timer.css';
import { MainItemsProps } from '../../App.types';

const Timer: React.FC<MainItemsProps> = (props) => {
    const { state, setState, calculate } = props;

    const disabled = Object.keys(state).length !== 6;

    return (
        <Container>
            <TopDownContainer height="100%">
                <TitleText>Symuluj następne 60 minut:</TitleText>
                <input
                    className="timerSubmit"
                    type="submit"
                    value="Symuluj"
                    disabled={disabled}
                    onClick={() => setState(calculate(state))}
                />
            </TopDownContainer>
        </Container>
    );
};

export default Timer;
