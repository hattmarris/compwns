import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Sbutton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

export default class Button extends React.Component {
  static propTypes = {
    color: PropTypes.oneOf(["red", "blue", "darkblue"])
  };

  static defaultProps = {
    color: "blue"
  };

  render() {
    const { children } = this.props;
    return <Sbutton>{children}</Sbutton>  
  }
}  
