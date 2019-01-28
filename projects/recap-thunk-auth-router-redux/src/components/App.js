import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import Posts from './Posts';
import Users from './Users';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>MY APP</div>
        <BrowserRouter>
          <div>
            <Route path="/users" exact component={Header}></Route>
            <Route path="/users" exact component={Users}></Route>
            <Route path="/posts" exact component={Posts}></Route>
          </div>
        </BrowserRouter>
      </div>
    )
  }
};

export default App;
