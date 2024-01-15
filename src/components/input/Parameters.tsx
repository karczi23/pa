import React, { useEffect, useState } from 'react';
import { Container, TitleText, TopDownContainer } from '../structure/Container';
import RangeInput from './RangeInput';
import MonthSelect from './MonthSelect';
import { MainItemsProps } from '../../App.types';

const Parameters: React.FC<MainItemsProps> = (props) => {
    const [capacity, setCapacity] = useState('5000');
    const [area, setArea] = useState('5');
    const [wind, setWind] = useState('3');
    const [month, setMonth] = useState('1');

    const { state, setState } = props;

    const submitButton = () => {
        setState({
            ...state,
            wind: parseFloat(wind),
            area: parseFloat(area),
            capacity: parseFloat(capacity),
            month: parseInt(month),
        });
    };

    return (
        <Container>
            <TopDownContainer height="100%" style={{ width: '60%' }}>
                <TitleText>Parametry</TitleText>
                <TopDownContainer alignment="space-around" height="80%">
                    <MonthSelect setState={setMonth} variable={state} />
                    <RangeInput
                        className={'capacity param'}
                        min={1000}
                        max={50000}
                        step={100}
                        setState={setCapacity}
                        text={'Pojemność basenu: #VALUE# litrów'}
                        variable={capacity}
                    />
                    <RangeInput
                        className={'area param'}
                        min={1}
                        max={50}
                        step={0.5}
                        setState={setArea}
                        text={'Powierzchnia basenu: #VALUE#m^2'}
                        variable={area}
                    />
                    <RangeInput
                        className={'wind param'}
                        min={0}
                        max={5}
                        step={0.1}
                        setState={setWind}
                        text={'Średnia prędkość wiatru: #VALUE#m/s'}
                        variable={wind}
                    />
                    <input type="submit" value="Ustaw" onClick={submitButton} />
                </TopDownContainer>
            </TopDownContainer>
        </Container>
    );
};

export default Parameters;
