import { useEffect, useState } from 'react';
import './App.css';
import { ChartContext } from './context/ChartContext';
import Chart from './components/chart/Chart'
import { getColor } from './utils/GradientUtils';
import { ColorContext } from './context/ColorContext';

function App() {

  const [data, setData] = useState([23,23.1,23.2,23.3,34])
  const [colors, setColors] = useState([])

  useEffect(() => {
    setColors(data.map(getColor))
  }, [data])

  return (
    <ChartContext.Provider value={data}>
      <ColorContext.Provider value={colors}>
        <div className="App">
          <Chart/>
        </div>
      </ColorContext.Provider>
    </ChartContext.Provider>
  );
}

export default App;
