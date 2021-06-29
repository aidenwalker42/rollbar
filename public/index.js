document.getElementById("btn").onclick = function () {
    axios.get("https://traceability123.herokuapp.com/api")
        .then(function (response) {
          const data = response.data;
          document.getElementById("title").innerHTML = data;
        });
  };

  document.getElementById("btn").onclick = function () {
    axios.get("https://traceability123.herokuapp.com/api/err")
        .then(function (response) {
          const data = response.data;
          document.getElementById("title").innerHTML = data;
        });
  };