import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const height = 20;
const width = 400;
const border = "1px solid #8D97A0";
const borderRadius = 5;
const padding = 10;
const hoverColor = "#E7F0F7";

const Select = styled.button`
  box-sizing: content-box;
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

const Selected = styled.div``

const Caret = styled.div`
  ${(_p, size="5px solid") => css`
    border-left: ${size} transparent;
    border-right: ${size} transparent;
    border-top: ${size} gray;
  `}
`

const Drop = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: ${width+20}px;
  border: ${border};
  border-top: 0;
  border-bottom-left-radius: ${borderRadius}px;
  border-bottom-right-radius: ${borderRadius}px;
`

const Option = styled.li`
  padding: ${padding}px;

  :hover {
    background-color: ${hoverColor};
    :last-child {
      border-bottom-left-radius: ${borderRadius}px;
      border-bottom-right-radius: ${borderRadius}px;
    }
  }
`;

export default class Dropdown extends React.Component {
  static propTypes = {
    options: PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selected: props.selected || props.options[0]
    }
    this.toggle = this.toggle.bind(this);
  }
  
  render() {
    const { open, selected } = this.state;
    return (
      <div>
        <Select open={open} onClick={this.toggle} role="select">
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
        {options.map((o,i) => <Option key={i} role="option" onClick={() => this.select(o)}>{o}</Option>)}
      </Drop>
    )
  }

  select(o) {
    return this.setState((prev, _p) => ({ ...prev, selected: o, open: false }));
  }

  toggle() {
    return this.setState((prev, _p) => ({ ...prev, open: !prev.open }));
  }
}
