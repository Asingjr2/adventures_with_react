import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import CustomCheckout from './CustomCheckout';


class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>CUSTOM FORM</h1>
          <CustomCheckout />
        </div>

        <div>
          <h1>STRIPE FORM</h1>
          <StripeProvider apiKey="">
            <div className="example">
              <h1>REACT STRIPE ELEMENTS TEST</h1>
              <Elements>
                <CheckoutForm />
              </Elements>
            </div>
          </StripeProvider>
        </div>
      </div>
    )
  }
}


export default App;
