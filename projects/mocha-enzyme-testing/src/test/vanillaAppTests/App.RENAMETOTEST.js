import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, {shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../App';
import HasName from '../../components/HasName';
import NewName from '../../components/NewName';

const expect = require('chai').expect;

Enzyme.configure({ adapter: new Adapter });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HasName />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('checks if a className exists', function() {
  const wrapper = shallow(<App />); 
  const welcome = shallow(<h1 data-test='App-title'>Welcome to React</h1>);
  expect(welcome.find(`[data-test="App-title"]`).length).to.be.equal(1);
});

it('checks if an element is in component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<HasName friends='my friend'/>)).to.equal(true);
});


// the below code must be rendered in top node of component to work.
it('checks if a prop is expected value', () => {
  const wrapper = shallow(<HasName friends="friends"/>);
  expect(wrapper.props().friends).to.be.equal('friends');
});

it('checks if component is react class', () => {
  const wrapper = shallow(<NewName />);
  const instance = wrapper.instance();

  expect(instance).to.be.instanceOf(NewName)
});

it('checks element in state', () => {
  const wrapper = shallow(<NewName />);
  expect(wrapper.state().color).to.equal('red');
});
