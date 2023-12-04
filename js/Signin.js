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

// For people need game rank
/*
firebase.firestore().collection("test").orderBy("item").get().then(querySnapshot).forEach((doc) => {
querySnapshot.forEach((doc) => {
  console.log('${doc.id} => ${doc.data().item}');
})
})*/

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = "#login";
  var password = '#pwd';

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in successfully');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name, email, emailVerified);
        window.location.href = "Surveyresult.html";
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage); 
    });
});

// add  a google login choice here 
$("#google").click(function(){
var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /* @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  })
})
