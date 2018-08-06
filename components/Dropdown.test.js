import React from "react";
import { shallow } from "enzyme";
import Dropdown from "./Dropdown";
import { lorem } from "faker";
import { times } from "lodash";

describe("Rendering tests for Dropdown", () => {
    const options = times(10, () => lorem.word());
    const dropdown = shallow(<Dropdown {...{ options } } />);
    
    test("Dropdown renders with options", () => {
      expect(dropdown.exists()).toBe(true);
    });
  
    test("When Select is clicked, Drop is shown", () => {
      const Select = dropdown.find("[role='select']");
      
      Select.simulate("click");
      
      expect(dropdown.find("Drop").exists()).toBe(true);  
    });  

}); 
