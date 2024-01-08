import React, { useState } from 'react';
import { Container, TitleText, TopDownContainer } from '../structure/Container';
import './css/Regulator.css';
import RangeInput from './RangeInput';

const Regulator = (props) => {
    const [temperature, setTemperature] = useState('25');

    return (
        <Container>
            <TopDownContainer allSpace>
                <TitleText>Oczekiwana temperatura wody:</TitleText>
                <TopDownContainer alignment="center">
                    <RangeInput
                        className={'temp'}
                        min={15}
                        max={35}
                        step={0.1}
                        setState={setTemperature}
                        text="Ustawiona temperatura: #VALUE#°C"
                        variable={temperature}
                    />
                </TopDownContainer>
                <input type="submit" value="Ustaw" />
            </TopDownContainer>
        </Container>
    );
};

export default Regulator;
