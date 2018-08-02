---
to: "<%= `${locals.location ? location : '.'}/${h.inflection.camelize(name)}.test.jsx` %>"
---
<% var Pascal = h.inflection.camelize(name) -%>
<% var camel = h.inflection.camelize(name, true) -%>
import React from "react";
import * as T from "~/test/helpers";
import <%= Pascal %> from "./<%= Pascal  %>";

describe("Rendering tests for <%= Pascal %>", () => {
  
    test("<%= Pascal %> renders", () => {
      const <%= camel %> = T.shallow(<<%= Pascal %> />);
      expect(<%= camel %>.exists()).toBe(true);
    });

}); 
