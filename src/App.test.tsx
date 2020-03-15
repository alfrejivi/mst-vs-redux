import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'mobx-react';
import { Store, initState } from './stores';

afterEach(cleanup);

test('renders app component', () => {
  const store = Store.create(initState);
  const { getByTestId } = render(<Provider store={store}><App /></Provider>);
  expect(getByTestId('app')).toBeInTheDocument();
});

test('click on foo button', () => {
  const store = Store.create(initState);
  const { getByTestId } = render(<Provider store={store}><App /></Provider>);
  const label = getByTestId('foo');
  expect(label).toHaveTextContent("foo");
  const button = getByTestId('fooButton');
  fireEvent.click(button);
  expect(label).toHaveTextContent("new foo");
});

test('click on bar button', () => {
  const store = Store.create(initState);
  const { getByTestId } = render(<Provider store={store}><App /></Provider>);
  const label = getByTestId('bar');
  expect(label).toHaveTextContent("bar");
  const button = getByTestId('barButton');
  fireEvent.click(button);
  expect(label).toHaveTextContent("new bar");
});