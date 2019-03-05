import React from 'react';

// importing Router instead of BrowserRouter so that we can use manually history
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDisplay from './streams/StreamDisplay';
import StreamDelete  from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';

/** 
 * BROWSER ROUTER DEPLOYS BLANK SCREEN INSTEAD OF 404 ERRORS.
 * Can change listing to streams/listing.
 * including switch only grabs one component!!!
 */
const App = () => {
  return (
    <Router history={history}>
      <div>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={StreamList}></Route>
        <Route path="/streams/new" exact component={StreamCreate}></Route>
        <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
        <Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
        <Route path="/streams/:id" exact component={StreamDisplay}></Route>
      </Switch>
      </div>
    </Router>
  ) 
};

// const App = () => {
//   return (
//     <HashRouter>
//       <div>
//         <Route path="/" exact component={First}></Route>
//         <Route path="/playPageTwo" exact component={Second}></Route>
//       </div>
//     </HashRouter>
//   ) 
// };

export default App;
