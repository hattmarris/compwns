---
to: "<%= `${locals.location ? location : '.'}/${h.inflection.camelize(name)}.jsx` %>"
---
<% var Cased = h.inflection.camelize(name) -%>
import React from "react";
import PropTypes from "prop-types";

import "./<%= Cased %>.css"; 

export default class <%= Cased %> extends React.Component {

  render() {
    return (
      <div className="<%= h.inflection.camelize(name, true) %>">
        <%= Cased %> 
      </div>
    )
  }
}
