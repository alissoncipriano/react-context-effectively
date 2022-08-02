import './App.css';
import { useCount } from './providers/count-context';

function App() {
  const counter = useCount();

  // console.log(counter);

  return (
      <div className="App">
        <h1>Clique, se tiver coragem! 😉</h1>

        <div className='Counter'>
          <button onClick={ () => counter.dispatch({ type: 'decrement' }) }>-</button>
          <input type="text" value={counter.state.count} disabled />
          <button onClick={ () => counter.dispatch({ type: 'increment' }) }>+</button>
        </div>
      </div>
  );
}

export default App;
