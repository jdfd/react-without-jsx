'use strict';

const e = React.createElement;

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const buttonContainer = document.querySelector('#button-container');
ReactDOM.render(e(Button), buttonContainer);