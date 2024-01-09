import { useEffect, useState } from 'react';
import './App.css';
import { ChartContext } from './context/ChartContext';
import Chart from './components/chart/Chart';
import Regulator from './components/input/Regulator';
import { getColor } from './utils/GradientUtils';
import { ColorContext } from './context/ColorContext';
import Parameters from './components/input/Parameters';
import Timer from './components/input/Timer';
import { GridContainer } from './components/structure/Container';

function App() {
    const [data, setData] = useState([23, 23.1, 23.2, 23.3, 34]);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        setColors(data.map(getColor));
    }, [data]);

    return (
        <ChartContext.Provider value={data}>
            <ColorContext.Provider value={colors}>
                <div className="App">
                    <GridContainer>
                        <Chart />
                        <Regulator />
                        <Parameters />
                        <Timer />
                    </GridContainer>
                </div>
            </ColorContext.Provider>
        </ChartContext.Provider>
    );
}

export default App;
