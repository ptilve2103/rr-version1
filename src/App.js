import './App.css';
import Navbar from './components/Navbar';
import Spreadsheet from 'react-spreadsheet';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  
    const columnLabels = ["1", " 2", "3", "  4", "  5", "  6"];
      const rowLabels = ["Aleema", "Naveen", "Nupur", "Amruta", "Lavanya", "Gaurav", "Anusha"];
      const data = [
        [{ value: "2024-0411-125787" }, { value: "" }],
        [{ value: "" }, { value: "" }],
      ];
      return (
        <BrowserRouter>
        <div className="App">
          <Navbar />
        <Route path="/" element={<Spreadsheet
        className='spreadsheet'
          data={data}
          columnLabels={columnLabels}
          rowLabels={rowLabels}
        />}/>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
