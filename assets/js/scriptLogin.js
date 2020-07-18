function login() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var user = document.getElementById("user_id").innerText;
        var user = document.getElementById("user_id").innerText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }