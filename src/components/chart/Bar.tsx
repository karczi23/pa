import React, { useEffect, useState } from 'react';
import { SetStateAction } from 'react';

interface BarProps {
    color?: string;
    temperature: number;
    setTemperature: React.Dispatch<SetStateAction<number>>;
    setPosition: React.Dispatch<SetStateAction<number>>;
    position: number;
}

const Bar: React.FC<BarProps> = (props) => {
    const [isHovered, setHovered] = useState(false);

    useEffect(() => {
        if (isHovered) {
            props.setTemperature(props.temperature);
            props.setPosition(59 - props.position);
        }
    }, [isHovered]);

    const enableHover = () => setHovered(() => true);

    const disableHover = () => setHovered(() => false);

    return (
        <div
            className={'bar'}
            style={{ backgroundColor: props.color || 'grey' }}
            onMouseEnter={enableHover}
            onMouseLeave={disableHover}>
            {' '}
        </div>
    );
};

export default Bar;
