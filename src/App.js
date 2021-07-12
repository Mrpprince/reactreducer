
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { decNumber, incNumber } from './actions';
function App() {
  const myState = useSelector(state => state.changeNumber)
  const  dispatch = useDispatch()
  return (
    <div className="App">
      <div className="mainBody">
        <button className="plus__button" onClick={()=>dispatch(decNumber())}>-</button>
        <input type="number" className="input__value" value={myState} />
        <button onClick={()=>dispatch(incNumber())} className="minus__button">+</button>
      </div>
    </div>
  );
}

export default App;
