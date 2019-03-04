import React from 'react';
import  {CardElement, injectStripe} from 'react-stripe-elements';


class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  // ajax request to perform an action on submit
  // token id created from the stripe is then sent to the server.
  async submit(ev) {
    // user click event
    let {token} = await this.props.stripe.createToken({name:"Name"});
    let response = await fetch("/charge", {
      method: "POST", 
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });

    if (response.ok) {
      console.log("Purchase completed Samus!")
      this.setState({complete: true});
    };
  }

  render() {
    console.log('rendering checkoutForm')
    if (this.state.complete) return <h1>Purchase Complete</h1>;


    return (
      <div className="checkout">
        <p>Would you like to complete your purchase</p>
        <CardElement />
        <button onClick={this.submit}>SEND</button>
      </div>
    );
  };
}

export default injectStripe(CheckoutForm);
