import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showParagraph: false,
    };

    this.displayParagraph = this.displayParagraph.bind(this);
  }

  displayParagraph(e) {
    e.stopPropagation();
    // console.log(this.state);
    const { showParagraph } = this.state;
    this.setState({
      showParagraph: !showParagraph,
    });
    console.log(this.state);
  }

  render() {
    const { showParagraph } = this.state;
    return (
      <>
        <a href="##" onClick={this.displayParagraph}>
          Want to buy a new car?
        </a>
        {showParagraph ? <p>Call +11 22 33 44 now!</p> : null}
      </>
    );
  }
}

export default Message;
