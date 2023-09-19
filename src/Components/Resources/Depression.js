import React, { Component } from 'react';

class Depression extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  render() {
    const { error } = this.state;

    // Replace 'your-link-here' with the actual link you want to display
    const linkToDisplay = 'https://www.webmd.com/depression/default.htm';

    return (
      <div>
        <h2>Depression Content</h2>
        {error && <div className="error">{error}</div>}
        <iframe
          title="Depression Content"
          src={linkToDisplay}
          frameBorder="0"
          width="100%"
          height="500px"
          sandbox="allow-same-origin"
        ></iframe>
      </div>
    );
  }
}

export default Depression;
