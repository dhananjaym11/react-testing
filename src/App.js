import Card from './components/Card';
import Hello from './components/Hello';
import Toggle from './components/Toggle';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Hello name="Dj" />
      <br />
      <User id="1" />
      <br />
      <Toggle onChange={result => console.log(result)} />
      <br />
      <Card onSelect={result => console.log(result)} />
      <br />
    </div>
  );
}

export default App;
