import React from "react";
import { shallow } from "enzyme";
import Dropdown from "./Dropdown";
import faker from "faker";
import { times } from "lodash";

describe("Rendering tests for Dropdown", () => {
  
    test("Dropdown renders", () => {
      const options = times(10, () => faker.lorem.word());
      const dropdown = shallow(<Dropdown {...{ options } } />);
      expect(dropdown.exists()).toBe(true);
    });

}); 
