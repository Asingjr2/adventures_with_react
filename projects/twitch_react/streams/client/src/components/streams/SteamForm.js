/**
 * Using redux form.  
 * Three field render methods listed at bottom. 
 * Meta.error information can be used to display help messages.
 * Important to note that ERROR must be in form class name in order to display error message.
 */
import React from 'react';
import { Field, reduxForm } from 'redux-form';


/** 
 * Field is an actual react component while reduxForm is a method. 
 * Name is also the name of the prop describing a state element.
 * Field does not know how to render information, but we can direct it using helper function.
 * */
class StreamForm extends React.Component {
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
    this.props.onSubmit(formValues);
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
export default reduxForm({
  form: 'streamForm',
  validate: formValidate
})(StreamForm)
