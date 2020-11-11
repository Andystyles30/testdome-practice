import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showParagraph: false
    };

    this.displayParagraph = this.displayParagraph.bind(this);
  }

  displayParagraph(e) {
    e.stopPropagation();
    // console.log(this.state);
    this.setState({
      showParagraph: this.state.showParagraph ? false : true
    });
    console.log(this.state);
  }

  render() {
    const showParagraph = this.state.showParagraph;
    return (
      <React.Fragment>
        <a href="##" onClick={this.displayParagraph}>
          Want to buy a new car?
        </a>
        {showParagraph ? <p>Call +11 22 33 44 now!</p> : null}
      </React.Fragment>
    );
  }
}

export default Message;
