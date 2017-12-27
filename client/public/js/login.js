$(document).ready(function() {

  $('body').on('click', '#login-submit', function() {

    var email = $("#login-email").val();
    var password = $("#login-password").val();
      var userData = {
        "params": {
          "email": email,
          "password": password
          }
        }
  // Send the POST request.
  $.ajax("/api/authentication/login", {
    type: "POST",
    data: userData
    }).then(
      function(data) {
      console.log("----------------------------------");
      console.log("User Logged In!");
      console.log("----------------------------------");
      console.log(data)
    });
  });
}
