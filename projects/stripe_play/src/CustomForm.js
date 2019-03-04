import React from 'react';


class CustomForm extends React.Component {
  render() {
    return (
      <form action="your-server-side-code" method="POST">
      <script
        src="https://checkout.stripe.com/checkout.js" class="stripe-button"
        data-key=""
        data-amount="999"
        data-name="Stripe.com"
        data-description="Example charge"
        data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
        data-locale="auto"
        data-zip-code="true">
      </script>
      <label htmlFor="myAmount">AMOUNT</label>
      <input type="text" name="myAmount"/>
</form>
    )
  }
}

export default CustomForm
