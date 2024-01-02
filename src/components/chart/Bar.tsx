import React, { useEffect, useState } from "react";
import { SetStateAction } from "react";
import { getColor } from '../../utils/GradientUtils'

interface BarProps {
    color?: string,
    temperature: number,
    setTemperature: React.Dispatch<SetStateAction<number>>
}

const Bar: React.FC<BarProps> = (props) => {

    const [isHovered, setHovered] = useState(false)

    useEffect(() => {
        isHovered ? 
            props.setTemperature(props.temperature)
        :
            props.setTemperature(null)     
    }, [isHovered])

    const enableHover = () => setHovered(() => true);

    const disableHover = () => setHovered(() => false)

    return (
        <div className={`bar ${isHovered && 'hoveredBar'}`} style={{backgroundColor: props.color || 'grey'}} onMouseEnter={enableHover} onMouseLeave={disableHover}>{props.temperature}</div>
    )
}

export default Bar;