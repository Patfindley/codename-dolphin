import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

export class DelayLink extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  handleClick(e) {
    const { to, clickAction, history } = this.props;
    let { delay, replace } = this.props;

    delay = parseInt(delay, 10);
    replace = !!replace;

    if (clickAction instanceof Function) {
      clickAction();
    }

    if (e.defaultPrevented) {
      return;
    }
    e.preventDefault();

    this.timeout = setTimeout(() => {
      if (replace) {
        history.push.replace(to);
      } else {
        history.push(to);
      }
    }, delay);
  }

  render() {
    const props = Object.assign({}, this.props);
    const { children } = this.props;
    delete props.delay;
    return (
      <Router>
        <div
          role='link'
          onClick={this.handleClick}
          onKeyPress={this.handleClick}
        >
          {children}
        </div>
      </Router>
    );
  }
}

export default withRouter(DelayLink);
