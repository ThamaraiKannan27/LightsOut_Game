import './App.css';
import Title from './Components/Title/Title';
import Board from './Components/Board/Board';
const App = ()=>
    <div className="App">
      <Title />
      <Board size={5}/>
    </div>


export default App;
