import React from 'react';

interface RangeInputProps {
    className: string;
    min: number;
    max: number;
    step: number;
    setState: Function;
    text: string;
    variable: string;
}

const RangeInput: React.FC<RangeInputProps> = (props) => {
    return (
        <div>
            <input
                type="range"
                className={props.className}
                min={props.min}
                max={props.max}
                step={props.step}
                value={props.variable}
                onChange={(e) => props.setState(e.target.value)}
            />
            <div>{props.text.replace('#VALUE#', props.variable)}</div>
        </div>
    );
};

export default RangeInput;
