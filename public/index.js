var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '10e82bfaacb74fe08ebe93277bd57f31',
  captureUncaught: true,
  captureUnhandledRejections: true
});

document.getElementById("btn").onclick = function () {
    rollbar.log("Button Clicked");
    axios.get("https://traceability123.herokuapp.com/api")
        .then(function (response) {
          const data = response.data;
          document.getElementById("title").innerHTML = data;
          rollbar.log("Text Changed");
        });
  };