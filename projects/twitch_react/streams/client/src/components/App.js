import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDisplay from './streams/StreamDisplay';
import StreamDelete  from './streams/StreamDelete';
import StreamListing from './streams/StreamListing';
import Header from './Header';

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
    <BrowserRouter>
      <div>
        <Header></Header>
        <Route path="/playPageOne" exact component={First}></Route>
        <Route path="/playPageTwo" exact component={Second}></Route>

        <Route path="/" exact component={StreamListing}></Route>
        <Route path="/streams/new" exact component={StreamCreate}></Route>
        <Route path="/streams/edit" exact component={StreamEdit}></Route>
        <Route path="/streams/delete" exact component={StreamDelete}></Route>
        <Route path="/streams/display" exact component={StreamDisplay}></Route>
      </div>
    </BrowserRouter>
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
