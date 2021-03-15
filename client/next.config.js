const withTM = require("next-transpile-modules")(["@bookstagram/components"], {
  resolveSymlinks: true,
});

module.exports = withTM();
