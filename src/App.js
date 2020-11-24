import './App.css';
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  BrowserRouter as Router
} from 'react-router-dom';
import Home from './components/Home.js';
import Message from './components/Message.js';
import FocusableInput from './components/FocusableInput.js';
import Grocery from './components/Grocery.js';
import ToDoList from './components/ToDoList.js';
import ImageGallery from './components/ImageGallery.js';
import User from './components/Username.js';
import Redux from './components/Redux.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

function App() {
  const countReducer = function (state = 0, action) {
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
    { text: 'Romantic dinner', done: false }
  ];
  let store = createStore(countReducer, composeWithDevTools());

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
          <Route
            exact
            path="/input"
            render={props => <FocusableInput {...props} focused={true} />}
          />
          <Route
            exact
            path="/todo"
            render={props => (
              <ToDoList
                {...props}
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
            render={props => (
              <Grocery
                {...props}
                products={[
                  { name: 'Oranges', votes: 0 },
                  { name: 'Bananas', votes: 0 }
                ]}
              />
            )}
          />
          <Route
            exact
            path="/gallery"
            render={props => (
              <ImageGallery
                {...props}
                links={['https://goo.gl/kjzfbE', 'https://goo.gl/d2JncW']}
              />
            )}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
