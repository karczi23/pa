import React, { useContext, useState } from 'react'
import { ChartContext } from '../../context/ChartContext';
import Bar from './Bar';
import './css/chart.css'

const Chart = (props) => {

const [isHovered, setHovered] = useState(false)
const [temperature, setTemperature] = useState(0)

const data = useContext(ChartContext)

const toggleHover = () => setHovered(prevState => !prevState);

return (
    <div className='chart' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        {
            isHovered ?
            <div>
                <div className='chartArea'>
                {
                    data.map((value, index) => 
                        <Bar key={index} setTemperature={setTemperature} temperature={value} />
                    )
                }
                </div>
                {temperature && <div>Temperatura: {temperature}</div>}
            </div>
        
            :
            <div>niehovered</div>
        }
    </div>
  )
}

export default Chart;
