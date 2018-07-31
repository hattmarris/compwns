import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  static propTypes = {
    color: PropTypes.oneOf(["red", "blue", "darkblue"])
  };

  static defaultProps = {
    color: "blue"
  };

  render() {
    const { children } = this.props;
    return <button>{children}</button>  
  }
}  
