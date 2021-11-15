const firebaseConfig = {
      apiKey: "AIzaSyBnj3hc_ktwJZFxyb8XWW2M8poiJ2nSOPI",
      authDomain: "twiter-5b0f9.firebaseapp.com",
      databaseURL: "https://twiter-5b0f9-default-rtdb.firebaseio.com",
      projectId: "twiter-5b0f9",
      storageBucket: "twiter-5b0f9.appspot.com",
      messagingSenderId: "352582598444",
      appId: "1:352582598444:web:756b3a75841cd97c0b7689",
      measurementId: "G-CQF307J15F"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    Username = localStorage.getItem("Username");
    Room_Name = localStorage.getItem("room_name");
    function send(){
          msg = document.getElementById("message").value;
      firebase.database().ref(Room_Name).push({
            name: Username,
            message: msg,
            like: 0
      });
      document.getElementById("message").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;      
      } });  }); }
getData();
function logout1()
{
      window.location = "index.html";
}