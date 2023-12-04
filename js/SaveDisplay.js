// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Global variables
var currentuser = "";
var currentemail = ""; 

// Check if the user is logged in
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    currentuser = user.displayName;
    currentemail = user.email;
    console.log("Logged in", currentuser, currentemail);
  }
  else{
    console.log("User is logged out");
    window.location.href = "Login.html";
  }
})

// Sign out code
$("#signout").click(function(){
firebase.auth().signOut().then(() => {
  console.log("User is signed out");
  window.location.href = "index.html";
}).catch((error) => {
  console.log(error.message);
});
});

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  



});

// update the result in table
