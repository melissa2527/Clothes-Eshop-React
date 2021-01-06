import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {HomePage} from './page/HomePage.jsx';
import {Header} from './components/header/Header.jsx';
import './App.css';
import ShopPage from './shop/ShopPage.jsx';
import SignInOut from './sign-in-out/SignInOut.jsx';
import {auth} from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInOut}/>
      </Switch>
    </div>
  )
  }
}


export default App;