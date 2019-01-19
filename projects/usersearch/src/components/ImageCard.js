import React from 'react';


class ImageCard extends React.Component {
  // Contructor needed to create imageRefs.
  constructor(props) {
    super(props);
    this.state = { spans : 0 };

    // Image ref used to get information specifically for this element in the dom.
    // Using img ref into to help autosize elements.
    this.imageRef = React.createRef();

  }

  // Base function with an eventListener based on when a load event occurs.
  componentDidMount() {
    // ************ Below code does not work since we are trying to get height before element has loaded....corrected by adding event load listener...once image loads we log current height.
    // console.log(this.imageRef);
    // console.log(this.imageRef.current.clientHeight);

    console.log('first try at printing height', this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener('load',  this.setSpans);
    console.log('second try at printing height', this.imageRef.current.clientHeight);
  }

  //
  setSpans = () => {
    console.log('set spans print out tied to event listener', this.imageRef.current.clientHeight);

    // Setting element so that we can incorporate with css information.

    const height = this.imageRef.current.clientHeight;

    // Dividing by row minimum height set in css and then adding  and rounding up.
    const spans = Math.ceil(height / 10 );

    this.setState({ spans });
  }

  render() {
    // Using destrcuturing to get kep object elements.
    const { description, urls } = this.props.image;

    // Return function uses string interpolation to bring in jsx styles and other elements that will be translated into HTML.
    // Need to compare grid row end vs grid auto rows
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}} >
        <img 
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
