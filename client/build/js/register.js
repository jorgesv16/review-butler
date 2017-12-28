$(document).ready(function() {
//URL getting user data from passport

  // var user = "api/users/list/" + $("#signup-username").val();


  $('body').on('click', '#register-submit', function() {

    var firstName = $("#signup-firstname").val().trim();
    var lastName = $("#signup-lastname").val().trim();
    var email = $("#signup-email").val().trim();
    var phone = $("#signup-phone").val().trim();
    var username = $("#signup-username").val().trim();
    var password = $("#signup-password").val().trim();
      var userData = {
        "params": {
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "phone": phone,
          "username": username,
          "password": password
          }
        }
  // Send the POST request.
  $.ajax("/api/authentication/register", {
    type: "POST",
    data: userData
    }).then(
      function(data) {
      console.log("----------------------------------");
      console.log("New User Registered!");
      console.log("----------------------------------");
      console.log(data)
    });
  });
}
