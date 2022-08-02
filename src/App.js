import './App.css';
import { useCount } from './providers/count-context';

function App() {
  const counter = useCount();

  console.log(counter);

  return (
    
      <div className="App">
        Hello, World!
      </div>
  );
}

export default App;
