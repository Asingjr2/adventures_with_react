import React from 'react';
import ReactDOM from 'react-dom';


const Modal = props => {
  /** 
   * createPortal requires new jsx and div where information will be placed
   * adding anonymous function to allow switching back to main route
   * changing manual redirect to dismiss modal and allow for different places using onDismis passed from parent
   * passed onDismiss function goes back to home page
   * 
   */
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} 
     className="ui dimmer modals visible active">
      <div onClick={(event) => event.stopPropagation()} 
      className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">{props.content}
        </div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
