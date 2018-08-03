import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const height = 20;
const width = 400;
const border = "1px solid #8D97A0";
const borderRadius = 5;
const padding = 10;

const Select = styled.div`
  display: flex;
  padding: ${padding}px;
  justify-content: space-between;
  align-items: center;
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

const Selected = styled.div`
`

const Caret = styled.div`
  ${(_p, size="5px solid") => css`
    border-left: ${size} transparent;
    border-right: ${size} transparent;
    border-top: ${size} gray;
  `}
`

const Drop = styled.div`
  padding: 0 ${padding}px ${padding}px ${padding}px;
  width: ${width}px;
  border: ${border};
  border-top: 0;
  border-bottom-left-radius: ${borderRadius}px;
  border-bottom-right-radius: ${borderRadius}px;
`

const Option = styled.div`
  padding: ${padding}px 0;
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
    const selected = "static value for now..."
    return (
      <div>
        <Select open={open} onClick={() => this.setState({ open: !open })}>
          <Selected>{selected}</Selected>
          <Caret />
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
