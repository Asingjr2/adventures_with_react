import React from 'react';
import { connect } from 'react-redux';
import { createStreamAction } from '../../actions';
import StreamForm from './SteamForm';


/** 
 * Field is an actual react component while reduxForm is a method. 
 * Name is also the name of the prop describing a state element.
 * Field does not know how to render information, but we can direct it using helper function.
 * */
class StreamCreate extends React.Component {

  /** onSubmit passed through redux's handleSubmit which prevents defualt and upates form state values. */
  onSubmit = (formValues) => {
    this.props.createStreamAction(formValues);
  }

  render() {
    return (
      <div>
        <h3>CREATE A STREAM</h3>
        <StreamForm onSubmit={this.onSubmit}></StreamForm>
      </div>
    )
  }
}


/** 
 * Using null as arguement so othere is no mapStrate function,
 * along with action creator for use with submit.
 * Passing action creator to component as a prop as well.
 */
export default connect(null, { createStreamAction: createStreamAction }) (StreamCreate) ;


