import React, { useContext, useState } from 'react';
import { ChartContext } from '../../context/ChartContext';
import Bar from './Bar';
import './css/chart.css';
import { ColorContext } from '../../context/ColorContext';
import { ChartLegendContainer, ChartTextContainer, Container } from '../structure/Container';

const Chart = (props) => {
    const [isHovered, setHovered] = useState(false);
    const [temperature, setTemperature] = useState(0);
    const [position, setPosition] = useState(0);

    let delayText: string;

    const data = useContext(ChartContext);
    const colors = useContext(ColorContext);

    const enableHover = () => setHovered(() => true);

    const disableHover = () =>
        setHovered(() => {
            setTemperature(null);
            setPosition(null);
            return false;
        });

    if (position != null) {
        if (position > 4) {
            delayText = `${position} minut temu`;
        } else if (position > 1) {
            delayText = `${position} minuty temu`;
        } else if (position === 1) {
            delayText = `${position} minutę temu`;
        } else {
            delayText = 'W tym momencie';
        }
    }

    return (
        <Container>
            <div onMouseEnter={enableHover} onMouseLeave={disableHover}>
                {isHovered ? (
                    <div>
                        <ChartTextContainer />
                        <div className="chartAreaHovered chartArea border-bottom border-left border-right border-radius">
                            {data.map((value, index) => (
                                <Bar
                                    key={index}
                                    setTemperature={setTemperature}
                                    temperature={value}
                                    color={colors[index]}
                                    position={index}
                                    setPosition={setPosition}
                                />
                            ))}
                        </div>
                        <ChartTextContainer>
                            {temperature && `Temperatura: ${temperature}°C`}
                        </ChartTextContainer>
                        <ChartTextContainer>{position !== null && delayText}</ChartTextContainer>
                    </div>
                ) : (
                    <div>
                        <div
                            className="chartAreaUnhovered chartArea border-bottom border-left border-right border-radius"
                            style={{
                                backgroundImage: `linear-gradient(to right, ${colors.join(',')})`,
                            }}>
                            a
                        </div>
                        <div style={{ display: 'flex' }}>
                            <ChartLegendContainer textAlignment="left">
                                59 minut temu
                            </ChartLegendContainer>
                            <ChartLegendContainer textAlignment="right">
                                W tym momencie
                            </ChartLegendContainer>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Chart;
