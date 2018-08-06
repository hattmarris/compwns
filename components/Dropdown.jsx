import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const height = 40;
const border = "1px solid #8D97A0";
const borderRadius = 5;
const padding = 10;
const hoverColor = "#E7F0F7";

const Wrapper = styled.div`
  ${({ width }) => css`
    min-width: ${width}ex;
    max-width: ${width+(width/4)}ex;
  `}
`

const Select = styled.button`
  box-sizing: border-box;
  display: flex;
  padding: ${padding}px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: ${height}px;
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
  margin-right: 10px;
`

const Caret = styled.div`
  ${(_p, size="5px solid") => css`
    border-left: ${size} transparent;
    border-right: ${size} transparent;
    border-top: ${size} gray;
  `}
`

const Drop = styled.ul`
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
  border: ${border};
  border-top: 0;
  border-bottom-left-radius: ${borderRadius}px;
  border-bottom-right-radius: ${borderRadius}px;
  width: 100%;
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
    options: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selected: props.selected || props.options[0],
      width: this.approxWidth() 
    }
    this.toggle = this.toggle.bind(this);
  }

  approxWidth() {
    const { options } = this.props;
    return this.pickLongest(options).length;
  }

  pickLongest(arr) {
    let l = "";
    arr.forEach(o => {
      if(o.length > l.length) { l = o; }
    });
    return l;
  }

  render() {
    const { open, selected, width } = this.state;
    return (
      <Wrapper width={width}>
        <Select open={open} onClick={this.toggle} role="select">
          <Selected>{selected}</Selected>
          <Caret />
        </Select>
        {open && this.renderDrop()}
      </Wrapper>
    )
  }

  renderDrop() {
    const { options } = this.props; 
    const { width } = this.state;
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
