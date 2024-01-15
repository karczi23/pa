import React, { useEffect, useState } from 'react';
import { Container, TitleText, TopDownContainer } from '../structure/Container';
import './css/Regulator.css';
import RangeInput from './RangeInput';
import { MainItemsProps } from '../../App.types';

const Regulator: React.FC<MainItemsProps> = (props) => {
    const [temperature, setTemperature] = useState('25');

    const { state, setState } = props;

    const submitButton = () => {
        setState({
            ...state,
            temperature: temperature,
        });
    };

    return (
        <Container>
            <TopDownContainer height="100%">
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
                <input type="submit" value="Ustaw" onClick={submitButton} />
            </TopDownContainer>
        </Container>
    );
};

export default Regulator;
