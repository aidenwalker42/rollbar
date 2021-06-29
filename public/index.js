document.getElementById("btn").onclick = function () {
    axios.get("http://localhost:5050/api")
        .then(function (response) {
          const data = response.data;
          
          document.getElementById("title").innerHTML = data;
        });
  };