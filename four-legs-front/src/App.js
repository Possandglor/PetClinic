import logo from './logo.svg';
import './App.css';
import './MyTestModule'
import MyTestModule from './MyTestModule';
import Menu from './Menu';

import ClientList from './components/ClientList';

function App() {
  return (
    <div>
      <Menu />
      <div className="App">
          <ClientList/>
      </div>
    </div>
  );
}

export default App;
