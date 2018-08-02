---
to: "<%= `${locals.location ? location : '.'}/${h.inflection.camelize(name)}.css` %>"
---
.<%= h.inflection.camelize(name, true) %> {}
