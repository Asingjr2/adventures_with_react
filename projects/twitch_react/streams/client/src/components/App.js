import React from 'react';

// importing Router instead of BrowserRouter so that we can use manually history
import { Router, Route, Link } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDisplay from './streams/StreamDisplay';
import StreamDelete  from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';

/** First page created to show that anchor tags resend network requests. */
const First = () => {
  return (
  <div>FIRST PAGE
  <a href="/playPageTwo"> SECOND</a><br/>
  <Link to="/playPageTwo">LINK SECOND</Link>
  </div>
  )
};

const Second = () => {
  return (
    <div>
      <a href="/"> FIRST</a><br/>
      <Link to="/">LINK FIRST</Link>

    </div>
  )
};

/** 
 * BROWSER ROUTER DEPLOYS BLANK SCREEN INSTEAD OF 404 ERRORS.
 * Can change listing to streams/listing.
 */
const App = () => {
  return (
    <Router history={history}>
      <div>
        <Header></Header>
        <Route path="/playPageOne" exact component={First}></Route>
        <Route path="/playPageTwo" exact component={Second}></Route>

        <Route path="/" exact component={StreamList}></Route>
        <Route path="/streams/new" exact component={StreamCreate}></Route>
        <Route path="/streams/edit" exact component={StreamEdit}></Route>
        <Route path="/streams/delete" exact component={StreamDelete}></Route>
        <Route path="/streams/display" exact component={StreamDisplay}></Route>
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
