import React from 'react';
import PropTypes from 'prop-types';

// ReactDOM.render(<App />, document.getElementById('root'));
class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { links: props.links };
  }

  remove = (url) => {
    this.setState((state) => ({
      links: state.links.filter((l) => l !== url),
    }));
  };

  render() {
    const { links } = this.state;
    return (
      <div>
        {links.map((link) => (
          <div key={link}>
            <div className="image">
              <img alt="img" src={link} />
              <button type="button" className="remove" onClick={() => this.remove(link)}>
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  links: PropTypes.string.isRequired,
};

export default ImageGallery;
