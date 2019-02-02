/**
 * Using redux form.  
 * Three field render methods listed at bottom. 
 * Meta.error information can be used to display help messages.
 * Important to note that ERROR must be in form class name in order to display error message.
 */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStreamAction } from '../../actions';


/** 
 * Field is an actual react component while reduxForm is a method. 
 * Name is also the name of the prop describing a state element.
 * Field does not know how to render information, but we can direct it using helper function.
 * */
class StreamCreate extends React.Component {
  /** 
   * Checking if field was clicked to determin if error will be rendered.
   * Meta passed to function and then error and touched are destructured from object.
   */
  renderError({ error, touched}) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div><h5>{error}</h5></div>
        </div>
      )
    }
  }
  /** 
   * Below is shorthand to the updates above. 
   * Props passed in render method can be destructured.
   * Object in validate that contains field name can be seen in 'meta'.
   */
  renderInput = ({ input, label, meta }) => {
    const styling = `field ${meta.error && meta.touched ? 'error' : ""}`
    return(
      <div className={styling}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    )
  }

  /** onSubmit passed through redux's handleSubmit which prevents defualt and upates form state values. */
  onSubmit = (formValues) => {
    this.props.createStreamAction(formValues);
  }

  /**  
   * Redux form has built in handleSubmit function that calls prevent default 
   * and then performs out submit logic.
  */
  render() {
    return (
      <form className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)
        }
      >
        <Field name="title" 
        component={this.renderInput} 
        label="Enter Title"/>
        <Field name="description" 
        component={this.renderInput}
        label="Enter Description"
        />

        <button className="ui button primary" >SUBMIT</button>
      </form>
    )
  }
}

/** 
 * redux form returns a function...simliar to connect.
 * We work to pass form a lot of configuration details.
 */

 /** 
  * Form validation logic. 
  * Error object matches field names that will be passed down to render input.
  * If errors are meant than information is updated.
  */
 const formValidate = (formValues) => {
   const formErrors = {};

   /** Length of zero or empty string is the same as not having info in redux. */
  if (!formValues.title) {
    formErrors.title = 'Title must be entered';
  }

  if (!formValues.description) {
    formErrors.description = 'Description must be entered';
  }

  return formErrors;
 }

 /** Wrapping component in form so props can be passed into connect function. */
const formWrapped = reduxForm({
  form: 'streamCreate',
  validate: formValidate
})(StreamCreate)

/** 
 * Using null as arguement so othere is no mapStrate function,
 * along with action creator for use with submit.
 * Passing action creator to component as a prop as well.
 */
export default connect(null, { createStreamAction: createStreamAction }) (formWrapped) ;





  /** 
   * Need to create helper function to render field.
   * Passing props that take field component information.
   * Props information need to be communicate down to field element.
   */
  // renderInput(formProps) {
  //   return(
  //     <input 
  //     onChange={formProps.input.onChange}
  //     value={formProps.input.value}
  //     />
  //   )
  // }

  /** Below is shorthand to the updates above. */
  // renderInput2(formProps) {
  //   return(
  //     <input {...formProps.input}
  //     />
  //   )
  // }
