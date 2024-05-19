import logo from './logo.svg';
import './App.css';
import './MyTestModule'
import MyTestModule from './MyTestModule';
import Menu from './Menu';

function App() {
  return (
    <div>
      <Menu />
      <div className="App">
        <header className="App-header">
          <MyTestModule />
        </header>
      </div>
    </div>
  );
}

export default App;
