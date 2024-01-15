import React from 'react';
import { TopDownContainer } from '../structure/Container';

const MonthSelect = (props) => {
    return (
        <TopDownContainer>
            <div>Miesiąc:</div>
            <select
                className="month"
                onChange={(e) => {
                    props.setState(e.target.value);
                }}>
                <option value="1">styczeń</option>
                <option value="2">luty</option>
                <option value="3">marzec</option>
                <option value="4">kwiecień</option>
                <option value="5">maj</option>
                <option value="6">czerwiec</option>
                <option value="7">lipiec</option>
                <option value="8">sierpień</option>
                <option value="9">wrzesień</option>
                <option value="10">październik</option>
                <option value="11">listopad</option>
                <option value="12">grudzień</option>
            </select>
        </TopDownContainer>
    );
};

export default MonthSelect;
