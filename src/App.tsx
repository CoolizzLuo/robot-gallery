import './App.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robots';

function App() {
  return (
    <ul>
      { robots.map(r => <Robot id={r.id} email={r.email} name={r.name} />)}
    </ul>
  );
}

export default App;
