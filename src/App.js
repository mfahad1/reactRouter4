import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const UnAuth = props => (
  <div className="primary-layout">
    <header>
      Our React Router 3 App
    </header>
    <main>
      {props.children}
    </main>
  </div>
)

const Dashboard = props => (
  <div >
    <div>
      <Switch>
        <Route path={`${props.path}/hello`} component={() => <h1>Hellow</h1>} />
        <Route path={`${props.path}/world`} component={() => <h1>world</h1>} />
      </Switch>
    </div>
  </div>
)


class AuthorizedRoute extends Component {
  componentWillMount() {
    
  }

  render() {
    const { component: Component} = this.props
    return (
      <div>
        <div>
          Parent
        </div>
        <Route render={props => {
          return <Component {...this.props} />
        }} />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/auth" component={UnAuth} />
          <AuthorizedRoute path="/app" component={Dashboard}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
