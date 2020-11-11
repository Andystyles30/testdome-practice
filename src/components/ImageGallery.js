import React from 'react';

// ReactDOM.render(<App />, document.getElementById('root'));
class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { links: props.links };
  }
  remove = url => {
    console.log(url);
    this.setState(state => ({
      links: state.links.filter(l => l !== url)
    }));
  };
  render() {
    return (
      <div>
        {this.state.links.map((link, index) => (
          <div key={index}>
            <div className="image">
              <img src={link}></img>
              <button className="remove" onClick={() => this.remove(link)}>
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ImageGallery;
