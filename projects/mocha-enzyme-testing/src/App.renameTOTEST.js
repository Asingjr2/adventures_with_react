import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, {shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import HasName from './components/HasName';
import NewName from './components/NewName';

const expect = require('chai').expect;

Enzyme.configure({ adapter: new Adapter });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<HasName />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
// it('checks if a className exists', function() {
//   const wrapper = shallow(<App />); 
//   const welcome = <h1 className='App-title'>Welcome to React</h1>;
//   expect(wrapper.exists('.App-header')).to.equal(true);
// });

// it('checks if an element is in component', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.contains(<HasName />).to.equal(true));
// });

// it('checks if a prop is expected value', () => {
//   const wrapper = shallow(<HasName friend='my friend' />);
//   expect(wrapper.props().friend).to.equal('my friend')
// });

// it('checks if component is react class based', () => {
//   const wrapper = shallow(<HasName />);
//   const instance = wrapper.instance();

//   expect (instance).to.be.instanceOf(HasName)
// });

// it('checks element in state', () => {
//   const wrapper = shallow(<HasName />);
//   expect(wrapper.state().color).to.equal('red');
// });

// it('checks update method to change name', () => {
//   const wrapper = shallow(<NewName />);
//   expect(wrapper.state().color).to.equal('red');
//   // wrapper.update();
//   expect(wrapper.state().count).to.equal(2);
// });
