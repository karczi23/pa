import React, { useContext, useState } from 'react'
import { ChartContext } from '../../context/ChartContext';
import Bar from './Bar';
import './css/chart.css'
import { ColorContext } from '../../context/ColorContext';
import { ChartTextContainer, Container } from '../structure/Container';

const Chart = (props) => {

const [isHovered, setHovered] = useState(false)
const [temperature, setTemperature] = useState(0)

const data = useContext(ChartContext)
const colors = useContext(ColorContext)

const toggleHover = () => setHovered(prevState => !prevState);

return (
    <Container>
    <div onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        {
            isHovered ?
            <div>
                <ChartTextContainer/>
                <div className='chartAreaHovered chartArea border-bottom border-left border-right'>
                {
                    data.map((value, index) => 
                        <Bar key={index} setTemperature={setTemperature} temperature={value} color={colors[index]}/>
                    )
                }
                </div>
                <ChartTextContainer>
                    {temperature && `Temperatura: ${temperature}°C`}
                </ChartTextContainer>
            </div>
        
            :
            <div className='chartAreaUnhovered chartArea' style={{backgroundImage: `linear-gradient(to right, ${colors.join(',')})`}}>a</div>
        }
    </div>
    </Container>
  )
}

export default Chart;
