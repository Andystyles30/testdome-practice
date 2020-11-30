import './App.css';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import React from 'react';
import Home from './components/Home';
import Message from './components/Message';
import FocusableInput from './components/FocusableInput';
import Grocery from './components/Grocery';
import ToDoList from './components/ToDoList';
import ImageGallery from './components/ImageGallery';
import User from './components/Username';
import Redux from './components/Redux';

function App() {
  const countReducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };
  const items = [
    { text: 'Buy grocery', done: true },
    { text: 'Play guitar', done: false },
    { text: 'Romantic dinner', done: false },
  ];
  const store = createStore(countReducer, composeWithDevTools());

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/redux" component={Redux} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/username" component={User} />
          <Route exact path="/input" render={() => <FocusableInput focused />} />
          <Route
            exact
            path="/todo"
            render={() => (
              <ToDoList
                items={items}
                onItemClick={(item, event) => {
                  console.log(item, event);
                }}
              />
            )}
          />
          <Route
            exact
            path="/grocery"
            render={() => (
              <Grocery
                products={[
                  { name: 'Oranges', votes: 0 },
                  { name: 'Bananas', votes: 0 },
                ]}
              />
            )}
          />
          <Route
            exact
            path="/gallery"
            render={() => (
              <ImageGallery links={['https://goo.gl/kjzfbE', 'https://goo.gl/d2JncW']} />
            )}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
