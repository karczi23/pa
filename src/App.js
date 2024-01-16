import { useEffect, useState } from 'react';
import './App.css';
import { ChartContext } from './context/ChartContext';
import DataChart from './components/chart/Chart';
import Regulator from './components/input/Regulator';
import { getColor } from './utils/GradientUtils';
import { ColorContext } from './context/ColorContext';
import Parameters from './components/input/Parameters';
import Timer from './components/input/Timer';
import { Header } from './components/structure/Header';
import { GridContainer, TopDownContainer } from './components/structure/Container';
import {
    Calculator,
    collectiveData,
    convectionData,
    heatData,
    radiationData,
    usageData,
    vaporizationData,
} from './utils/calculations/Calculator';
import LineChart from './components/usageChart/LineChart';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);

function App() {
    const [data, setData] = useState([
        25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
        25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
        25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
    ]);
    const [colors, setColors] = useState([]);

    const [state, setState] = useState({});

    const calculate = Calculator;

    useEffect(() => {
        setColors(data.map(getColor));
        setState({ ...state, waterTemperature: data.slice(-1)[0] });
    }, [data]);

    return (
        <ChartContext.Provider value={data}>
            <ColorContext.Provider value={colors}>
                <div className="App">
                    <Header>Regulator temperatury w basenie odkrytym</Header>
                    <GridContainer>
                        <DataChart />
                        <Regulator state={state} setState={setState} />
                        <Parameters state={state} setState={setState} />
                        <Timer state={state} setState={setData} calculate={calculate} />
                    </GridContainer>
                    <TopDownContainer style={{ alignItems: 'center' }}>
                        <LineChart data={vaporizationData} label="Parowanie" yLabel="[W/M^2]" />
                        <LineChart data={convectionData} label="Konwekcja" yLabel="[W/M^2]" />
                        <LineChart data={radiationData} label="Promieniowanie" yLabel="[W/M^2]" />
                        <LineChart data={heatData} label="Energia słoneczna" yLabel="[W/M^2]" />
                        <LineChart data={usageData} label="Moc grzałki" yLabel="[W]" />
                        <LineChart
                            data={collectiveData}
                            label="Moc potrzebna do utrzymania temperatury"
                            yLabel="[W]"
                        />
                    </TopDownContainer>
                </div>
            </ColorContext.Provider>
        </ChartContext.Provider>
    );
}

export default App;
