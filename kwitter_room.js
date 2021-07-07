
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCbxXBoVri6nlFmTV-kU7l5lowxMAVV3X8",
      authDomain: "kwitter-563d1.firebaseapp.com",
      databaseURL: "https://kwitter-563d1-default-rtdb.firebaseio.com",
      projectId: "kwitter-563d1",
      storageBucket: "kwitter-563d1.appspot.com",
      messagingSenderId: "1004123201552",
      appId: "1:1004123201552:web:9cb416cd1f5aa509492a95"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addroom()
    {
          Room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(Room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room_name", Room_name);
          window.location="kwitter_page.html";
    }
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToroomname(name) 
{
       console.log(name); 
       localStorage.setItem("room_name", name); 
       window.location = "kwitter_page.html"; 
} 
      function logout() 
      {
             localStorage.removeItem("user_name");
              localStorage.removeItem("room_name"); 
              window.location = "index.html"; 
      }