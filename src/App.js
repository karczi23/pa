import { useState } from 'react';
import './App.css';
import { ChartContext } from './context/ChartContext';
import Chart from './components/chart/Chart'

function App() {

  const [data, setData] = useState([23,23.1,23.2,23.3])

  return (
    <ChartContext.Provider value={data}>
      <div className="App">
        <Chart/>
      </div>
    </ChartContext.Provider>
  );
}

export default App;
