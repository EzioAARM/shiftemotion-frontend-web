function login() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var user = document.getElementById("user_id").innerText;
        var user = document.getElementById("user_pass").innerText;

      }
    };
    xhttp.open("GET", "https://8m717iy4bh.execute-api.us-east-1.amazonaws.com/Prod/perfil?email="+user, true);
    xhttp.send();
    
  }