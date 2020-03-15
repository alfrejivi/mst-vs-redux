import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect, DispatchProp } from 'react-redux';
import { updateFooAction, updateBarAction, initState } from './stores';

interface AppProps extends DispatchProp {
  foo: string,
  bar: string
}

const AppWithRedux: React.FC<AppProps> = ({ dispatch, foo, bar }) => {
  console.log('Re-rendering Component');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {foo}
          {console.log('Re-rendering foo')}
        </p>
        <p>
          {bar}
          {console.log('Re-rendering bar')}
        </p>
        <button onClick={() => dispatch(updateFooAction())}>
          update foo
        </button>
        <button onClick={() => dispatch(updateBarAction())}>
          update bar
        </button>
      </header>
    </div>
  );
};

const mapStateToProps = (state: typeof initState) => ({
  foo: state.foo,
  bar: state.bar
})

export default connect(mapStateToProps)(AppWithRedux);
