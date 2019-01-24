// Uncomment one of the following lines to see error handling
// require('unknown-module')
// } syntax-error

// Uncomment this next line to trigger a warning
// require('Assert')
require('assert');

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
    clearInterval(timer);
  });
}
