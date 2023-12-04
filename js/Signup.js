const firebaseConfig = {
  apiKey: "AIzaSyCjeMO612mdgsbSbn_iwmjiUCKj2PB-VuI",
  authDomain: "database-2023-f2fb8.firebaseapp.com",
  projectId: "database-2023-f2fb8",
  storageBucket: "database-2023-f2fb8.appspot.com",
  messagingSenderId: "550346050899",
  appId: "1:550346050899:web:dab5b45c1eb706cecaa5a6",
  measurementId: "G-LW20QZZKXB"
}; 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var username = $("input[name='fullname']").val();
  var emailaddress = $("input[name='username']").val();
  var password = $("input[name='password']").val();
  var confirmpassword = $("input[name='cpassword']").val();
  console.log(username, emailaddress, password, confirmpassword);
  //check if password and confirmed password are the same
  var match = password == confirmedpassword;
  console.log(match);

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailaddress, password)
    .then((result) => {
      // Signed in
      let user = result.user;
      user.updateProfile({
        displayName: username
      }).then(()=>{
        console.log("Update profile successfully")
        console.log(user.displayName, " are signed up");
      });
      
      
      
      // Get current date
      var date = "Wednesday, 29 November 2023 07:28:00 GMT";
      var userinformation = {
        "username": user.displayName,
        "email": emailaddress,
        "signupDate": date

      };



      // Save information to firestorm base 
      var db = firebase.firestorm();
      db.collection("usertable").doc(user.displayName).set(userinformation).then(()=>{
        console.log("Information saved to firestorm");
        
      });


      //window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
