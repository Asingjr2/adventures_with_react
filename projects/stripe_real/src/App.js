import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import CustomForm from './CustomForm';
import StripeForm from './StripeForm';


class App extends React.Component {
  render() {
    return (
      <div>

      <h1>STRIPE ELEMENT</h1>
      <StripeProvider apiKey="">
        <div className="example">
          <h1>REACT STRIPE ELEMENTS TEST</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
      <br/><br/>

      <div>
        <h1>STRIPE FORM</h1>
        <StripeForm />
      </div>
      <div>
      <h1>CUSTOM ELEMENT</h1>
      <CustomForm />
      </div>
      </div>
    )
  }
}


export default App;
