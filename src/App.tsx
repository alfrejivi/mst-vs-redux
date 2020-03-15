import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useUserData } from './hooks';


const App: React.FC = () => {

  const { foo, bar, updateBar, updateFoo } = useUserData();

  console.log('Re-rendering', foo);
  return (
    <div data-testid="app" className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p data-testid="foo">
          {foo}
          {console.log('Re-rendering foo')}
        </p>
        <p data-testid="bar">
          {bar}
          {console.log('Re-rendering bar')}
        </p>
        <button data-testid="fooButton" onClick={updateFoo}>
          update foo
        </button>
        <button data-testid="barButton" onClick={updateBar}>
          update bar
        </button>
      </header>
    </div>
  );
};

export default App;
