import React from "react";
import * as T from "~/test/helpers";
import Dropdown from "./Dropdown";

describe("Rendering tests for Dropdown", () => {
  
    test("Dropdown renders", () => {
      const dropdown = T.shallow(<Dropdown />);
      expect(dropdown.exists()).toBe(true);
    });

}); 
