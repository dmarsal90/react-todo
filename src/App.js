
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">

      <input type='text' placeholder='Enter a new task'/>
      <button onClick={()=>alert('clicked')}><FontAwesomeIcon icon={faPlus}/> Save task</button>

    </div>
  );
}

export default App;
