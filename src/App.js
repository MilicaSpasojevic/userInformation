import './App.css';
import Header from "./components/Layout/Header"
import { Redirect, Route, Switch } from 'react-router';
import Users from './components/Users/Users'
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import userReducer from './store/reducers/users'
import UserDetailsScreen from './pages/UserDetailsScreen';
import NotFound from './pages/NotFound'


function App() {

  const rootReducer = combineReducers({
    user: userReducer
  })

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <Header/>
      <Switch>
      <Route path="/" exact>
        <Redirect to='/users'/>
      </Route>
      <Route path="/users" exact>
       <Users/>
      </Route>
      <Route path="/users/:userId">
        <UserDetailsScreen/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
      </Switch>
      </Provider>
  );
}

export default App;
