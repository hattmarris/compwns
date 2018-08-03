import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const height = 42;
const width = 400;
const border = "1px solid #8D97A0";
const borderRadius = 5;

const Select = styled.div`
  position: relative;
  height: ${height}px;
  width: ${width}px;
  border: ${border};
  border-radius: ${borderRadius}px;
  background-color: white;

  ${props => props.open && css`
    border-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}
`;

const Caret = styled.div`
  position: absolute;
  right: 10px;
  top: ${(height/2)-2}px;
  width: 0; 
  height: 0;

  ${(_p, size="5px solid") => css`
    border-left: ${size} transparent;
    border-right: ${size} transparent;
    border-top: ${size} gray;
  `}
`

const Drop = styled.div`
  width: ${width}px;
  border: ${border};
  border-top: 0;
  border-bottom-left-radius: ${borderRadius}px;
  border-bottom-right-radius: ${borderRadius}px;
`

const Option = styled.div`
  padding: 10px;
`;

export default class Dropdown extends React.Component {
  static propTypes = {
    options: PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false 
    }
  }
  
  render() {
    const { open } = this.state;
    return (
      <div>
        <Select open={open}>
          <Caret onClick={() => this.setState({ open: !this.state.open })} />
        </Select>
        {open && this.renderDrop()}
      </div>
    )
  }

  renderDrop() {
    const { options } = this.props; 
    return (
      <Drop>
        {options.map((o,i) => <Option key={i}>{o}</Option>)}
      </Drop>
    )
  }
}
