import React, { useState } from 'react';
import { Container, TitleText, TopDownContainer } from '../structure/Container';
import './css/Regulator.css';

const Regulator = (props) => {
    const [temperature, setTemperature] = useState(0);

    return (
        <Container>
            <TopDownContainer allSpace>
                <TitleText>Oczekiwana temperatura wody:</TitleText>
                <TopDownContainer alignment="center">
                    <input
                        type="range"
                        name="temp"
                        id="temp"
                        min="15"
                        max="35"
                        step="0.1"
                        onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    />
                    <div>Ustawiona temperatura: {temperature}°C</div>
                </TopDownContainer>
                <input type="submit" value="Ustaw" />
            </TopDownContainer>
        </Container>
    );
};

export default Regulator;
