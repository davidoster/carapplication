import logo from './logo.svg';
import './App.css';
import CarList from './components/carlist/carlist';
import CarForm from './components/carform/carform';

function App() {
  return (
    <div className="App">
      <h2>This is the main App component</h2>
      <CarList  />
      <CarForm />
    </div>
  );
}

export default App;
